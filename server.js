const mongoose = require("mongoose")
const express = require("express")
const path = require("path")


const app = express()
const port = 8080

app.use(express.static(__dirname))



app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"form.html"))
})

app.get("/user",(req,res)=>{
    res.send("Hello User")
})

app.listen(port,()=>{
    console.log(`server is running is on ${port}`)
})





