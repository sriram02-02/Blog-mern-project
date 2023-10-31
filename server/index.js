const express = require("express");
const mongooose = require("mongoose");
const cors = require("cors");
const BlogModel = require("./models/Blog");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(cors());

mongooose.connect("mongodb://127.0.0.1:27017/Blog");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  BlogModel.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          res.json("success");
        } else {
          res.json("the password is incorrect");
        }
      });
    } else {
      res.json("User not found!");
    }
  });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    BlogModel.findOne({ email: email })
      .then((user) => {
        if (!user) {
          BlogModel.create({ name, email, password: hash })
            .then((blog) => res.json(blog))
            .catch((err) => res.json(err));
        } else {
          res.json("already present");
        }
      })
      .catch((err) => console.log(err.message));
  });
});

app.listen(3001, () => {
  console.log("server is running...");
});
