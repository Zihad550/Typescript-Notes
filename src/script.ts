// here ts has autometically setted the type of first name variable
let firstName = "jehad";
//! you cannot set this value number
// firstName = 18;

// but you do this
let lastName;
lastName = "Hussain";
lastName = 18;
// now here is no error because it only sets the type automatically when you declaire and set the variable value at one time

// function
function add(n1: number, n2: number) {
  return n1 + n2;
}

console.log(add(2, 2));

// object and array
let fruits = ["apple", "banana", "orange"];
// you cannot push number because fruits is string array
fruits.push("mango");
// fruits.push(34);

// autometically sets type
const mixed = ["person", 18, false];
mixed.push(true);
mixed.push("name");
mixed.push(15);

// for object
const person = {
  name: "jehad",
  age: 18,
  isStudent: true,
};
// because it sets that the current person object is its schema you cannot add else property that does not exists on person object

//todo: person.old = 18;
// you can do this
person.name = "Rabbi";
// but if you try to do this
//todo: person.name = 18;
// it will give you error
// because it automatically sets the type if you don't tell it
// it is also true for other element
