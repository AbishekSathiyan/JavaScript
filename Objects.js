var person={name:"Abishek",age:22,address:"Methalodai"}
//console.log(person)
console.log("Name:",person["name"])
console.log("Age:"+person.age)
console.log("Address:"+person["address"])
console.log("\n")
person["name"]="Abi";
console.log("Name:",person["name"])
console.log("Age:"+person.age)
console.log("Address:"+person["address"])

//delete person["name",age,"address"] - No, it is not possible to remove multiple properties from an object using the delete keyword in one line with the syntax.
console.log(person)
console.log("\nLearning For In Loop")
for(var value in person)   // Value is a Variable for the key & person is the object
{
    console.log(value+" : "+person[value])
}

console.log("Remove a property using delete keyword")
for(var value in person)   // Value is a Variable for the key & person is the object
{
    delete person [value];
    console.log(`Deleted property: ${value}`);
}

console.log("After deleting properties:", person); // person is now empty
console.log("Last key accessed:", value); // 'value' holds the last deleted key

// Array Objects 

// Array is a collection of elements of the same data type stored in contiguous memory locations.
console.log("\nArray Objects")
var students = [
    {
        "name": "Abishek",
        "age": 22,
        "address": "Methalodai"
    },
    {
        "name": "Sandy",
        "age": 18,
        "address": "Ramanathhapuram"
    }
];

console.log(students);

console.log(students[0].name, students[1].address); // Accessing the first element of the array

console.log("Array with Objects\n");

// Printing all student details
for (var count = 0; count < students.length; count++) {
    console.log("\nName: " + students[count].name, "\nAge: " + students[count].age, "\nAddress: " + students[count].address);
}

console.log("Printing Only Names of Students using Array Objects\n");

// Printing only the names of students
for (var count = 0; count < students.length; count++) {
    console.log("Name: " + students[count].name);
    console.log("Age: "+ students[count].age);
    console.log("Address: "+ students[count].address,"\n");
}

// Practice Exercise 1: Create an array of objects with student details and print the details of students

var recipies=[
    {
        name:"vada",
        ingrediants:["Floor,Stove"],
        instructiond:["Turn on the Stove","Fry the Floor"]
    }
]

console.log(recipies)