const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.categories = require("./category.model.js")(sequelize, Sequelize);
db.leaderboards = require("./leaderboard.model.js")(sequelize, Sequelize);
db.posts = require("./post.model.js")(sequelize, Sequelize);
db.categoryitems = require("./categoryitem.model.js")(sequelize, Sequelize);

// One Category is in many Posts but one Post only has 1 Category.
db.categories.hasMany(db.posts);
db.posts.belongsTo(db.categories);

// One user can Post many posts but each post is only for 1 specific User.
db.users.hasMany(db.posts);
db.posts.belongsTo(db.users);

// In one Leaderboard there are many Users but only 1 User belongs to 1 specific Leaderboard.
db.leaderboards.hasMany(db.users);
db.users.belongsTo(db.leaderboards);


// One Category has many Category Items, but only one specific Category Item belongs to one Category
db.categories.hasMany(db.categoryitems);
db.categoryitems.belongsTo(db.categories);

module.exports = db;