const emailCheck = require('email-check');
const express = require('express');
const userRouter = express.Router();
const signupdata = require('../model/Signupdatabase');


function adduser(nav) {

    let errors =[];
    userRouter.get("/",(req,res)=>{
        res.render("signup",{
            nav
        })
    })

    userRouter.post("/add", async (req,res)=>{
        const emailid = req.body.emailid;
        
         console.log(req.body);
        try {  

                var item = {
                    username: req.body.username,
                    emailid: req.body.emailid,
                    password: req.body.password
                    
                    }   
            
                    var user =  signupdata(item);
                    user.save();
                    res.redirect("/login");
            
        }catch(error){
            res.status(400).send("error");
            
        }


       

        
    })
        
        


    


    
   return userRouter;
}

module.exports = adduser;