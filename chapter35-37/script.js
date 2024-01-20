//1.	Code the first line of a function displayAlert.
function displayAlert() {
}
//2.	Code a function named askName that prompts the user to "Enter name" and assigns the answer to userName, which hasn't been declared beforehand.
function askName() {
    var userName = prompt("Enter name");
  }
  
//3.	Code a function that calls 2 other functions.
function function1(){

}
function function2(){

}
function callTwoFunctions() {
    function1();
    function2();
  }
  
//4.	Code a function that displays a prompt, "Enter name" and then displays the name in an alert. Call the function.
function displayName() {
    var name = prompt("Enter name");
    alert("Your name is: " + name);
  }
  
  displayName();
  
//5.	Code the first line of a function named concat that has 3 parameters, the first three letters of the alphabet. Call that takes a variable, a string, and a number as arguments.

function concat(param1, param2, param3) {
} 
   //6.	Code a function that has 2 parameters. Concatenate them and assign the result to a variable that hasn't been declared beforehand.
   function concatenateStrings(str1, str2) {
    var result = str1 + str2;
    return result;
  }
  
//7.	Code a function that has three parameters. Multiply them and assign them to a variable that hasn't been declared yet.
function multiplyThreeNumbers(num1, num2, num3) {
    var result = num1 * num2 * num3;
    return result;
  }
  
//8.	Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.
function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0; 
    }
  
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    var average = sum / numbers.length;
    return average;
  }
  
  // Example usage with an array of numbers as input:
  var numbersInput = [5, 10, 15, 20, 25];
  var average = calculateAverage(numbersInput);
  console.log("The average is:", average);
  
//9.	Write a JavaScript function that takes two parameters and returns their sum.
function addTwoNumbers(num1, num2) {
    return num1 + num2;
  }
  

//10.	You have to capture the returned value from a function and store it in a variable?
var result = someFunction(); 

//11.	Write a function which tells letter counts of (word).
function countLetters(word) {
    return word.length;
  }
  
//12.	Write a function to set (year) in date object.
function setYear(date, year) {
    date.setFullYear(year);
  }
  
//13.	Write a function which tells the age of a person who Born on (dateOfBirth)
function calculateAge(dateOfBirth) {
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  
//14.	Write a function which tells the presense of (word) in an array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']result should be in true or false
function checkPresence(word, wordArray) {
    return wordArray.includes(word);
  }
  
  var wordArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
  var wordToCheck = 'raza';
  
  var isPresent = checkPresence(wordToCheck, wordArray);
  console.log("Is the word present? " + isPresent);
  
//15.	Write a function which repeat (letter) 10 times.Hint: "abcde" str.repeat(10)
function repeatLetter(letter) {
    return letter.repeat(10);
  }
//16.	write a function which reverse array = ['a','b','c','d','e']Hint: arr.reverse()	
function repeatLetter(letter, times) {
    if (times <= 0) {
      return "";
    }
  
    return letter.repeat(times);
  }
  
  var letterToRepeat = 'a';
  var repeatedString = repeatLetter(letterToRepeat, 10);
  console.log(repeatedString);
  