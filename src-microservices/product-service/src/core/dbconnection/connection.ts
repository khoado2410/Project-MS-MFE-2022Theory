import { MongoClient } from 'mongodb';

const uri = "mongodb://localhost:27017";
//const _client = new MongoClient(uri);

export class MongoConnection {
    public _client: MongoClient;
    constructor() {
        this._client = new MongoClient(uri);
    }
    async connect() {
        try {
            // Connect to the MongoDB cluster
            await this._client.connect();

        } catch (e) {
            console.error(e);
        }
    }

    async disconnect() {
        await this._client.close();
    }
}
