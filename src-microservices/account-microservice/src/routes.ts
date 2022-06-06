import {Express, Request, Response} from "express";
import { createHandleUser, handleGetAll, handleLogin} from "./controller/account.controller";
import {isAuth} from './middleware/auth.middleware';
//import isAuth from '@middleware/user';

export default function(app: Express) {
  
   
    app.post('/create-user', createHandleUser);
    app.post('/log-in', handleLogin);

    //app.get('/get-all-user', [isAuth], handleGetAll);
    // app.get('/get-all-category', getAllCategoryHandler);
    // app.post('/check-category-valid', handleCheckCategoryValid);

    // app.post('/create-branch', createBranchHandler);
    // app.get('/get-all-branch', handleGetBranch);
    // app.post('/check-branch-valid', handleCheckBranchyValid);

    // app.post('/check-category-branch', handleCheckBranchCategoryValid);

  

}