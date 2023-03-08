module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        username: {
            type: Sequelize.STRING(20),
            allowNull: false,
            unique: true
        },
        email: {
            type: Sequelize.STRING(40),
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        birthdate: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        image: {
            type: Sequelize.BLOB,
            allowNull: false,
        },
        points: {
            type: Sequelize.INTEGER,
        },

    });

    return User;
};