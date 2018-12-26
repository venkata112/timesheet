function addUser(){
    window.location.href="/add";
}

function redirectLogin() {


    window.location.href="/home";
}

function saveuser(){
     var user = document.getElementById('un').nodeValue;
     sessionStorage.setItem("username", user);
}

function getUser(){
   return sessionStorage.getItem("username");
}

function backTo()
{
    window.location.href='/home';
}

function goTo()
{
window.location.href="/"



}