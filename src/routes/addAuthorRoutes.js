const express = require("express");
const addAuthorRoutes = express.Router();
const authordata = require('../model/Authordatabase')

function Addauthor(nav){
    
    // const storage = multer.diskStorage({
    //     destination: (req,file,cb)=>{
    //         cb(null,'../public/image/books')
    //     },
    //     filename: (req,file,cb)=>{
    //         console.log(file);
    //         cb(null,Date.now+ file.originalname )
    //     }
    // })
    
    // const upload = multer({
    //     storage: storage
    // })
    

    addAuthorRoutes.get("/",(req,res)=>{
        res.render("addAuthor",{
            nav
        })
    })
    // upload.single('image')

    addAuthorRoutes.post("/add",(req,res)=>{
        console.log(req.file);
        const file = req.file;
        
        var item = {
        title: req.body.title,
        author: req.body.author,
        gener: req.body.gener,
        image: req.file.filename

    }


        var book = authordata(item);
        book.save();
        res.redirect('/books');

});

    return addAuthorRoutes;
}

module.exports = Addauthor;