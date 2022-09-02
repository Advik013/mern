const mongoose = require("mongoose")
const chalk = require("chalk")
require("dotenv").config()
const url = process.env.DB_URL;

const handleDataBaseConection = ()=>{

 mongoose.connect(url).then(()=>console.log(chalk.green("Connected sucessfully"))).catch(()=>{
    console.log(chalk.red("some error occures while connection with database"));
 })

}

module.exports = handleDataBaseConection;