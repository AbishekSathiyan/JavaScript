/*
// Description: Learrning Array
// Used in: Array.Javascript
// Version: 1.0
// Created by: Abishek
// Created on: 27/12/2024
Learn about arrays in JavaScript
*/
// Create an array
/*
var a=[1,2,3,4,5];
console.log(a); // Print the array
console.log(a[0]); // Print the first element of the array
a[2]=4; // Change the third element of the array
console.log(a); // Print the array


// Push() & Pop() methods

var a=[1,2,3,4,5];
console.log(a); // Print the array
a.push(6); // Add an element to the end of the array
console.log(a); // Print the array
a.pop(); // Remove the last element of the array
console.log(a); // Print the array


// Slice() method

var a=[1,2,3,4,5];
console.log(a); // Print the array
var b=a.slice(1,3); // Extract elements from the array from index 1 to 3 
console.log(b); // Print the extracted elements
console.log(a); // Print the original array
b=a.slice(2); // Extract elements from the array from value of index 0 to index 1 of the array
console.log(b); // Print the extracted elements


console.log("\n"); // Print an empty line
// Splice() method Remove elements from the array

a=[1,2,3,4,5];
console.log(a); // Print the array
a=a.splice(2,1)
console.log(b); // Print the Spliced array
console.log(a); // Print the original array

console.log("\n"); // Print an empty line
// Splice() method Adding elements to the array

var a=[1,2,3,4,5];
console.log(a); // Print the array
// Add an element to the array
a.splice(0,0,6);  // Replace the element at index 0 with 6
a.splice(2,0,7); // Replace the element at index 2 with 7
console.log(a); // Print the array


//indexOf() method
var a=[1,2,3,4,5];
console.log(a); // Print the array
console.log("The Value of index of 3 is "+a.indexOf(3)); // Print the index of the element 3

console.log(a.includes(3)); // returns true if the element is present in the array
console.log(a.includes(6)); // returns false if the element is not present in the array

console.log("\n"); // Print an empty line

//Length of the array
var a=[1,2,3,4,5];  
console.log(a); // Print the array
console.log("The length of the array is "+a.length); // Print the length of the array

//Constant Array
console.log("Constant Array")
//const a=[1,2,3,4,5];
console.log(a); // Print the array
a[4]=13;
console.log(a); // Print the array

//a=[876,984,449,47] // Declare an array in constant mode It will provide a error
console.log(a)

// Array with Loops

console.log("Array with Loops");
var a=[1,2,3,4,5,8];
for(var i=0;i<a.length;i++)
{
    console.log(a[i]); // Print the elements of the array
}
*/

// Practice Problem 1 using Array print Even & Odd numbers from 1 to 10 from Array

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (count = 0; count < 10; count = count + 1) {
    if (a[count] % 2 == 0) {
    console.log(a[count]+" is Even Number");
}
else{
    console.log(a[count]+" is Odd Number");
}
}