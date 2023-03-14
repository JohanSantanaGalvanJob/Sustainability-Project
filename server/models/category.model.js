module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
        name: {
            type: Sequelize.STRING(20),
            allowNull: false,
        },
    });

    return Category;
};