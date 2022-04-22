import {Express, Request, Response} from "express";
import {handleAddToCart} from "./controller/cart.controller";

 export default function(app: Express) {
     app.post('/add-to-cart', handleAddToCart);

//     app.post('/update-promo', handleUpdate);
    
//     app.post('/remove-promo', handleRemove);

//     app.get('/get-promo-by-payment', handleGetListPromoByPaymentMethod);
  

}