import bodyParser from 'body-parser';
import express from 'express';
import { ProductService } from './services/product-service';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    var service = new ProductService();
    service.getAllProduct()
        .then((result) => {
            return res.status(200).json({
                result: result
            });
        })
})

app.get('/product/:id', (req, res) => {
    var service = new ProductService();
    service.getProductById(req.params.id.trim())
        .then((result) => {
            return res.status(200).json({
                result: result
            });
        })
})

app.delete('/product/:id', (req, res) => {
    var service = new ProductService();
    service.deleteProduct(req.params.id.trim())
        .then((result) => {
            if (result)
                return res.status(200).json({
                    message: "delete successfully"
                });
            else
                return res.status(200).json({
                    message: "delete failed"
                });
        })
})

app.post('/add-product', (req, res) => {
    var service = new ProductService();
    service.addNewProduct(req.body)
        .then((result) => {
            return res.status(200).json({
                id: result
            });
        });
})

app.listen(port, () => {
    console.log("The application is listening on port " + port);
})