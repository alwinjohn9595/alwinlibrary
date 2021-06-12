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
            nav,
            id: req.params._id
        })
    })
     

    addAuthorRoutes.post("/add",upload.single('image'),(req,res)=>{
            
                if(req.body._id == "")
                {
                    insertRecord(req,res);
                }
                else{
                    let userid = req.body._id;
                    let updatedata = {
                        authorname: req.body.authorname,
                        info:  req.body.info,
                        gener: req.body.gener,
                        image: req.file.filename
            
            
                    }
            
                    authordata.findByIdAndUpdate(userid, { $set:updatedata})
                    .then(()=>{
                        res.redirect("/admin/authors")
                        console.log("updated");
                    })
                }
                
           
            
         
        
        
        

     });

     


      function insertRecord(req,res) {
            var item = {
                authorname: req.body.authorname,
                gener: req.body.gener,
                info: req.body.info,
                image: req.file.filename
        
            }
        
        
        
                var book = authordata(item);
                book.save();
                res.redirect('/admin/authors');
         }




    return addAuthorRoutes;
}

module.exports = Addauthor;