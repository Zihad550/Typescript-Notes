// declaring function
let myFunc: Function;
myFunc = () => {
  return 1;
};

// here c is a optional parameter
// d has assigned default value
const anotherFunc = (a: string, b: number, c?: string, d: number = 18) => {
  console.log(`${a} is ${b} years old `);
};
// here jehad and 18 are arguments
anotherFunc("Jehad", 18);

// ! you cannot redeclare it with string, array or object
