
module.exports = (sequelize: any, Sequelize: any) => {
    const Inventory = sequelize.define("inventory", {
      idProduct: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.NUMBER
      },
      createdDate: {
        type: Sequelize.DATE
      },
      categoryProduct: {
        type: Sequelize.STRING
      },
      branchProduct: {
        type: Sequelize.STRING
      },
      nameProduct: {
        type: Sequelize.STRING
      },
      isDelete: {
        type: Sequelize.BOOLEAN
      }
      ,
      updatedDate: {
        type: Sequelize.DATE
      },
      createdBy: {
        type: Sequelize.STRING
      },
      updatedBy: {
        type: Sequelize.STRING
      }
    });
  
    return Inventory
  };
  



