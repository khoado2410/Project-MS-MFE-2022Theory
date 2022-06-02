import {Express, Request, Response} from "express";
import { createHandleUser} from "./controller/account.controller";



export default function(app: Express) {
  
   
    app.post('/create-user', createHandleUser);
    // app.get('/get-all-category', getAllCategoryHandler);
    // app.post('/check-category-valid', handleCheckCategoryValid);

    // app.post('/create-branch', createBranchHandler);
    // app.get('/get-all-branch', handleGetBranch);
    // app.post('/check-branch-valid', handleCheckBranchyValid);

    // app.post('/check-category-branch', handleCheckBranchCategoryValid);

  

}