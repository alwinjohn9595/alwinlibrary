const express = require("express");
const adminRouter = express.Router();





const nav1 = [
    
    {
       
         links:'/admin/books', 
         name: 'Books'
 
 
     },
   
     {   
         
         links:'/admin/authors', 
         name:"Authors"
         
     },
  
    
     {   
         
         links:'/admin/addBook', 
         name:"Add Book"
         
     },
     {   
         
         links:'/admin/addAuthor', 
         name:"Add author"
         
     },
     {   
         
        links:'/admin/logout', 
        name:"Logout"
        
    }

 
 
     ];
   

function  adminrouter(){
    
    const addAuthorRouter = require("../routes/addAuthorRoutes")(nav1);
    const addBookRouter = require("../routes/addBookRoutes")(nav1);
    
    const booksRouter = require("../routes/bookRoutes")(nav1);
    const authorRouter = require("../routes/authorRoutes")(nav1);

     adminRouter.use("/addAuthor",addAuthorRouter);
     adminRouter.use("/addBook",addBookRouter);
     adminRouter.use('/books',booksRouter);
     adminRouter.use('/authors', authorRouter);
    
    adminRouter.get("/",(req,res)=>{
        res.render("admin",{
            nav1
        })
    })
    adminRouter.get("/logout",(req,res)=>{
        res.redirect("/");
    })

   

    return adminRouter;
}


module.exports = adminrouter;