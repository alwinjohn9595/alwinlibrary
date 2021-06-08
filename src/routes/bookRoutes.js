const { Router } = require("express");
const express = require("express");
const booksRouter = express.Router();
const Bookdata = require("../model/Bookdatabase");

function router(nav){
    
    
    booksRouter.get("/",function(req,res){
         Bookdata.find()
         .then((books)=>{
            res.render("books",{
                nav,
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
                nav,
                title:'Library',
                book
            })
        
            });
    
        
        
    });
    booksRouter.get("/:id/update", (req,res)=>{
        const al = req.params.id;
        Bookdata.findById(al,(err,doc)=>{
            if(!err){
                res.render("addBook",{
                    nav,
                    title:'Library',
                    book: doc
                } )
            }
        })

     })

    return booksRouter;
}


module.exports = router;