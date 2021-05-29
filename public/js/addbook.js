const signform = document.getElementById('signup-form');

const authorname = document.getElementById('authorname');
const gener = document.getElementById('gener');
const bookname = document.getElementById('bookname');
const imageurl = document.getElementById('imageurl');

signform.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkinputs();

})

function checkinputs() {
    authorvalidation();
    bookvalidation();
    genervalidation();
    imageurlvalidation();
}

function authorvalidation(){
    const authorValue = authorname.value.trim();
     
    if(authorValue==""){
        
        Forerror (authorname, "cannot be empty");
    }
    else {
        Forsuccess (authorname);
    }
    }

    function bookvalidation() {
        const passValue = bookname.value.trim();
         
        if(passValue==""){
            
            Forerror (bookname, "cannot be empty ");
        }
        else {
            Forsuccess (bookname);
        }
        }
        
        
    function genervalidation(){
            const passValue = gener.value.trim();
             
            if(passValue==""){
                
                Forerror (gener, "cannot be empty ");
            }
            else {
                Forsuccess (gener);
            }
            }
        

    function imageurlvalidation(){
                const passValue = imageurl.value.trim();
                 
                if(passValue==""){
                    
                    Forerror (imageurl, " cannot be empty ");
                }
                else {
                    Forsuccess (imageurl);
                }
                }
        

         function Forerror (input, message) {
        let parent = input.parentElement;
        let msgsmall = parent.querySelector('small');
        msgsmall.innerText = message;
        parent.className = 'form-elements error';
     }

     function Forsuccess (input) {
        let parent = input.parentElement;
        parent.className = 'form-elements success';
     }