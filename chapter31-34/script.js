//1.	Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand.
var dObj = new Date();

//2.	Code a statement that creates a new Date object, converts it to a string, and assigns the string to dStr, which hasn't been declared beforehand.
var dStr = new Date().toString();

//3.	Code a statement that extracts the day of the week from a Date object represented by d and assigns it to day, which hasn't been declared beforehand.
var d = new Date();
var day = d.toLocaleDateString("en-US", { weekday: "long" });

//4.	The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Alert the current day with array index.
var d = new Date();
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = d.getDay();
alert(dayNames[day]);

//5.	Extract all parts of the Date and Time and assign it to the variable which has not been declared beforehand.
var d = new Date();
var year = d.getFullYear();
var month = d.getMonth() + 1;
var day = d.getDate();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();
var milliseconds = d.getMilliseconds();

//6.	Code a statement that creates a Date object for the last day of the last month of 2020 and assigns it to later, which hasn't been declared beforehand.
var later = new Date(2020, 11, 31);
//7.	Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand.
var date1992 = new Date(1992, 1, 2); // Months are zero-based (1 = February)

//8.	Code a single statement that displays in an alert the milliseconds that elapsed between the reference date and the beginning of 1980.
var referenceDate = new Date(1980, 0, 1);
var currentDate = new Date();
var elapsedMilliseconds = currentDate - referenceDate;
alert(elapsedMilliseconds);
//9.	How do you change the year of a date in JavaScript?
//To change the year of a date in JavaScript, you can use the setFullYear() method of the Date object.
//10.	Write a JavaScript function to change the month of a given date to January.
function changeToJanuary(date) {
    date.setMonth(0);
    return date;
}

// Example usage:
var originalDate = new Date();
var dateInJanuary = changeToJanuary(originalDate);

console.log(dateInJanuary);
//11.	What is the method to change the day of the week for a specific date in JavaScript?
//no specific method i know to do it
//12.	Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt)
function changeMinutes(originalTime, newMinutes) {

    var newTime = new Date(originalTime);


    newTime.setMinutes(newMinutes);

    return newTime;
}


var originalTime = new Date(); // Current time
var newMinutes = parseInt(prompt("Enter the new minutes:"));

var modifiedTime = changeMinutes(originalTime, newMinutes);
console.log("Original Time:", originalTime);
console.log("Modified Time:", modifiedTime);
//13.	Write a JavaScript function to add a specific number of hours to a given time.
function addHours(originalTime, hoursToAdd) {

    var newTime = new Date(originalTime);


    newTime.setHours(newTime.getHours() + hoursToAdd);

    return newTime;
}


var originalTime = new Date(); // Current time
var hoursToAdd = parseInt(prompt("Enter the number of hours to add:"));

var modifiedTime = addHours(originalTime, hoursToAdd);
console.log("Original Time:", originalTime);
console.log("Modified Time:", modifiedTime);
//14.	You have to create a age calculator in JavaScript.
function calculateAge(birthdate) {
    var birthDate = new Date(birthdate);
    var currentDate = new Date();
  
    var age = currentDate.getFullYear() - birthDate.getFullYear();
  
    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
    ) {
      age--; 
    }
  
    return age;
  }
  
  // Example usage:
  var birthdate = prompt("Enter your birthdate (YYYY-MM-DD):");
  var age = calculateAge(birthdate);
  console.log("Your age is: " + age + " years");