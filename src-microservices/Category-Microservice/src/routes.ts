import {Express, Request, Response} from "express";
import { createCategoryHandler, getAllCategoryHandler, getCategoryByBranchHandler} from "./controller/category.controller";
import {createBranchHandler} from './controller/branch.controller';


export default function(app: Express) {
  
   
    app.post('/create-category', createCategoryHandler);
    app.get('/get-all-category', getAllCategoryHandler);

    app.post('/create-branch', createBranchHandler);
  

}