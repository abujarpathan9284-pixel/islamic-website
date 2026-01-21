const express = require("express");
const route = express.Router();
const mysql = require("mysql2")
// const company_model = require("../model/connection");
// const storyUpdates = require("../model/stori");
const exe = require("./../connection")


  

route.get("/", async function(req,res){
     var data = await exe(`SELECT * FROM company`);
        var obj = {"detiles" : data}
    res.render("user/home.ejs",obj)
});

route.get("/quran",  async function(req,res){
    var data = await exe(`SELECT * FROM company`);
        var obj = {"detiles" : data}
    res.render("user/quran.ejs",obj)
});

route.get("/duas", async function(req,res){
    var data = await exe(`SELECT * FROM company`);
        var obj = {"detiles" : data}
    res.render("user/duas.ejs",obj)
});
route.get("/stories", async function(req,res){
    var data = await exe(`SELECT * FROM company`);
    var obj = {"detiles" : data}
    res.render("user/stories.ejs",obj);
});

route.get("/hadith", async function(req,res){
    var data = await exe(`SELECT * FROM company`);
        var obj = {"detiles" : data}
    res.render("user/hadith.ejs",obj)
});

route.get("/dailyreminder", async function(req,res){
    var data = await exe(`SELECT * FROM company`);
        var obj = {"detiles" : data}
    res.render("user/dailyreminder.ejs",obj)
});

route.get("/about", async function(req,res){
    var data = await exe(`SELECT * FROM company`);
        var obj = {"detiles" : data}
    res.render("user/about.ejs",obj)
});



route.get("/user_login", function(req,res){
    res.render("user/user_login.ejs")
})

module.exports = route;