var n1=Math.floor(Math.random()*6)+1;

// OUR APPROACH:

// if(n1==1){
//     document.querySelector(".img1").setAttribute("src","images/dice1.png");
// }
// else if(n1==2){
//     document.querySelector(".img1").setAttribute("src","images/dice2.png");
// }
// else if(n1==3){
//     document.querySelector(".img1").setAttribute("src","images/dice3.png");
// }
// else if(n1==4){
//     document.querySelector(".img1").setAttribute("src","images/dice4.png");
// }
// else if(n1==5){
//     document.querySelector(".img1").setAttribute("src","images/dice5.png");
// }
// else{
//     document.querySelector(".img1").setAttribute("src","images/dice6.png");
// }

// -------------------------------- PRO-CODER  OPTIMIZATION -------------------------------------

var n1_img="dice"+n1+".png";   // dice1.png - dice6.png

var img_src="images/" + n1_img;    // images/dice1.png - images/dice2.png

var img1=document.querySelectorAll("img")[0];       // no need of class, id

img1.setAttribute("src",img_src);


// LEARNING : You should also name yout images,or any attach thing such that you can use it for optimization like above



var n2=Math.floor(Math.random()*6)+1;

var img2_src="images/dice" + n2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",img2_src);


if(n1==n2){
    document.querySelector("h1").innerHTML="Tie";
}
else if(n1>n2){
    document.querySelector("h1").innerHTML="&#128681;&nbsp;Player 1 Wins";
}
else{
    document.querySelector("h1").innerHTML="&#128681;&nbsp;Player 2 Wins";
}

document.getElementById("tossBtn").addEventListener("click", function () {
    location.reload();
});