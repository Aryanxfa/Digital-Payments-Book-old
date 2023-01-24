const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const cors = require('cors');
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

const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    type: Number,
    email: String,
})

const UserModel = mongoose.Model("user", UserSchema);
