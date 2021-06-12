const signform = document.getElementById('signup-form');

const emailid = document.getElementById('emailid');
const password = document.getElementById('password');

function validation (){
    t1 = emailvalidation();
    
    t3 = passwordvalidation();
    if(t1&&t3){
        
        return true; 
    }else{
        alert("Some fileds are missing");
        return false; 
    }

}
function emailvalidation() {
    
    const emailValue = emailid.value.trim();
    
    if(!isValidEmail(emailValue)){
    
       
        Forerror (emailid, "Email formate error"); 
        return false;         
    

    }else{
        Forsuccess (emailid); 
        return true;
    }

 
}


    function passwordvalidation(){
        const passValue = password.value.trim();
         
        if(passValue==""){
            
            Forerror (password, "password cannot be empty ");
            return false
        }
        else {
            Forsuccess (password);
            return true
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
     function isValidEmail(email) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
            
} 