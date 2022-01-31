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

// *************** function signature
// it is telling the developer that if you want to write a function with addFunc then you have to follow this rules.
// rules: return will be void
let sigFunc: () => void;
let addFunc: (n1: number, n2: number) => number;
let calculation: (n1: number, n2: number, z: string) => number;
// more complex
let userDetails: (
  id: number | string,
  userInfo: {
    name: string;
    age: number;
  }
) => void;

addFunc = (n1: number, n2: number): number => {
  return n1 + n2;
};

calculation = (a: number, b: number, c: string) => {
  if (c === "add") {
    return a + b;
  } else {
    return a - b;
  }
};

console.log(calculation(5, 6, "minus"));

userDetails = (a: number | string, b: { name: string; age: number }) => {
  return a;
};
