const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const cors = require('cors');
require("dotenv").config();


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
mongoose.set('strictQuery', false);

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

const UserModel = mongoose.model("user", UserSchema);

app.post("/login", (req, res) => {

    const { username, password } = req.body;

    UserModel.findOne({ username: username }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Success", user: user })
            } else {
                res.send({ message: "Incorrect Password" })
            }
        } else {
            res.send("User is not registered")
        }
    })

});

app.post("/register", (req, res) => {

    const { username, email, password } = req.body;

    UserModel.create({
        username: username,
        email: email,
        password: password
    }, (err, user) => {
        console.log(user);
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Success", user: user })
            } else {
                res.send({ message: "Incorrect Password" })
            }
        } else {
            res.send("User is not registered")
        }
    })

});


app.listen(process.env.PORT, () => {
    console.log("Server Started")
})
