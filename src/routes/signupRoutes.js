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

    userRouter.post("/", async (req,res)=>{


         
        var item = {
            username: req.body.username,
            emailid: req.body.emailid,
            password: req.body.password
            } 
        
         
    
            
              var user = await signupdata(item);
              user.save(function(err) {
                if (err) {
                  if (err.name === 'MongoError' && err.code === 11000) {
                    // Duplicate username
                    return  res.status(404).render("signup",{errormsg:"User already exists!",nav});
                  }
            
                  // Some other error
                  return res.status(422).send(err);
                }
              console.log("user created suceessfully"); 
              
              res.render("signup",{statusmsg: "User added!",
            nav}) ;

                     
              });

  
        
        
         
    });
        
        


    


    
   return userRouter;
}

module.exports = adduser;