const express = require("express");
const addBookRouter = express.Router();

function addbook(nav) {


    addBookRouter.get("/",(req,res)=>{
        res.render("addBook",{
            nav
        })
    })
    
    
   return addBookRouter;
}

module.exports = addbook;