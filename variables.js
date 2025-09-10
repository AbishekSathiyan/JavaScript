var age; //declaration
age = 22; //initialization, assignment
var age = 23; //re-declaration
age = 18; //re-initialize or assignment
console.log(age);

let newAge = 25; //declaration, initialization
console.log(newAge);

{
  const test = 200;
  console.log(test);
  try {
    test = 300;
    console.log(test);
  } catch (error) {
    console.log(error.message, " - Cannot re-assign a constant variable");
  }
}

/*
{
  test = 300;
  console.log(test);
}

const test = 300; //error, can't re-assign
console.log(test);
*/