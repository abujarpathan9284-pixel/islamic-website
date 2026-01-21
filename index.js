const express = require("express");
const bodyparser= require("body-parser");
const session = require("express-session");
const upload = require("express-fileupload");

const User_route = require("./routes/user")
const Admin_route = require("./routes/admin")

const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(upload());
app.use(express.static("public/"));
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:"dfghjkqwertyuip"
}));

app.use("/",User_route);
app.use("/admin",Admin_route);


app.listen(1000);