const express = require("express");
const addBookRouter = express.Router();
const Bookdata = require('../model/Bookdatabase');
const path = require('path')
const multer = require('multer');


function addbook(nav) {
     
    const storage = multer.diskStorage({
        destination: (req,file,cb)=>{
            cb(null,'./public/image/books')
        },
        filename: (req,file,cb)=>{
            console.log(file);
            cb(null,Date.now+ file.originalname )
        }
    })
    
    const upload = multer({
        storage: storage
    })
    

    addBookRouter.get("/",(req,res)=>{
        res.render("addBook",{
            nav,
            id: req.params._id
        })
    })

    addBookRouter.post("/add",upload.single('image'),(req,res)=>{
        
        console.log(req.body._id);
        const al = req.body._id;
        if(al === ''){
            insertRecord(req,res);
        }
         

         else{
            
            let userid = req.body._id;
            let updatedata = {
                title: req.body.title,
                author:  req.body.author,
                gener: req.body.gener,
                image: req.file.filename


            }

            Bookdata.findByIdAndUpdate(userid, { $set:updatedata})
            .then(()=>{
                res.redirect("/books")
                console.log("updated");
            })
            
         }
         
        
        
        
        
    });   
    function insertRecord(req,res){
        var item = {
            title: req.body.title,
            author: req.body.author,
            gener: req.body.gener,
            image: req.file.filename
    
        }
    
            var book = Bookdata(item);
            book.save();
            res.redirect('/books');
    }
    
   

    
   return addBookRouter;
}

module.exports = addbook;