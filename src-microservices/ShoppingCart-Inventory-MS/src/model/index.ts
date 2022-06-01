const dbConfig = require("../db/connect");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db : any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.inventory = require("./inventory.model")(sequelize, Sequelize);

module.exports = db;