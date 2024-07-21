
const express = require('express');
const Database = require("nedb")
const app = express();
require("dotenv").config()
const database = new Database("data.db")
database.loadDatabase()
database.insert({mama:"aaaaaa"})

// console.log(process.env)
app.listen(3000,() => console.log("listening..."))
app.use(express.static('public'));
app.use(express.json({limit:"1mb"}))
app.post("/api",(rec,res)=>{
    console.log("recuest recieved......")
    database.insert(rec.body)
    res.json(rec.body)
})