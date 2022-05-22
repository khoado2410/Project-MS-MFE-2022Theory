"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_js_1 = require("@grpc/grpc-js");
const proto_loader_1 = require("@grpc/proto-loader");
const PROTO_PATH = "./src/protobuf/log.proto";
const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};
var packageDefinition = (0, proto_loader_1.loadSync)(PROTO_PATH, options);
const logService = (0, grpc_js_1.loadPackageDefinition)(packageDefinition);
const client = new logService.packagelogs.LogService("localhost:50051", grpc_js_1.credentials.createInsecure());
exports.default = client;
