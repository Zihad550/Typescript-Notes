// you can declare common types on the top so you don't have to write them again and again
type stringOrNum = string | number;
type userType = { name: string; age: number };

const userDetails = (id: stringOrNum, user: userType) => {
  console.log(`user id is ${id}, name is ${user.name}, and age is ${user.age}`);
};

const sayHello = (user: userType) => {
  console.log(`hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};
