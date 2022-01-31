// tuples

let a = [3, "hello", { p: 1 }];
// by default typescript sets types on a array we can change types or push only three types of data, string, number and object
a[1] = 1; // here on the second opsition we have string but we can set number
//todo: a[0] = true // this will give error because we have three types and it does not fits one of them

// ************* if we need that every element an array will have defined type then we can use tuples

let b: [number, string, object] = [4, "hello", { t: 1 }];
//todo: b[0] = 'string' // you cannot do this because you have set that the first element will be a number type
