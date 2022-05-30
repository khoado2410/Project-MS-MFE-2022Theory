import {db} from '../db/connect';
import {Inventory} from '../model/inventory.model';

export const getInventory = (Inventory: Inventory) => {
    const queryString = "INSERT INTO Inventory (product_id, customer_id, product_quantity) VALUES (?, ?, ?)";
     // db.query(
    //   queryString,
    //   [order.product.id, order.customer.id, order.productQuantity],
    //   (err, result) => {
    //     if (err) {callback(err)};
  
    //     const insertId = (<OkPacket> result).insertId;
    //     callback(null, insertId);
    //   }
    // );
}