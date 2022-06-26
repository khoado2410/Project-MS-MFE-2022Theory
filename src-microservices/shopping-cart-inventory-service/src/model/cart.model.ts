


module.exports = (sequelize: any, Sequelize: any) => {
    const Cart = sequelize.define("cart", {
      idCustomer: {
        type: Sequelize.STRING,
        unique: true
      },
      createdDate: {
        type: Sequelize.DATE,
        default: Date.now()
      },
      isDelete: {
        type: Sequelize.INTEGER,
        default: 0
      },
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
    
    return Cart;
  };
  





