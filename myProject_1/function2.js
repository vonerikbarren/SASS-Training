// Real Comments in javascript:
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// ========== DOM Manipulation
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Notes: 
//          Here, we are going to tackle two things: The first thing obviously is DOM
// manipulation because we didnt really quite get it for class. In the video that we have
// for Basic DOM Manipulation, we are just going to follow along. There are 3-4 Main 
// examples so we will go through all of them there, then analyze the code, then build our
// tool box from there. Good Luck!
//
//
//          After we get that done, we need to play around with it, so we can use it
// whenever we want. from there we can continue by integrating our new found knownledge
// into if...else, if... else...if, and switch statements, then try to nest two or all 
// from there we can continue learning from the app. Again. Good luck!
//
//
//
//
//
//
//
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const x = document.getElementById("clickIt");
// const y = document.getElementById("hoverPara");

// x.addEventListener("click", RespondClick);
// y.addEventListener("mouseover", RespondMouseOver);
// y.addEventListener("mouseout", RespondMouseOut);

// function RespondMouseOver() {
//   document.getElementById("effect").innerHTML += "MouseOver Event" + "<br>";
// }

// function RespondMouseOut() {
//   document.getElementById("effect").innerHTML += "MouseOver Event" + "<br>";
// }

// function RespondClick() {
//   document.getElementById("effect").innerHTML += "Click Event" + "<br>";
// }

document.addEventListener("DOMContentLoaded", function () {

  const text = document.querySelector(".title");
  // const changeColor = document.querySelector(".changeColor");
  const changeColor = document.querySelector(".changeColor")

  console.log(changeColor);

  changeColor.addEventListener("click", function () {
    console.log('clicking button')
    text.classList.toggle("change");
  })
})

// const text = document.querySelector(".title");
// // const changeColor = document.querySelector(".changeColor");
// const changeColor = document.querySelector(".changeColor")

// console.log(changeColor);

// changeColor.addEventListener("click", function () {
//   text.classList.toggle("change");
// })

// Object.key