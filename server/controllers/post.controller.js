const db = require("../models");
const Post = db.posts;
const Op = db.Sequelize.Op;
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('image')

// Create and Save a new Post
exports.create = (req, res) => {
    console.log("req: ", req.body)
    // Validate request
    if (!req.body.location) {

        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Post
    const post = {
        location: req.body.location,
        image: req.file ? req.file.filename : "",
        userId: req.body.userId,
        categoryId: req.body.categoryId
    };

    // Save Post in the database
    Post.create(post)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Post."
            });
        });

};

// Retrieve all Posts from the database.
exports.findAll = (req, res) => {
    const userId = req.query.userId;
    var condition = userId ? { userId: { [Op.like]: `%${userId}%` } } : null;

    Post.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Posts."
            });
        });
};

// Find a single Post with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Post.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Post with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Post with id=" + id
            });
        });
};

// Create endpoint /api/bicycles/:bicycle_id for PUT
exports.putBicycle = function (req, res) {
    // Use the Bicycle model to find a specific bicycle
    Bicycle.findById(req.params.bicycle_id, function (err, bicycle) {
        if (err)
            res.send(err);

        // Update the existing bicycle 
        bicycle.brand = req.body.brand;
        bicycle.model = req.body.model;
        bicycle.filename = '';
        if (req.file) {
            bicycle.filename = req.file.filename;
        }

        // Save the bicycle and check for errors
        bicycle.save(function (err) {
            if (err)
                res.send(err);

            res.json(bicycle);
        });
    });
};

// Update a Post by the id in the request
exports.update = (req, res) => {
    

    const id = req.params.id;
    const data = req.body;
    data.image = "hfuifhuif"


        Post.update(data, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Post was updated successfully."
                    });
                } else {
                    res.send({
                        message: `Cannot update Post with id= ${id}. Maybe Post was not found or req.body is empty!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error updating Post with id=" + id
                });
            });
};

// Delete a Post with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Post.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Post was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Post with id=${id}. Maybe Post was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Post with id=" + id
            });
        });
};

// Delete all Posts from the database.
exports.deleteAll = (req, res) => {

    Post.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Posts were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Posts."
            });
        });
};

// Find all published users
exports.findAllPublished = (req, res) => {

};