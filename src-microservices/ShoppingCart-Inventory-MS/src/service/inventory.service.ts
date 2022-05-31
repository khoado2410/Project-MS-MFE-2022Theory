const dbModel = require("../model/index");
const Inventory = dbModel.inventory;
const Op = dbModel.Sequelize.Op;

export async function findAll() {
    try {
        const data = Inventory.findAll();
        return data;
    } catch (error) {
        throw error;
    }
  };