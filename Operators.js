/*
Operators
1.Arithmatic Operators +,-,*,/,%,**,++,--
2.Assignment Operators 
3.Relational || Comparitive Operators
4.Logical Operator
*/

// 1.Arithmatic Operators

console.log("Arithmatic Operators");
console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(10 / 2);
console.log(10 % 3);
console.log(2 ** 3);

//Increament ++ ,Decreament Operators --
console.log("Increament and Decreament Operators");
let a = 2;
console.log(++a);
console.log(a++);
{
  console.log(a);
  a++;
}

console.log(a);
{
  let x = 5;
  let y = 2;
  let result = x + y * 2;

  console.log("Test Result:", result);
}
/*
1. Post Increament
  * Substitute
  * Operation
  * Increament
*/
{
  let num = 10;
  let num1 = num++;
  console.log(num);
  console.log(num1);
}
let num2 = 76;
console.log(++num2);
/*result = ++num2;
console.log(num2);
*/
console.log("---");
let num = 10;
result = num--;
console.log(num);
console.log(result);

let x = 5;
let result1 = x++;
console.log(result1);

/* 2 Assignment Operator */ {
  console.log("Assignment Operator");
  let a = 20;
  a += 30;
  console.log(a);
  a -= 10;
  console.log(a);
  a *= 2;
  console.log(a);
  a /= 2;
  console.log(a);
  a %= 3;
  console.log(a);
  let b = 2;
  b **= 3;
  console.log(b);
}

// 3.Relational Operators
/*
< Lessthan 5<2 False
> Greaterthan  5>2 True
<= Lessthan or Equal 5<=2 False
>= Greaterthan or Equal 5>=2 True
== Equalto 5==2 False
!= Not Equalto 5!=2 True
=== Equals & Same Type 2==="2"  False
2===2 True
!== Not Equals & Same Type 1!=="2" True 2 !== 2 False
*/

console.log("Relational Operators");

