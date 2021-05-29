const express = require("express");
const addAuthorRoutes = express.Router();

function Addauthor(nav){
    
    addAuthorRoutes.get("/",(req,res)=>{
        

        res.render("addAuthor",{
            nav
        })
    })

    return addAuthorRoutes;
}

module.exports = Addauthor;