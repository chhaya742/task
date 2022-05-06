const path = require('path');
const express = require("express");
const fileUpload=require('express-fileupload')
const app = express();
const router = express.Router();

const files= require("./routes")
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({limits:{fileSize: 1000000}}))
files(router)

app.use("/",router)
    
module.exports = app;










