const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.status(200).send('Welcome to world')
})
app.get("/register",(req,res)=>{
    res.status(200).send('registration successful')
})
const port = 5000;
app.listen(port,()=>{
    console.log(`Server is running at port :${port}`);
})