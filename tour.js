
function invalidate()
{

    if(checkuser()&&checkpwd())
    {return true;}
    else
    { alert("User Name /password must be alphanumeric");
        return false;}

}
    
  function checkuser()
  { var uname=document.getElementById("username").value;
    var pwd=document.getElementById("password").value;

  var alp=/^([\w]+)$/
    if(uname.length<6)
    {
        alert("UserName is too short");
        return false;

    }else if(!alp.test(uname.value)){
        alert("User Name must be alphanumeric");
        return false;

    }
    else{return true;}
}
 function checkpwd()
{
  var uname=document.getElementById("username").value;
     var pwd=document.getElementById("password").value;

var alp=/^([\w]+)$/
     if(pwd.length<8)
    {
        alert("Password is too short");
    return false;
    }
    else if(!alp.test(pwd.value))
    {
       alert("User Name must be alphanumeric");
        return false;
    }
    else{ return true;}
}
function upvalidate()
{

    if(checkname()&&checklastname()&&checkmail()&&phvalidate()&&checkusername()&&checkusername()&&checkpassword())
    {return true;}
    else
    { alert("fill all fields");
        return false;}
}

function phvalidate(){
    var mno=document.getElementById("mno");
//var ph=/^([1-9])([0-9]{9})$/;
var ph=/^(\d{3})(\.?\-?\ ?)(\d{3})(\.?\-?\ ?)(\d{4})$/;
if(ph.test(mno.value)&&mno.value.length>1)
  {
    //alert("valid no");
    return true;
  }
  else
  {
    alert("Mobile no must be numbers and 10 digits ");
    return false;
  }}  
  // var exp=/^([a-zA-Z])+$/;
   //var ph=/^([1-9])([0-9]{9})$/;
   //var alp=/^([\w]+)$/

   function checkname()
   {
    var fname=document.getElementById("fname");
    var exp=/^([a-zA-Z])+$/;
   if(!exp.test(fname.value))
    {
        fname.style.border="solid red";
        
        alert("Name must be alphabets");
        return false;
    }
    else {return true;}
}
function checklastname(){
    var lname=document.getElementById("lname"); 
    var exp=/^([a-zA-Z])+$/;
    if(!exp.test(lname.value))
    {
        lname.style.border="solid red";
    alert("Name must be alphabets");
    return false;

    }
    else{return true;}
}
function checkmail(){ 

    var exp=/^([\w\.\-]+)@([\w\-]+)\.([a-z]{2,3})((\.[a-z]{2,3}?)?)$/;  
    var mail=document.getElementById("email");
if(!exp.test(mail.value))
    {
        mail.style.border="solid red";
        alert("email format is not valid");
        return false;
    }else{return true;}
}

    function checkusername(){
        var uname=document.getElementById("username");
        var alp=/^([\w]+)$/
    if(uname.value.length==0||uname.value.length<5)
    {
        
        uname.style.border="sloid red";
        alert("User Name must contain atleast 5 letter or alpha numeric ");
        return false;
    }
    else if(!alp.test(uname.value)){
        alert("User Name must be alphanumeric");
        return false;

    }else{return true;}
}
    function checkpassword(){
        var pwd=document.getElementById("password");
        //var a=/^((?=.*\d)(?=.*[A-Z])(?=.*\W).{8})$/;
        var alp=/^([\w]+)$/
        if(pwd.value.length==0||pwd.value.length<8)
    {
        pwd.style.border="solid red";
        alert("Password must contain atleast 8 letter");
        return false;
    }
    else if(pwd.value.length>8 && pwd.value.length<12)
    {
        pwd.style.border="solid orange";
        alert("password is medium");
        return false;
    }else {
        pwd.style.border="solid green";
        alert("password is strong");

    }
    if(!alp.test(pwd.value)){
        pwd.style.border="solid orange";
        alert("Password must be alphanumeric and minimum one uppercase and lower case letter");
        return false;

    } else {return true;}}
   // return true;
