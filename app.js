const express = require("express");

const app = new express();
require("./src/db/connect");

const port = process.env.PORT || 5000;

const nav = [  

            // {
              
            //     links:'/books', 
            //     name: 'Books'
        
        
            // },
          
            // {   
                
            //     links:'/authors', 
            //     name:"Authors"
                
            // },
            {   
                
                links:'/signup', 
                name:"Signup"
                
            },
            {   
                
                links:'/login', 
                name:"Login"
                
            },
            // {   
                
            //     links:'/addBook', 
            //     name:"AddBook"
                
            // },
            // {   
                
            //     links:'/addAuthor', 
            //     name:"Add author"
                
            // }

        
        
            ];
          


// const booksRouter = require("./src/routes/bookRoutes")(nav);
// const authorRouter = require("./src/routes/authorRoutes")(nav);

const signupRouter = require("./src/routes/signupRoutes")(nav);
const loginRouter = require("./src/routes/loginRoutes")(nav);
const adminRouter = require("./src/routes/adminroutes")(nav);
const userRouter = require("./src/routes/userroutes")(nav);


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));




app.set('view engine','ejs' );
app.set('views','./src/views');


app.use('/signup',signupRouter);
app.use('/login', loginRouter);
app.use("/admin",adminRouter)
app.use("/user",userRouter);

app.get("/",function(req,res){
    res.render("index" , 
    
    { 
        nav,
        title:'Library'



    });
});









app.listen(port,()=>{
    console.log("Server Ready at"+ port)
});
