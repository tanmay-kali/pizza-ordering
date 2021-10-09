//creating a server
const express = require("express");
//calling express function
const app = express();
const ejs = require("ejs");
const favicon = require("serve-favicon");
const path = require("path");
const expressLayout = require("express-ejs-layouts");
const port = process.env.PORT || 3000;

// set template engine

app.use(expressLayout);
app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.get("/", (req, res) => res.render("home"));
app.get("/cart", (req, res) => res.render("customers/cart"));
app.get("/login", (req, res) => res.render("auth/login"));
app.get("/register", (req, res) => res.render("auth/register"));

app.listen(port, () => console.log(`Example app listening on port ${port}`));
