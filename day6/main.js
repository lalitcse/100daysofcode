function validation(){
    var user = document.getElementById('uname').value;
    var password = document.getElementById('pword').value;
    var confirm = document.getElementById('confirm').value;
    var number = document.getElementById('number').value;
    var email = document.getElementById('mail').value;

    if(user == ""){
        document.getElementById('username').innerHTML = " * Please enter your name";
        return false;
    }
    if(user.length <= 2){
        document.getElementById('username').innerHTML = " * Username should not be less then 2 letters";
        return false;
    }
    if(user.length > 20 ){
        document.getElementById('username').innerHTML = " * Username should not be greater then 20 letters";
        return false;
    }
    if(!isNaN(user)){
        document.getElementById('username').innerHTML = " * Numbers are not allowed";
        return false;
    }






    if( password == ""){
        document.getElementById('password').innerHTML = " * Please enter password";
        return false;
    }
    if(password.length <= 5) {
        document.getElementById('password').innerHTML = " * Password should not be less then 5 letters";
        return false;
    }
    if(password.length > 20) {
        document.getElementById('password').innerHTML = " * Password should not be greater then 20 letters";
        return false;
    }
     if( confirm == ""){
        document.getElementById('confirmp').innerHTML = " * Enter password again";
        return false;
    }
    if(password != confirm){
        document.getElementById('confirmp').innerHTML = " * Password does not match";
        return false; 
    }






    if( number == ""){
        document.getElementById('mobile').innerHTML = " * Please enter mobile number";
        return false;
    }
    if(isNaN(number)){
        document.getElementById('mobile').innerHTML = " * Mobile number is not correct letters not allowed";
        return false;
    }
    if(number.length != 10){
        document.getElementById('mobile').innerHTML = " * Mobile number is not correct";
        return false;  
    }
    



    if( email == ""){
        document.getElementById('email').innerHTML = " * Please enter email";
        return false;
    }
    if(email.indexOf('@') <=0){
        document.getElementById('email').innerHTML = " * Please enter valid email";
        return false;
    }
    if((email.charAt(email.length-4) != '.') && (email.charAt(email.lenght-3) != '.')){
        document.getElementById('email').innerHTML = " * Dot is not at the write place";
        return false;
    }
   
}