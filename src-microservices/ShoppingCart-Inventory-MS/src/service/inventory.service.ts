const dbModel = require("../model/index");

const Inventory = dbModel.t_inventories;
const Op = dbModel.Sequelize.Op;

export async function findAll() {
    try {
        const data = await Inventory.findAll();
        const dataString = JSON.stringify(data, null, 2);
        const dataResult = JSON.parse(dataString);
        return  dataResult;
    } catch (error) {
        throw error;
    }
  };

export async function createInventory(input: any){
    try {
        const body = {
            idProduct: input.id_product,
            amount: input.amount,
            categoryProduct: input.category_product,
            branchProduct: input.branch_product,
            nameProduct: input.name_product
        };
        await Inventory.create(body);
    } catch (error) {
        throw error;
    }
}