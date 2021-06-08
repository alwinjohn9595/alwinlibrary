const express = require('express');
const userRouter = express.Router();
const signupdata = require('../model/Signupdatabase');


function user(nav) {


    userRouter.get("/",(req,res)=>{
        res.render("login",{
            nav
        })
    })

    userRouter.post("/add", async (req,res)=>{
           console.log(req.body)
        try{
              const emailid = req.body.emailid;
              const password = req.body.password;
              const userdata = await signupdata.findOne({emailid: emailid})

              if(userdata.password === password ) {
                   res.redirect("/")
              }
        }catch(error){
            res.status(400).send("user not presnt");

        }

       
        
    
    });
    


    
   return userRouter;
}

module.exports = user;