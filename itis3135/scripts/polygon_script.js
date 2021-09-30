//Name the Polygon
//Prompt user for a number. Loops if number is not within a certain range
do
{
    var polygonNumber = prompt("The Jumpy Kangaroo wants to know how many jumps you did today: (Enter number from 0-10)");
    polygonNumber = validateEntry(polygonNumber); //calls function to validate number
} 
while ((polygonNumber < -10 || polygonNumber > 10) || isNaN(polygonNumber))  //condition to end loop

var polygon_Name = getShape(polygonNumber); //calls function to save polygon name to a variable

//Output the number and polygon
alert("Your number is " + polygonNumber + ". The polygon with " + polygonNumber + " sides is: " + polygon_Name);


//FUNCTIONS
function validateEntry(polygonNumber) //input validation
{
    if (isNaN(polygonNumber)) //if not a number
    {
        alert("Enter a digit 0-10 in number form");
    }
    else if (polygonNumber < -10 || polygonNumber > 10) //if out of range
    {
        alert("Enter a digit in the range of 0-10");
    }

    //If number is negative then make it positive.
    if (polygonNumber < 0)
    {
        polygonNumber = Math.abs(polygonNumber);
    }

    //If number is decimal then round it.
    polygonNumber = Math.round(polygonNumber);
    return polygonNumber;
}

function getShape(number) //takes an integer and returns the polygon name
{
    //Get polygon name
    var polygonName;
    switch(number)
    {
        case 1:
            polygonName = "henagon";
            break;
        case 2:
            polygonName = "digon";
            break;
        case 3:
            polygonName = "trigon";
            break;
        case 4:
            polygonName = "tetragon";
            break;
        case 5:
            polygonName = "pentagon";
            break;
        case 6:
            polygonName = "hexagon";
            break;
        case 7:
            polygonName = "heptagon";
            break;
        case 8:
            polygonName = "octagon";
            break;
        case 9:
            polygonName = "enneagon";
            break;
        case 10:
            polygonName = "decagon";
            break;
        default:
            break;
    }
    return polygonName;
}
