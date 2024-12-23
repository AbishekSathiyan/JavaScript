/*
 let a = 22;
 let s = 13;
 console.log("Hello World");


var a=22 // global Scope variable 
var s=13

var as=a+s
console.log(as)
*/

/*
function a()
{
 var s=10 // local variable Function Scope var keyword
 console.log(s)
}
{
    let b=20 // local variable Block Scope let keyword
    console.log(b)
}
a()
*/

const a=4 // global Scope variable  const keyword  not change value
// var a=22  error a is already defined because a is a const keyword
const s=10
console.log(a)
console.log(s)
//console.log(b) // error b is not defined because b is a let keyword local variable of block
/* console.log(s) /* s is not defined because s is a var keyword local variable of function a() */