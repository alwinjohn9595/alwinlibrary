const { Router } = require("express");
const express = require("express");
const booksRouter = express.Router();
const Bookdata = require("../model/Bookdatabase");

function router(nav1){
    
    
    booksRouter.get("/",function(req,res){
         Bookdata.find()
         .then((books)=>{
            res.render("books",{
                nav1,
                title:'Library',
                books 
            });
             
         })
       
    
    });
    
    booksRouter.get("/:id", (req,res)=>{
        const id = req.params.id
        Bookdata.findOne({_id: id})
        .then((book)=>{
            
            res.render("book",{
                nav1,
                title:'Library',
                book
            })
        
            });
    
        
        
    });
    booksRouter.get("/:id/update", (req,res)=>{
        const al = req.params.id;
        Bookdata.findById(al,(err,doc)=>{
            if(!err){
                res.locals.id = al;
                res.render("addBook",{
                    nav1,
                    title:'Library',
                    book: doc
                } )
            }
        })

     })

     booksRouter.get("/:id/delete",(req,res)=>{
        const al = req.params.id
        Bookdata.findByIdAndRemove(al,(err,doc)=>{
            if(!err){
                res.redirect("/admin/books");
            }
        })
     })

    return booksRouter;
}


module.exports = router;