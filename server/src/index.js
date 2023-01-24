const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
require("dotenv").config();


const app = express();
app.use(cors);
app.use(bodyParser.json());

try {
    const conn = mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    console.log(`Mongodb connected successfully`);
} catch (e) {
    console.log("Mongodb connection failed.", e);
}
