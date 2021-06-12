const express = require('express');
const userRouter = express.Router();
const signupdata = require('../model/Signupdatabase');





         


function user(nav) {

    userRouter.get("/",(req,res)=>{
        res.render("login",{
            nav
        })
    })

    userRouter.post("/admin", async (req,res)=>{
           console.log(req.body)
    
              const emailid = req.body.emailid;
              const password = req.body.password;
              const userdata = await signupdata.findOne({emailid: emailid})
              console.log(userdata);

              if(emailid =="user@gmail.com"&& password ==="user@123")
              {
                res.redirect("/admin");
                  
                
              }else if(userdata.emailid === emailid && userdata.password === password ) {
                  
                   res.redirect("/user");
              
              } else
              {
                res.status(400).render("login",{errormsg:" Wrong password !",nav1})
              }

       

       
        
    
    });
    


    
   return userRouter;
}



module.exports = user;