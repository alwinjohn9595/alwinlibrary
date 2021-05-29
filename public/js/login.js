const signform = document.getElementById('signup-form');

const emailid = document.getElementById('emailid');
const password = document.getElementById('password');

signform.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkinputs();

})

function checkinputs() {
    emailvalidation();
    
    passwordvalidation();
}

function emailvalidation(){
    const emailValue = emailid.value.trim();
     
    if(emailValue==""){
        
        Forerror (emailid, "cannot be empty");
    }
    else {
        Forsuccess (emailid);
    }
    }

    function passwordvalidation(){
        const passValue = password.value.trim();
         
        if(passValue==""){
            
            Forerror (password, "password cannot be empty ");
        }
        else {
            Forsuccess (password);
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