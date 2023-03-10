module.exports = app => {
    const posts = require("../controllers/post.controller.js");
    var upload = require('../multer/upload');
  
    var router = require("express").Router();
  
    // Create a new Post
    router.post("/",upload.single('image'),posts.create);
  
    // Retrieve all Posts
    router.get("/", posts.findAll);
  
    // Retrieve all published Posts
    router.get("/published", posts.findAllPublished);
  
    // Retrieve a single Post with id
    router.get("/:id", posts.findOne);
  
    // Update a Post with id
    router.put("/:id", posts.update);
  
    // Delete a Post with id
    router.delete("/:id", posts.delete);
  
    // Delete all Posts
    router.delete("/", posts.deleteAll);
  
    app.use('/posts', router);
  };