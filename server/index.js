const express = require("express");
const mongooose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/user");
const postModel = require("./models/post");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use("/image", express.static("image"));

mongooose.connect("mongodb://127.0.0.1:27017/Blog");

let imageName = "";
const storage = multer.diskStorage({
  destination: path.join("./image"),
  filename: function (req, file, cb) {
    imageName = Date.now() + path.extname(file.originalname);
    cb(null, imageName);
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 3000000 },
}).single("postImage");

app.post("/upload-image", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      return res.status(201)
      .json({ url: "http://localhost:3001/image/" + imageName });
    }
  });
});

const verifyUser = (req, res, next) => {
  const token = req.headers.authorisation;
  jwt.verify(token, "jwt-secret-key", (err, decoded) => {
    console.log(decoded);
    if (err) return res.json("Token is wrong");
    next();
  });
};

app.get("/home", verifyUser, (req, res) => {
  return res.json("Success");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          const token = jwt.sign({ email: user.email, username: user.username }, "jwt-secret-key", {
            expiresIn: "1d",
          });
          res.json({ token, msg: "Success" });
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
  const { username, email, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    userModel
      .find({ email: email , username: username  })
      .then((user) => {
        if (!user) {
          userModel
            .create({ username, email, password: hash })
            .then((user) => res.json(user))
            .catch((err) => res.json(err));
        } else {
          res.json("already present");
        }
      })
      .catch((err) => console.log(err.message));
  });
});

app.get("/post", (req, res) => {
  postModel.find({}).then((posts) => res.json(posts));
});

app.get("/post/:username", (req, res) => {
  const username = req.params.username;
  postModel.find({ username: username }).then((posts) => res.json(posts));
});

app.post("/post", (req, res) => {
  const { username, photo, head, paragraph } = req.body;
  postModel
    .create({ username, photo, head, paragraph })
    .then((post) => res.json(post))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running...");
});
