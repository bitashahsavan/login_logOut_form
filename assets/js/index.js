
//!conect html to js
// we create a func for less code
const id=(id)=>document.getElementById(id);
const classes=(classes)=>document.getElementsByClassName(classes);

//set the id and classes

const   Form=id('form'),
        Fname=id('Fname'),
        Lname=id('Lname'),
        email=id('email'),
        PassWord=id('password'), 
        PassWord2=id('password2'),
        popup=id('popup') 
        errorMsg=classes('error');   



//! when submit form check validations    
     
        Form.addEventListener('submit',(e)=>{
         e.preventDefault();
        
            //  validation name 
              if(!Fname.value.trim() || Fname.value.length < 3){
              DisplayFailError(Fname , 0 , 'name is required') 
            
              }
              else{
              DisplaySucess(Fname ,0)
              }

            //  validation  lastname 
            if(!Lname.value.trim() || Lname.value.length < 3){
            DisplayFailError(Lname , 1 , 'Lname is required')
            }
            else{
              DisplaySucess(Lname ,1)
              }

            //validation email
            if(!email.value.trim() || !isValidEmail(email.value)){
            DisplayFailError(email , 2 , 'email is invalid')
            }else{
              DisplaySucess(email ,2)
            }
         //pasword validation
         //if password doesnot be blank donot show above error
            if(!PassWord.value.trim()){
              DisplayFailError(PassWord , 3 , 'password canot be blank')
                return;
              }else if(!isStrongPassword(PassWord.value)){
              DisplayFailError(PassWord , 3 , `Your password must be have at least 8characters long <br> 1 uppercase & 1 lowercase character1 number`)
                return ;
              } else{
                DisplaySucess(PassWord,3)
              
                }
            //confirm password    
                if(!PassWord2.value.trim()){
                DisplayFailError(PassWord2 , 4 , 'Retype  your password')
              
                }else if(PassWord.value !== PassWord2.value){
                DisplayFailError(PassWord2 , 4 , 'Passwords do NOT match')
              
              } if(PassWord.value == PassWord2.value){
                popup.classList.add('open-popup') 
                DisplaySucess(PassWord2 ,4)
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
    //validation password
    function isStrongPassword(password) {
      return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8}$/.test(password);
    }

