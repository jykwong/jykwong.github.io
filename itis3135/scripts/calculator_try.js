var firstNumber = document.querySelectorAll('number');
var operator = document.querySelectorAll('operator');
var secondNumber = document.querySelectorAll('number');



function calculate(firstNumber, operator, secondNumber) {
    var 
    var result = '';
    if (operator == "+") {
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
    }
    if (operator == "-") {
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
    }
    if (operator == "*") {
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
    }
    if (operator == "÷") {
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
    }
    return result;
}