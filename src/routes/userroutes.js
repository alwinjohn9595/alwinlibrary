const express = require("express");
const userRouter = express.Router();
const Bookdata = require("../model/Bookdatabase");
const authordata = require('../model/Authordatabase');





const nav1 = [
    
    {
       
         links:'/user/books', 
         name: 'Books'
 
 
     },
   
     {   
         
         links:'/user/authors', 
         name:"Authors"
         
     },
  
    
     
     {   
         
        links:'/user/logout', 
        name:"Logout"
        
    }

 
 
     ];
   

function  userrouter(){
    
   
    
    userRouter.get("/",(req,res)=>{
        res.render("user",{
            nav1
        })
    })
    userRouter.get("/books",function(req,res){
        Bookdata.find()
        .then((books)=>{
           res.render("books",{
               nav1,
               title:'Library',
               books 
           });
            
        })
    userRouter.get("/authors",(req,res)=>{
            authordata.find()
            .then((authors)=>{
               res.render("authors",{
                  nav1,
                  authors
                  
                  });

            })   
            
   });    
    userRouter.get("/logout",(req,res)=>{
         res.redirect("/");
    })  
   
   });

   

    return userRouter;
}


module.exports = userrouter;