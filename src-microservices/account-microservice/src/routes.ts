import {Express, Request, Response} from "express";
import { createHandleUser, handleGetAll, handleLogin} from "./controller/account.controller";



export default function(app: Express) {
  
   
    app.post('/create-user', createHandleUser);
    app.get('/get-all-user', handleGetAll);
    app.post('/log-in', handleLogin)
    // app.get('/get-all-category', getAllCategoryHandler);
    // app.post('/check-category-valid', handleCheckCategoryValid);

    // app.post('/create-branch', createBranchHandler);
    // app.get('/get-all-branch', handleGetBranch);
    // app.post('/check-branch-valid', handleCheckBranchyValid);

    // app.post('/check-category-branch', handleCheckBranchCategoryValid);

  

}