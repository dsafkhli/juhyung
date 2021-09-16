
document.querySelector('.button1').addEventListener('click',function(){
  document.querySelector('.container').style.transform = 'translate(0vw)';
});

document.querySelector('.button2').addEventListener('click',function(){
  document.querySelector('.container').style.transform = 'translate(-50vw)';
});

document.querySelector('.button3').addEventListener('click',function(){
  document.querySelector('.container').style.transform = 'translate(-100vw)';
});


function darkMode () {
  var body = document.body;
  body.classList.toggle("dark-mode");

  var button = document.getElementById("button");

if(button.innerHTML == "Dark Mode") {
    button.innerHTML = "Light Mode";
}else {
  button.innerHTML = "Dark Mode";
}
}
