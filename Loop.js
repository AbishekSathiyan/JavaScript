// Learn about loops in JavaScript

for (let i = 1; i <= 5; i++) {
    console.log("Star"); // Print the word "Star" 5 times
}

// Question 1 Practice time - Loop through the numbers from 1 to 10 and print them

for (i = 1; i <= 10; i++) {
    console.log(i);
} // Print the numbers from 1 to 10 
console.log("\n"); // Print an empty line
// Question 2 Practice time - Loop through the numbers from 10 to 1 and print them


for (i = 10; i >= 1; i--) {
    console.log(i);
} // Print the numbers from 10 to 1

console.log("\n"); // Print an empty line

// Question 3 Practice time - Loop through the numbers from 1 to 10 and print the 2 tables of each number

for (i = 1; i <= 10; i++) {
    console.log("2 * " + i + " = " + 2 * i);
} // Print the 2 tables of each number from 1 to 10


console.log("\n"); // Print an empty line
// Question 4 While Loop
var a=3
var b=3
while(a>b)
{
    console.log("a is greater than b")
    a--;
}
console.log("b is greater than a")

// Question 5 Do-While Loop

console.log(""); // Print an empty line

var a=5
var b=3
do{
    console.log("a is greater than b:"+a)
    a--;
}
while(a>b)