import {Express, Request, Response} from "express";
// import {handleAddToCart} from "./controller/cart.controller";
import {handleGetAllInventory, handleCreateInventory, handleCheckInventory} from './controller/inventory.controller';
import {handleCreateCart, handleGetCartByAccount} from './controller/cart.controller';


 export default function(app: Express) {
    //  app.post('/add-to-cart', handleAddToCart);
    app.get('/get-all-inventory', handleGetAllInventory);
    app.post('/create-inventory', handleCreateInventory);
    app.post('/create-cart', handleCreateCart);
    app.get('/get-cart', handleGetCartByAccount);
    app.post('/check-inventory', handleCheckInventory);
//     app.post('/update-promo', handleUpdate);
    
//     app.post('/remove-promo', handleRemove);

//     app.get('/get-promo-by-payment', handleGetListPromoByPaymentMethod);
  

}