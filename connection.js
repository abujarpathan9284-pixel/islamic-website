const mysql = require("mysql2");
const util = require("util");

const conn = mysql.createConnection({
    host: "b2fl8wnu0aqvpym3lxg7-mysql.services.clever-cloud.com",
    user :"uuey0xn5de6vpqhd",
    password :"D1HQfByqcz7hylIt5QTI",
    database :"b2fl8wnu0aqvpym3lxg7",
    "port":"3306"
});


const exe = util.promisify(conn.query).bind(conn);

module.exports = exe;
