var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];

var $ = function(id) { return document.getElementById(id); };
var cheatday = document.querySelector("#cheatDay");

function updateCalorie() {
    calorieEntry = document.getElementById("calorie").value;
    calories.push(calorieEntry);
    console.log(...calories);
    var caloriePrintArray = calories.join(",");
    window.alert("Your updated calorie details are: " + caloriePrintArray);
}

function showAverageCalories() {
    var sum = 0
    var average = 0;
    for (var i = 0; i < calories.length; i++) {
        sum += parseInt(calories[i]);
    }
    average = sum/calories.length;
    console.log("sum: " +sum);
    console.log("average: " + average);
    var textBox = document.getElementById("avg");
    textBox.innerHTML = average;
}
window.onload = function() {
    //didn't have time to figure out how to get functions running in this scope
   /* //event handlers
    function updateCalorie() {
        calorieEntry = document.getElementById("calorie").value;
        calories.push(calorieEntry);
        var caloriePrintArray = calories.join(",");
        window.alert("Your updated calorie details are: " + caloriePrintArray);
    }

    function showAverageCalories() {
        var sum = 0
        var average = 0;
        for (var i = 0; i < calories.length; i++) {
            sum += parseInt(calories[i]);
        }
        average = sum/calories.length;
        console.log("sum: " +sum);
        console.log("average: " + average);
        var textBox = document.getElementById("avg");
        textBox.innerHTML = average;
    }
*/


};
