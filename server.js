require("dotenv").config;
//creating a server
const express = require("express");
//calling express function
const app = express();
const ejs = require("ejs");
const favicon = require("serve-favicon");
const path = require("path");
const expressLayout = require("express-ejs-layouts");
const {Module} = require("module");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("express-flash");
const MongoDbStore = require("connect-mongo");

const url =
  "mongodb+srv://admin:tanmay28@cluster0.tcbwb.mongodb.net/pizza?retryWrites=true&w=majority";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database connected...");
});
//Session Store
let mongoStore = MongoDbStore.create({
  mongoUrl: url,
  collection: "sessions",
});

app.use(express.json());
//Session Config
//saving cookies in db
app.use(
  session({
    secret: "Hello",
    resave: false,
    store: mongoStore,
    saveUninitialized: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24},
  })
);

//session
app.use(flash());

//Middleware
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

// set template engine

app.use(expressLayout);
app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

//passing an instance
require("./routes/web")(app);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
