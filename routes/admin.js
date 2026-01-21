const express = require("express");
const route = express.Router();
const mysql = require("mysql2");
// const mongoose = require("mongoose")
// const company_model = require("../model/connection");
// const storyUpdates = require("../model/stori")
const exe = require("./../connection")

route.get("/", function(req,res){
    res.render("admin/admin_login.ejs")
});

route.get("/dashbord", function(req,res){
    res.render("admin/index.ejs")
});
route.post("/dashbord", function(req,res){
    res.render("admin/index.ejs")
});
route.get("/company", async function(req,res){
    var data = await exe(`SELECT * FROM company`);
    var obj = {"detiles" : data}
    res.render("admin/company.ejs",obj)
});

route.post("/company", async function(req,res){
    // var data = await company_model(req.body).save();
    // var data = await company_model.updateOne(req.body);

    var d = req.body;
    var sql = `UPDATE company SET
    company_name = "${d.company_name}" ,
    company_mo = "${d.company_mo}" ,
    company_email = "${d.company_email}" ,
    company_face = "${d.company_face}" ,
    company_what = "${d.company_what}" ,
    company_insta = "${d.company_insta}" ,
    company_youtube = "${d.company_youtube}" 
    `
    var data = await exe(sql)

    res.redirect("/admin/company")
});





route.get("/admin_login", function(req,res){
    res.render("admin/admin_login.ejs")
})



route.get("/visitors", function(req,res){
    res.render("admin/visitors.ejs")
})

module.exports = route;