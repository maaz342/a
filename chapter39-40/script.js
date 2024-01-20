//1.Write a JavaScript switch statement that checks the value of a variable and performs different actions based on different cases.
var dayOfWeek = "Monday";

switch (dayOfWeek) {
  case "Monday":
    console.log("It's the start of the workweek.");
    break;
  case "Tuesday":
    console.log("It's Tuesday.");
    break;
  case "Wednesday":
    console.log("It's halfway through the week.");
    break;
  case "Thursday":
    console.log("It's almost Friday.");
    break;
  case "Friday":
    console.log("TGIF! It's Friday.");
    break;
  default:
    console.log("It's the weekend or an unknown day.");
}

//2.	Write a JavaScript switch statement that check whether cityName given by user check the cityName if match alert the user and break the statement, if not default message will be shown to user.
var cityName = prompt("Enter a city name:");

switch (cityName) {
  case "Karachi":
    alert("You entered Karachi. It's a great city!");
    break;
  case "Lahore":
    alert("You entered Lahore. Another beautiful city!");
    break;
  case "Islamabad":
    alert("You entered Islamabad. The capital city!");
    break;
  default:
    alert("The city you entered is not recognized.");
}
