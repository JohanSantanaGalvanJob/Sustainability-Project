module.exports = (sequelize, Sequelize) => {
    const Leaderboard = sequelize.define("leaderboard", {
        classification: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        points: {
            type: Sequelize.INTEGER,
        },

    });

    return Leaderboard;
};