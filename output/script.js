"use strict";
const userDetails = (id, user) => {
    console.log(`user id is ${id}, name is ${user.name}, and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};
