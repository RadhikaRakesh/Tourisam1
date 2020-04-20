//function for validate signin page
function invalidate()
{

    if(checkuser()&&checkpwd())
    {return true;}
    else
    { alert("User Name /password must be alphanumeric");
        return false;}

}
    //function for checking username in signin page
  function checkuser()
  { var uname=document.getElementById("username").value;
    

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
//function for checking password in signin page
 function checkpwd()
{
  
     var pwd=document.getElementById("password");
     var alp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
     //var a=/^([a-z][A-Z]+)$/;
         if(alp.test(pwd.value))
         {
           if(pwd.value.length>10)
           {  pwd.style.border="solid green";
             alert("Strong password and valid format");
           return true;
           }
           else
           {
             pwd.style.border="solid orange";
             alert("Valid format but medium password");
           return false;
           }
         }
          else
           {
             pwd.style.border="solid red";
            alert("Password must be alphanumeric and minimum one uppercase and lower case letter and digit");
             return false;
           }
}
//function for signup page
function upvalidate()
{

    if(checkname()&&checklastname()&&checkmail()&&phvalidate()&&checkusername()&&checkusername()&&checkpassword())
    {return true;}
    else
    { alert("Please fill all fields");
        return false;}
}
//function for phone number in signup page
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
//function for name in signup page
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
//function for checking name in signup page
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
//function for checking email in signup page
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
//function for checking username in signup page
    function checkusername(){
        var uname=document.getElementById("username");
        var alp=/^([\w]+)$/
    if(uname.value.length==0||uname.value.length<6)
    {
        
        uname.style.border="sloid red";
        alert("User Name must contain atleast 6 letter or alpha numeric ");
        return false;
    }
    else if(!alp.test(uname.value)){
        alert("User Name must be alphanumeric");
        return false;

    }else{return true;}
}
//function for checking password in signup page
    function checkpassword()
    {
        var pwd=document.getElementById("password");
        //var a=/^((?=.*\d)(?=.*[A-Z])(?=.*\W).{8})$/;
        var alp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
        //var a=/^([a-z][A-Z]+)$/;
            if(alp.test(pwd.value))
            {
              if(pwd.value.length>10)
              {  pwd.style.border="solid green";
                alert("Strong password and valid format");
              return true;
              }
              else
              {
                pwd.style.border="solid orange";
                alert("Valid format but medium password");
              return false;
              }
            }
             else
              {
                pwd.style.border="solid red";
               alert("Password must be alphanumeric and minimum one uppercase and lower case letter and digit");
                return false;
              } 
    }
   // return true;
