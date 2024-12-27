/*
function greet()
{
    console.log("Welcome to AS Home")
}

greet()

practice question 1

var a=22
var s=13

function add()
{
    console.log(a+s)
}
add()


// Practice Question 2

var f_actor="Vijay"
var f_player="Dhoni"
var f_song="Adi Penne"

function favorite(){
    console.log(f_actor + " is my favorite actor") 
    console.log(f_player + " is my favorite player")
    console.log(f_song + " is my favorite song")
}

favorite()

//Parameters
// Practice Question 3 using function and Parameters

function add(a,s)
{
    console.log(a+s)
}
add(22,13)

// Practice Question 4 using function and Parameters

function area(length,breadth)
{
    console.log("Area of Rectangle is:"+length*breadth)
}
area(5,8)

*/

// Return Statement in Function Practice Questions
/*
function myname()
{
    return "as"
}

var names=myname()
console.log(names)
*/

// Practice Question 2 using function and Return Statement
/*
function add(a,s)
{
    return a+s
}
var sum=add(22,13)
console.log(sum)
var sum1=add(4,10)
console.log(sum1)
*/

// Practice Question 3 using function and Return Statement, Parameters and If-Else Statement

function oddeven(num) {
  if (num==0){
    console.log("The number is Zero");
  }
  else if (num%2==0) {
    console.log("The number is Even");
  }
    else {
        console.log("The number is Odd");
    }
}

// Example call with two numbers
oddeven(22);
oddeven(13);
oddeven(0);


// Practice Question 4 using charat function
console.log("Abishek".charAt(3));

// Practice Question 5 using charat function

function issuperhero(name)
{
    if(name.charAt(0)=="S")
    {
        console.log(name+" is a Superhero")
    }
    else
    {
        console.log(name+" is not a Superhero")
    }
}

issuperhero("Spiderman")
issuperhero("Batman")