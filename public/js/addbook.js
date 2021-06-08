const addform = document.getElementById('addbook-form');

const authorname = document.getElementById('authorname');
const gener = document.getElementById('gener');
const bookname = document.getElementById('bookname');
const imageurl = document.getElementById('imagefile');
const input = document.querySelectorAll('input');

function validation(){
                let t1=authorvalidation();
                let t2=bookvalidation();
                let t3=genervalidation();
                let t4=imagefilevalidation();
                if(t1&&t2&&t3&&t4)
                {
                    alert("Book added");
                    swal("Good job!", "You clicked the button!", "success");
                    return true;
                }
                else
                  alert("error somefileds are missing")
                  return false;
}




function authorvalidation(){
    const authorValue = authorname.value.trim();

     
    if(authorValue==""){
        
        Forerror (authorname, "cannot be empty");
        return false;
        
    }
    else {
        Forsuccess (authorname);
        return true;
    }
    }

    function bookvalidation() {
        const passValue = bookname.value.trim();
         
        if(passValue==""){
            
            Forerror (bookname, "cannot be empty ");
            return false;

        }
        else {
            Forsuccess (bookname);
            return true;
        }
        }
        
        
    function genervalidation(){
            const passValue = gener.value.trim();
             
            if(passValue==""){
                
                Forerror (gener, "cannot be empty ");
                return false;
                
            }
            else {
                Forsuccess (gener);
                return true;
            }
            }
        

    function imagefilevalidation(){
                const passValue = imageurl.value;
                 
                if(passValue==""){
                    
                    Forerror (imageurl, " cannot be empty ");
                    return false;
                }
                else {
                    Forsuccess (imageurl);
                    return true;
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