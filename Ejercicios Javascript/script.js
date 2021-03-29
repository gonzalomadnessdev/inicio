//Exercise1


var pElement1 = document.querySelector("p.ex1");
var btn1 = document.querySelector("button.ex1");

btn1.addEventListener("click", changeText);

function changeText(){
    pElement1.innerText = "Hello Javascript World";
}
//Exercise2
var pElement2 = document.querySelector("p.ex2");
var btn2 = document.querySelector("button.ex2");

btn2.addEventListener("click", changeFontSize);

function changeFontSize(){
    pElement2.style.fontSize = "40px";
}
//Exercise3

var pElement3_1= document.getElementById("p1ex3");
var pElement3_2 = document.getElementById("p2ex3");
var btnShow = document.getElementById("btnShow");
var btnHide = document.getElementById("btnHide");

btnHide.addEventListener("click", hide);
btnShow.addEventListener("click", show);



function hide (){

    pElement3_1.style.display = "none";
    pElement3_2.style.display = "none";
    
}

function show() {

    pElement3_1.style.display = "block";
    pElement3_2.style.display = "block";

}

//Excersise4

var current_url = window.location.href;

document.getElementById("url").innerHTML = "<h5>Current URL: </h5> " +  current_url ;


//Exercise5


var formName = document.getElementById("form2").name;

document.getElementById("showFormName").innerText = formName;

//Excercise6



var changeBackgroundColorBtn = document.getElementById("changeBackgroundColorBtn");
var colorsList = ["#5F9EA0","#7FFF00","#D2691E","#00008B","#006400","#9932CC"];
var count = 0;

changeBackgroundColorBtn.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {

    document.body.style.backgroundColor = colorsList[count];
    count++;
    if(count>5){
        count=0;
    }
}

document.getElementById("resetBGColor").addEventListener("mouseover", function(){

    document.body.style.backgroundColor = "white";

});

//Excercise7


document.getElementById("upperCaseBtn").addEventListener("click", function(){

    var str = document.getElementById("toUpperCase").innerText;
    var res = str.toUpperCase();
    document.getElementById("toUpperCase").innerText = res;
})


//Excercise8

var anchorlenght = document.getElementsByTagName("a").length;

document.getElementById("totalOfAnchors").innerText = anchorlenght;




