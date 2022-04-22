import express from "express";
import config from "../config/default";
import log from './logger';
// import {db} from './db/connect';
import routes from "./routes";
import logger from 'morgan';
import jsonLog from 'morgan-json';
import requestIp from 'request-ip';
// const port = config.get("port") as number;
// const host = config.get("host") as string;
logger.token("clientRealIp", function (req, res) {
    var ip = requestIp.getClientIp(req);
    return ip || undefined;
});

const loggerFormat = jsonLog({
    "@timestamp": ":date[iso]",
    method: ":method",
    path: ":url",
    http: " HTTP/:http-version",
    status: ":status",
    remote_addr: ":clientRealIp",
    length: ":res[content-length]",
    "response-time": ":response-time ms",
    referrer: ":referrer",
    "user-agent": ":user-agent",
  });
  
const port = 3000;
const host = "localhost";

const app = express();

// app.use(pinoHTTP(log));
app.use(logger(loggerFormat));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.use(logger)

app.listen(port, host, () => {
    log.info(`Server listening at http://${host}:${port}`);

    // db;
    routes(app);
});


