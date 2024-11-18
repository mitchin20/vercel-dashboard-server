"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3Client = void 0;
require("dotenv").config();
const client_s3_1 = require("@aws-sdk/client-s3");
const s3Client = new client_s3_1.S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    },
});
exports.s3Client = s3Client;
