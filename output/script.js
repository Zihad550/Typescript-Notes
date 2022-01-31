"use strict";
const addId = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addId({
    name: "Jehad",
    age: 40,
    country: "bangladesh",
});
console.log(user.id);
console.log(user.name);
console.log(user.country);
const response1 = {
    status: 200,
    type: "Good",
    data: {
        name: "Jehad",
        something: 300,
    },
};
const response2 = {
    status: 200,
    type: "Great",
    data: "Error",
};
