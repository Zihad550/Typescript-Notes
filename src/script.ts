// declaring function
let myFunc: Function;
myFunc = () => {
  return 1;
};

// here c is a optional parameter
// d has assigned default value
// todo: we can tell the return type after all the parameters
const anotherFunc = (
  a: string,
  b: number,
  c?: string,
  d: number = 18
  // return type = string
): string => {
  console.log(`${a} is ${b} years old `);
  //** by default functions in Ts returns void */
  return a;
};
// here jehad and 18 are arguments
anotherFunc("Jehad", 18);

// ! you cannot redeclare it with string, array or object
