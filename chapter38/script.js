//1.	Write a JavaScript function that demonstrates the usage of a local variable.
function demoLocalVariable() {
    var x = 10;
    
    console.log("Inside the function: x =", x);
  }
  
  demoLocalVariable();
  
  // Attempting to access 'x' outside the function will result in an error
  // console.log("Outside the function: x =", x); // This would cause an error
  
//2.	How can you access a global variable inside a function in JavaScript?
var globalVariable = "I am a global variable";

function accessGlobalVariable() {
  console.log("Inside the function: " + globalVariable);
}

accessGlobalVariable();

console.log("Outside the function: " + globalVariable);
