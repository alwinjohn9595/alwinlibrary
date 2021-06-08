const express = require("express");
const authorRouter = express.Router();
const authordata = require('../model/Authordatabase');

function authorrouter(nav)
{
    



   authorRouter.get("/",(req,res)=>{
            authordata.find()
            .then((authors)=>{
               res.render("authors",{
                  nav,
                  authors
                  });

            })   
            
   });

      authorRouter.get("/:id",(req,res)=>{
            const id = req.params.id;
            authordata.findOne({_id: id})
            .then((author)=>{
            
            res.render("author",{
            nav,
            author
            })
         });
      authorRouter.get("/:id/update")    

});

return authorRouter;

}


module.exports = authorrouter;