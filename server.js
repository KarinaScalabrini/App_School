const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){
    res.render("index");
})

app.get("/sobre", function (req, res){
    res.render("about");
})

app.get("/games", function (req, res){
    res.render("games");
})

app.listen(8080);
console.log("Rodando ok")