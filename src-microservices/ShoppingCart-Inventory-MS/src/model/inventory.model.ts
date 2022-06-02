
module.exports = (sequelize: any, Sequelize: any) => {
    const Inventory = sequelize.define("inventory", {
      idProduct: {
        type: Sequelize.STRING,
        unique: true
      },
      amount: {
        type: Sequelize.INTEGER
      },
      createdDate: {
        type: Sequelize.DATE,
        default: Date.now()
      },
      categoryProduct: {
        type: Sequelize.STRING + ' CHARSET utf8 COLLATE utf8_unicode_ci'
      },
      branchProduct: {
        type: Sequelize.STRING + ' CHARSET utf8 COLLATE utf8_unicode_ci'
      },
      nameProduct: {
        type: Sequelize.STRING + ' CHARSET utf8 COLLATE utf8_unicode_ci'
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
    },{
      charset: 'utf8',
      collate: 'utf8_unicode_ci',
      
    });
  
    return Inventory
  };
  



