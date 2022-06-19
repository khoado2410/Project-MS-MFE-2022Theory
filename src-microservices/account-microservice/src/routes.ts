import {Express, Request, Response, Router} from "express";
import { createHandleUser, handleGetAll, handleLogin} from "./controller/account.controller";
// import {isLoggedIn} from '@middleware/auth';
const router = Router();

 router.route('/get-all-user').get(handleGetAll);
 router.route('/create-user').post(createHandleUser);
 router.route('/log-in').post(handleLogin);
    // router
    // .route('/get-all-user')
    // .get(
    //     isAdmin(),
    //     handleGetAll()
    // );
    //app.post('/create-user', createHandleUser);
    //app.post('/log-in', handleLogin);

    // app.get('/get-all-category', getAllCategoryHandler);
    // app.post('/check-category-valid', handleCheckCategoryValid);

    // app.post('/create-branch', createBranchHandler);
    // app.get('/get-all-branch', handleGetBranch);
    // app.post('/check-branch-valid', handleCheckBranchyValid);

    // app.post('/check-category-branch', handleCheckBranchCategoryValid);

  
export {router as AccountRoutes}
//}