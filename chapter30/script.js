//1.	Code a statement that rounds a number represented by num to 4 places, converts it to a string, and assigns it to newNum, which hasn't been declared beforehand.
var num = 3.14159265359;
var newNum = num.toFixed(4).toString();

//2.	In a single statement round a number represented by a variable to 2 places, convert it to a string, convert it back to a number, and assign it to the same variable.
var num = 3.14159265359;
num = parseFloat(num.toFixed(2));
//3.	Code the first line of an if statement that tests whether the number represented by num, rounded to 2 digits and converted to a string, has more than 4 characters in it.
if (num.toFixed(2).toString().length > 4) {
  }
  
//4.	Assign a number with many decimal places to a variable.Code an alert that displays the number rounded to 2 decimal places and converted to a string.
var originalNumber = 3.14159265359;
var roundedNumber = originalNumber.toFixed(2).toString();

alert(roundedNumber); 
