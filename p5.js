function validation()
{
    // store the value that user enter in variables
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var conpass = document.getElementById('conpass').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var myform = document.getElementById('myform');
    
    if(user=="")
    {
        document.getElementById('userr').innerHTML="-->Please,Enter your username<--";
        return false;
    }
    
    if((user.length < 5)||(user.length > 15))
    {
        document.getElementById('userr').innerHTML="-->Please,your username must be between 5 & 15 letters<--";        
        return false;    
    } 
    
    else
    {
        document.getElementById('userr').innerHTML="";
    }
    
    if(pass=="")
    {
        document.getElementById('passs').innerHTML="-->Please,Enter your password<--";
        return false;
    }
    
    if((pass.length < 8)||(pass.length > 20))
    {
        document.getElementById('passs').innerHTML="-->Please, your password must be between 5 & 20 letters<--";        
        return false;    
    }
    
    if(pass.search(/[a-z]/)==-1)
    {
        document.getElementById('passs').innerHTML="-->Please,your password must contain at least an lowercase letter<--";        
        return false;    
    }
    
    if(pass.search(/[A-Z]/)==-1)
    {
        document.getElementById('passs').innerHTML="-->Please,your password must contain at least an uppercase letter<--";        
        return false;    
    }
    
    if(pass.search(/[0-9]/)==-1)
    {
        document.getElementById('passs').innerHTML="-->Please,your password must contain at least one number<--";        
        return false;    
    }
    
    if(pass.search(/[ ]/)!=-1)// one equal not tw0
    {
        document.getElementById('passs').innerHTML="-->Please,your password mustn't contain any sapces<--";        
        return false;    
    }
    
    if(pass.search(/[@\#\$\%\^\&\*\?\>\<\<=\>=\==\)\(\+\-\_\(\)\(/)\!\;\'\"\:\,]/)==-1)//brackets
    {
        document.getElementById('passs').innerHTML="-->Please,your password mustn't contain speacial Characters<--";        
        return false;    
    }

    else
    {
        document.getElementById('passs').innerHTML="";
    }

    if(conpass=="")
    {
        document.getElementById('conpasss').innerHTML="-->Please,Confirm your password<--";
        return false;
    }

    if(conpass!=pass)
    {
        document.getElementById('conpasss').innerHTML="-->password doesn't match<--";
        return false;
    }
    
    else
    {
        document.getElementById('conpasss').innerHTML="";
    }
    
    if(email=="")
    {
        document.getElementById('emaill').innerHTML="-->Please,Enter your Email<--";
        return false;
    }

    if( (email.indexOf("@") == -1) || (email.length <= 4) )
    {
        document.getElementById('emaill').innerHTML="-->Please,Re-enter a valid Email<--";
        return false;
    }

    else
    {
        document.getElementById('emaill').innerHTML="";
    }
    
    if(mobile=="")
    {
        document.getElementById('mobill').innerHTML="-->Please,Enter your phone number<--";
        return false;
    }

    if((mobile.length != 8 )||(mobile.length != 11))
    {
        document.getElementById('mobill').innerHTML="-->Please,Re-enter a valid phone number<--";
        return false;
    }

    else
    {
        document.getElementById('mobill').innerHTML="";
    }
}
function validation(){
    // store the value that user enter in variables
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var conpass = document.getElementById('conpass').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    
    var myform = document.getElementById('myform');
     // to check if that field empty or not
    if(user == ""){
        document.getElementById("userr").innerHTML="*please enter user name in the box*";
        return false;
    }
   
   //  to accert a name of 3 letters at least
    if(user.length<3){
        document.getElementById('userr').innerHTML="*user must be more than 2 letters";
        return false;
    }
    
    // make the span empty if these conditions are false
    else{
        document.getElementById('userr').innerHTML="";
    }
    // to check if that field empty or not
    if(pass == ""){
        document.getElementById('passs').innerHTML="**please write passward in the box**";
        return false;
    }
    if(pass.search(/[ ]/)!=-1){
        document.getElementById('passs').innerHTML="**must not include a space**";
    return false;
   }
    // limit the lenght of the  pass
    if(pass.length<8 || pass.length>12 ){
        document.getElementById('passs').innerHTML="**please write passward of at least 8 letters and isn't longer 12**";
        return false;
    }
      // must enclud numbers
   if(pass.search(/[0-9]/)==-1){
        
        document.getElementById('passs').innerHTML="must encluce at least a number";
        return false;
    }
    //not to accept without upper characters
    if(pass.search(/[A-Z]/)==-1){
        document.getElementById('passs').innerHTML="**must include at leasrt 1 upper character**";
        return false;
    }
    // not to accept without lower characters
   if(pass.search(/[a-z]/)==-1){
        document.getElementById('passs').innerHTML="**must include at least 1 lowwer character**";
    return false;
   }
    // not accept without special characters
    if(pass.search(/[!\@\#\$\%\^\&\*\(\)\_\-\=\+\<\>\,\?]/)==-1){
       
            document.getElementById('passs').innerHTML="**must include 1 special character**";
        return false;
       }
    // make the span empty if these conditions are false
    else{
    document.getElementById('passs').innerHTML="";
}   
    // to check if that field empty or not
    if(conpass == ""){
        document.getElementById('conpasss').innerHTML="**please confirm yor passward";
        return false;
    }
    // to check if the passwords match or not
    if(conpass != pass){
        document.getElementById('conpasss').innerHTML="**passward isnot matches";
        return false;
    
    }
    // make the span empty if these conditions are false
    else{
        document.getElementById('conpasss').innerHTML="";
    }
    // to check if that field empty or not
    if(email == ""){
        document.getElementById('emaill').innerHTML="**this field can not be empty**";
        return false;
    }   
        // not to accept if there are no words after @ sign and limit the no. of  them
      if(email.indexOf("@") == -1 || email.length < 6){
      document.getElementById('emaill').innerHTML= "**Please Enter valid Email**";
       return false;
  }
    // make the span empty if these conditions are false
     else{
         document.getElementById('emaill').innerHTML="";
     }
// to check if that field empty or not
    if(mobile == ""){
        document.getElementById('mobill').innerHTML="**this field can not be empty**";
        return false;
    }
    // to accept  numbers  only
    if(isNaN(mobile)){
         document.getElementById('mobill').innerHTML="**Only numbers accepted**";
         return false;}
    // to limit what the user enter
    if(mobile.length<10 || mobile.length>10){
        document.getElementById('mobill').innerHTML="**please enter 10 digit mobile number**";
        return false;
    }
    
    // make the span empty if these conditions are false
    else{
        document.getElementById('mobill').innerHTML="";
    }
    
}























