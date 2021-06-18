// document.querySelector("button").addEventListener("click", handleClick);
// What does the above line do?
//  From the document, we are selecting the first button
//  then we addEventListener to it s.t in case of a click, handleClick function is executed.

// document.querySelectorAll("button")[1].addEventListener("click", handleClick);
// document.querySelectorAll("button")[2].addEventListener("click", handleClick);
// document.querySelectorAll("button")[3].addEventListener("click", handleClick);
// document.querySelectorAll("button")[4].addEventListener("click", handleClick);
// document.querySelectorAll("button")[5].addEventListener("click", handleClick);
// document.querySelectorAll("button")[6].addEventListener("click", handleClick);

//Instead of writing the above all these lines as above,
//   the very same goal can be achieved by using a for-loop as below.

//
// var buttonNumber;    //declare a counter variable named buttonNumber
// // for(buttonNumber = 0; buttonNumber <= 6; buttonNumber++){
// //    To generalise this for-loop
// var totalButtons = document.querySelectorAll(".drum").length; //declare a variable named totalButtons which
//                                                              //holds the length of the array returned by document.querySelectorAll(".drum")
// //      What does document.querySelectorAll(".drum") do?
// //            It returns an array of all the elements which fall under the class named drum
// for(buttonNumber = 0; buttonNumber <= totalButtons; buttonNumber++){
//       // starting with counter set to 0, we increment the counter until counter becomes = 6
//       // Why 6?
//       //    Because we have 7 buttons in total on our webpage
//   document.querySelectorAll(".drum")[buttonNumber].addEventListener("click", handleClick);
//   //What does the above line do?
//   //  From the document, we are selecting the entire array of buttons
//   //  then we addEventListener to each element button s.t in case thet button experiences a mouseclick, handleClick function is executed.
// }
//
// function handleClick(){
//   //contains code that will be executed when click is detected
//   // var audio = new Audio('sounds/tom-1.mp3');
//   // // alert("I got clicked!");
//   // audio.play();
//   var buttonInnerHTML = this.innerHTML;
//
//   switch (buttonInnerHTML) {
//     case "w":
//           var tom1 = new Audio("sounds/tom-1.mp3");
//           tom1.play();
//       break;
//
//     case "a":
//       var tom2 = new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;
//
//     case "s":
//       var tom3 = new Audio("sounds/tom-3.mp3");
//       tom3.play();
//       break;
//
//     case "d":
//       var tom4 = new Audio("sounds/tom-4.mp3");
//       tom4.play();
//       break;
//
//     case "j":
//       var jdrum = new Audio("sounds/snare.mp3");
//       jdrum.play();
//       break;
//
//     case "k":
//       var kdrum = new Audio("sounds/crash.mp3");
//       kdrum.play();
//       break;
//
//     case "l":
//       var ldrum = new Audio("sounds/kick-bass.mp3");
//       ldrum.play();
//       break;
//
//     default: console.log(buttonInnerHTML);
//
//   }
//
// }


var buttonNumber;
var totalButtons = document.querySelectorAll(".drum").length;

for(buttonNumber = 0; buttonNumber <= totalButtons; buttonNumber++){
  document.querySelectorAll(".drum")[buttonNumber].addEventListener("click", handleClick);
}

function handleClick(){

  var buttonInnerHTML = this.innerHTML;

  switch (buttonInnerHTML) {
    case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var jdrum = new Audio("sounds/snare.mp3");
      jdrum.play();
      break;

    case "k":
      var kdrum = new Audio("sounds/crash.mp3");
      kdrum.play();
      break;

    case "l":
      var ldrum = new Audio("sounds/kick-bass.mp3");
      ldrum.play();
      break;

    default: console.log(buttonInnerHTML);

  }

}

document.addEventListener("keydown", function() {
  alert("Key was pressed");
});
