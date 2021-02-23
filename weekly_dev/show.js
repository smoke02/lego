
function storage() {

var fund = document.getElementById("roger").value;
var amount = document.getElementById("box2").value;
if(fund != ""){
var newwin = window.open("checkbook.html");
localStorage.setItem("fund",fund);
localStorage.setItem("amount",amount);
location.href = "checkbook.html";

};
}

