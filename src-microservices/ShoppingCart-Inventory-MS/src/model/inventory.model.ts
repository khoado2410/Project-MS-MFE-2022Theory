
module.exports = (sequelize: any, Sequelize: any) => {
    const Inventory = sequelize.define("inventory", {
      idProduct: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.NUMBER
      },
      createdDate: {
        type: Sequelize.DATE,
        default: Date.now()
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
        type: Sequelize.BOOLEAN,
        default: false
      }
      ,
      updatedDate: {
        type: Sequelize.DATE,
        default: Date.now()
      },
      createdBy: {
        type: Sequelize.STRING,
        default: ''
      },
      updatedBy: {
        type: Sequelize.STRING,
        default: ''
      }
    });
  
    return Inventory
  };
  



