
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
    if(uname.length<5)
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
     if(pwd.length<5)
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

    if(checkname()&&checklastname()&&checkcity()&&phvalidate()&&checkusername()&&checkusername()&&checkpassword())
    {return true;}
    else
    { alert("fill all fields");
        return false;}
}

function phvalidate(){
    var mno=document.getElementById("mno");
var ph=/^([1-9])([0-9]{9})$/;
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
function checkcity(){ 

    var exp=/^([a-zA-Z])+$/;  
    var city=document.getElementById("city");
if(!exp.test(city.value))
    {
        city.style.border="solid red";
        alert("City name must be alphabets");
        return false;
    }else{return true;}
}

   // if(!phvalidate())
    //{return false;}
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
        var alp=/^([\w]+)$/
        if(pwd.value.length==0||pwd.value.length<5)
    {
        pwd.style.border="solid red";
        alert("Password must contain atleast 5 letter");
        return false;
    }
    else if(!alp.test(pwd.value)){
        alert("Password must be alphanumeric");
        return false;

    } else {return true;}}
   // return true;
