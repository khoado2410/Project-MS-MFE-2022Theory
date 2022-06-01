import {Express, Request, Response} from "express";
import { createProductHandler, handleGetAllProduct} from "./controller/product.controller";


export default function(app: Express) {
  
   
    app.post('/create-product', createProductHandler);
    app.get('/get-all-product', handleGetAllProduct);


  

}