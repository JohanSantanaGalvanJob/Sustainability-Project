module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", {
        location: {
            type: Sequelize.STRING(45),
            allowNull: false,
        },
        image: {
            type: Sequelize.BLOB,
            allowNull: false,
        },
        likes: {
            type: Sequelize.INTEGER,
        },

    });
    

    return Post;
};