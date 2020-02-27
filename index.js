// Adds an eventlistener to all drums when clicked
document.querySelectorAll(".drum").forEach(function(btn) {
  btn.addEventListener("click", function() {

    //Assigns the innerHTML of which button was pressed
    var buttonText = this.innerHTML;

    //Passes the innerHTML these methods
    makeSound(buttonText);

    buttonAnimation(buttonText);
  })
})

//Detects Keyboard Press
document.addEventListener("keydown", function(event){
  //event.key is looking at which button on the keyboard was pressed
  makeSound(event.key);

  buttonAnimation(event.key);
})

//Checks which drum corresponds to the user input
function makeSound(key){
  switch (key) {
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
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonText);

  }
}

//Animates the drum pressed
function buttonAnimation(currentKey){

  //Get which drum is pressed
  var buttonPressed = document.querySelector("." + currentKey);

  //Adds the .pressed class style to the drum pressed
  buttonPressed.classList.add("pressed");

  //Removes the style after 0.1s
  setTimeout(function(){
    buttonPressed.classList.remove("pressed");
  }, 100);
}

// The code below does the same as above but using a for loop

// var numberOfDrums = document.querySelectorAll(".drum");
//
// for(var i=0; i<numberOfDrums.length; i++){
//   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//     alert("I got clicked");
//   })
// }
