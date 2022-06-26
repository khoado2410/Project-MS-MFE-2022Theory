const dbModel = require("../model/index");

const Inventory = dbModel.t_inventories;
const Op = dbModel.Sequelize.Op;



export async function checkInventory(body: any){
    try {
        const arrData = [];
        const listItem = body.list_item;
        let count = 0;
        for(let i = 0; i < listItem.length; i++){
            const inventory = Inventory.findOne({
                idProduct: listItem[i].id_product
            })
            if(inventory != null){
                if(listItem[i].amount > inventory.amount){
                    arrData.push(listItem[i].name);
                    count++;
                }
            }
        }
        return arrData;
        
        
    } catch (error) {
        throw error;
    }
}

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