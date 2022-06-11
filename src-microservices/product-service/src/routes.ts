import express, {Express, Request, Response} from "express";
import { createProductHandler, handleGetAllProduct} from "./controller/product.controller";
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    
    filename: function (req: any, file: any, cb: any) {
        cb(null, file.originalname.split('.')[0] + Date.now() + '.jpeg')
    }
});

const fileFilter = (req: any,file: any,cb: any) => {
    if(file.mimetype === "image/jpg"  || 
       file.mimetype ==="image/jpeg"  || 
       file.mimetype ===  "image/png"){
     
    cb(null, true);
   }else{
      cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false);
}}

const upload = multer({storage: storage, fileFilter : fileFilter});

router.post('/create-product', upload.array('listImage', 2), createProductHandler);
router.get('/get-all-product', handleGetAllProduct);

export {router as ProductRoutes}