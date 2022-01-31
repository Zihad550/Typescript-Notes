// explicitly declaring types of variable
let a: string;
let b: number;
// declare multiple types
let e: string | number;
e = "n";
e = 2;

//**** */ explicitly declaring types of array;
const c: string[] = [];
// you cannot push number
//todo: c.push(2)
// declare multiple types of array
// you have to put them inside a first brackets
// * it is called union type
let d: (string | number)[] = [];
d.push("n");
d.push(1);

//**** */ explicitly declaring types of object
let f: object;
f = {
  age: 28,
};
// it won't accept string number or boolean but it will accept array. Because array are also object in js
// ** but for the below object you cannot add this
f = [1, 2, 3, 4];
// you can declare schema
let g: {
  name: string;
  age: number;
  programmer: boolean;
};
g = {
  name: "jehad",
  age: 18,
  programmer: true,
};
