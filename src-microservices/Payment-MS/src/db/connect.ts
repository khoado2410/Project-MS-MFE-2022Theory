import mongoose from "mongoose";
//import config from "config";
import log from '../logger';

const dbUri = "mongodb://localhost:27017/payment-db"
// const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }

function connect() {
    return mongoose
    .connect(dbUri)
    .then(() => {
      log.info("Database connected");
    })
    .catch((error) => {
      log.error("db error", error);
    });
};

export default connect;