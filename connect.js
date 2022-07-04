const mysql= require("mysql2")

const connection = mysql.createConnection({
    host:"localhost",
    database:"employeetracker",
    user:"root",
    password:"123456789",
})

module.exports=connection