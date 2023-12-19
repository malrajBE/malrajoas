const express = require("express");
const db = require("mongoose");
const multer = require("multer");
const ImageModel = require("./image.model");
const bodyparser = require("body-parser");
const app = express();

db.connect("mongodb://localhost:27017/test_db", {
    family: 4
});

db.connection.on('error', console.error.bind(console, "error while connecting"));
db.connection.once('open', () => {
    console.log("db connected");
});

app.use(bodyparser.json());
const Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const upload = multer({
    storage: Storage
}).single("image");

app.post("/upload", (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            const newImage = new ImageModel({
                name: req.body.name,
                image: {
                    data: req.file.filename,
                }
            });
            newImage.save();
        }
        res.send("saved");
    });
});

app.listen(3000);
