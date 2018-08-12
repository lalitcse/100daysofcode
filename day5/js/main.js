function validate(){
    var fname = document.getElementById('fname').value;
    var mail = document.getElementById('mail').value;
    var psword = document.getElementById('psword').value;
    var validEmail =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(fname == ""){
        alert('Please enter your name');
        return false;
    }
    else if(mail==""){
        alert('Please enter your email');
        return false;
    }
    else if(validEmail.test(mail) == false){
        alert('Please enter valide email')
        return false;
    }
    else if(psword==""){
        alert('Please enter your password');
        return false;
    }
    else{
        return true;
    }
}