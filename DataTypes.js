/*Data Types in JavaScript

1. Primitive Data Types
 Number
 String
 Boolean
 Null
 Undefined

 2. Non-Primitive Data Types
    Object
    Array
    Function
    Date
    RegExp
    Error
*/

/* Primitive Data Types 
1. Number */

console.info("Number Data Types in JavaScript");
var age = 22;
var percentage = 88.5;
console.log(typeof age);
console.log(typeof percentage);

//2.String;
console.info("String Data Types in JavaScript");
let name = "Abi";
let uname = `Hello String`;
let num = "87";
console.log(typeof num, "-", num);
console.log(typeof uname, "\n", typeof name, "\n", name + " " + uname);

//3.Boolean
console.info("Boolean Data Types in JavaScript");
let test = true;
console.log(typeof test);

//4.Null
let empty = null;
console.info(empty);
console.log(typeof empty); //Object

//5.Undefined
let noValue = undefined;
console.info("No Value: ", noValue);
console.log("Type:", typeof noValue);

/* Non Primitive Data Types 
1.Array */

console.info("Array Data Types in JavaScript");

let arr = ["MongoDb", "ExpressJs", "NodeJs", "ReactJs"];

//console.log(arr);
console.log("Type:", typeof arr);
console.log(arr[0]);
console.log("Length:", arr.length);
console.log("Index Size: ", arr.length - 1);
arr.push("Python");
console.log(arr);
let result = arr.find((item) => item === "Python");

console.log(result);
arr.pop();
console.log(arr);

arr.unshift("From");
console.log(arr);
arr.shift();
console.log(arr);

let arr2 = ["Test"];
arr2.values;
console.log(arr2.concat(arr));
console.log(arr2);

//2.Object;

let vehicle = {
  vehicleType: "Four Wheeler",
  brand: "TATA",
  price: 500000,
  fuelType: "Deisel",
};

console.log(vehicle.vehicleType);
console.log(vehicle);
delete vehicle.fuelType();
try {
  console.log(vehicle.fuelType);
} catch (error) {
  // handle error here
  console.error(error);
}

const car = {
  brand: "Toyota",
  start: function () {
    console.log("Car started");
  },
  stop: function () {
    console.log("Car stopped");
  },
};
car.start(); // Output: Car started
car.stop();
