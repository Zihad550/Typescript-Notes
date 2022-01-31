"use strict";
let myFunc;
myFunc = () => {
    return 1;
};
const anotherFunc = (a, b, c, d = 18) => {
    console.log(`${a} is ${b} years old `);
    return a;
};
anotherFunc("Jehad", 18);
let sigFunc;
let addFunc;
let calculation;
addFunc = (n1, n2) => {
    return n1 + n2;
};
calculation = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(5, 6, "minus"));
