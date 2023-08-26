const express = require("express")
const app = express()
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://gopal9785460525:Fr6MGmyFJajooN1x@cluster0.cbgxi7j.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("mongodb connect")}).catch(()=>{console.log("not connect mongodb")})

const userschema = new mongoose.Schema({
    name:String
})
const usermodel = new mongoose.model("User",userschema)

app.get("/",async (req,res)=>{
    const users = await usermodel.find()
    res.send(users[0])
})

app.listen(3200,()=>{
    console.log("the server is runnig on port 3200");
})