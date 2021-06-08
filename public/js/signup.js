

// sgin up page

const signform = document.getElementById('signupform');

const emailid = document.getElementById('emailid');
const password = document.getElementById('password');
const passwordstrength = document.getElementById('password-strength');
const username = document.getElementById('username');
//password variables

let state = false;
let lowUpeercase = document.querySelector(".low-upper-case i");
let number = document.querySelector(".one-number i");
let specialChar = document.querySelector(".one-special-char i");
let eightChar = document.querySelector(".eight-character i");




function validation (){
    t1 = emailvalidation();
    t2 = uservalidation();
    t3 = passwordvalidation();
    if(t1&&t2){
        alert("Sign up successful");
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


     
function uservalidation(){
    const usernameValue = username.value.trim();
     
    if(!isValidUser(usernameValue)){
        
        Forerror (username, " format error");
        return false;
    }
    else {
        Forsuccess (username);
        return true;
    }
    }

function passwordvalidation() {
    const passValue = password.value.trim();

    if(passValue ==="")
    {
        Forerror (password, "Password cannot be empty");
        
    }
    else
    checkStrength(passValue);
    
    
}    
  
function checkStrength(passW){
    let strength = 0;
    if(passW.match(/([a-z]*[A-Z])|([A-Z]*[a-z])/)){
        strength+=1;
        lowUpeercase.classList.remove('fa-circle');
        lowUpeercase.classList.add('fa-check');
    } else {
        lowUpeercase.classList.add('fa-circle');
        lowUpeercase.classList.remove('fa-check');
    }

    if(passW.match(/([0-9])/)){
        strength+=1;
        number.classList.remove('fa-circle');
        number.classList.add('fa-check');

    } else {
        number.classList.add('fa-circle');
        number.classList.remove('fa-check');
    }
     
    if(passW.match(/([!,@,#,$,%,^,&,*,.,?])/)){
        strength+=1;
        specialChar.classList.remove('fa-circle');
        specialChar.classList.add('fa-check');
    } else {
        specialChar.classList.add('fa-circle');
        specialChar.classList.remove('fa-check');
    }
     
    if(passW.length > 7){
        strength+=1;
        eightChar.classList.remove('fa-circle');
        eightChar.classList.add('fa-check');
    } else {
        eightChar.classList.add('fa-circle');
        eightChar.classList.remove('fa-check');
    }

   
    if(strength<2){
        passwordstrength.classList.remove("progress-bar-warning");
        passwordstrength.classList.remove("progress-bar-success");
        passwordstrength.classList.add("progress-bar-danger");
        passwordstrength.style="width:20%";
    }else if(strength == 3) {
        passwordstrength.classList.remove("progress-bar-success");
        passwordstrength.classList.remove("progress-bar-danger");
        passwordstrength.classList.add("progress-bar-warning");
        passwordstrength.style="width:60%";
    }else if(strength == 4) {
        passwordstrength.classList.remove("progress-bar-warning");
        passwordstrength.classList.remove("progress-bar-danger");
        passwordstrength.classList.add("progress-bar-success");
        passwordstrength.style="width:100%";
        Forsuccess (password, 'successfull');
        
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

    function isValidUser(username){
        return /^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(username);
    }
    

