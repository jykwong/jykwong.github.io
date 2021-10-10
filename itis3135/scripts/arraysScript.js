const person = ["David Lee","John Jacob","Danny Jubz","Cody Egg","Johnathan Lee","Ben Zasama","Clark Murdock"];
const salary = [];

function addSalary() 
{
    let employeeName = document.getElementById("dropdown_names").value; //get employee name from form
    let employeeSalary = document.getElementById("salary").value; //get employee salary from form
    let employeeIndex = 0; //variable to find employee name index

    if  (employeeName == "") {
        window.alert("Select an employee from the list");
    }
    if (employeeSalary <= 0 || isNaN(employeeSalary)) {
        window.alert("Enter a valid salary");
    }
    employeeIndex = person.indexOf(employeeName);
    salary[employeeIndex] = employeeSalary;
    console.log("index " + employeeIndex);
    console.log("salary " + employeeSalary);
    console.log(employeeName)

    console.log("testing salary array at index " + employeeIndex + " " + salary[employeeIndex])

}

function displayResults()
{
    let highestSalary = Math.max(...salary); //finds highest number in array
    let sum = 0; //variable used to find the summation of salaries
    let avgSalary = 0; //variable declaration
    for (var i = 0; i < salary.length; i++) //for loop to add all salaries
    {
        sum += parseInt(salary[i]); //parseInt was necessary to get the average calculation to work properly
    }
    avgSalary = sum / salary.length; //calculate average
    console.log(sum); //console print for testing purposes


    var results = document.getElementById("results");
    results.innerHTML = "<h2 style=\"text-align: left\">Highest Salary</h2>";  //h2 heading Highest Salary
    results.innerHTML += "<p>" + highestSalary + "</p>"; //print highestSalary variable
    results.innerHTML += "<br>"; //blank line
    results.innerHTML += "<h2 style=\"text-align: left\">Average Salary</h2>"; //h2 heading Average Salary
    results.innerHTML += "<p>" + avgSalary + "</p>"; //print average salary variable
}


function displaySalary()
{
    var results_table = document.getElementById("results_table");
    results_table.innerHTML = "<thead><tr><th>Name</th><th>Salary</th></tr></thead><tbody>"; //write table header to results_table
    for (var i = 0; i < person.length; i++) {
        results_table.innerHTML += "<tr><td>" + person[i] + "</td> <td>" + salary[i] + "</td></tr>"; //append table cells to the table
    }
    results_table.innerHTML += "</tbody>"; //close table tag
}

