/*
// Importing the prompt-sync package

const prompt = require('prompt-sync')();

// Use prompt-sync to get input from the user
const a = prompt("Enter the first value: ");
const s = prompt("Enter the second value: ");

// Print the result by concatenating the inputs
console.log(a + s);


*/

const prompt = require('prompt-sync')(); // Importing the prompt-sync package to get input from the user using the prompt() function use all the time to get input from the user

var name=prompt("Enter your name: ");
var age=prompt("Enter your age: ");

console.log("Hello "+name)

console.log("You are "+age+" years old")
