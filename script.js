document.addEventListener("DOMContentLoaded", function(){
  console.log("DOMContent is loaded properly.");

  var randNum;
  var num = document.getElementById("num");
  var randButton = document.getElementById("randButton");

  randButton.addEventListener('click', function(){
    randNum = Math.floor((Math.random() * 1000) + 1);
    num.innerHTML = randNum;
    console.log("You click the random button.");
  });
});
