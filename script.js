function welcomeUser(){
 alert("Welcome to Gym Éire!");
}

const btn = document.getElementById("btn");
if(btn){
 btn.addEventListener("click", function(){
  document.getElementById("output").innerHTML="Personal Training, Classes, Strength";
 });
}

const form = document.getElementById("form");
if(form){
 form.addEventListener("submit", function(e){
  e.preventDefault();
  let name = document.getElementById("name").value;
  if(name.length < 3){
    document.getElementById("msg").innerHTML="Name too short!";
  } else {
    document.getElementById("msg").innerHTML="Form submitted!";
  }
 });
}