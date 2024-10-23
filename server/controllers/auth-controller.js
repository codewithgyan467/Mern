import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.status(200).send("Welcome world");
});


const home = async(req,res)=>{
    try{
res.status(200)
.send("Welcome and hi");
    }catch(error){
        console.log(error);
    }
}
const register = (req,res) => {
    try{
        res.status(200).send('Welcome to registration page')
    }catch(error)
    {res.status(400).send({msg:"Page not found"})}
    
}
export default {home,register};
