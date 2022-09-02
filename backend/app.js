const express = require("express")
const chalk = require("chalk")
require("dotenv").config()
const handleDataBaseConection = require("./Db")

handleDataBaseConection()

const app = express()

  app.get("/",(req,res)=>{
    res.send("hello")
  })

 



app.listen(process.env.PORT||80,()=>{
    console.log(chalk.blue(`server running on htttp://www.localhost:${process.env.PORT}`));
})