const { Router } = require("express");
const express = require("express");
const booksRouter = express.Router();

function router(nav){
    var books = [
        {
            title: 'Dune',
            author: 'Frank Herbert',
            gener: 'Science Fiction',
            image: 'https://rukminim1.flixcart.com/image/416/416/kc29n680/book/5/0/1/dune-the-graphic-novel-book-1-dune-original-imaft993zy5hwsbd.jpeg?q=70'
        },
        {
            title: '5 AM Club                           ',
            author: 'Robin Sharma',
            gener: 'Self Help',
            image: 'https://lh3.googleusercontent.com/6wEc81RvfZL_feB41v8-O2r9jeDkkm8CNmJjUVbqcYUv1rW_62OcswIvAdb0a4Uez1Y'
        },
        {
            title: 'To Kill A Mokingbird',
            author: 'Happer Lee',
            gener: 'Fiction',
            image: 'https://images-na.ssl-images-amazon.com/images/I/51Z9p5AecCL._SX307_BO1,204,203,200_.jpg'
        },  
        {
            title: 'A Fine Balance',
            author: ' Rohinton Mistry',
            gener: 'Historical Fiction',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1575897039l/11059934._SY475_.jpg'
        },
        {
            title: "India After Gandhi: The History of the World's Largest Democracy",
            author: 'Ramachandra Guha',
            gener: 'Non-Fiction',
            image: 'https://www.writoscope.com/wp-content/uploads/2018/07/DEBj9y6XsAADQdT-1024x768.jpg'
        },
        {
            title: 'Book of Humour',
            author: 'Ruskin Bond',
            gener: 'Fiction',
            image: 'https://th.bing.com/th/id/OIP.-0yoE5lpVpyUn5H4eQ2migAAAA?w=144&h=238&c=7&o=5&dpr=1.25&pid=1.7'
        },
        {
            title: 'The Kite Runner',
            author: 'Khaled Hosseini',
            gener: 'Drama',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1579036753l/77203._SY475_.jpg'
        },
        {
            title: 'Angels & Demons',
            author: 'Robert Langdon',
            gener: 'Science Fiction',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1176671419l/643301._SY475_.jpg'
        },
    
    ]
    
    
    
    
    booksRouter.get("/",function(req,res){
    
        res.render("books",{
            nav,
            title:'Library',
            books
            
        });
    
    });
    
    booksRouter.get("/:id", (req,res)=>{
        const id = req.params.id;
        res.render("book",{
            nav,
            title:'Library',
            book: books[id]
    
        })
        
    })

    return booksRouter;
}


module.exports = router;