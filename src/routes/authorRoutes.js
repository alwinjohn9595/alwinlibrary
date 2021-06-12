const express = require("express");
const authorRouter = express.Router();
const authordata = require('../model/Authordatabase');

function authorrouter(nav1)
{
    



   authorRouter.get("/",(req,res)=>{
            authordata.find()
            .then((authors)=>{
               res.render("authors",{
                  nav1,
                  authors
                  
                  });

            })   
            
   });

      authorRouter.get("/:id",(req,res)=>{
            const id = req.params.id;
            authordata.findOne({_id: id})
            .then((author)=>{
            
            res.render("author",{
            nav1,
            author
            })
         });
         authorRouter.get("/:id/update", (req,res)=>{
            const al = req.params.id;
            authordata.findById(al,(err,doc)=>{
                if(!err){
                    res.locals.id = al;
                    res.render("addAuthor",{
                        nav1,
                        title:'Library',
                        author: doc
                    } )
                }
            })
    
         })
         authorRouter.get("/:id/delete",(req,res)=>{
            const al = req.params.id
            authordata.findByIdAndRemove(al,(err,doc)=>{
                if(!err){
                    res.redirect("/admin/authors");
                }
            })
         })


});

return authorRouter;

}


module.exports = authorrouter;