const express = require("express");
const addAuthorRoutes = express.Router();
const authordata = require('../model/Authordatabase')
const multer = require('multer');

function Addauthor(nav){
    
    const storage = multer.diskStorage({
        destination: (req,file,cb)=>{
            cb(null,'./public/image/authors')
        },
        filename: (req,file,cb)=>{
            console.log(file);
            cb(null,Date.now + file.originalname )
        }
    })
    
    const upload = multer({
        storage: storage
    })
    

    addAuthorRoutes.get("/",(req,res)=>{
        res.render("addAuthor",{
            nav
        })
    })
     

    addAuthorRoutes.post("/add",upload.single('image'),(req,res)=>{
        console.log(req.file);
        
        
        var item = {
        authorname: req.body.authorname,
        gener: req.body.gener,
        info: req.body.info,
        image: req.file.filename

    }
    


        var book = authordata(item);
        book.save();
        res.redirect('/authors');

});

    return addAuthorRoutes;
}

module.exports = Addauthor;