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
    
   
    // const ubooksRouter = require("../routes/bookRoutes")(nav1);
    // const uauthorRouter = require("../routes/authorRoutes")(nav1);

     
    //  userRouter.use('/books',ubooksRouter);
    //  userRouter.use('/authors', uauthorRouter);
    
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