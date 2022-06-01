import {Express, Request, Response} from "express";
import { createCategoryHandler, getAllCategoryHandler, getCategoryByBranchHandler, handleCheckCategoryValid} from "./controller/category.controller";
import {createBranchHandler, handleGetBranch, handleCheckBranchyValid} from './controller/branch.controller';


export default function(app: Express) {
  
   
    app.post('/create-category', createCategoryHandler);
    app.get('/get-all-category', getAllCategoryHandler);
    app.post('/check-category-valid', handleCheckCategoryValid);

    app.post('/create-branch', createBranchHandler);
    app.get('/get-all-branch', handleGetBranch);
    app.post('/check-branch-valid', handleCheckBranchyValid);

  

}