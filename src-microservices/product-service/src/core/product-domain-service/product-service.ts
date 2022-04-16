import { ObjectId } from "mongodb";
import { Product } from "../../model/Product";
import { MongoConnection } from "../dbconnection/connection";

export class ProductDomainService {
    async insertProduct(product: Product) {
        var db = new MongoConnection();
        await db.connect();
        try {
            var result = await db._client.db('micro-service-product-db')
                .collection('product')
                .insertOne(product);
            console.log("Inserted product with id: " + result.insertedId);
            return result.insertedId;
        }
        catch (e) {
            console.log("Error when insert product ", e);
        }
        finally {
            await db.disconnect();
        }
    }

    async getAll() {
        var db = new MongoConnection();
        await db.connect();
        try {
            var result = await db._client.db('micro-service-product-db')
                .collection('product')
                .find().toArray();
            return result;
        }
        catch (e) {
            console.log("Error when get all products ", e);
        }
        finally {
            await db.disconnect();
        }
    }

    async getById(id: any) {
        var db = new MongoConnection();
        await db.connect();
        try {
            var res = await db._client.db('micro-service-product-db')
                .collection('product')
                .find({ _id: new ObjectId(id) }).next();
            return res;
        }
        catch (e) {
            console.log(`Error when get product ${id} `, e);
        }
        finally {
            await db.disconnect();
        }
    }

    async deleteById(id: any) {
        var db = new MongoConnection();
        await db.connect();
        try {
            var result = await db._client.db('micro-service-product-db')
                .collection('product')
                .find({ _id: new ObjectId(id) }).next();
            if (result == null)
                return false;
            await db._client.db('micro-service-product-db')
                .collection('product')
                .deleteOne({ _id: new ObjectId(id) });
            return true;
        }
        catch (e) {
            console.log(`Error when delete product ${id} `, e);
            return false;
        }
        finally {
            await db.disconnect();
        }
    }
}