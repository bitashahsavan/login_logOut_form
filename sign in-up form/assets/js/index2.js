
//!conect html to js
// we create a func for less code
const id=(id)=>document.getElementById(id);
const classes=(classes)=>document.getElementsByClassName(classes);

//set the id and classes

const   Form=id('form'),
        email=id('email'),
        PassWord=id('password'), 
        errorMsg=classes('error');   

//! when submit form check validations    
     
Form.addEventListener('submit',(e)=>{
    e.preventDefault();

      //validation email
      if(!email.value.trim() || !isValidEmail(email.value)){
        DisplayFailError(email , 0 , 'email is invalid')
        }else{
          DisplaySucess(email ,0)
        }
    //pasword validation
    if(!PassWord.value.trim()){
        DisplayFailError(PassWord , 1 , 'password canot be blank')
          return;
        } else{
        DisplaySucess(PassWord,1)
        
          }
})

   
function DisplayFailError(id,serial,message) {
    errorMsg[serial].innerHTML =message;
     id.style.border='2px solid red'

}
function DisplaySucess(id,serial) {
 errorMsg[serial].innerHTML ='';
  id.style.border='2px solid green'

}

//validation email
function isValidEmail(email) {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}