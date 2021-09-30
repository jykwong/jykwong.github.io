//get user name and status
var userName = window.prompt("What is your name?");
var userStatus = window.prompt("How are you doing today?");

//print today's date
var today = new Date().toLocaleString();
var dateTimeString= "Today is " + today;
document.getElementById("dateTime").innerHTML= dateTimeString;


//print username & status
var welcomeString = "Hi " + userName +". Glad to see hear you are " + userStatus +". Welcome to Jumpy Kangaroo Inc!";
document.getElementById("welcome").innerHTML= welcomeString;


function scriptAlert() {
    window.alert("Hey my script is running");
}

function letsHop() {
    for(var i = 0; i < 5; i++) {
        window.alert("HOP " + (i+1));
    }
    window.alert("Good job! Rest up, " + userName + ". You know you'll want to do that again!")
}

function letsGame() {
    var myNumber = Math.floor(Math.random()*(5-1) + 1);
    var guess = window.prompt("Guess my number to win: (1-5)");
    if (guess == myNumber) {
        window.alert("YOU WIN!");
    }
    else {
        window.alert("Nice try, " + userName + ". You guessed "+ guess + ", but my number was " + myNumber);
    }

}

function suggest() {
    var newText = "Check out our forms to give us some input. We'd really appreciate the help, " + userName + "! :D";
    document.getElementById("newText").innerHTML=newText;
}

function kangMath() {
    //generate random numbers
    var kangMath_random = Math.floor(Math.random()*(100-1)+1);
    var kangMath_random2 = Math.floor(Math.random()*(kangMath_random-1)+1);
    //prompt for user math input
    var kangMath_input = window.prompt("A mother kangaroo needs to put all her babies in her pouch. She has " + kangMath_random + " baby kangaroos. She puts " + kangMath_random2 + " kangaroos in her pouch. How many kangaroos remaining does she need to put in her pouch?");
    //calculate difference
    var kangMath_solution = kangMath_random-kangMath_input;
    //if else statement for the answer
    if (kangMath_random-kangMath_random2-kangMath_input == 0) {
        window.alert("That is correct! Thats a big pouch!");
    }
    else {
        window.alert("Not quite. There would be " + (kangMath_random-kangMath_input) + " more kangaroos to put in the pouch")
    }
}

function areaPerimeter() {
    //prompt for length and width
    var lengthInput = window.prompt("We want to create rectangular hopping zone for our favorite kangaroo. How big should the length be?");
    var widthInput = window.prompt("How wide should the zone be?")
    
    //calculate area and perimeter
    var perimeter = (lengthInput*2) + (widthInput*2);
    var area = lengthInput*widthInput;
    window.alert("The length is: " + lengthInput + "\n" + "The width is: " + widthInput + "\n" + "The area of the zone is: " + area + "\n" + "The perimeter of the zone is: " + perimeter);
}