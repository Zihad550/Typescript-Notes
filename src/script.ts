// ****************** Using generic on function *
/* todo:
const addId = (obj: object) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user = addId({
  name: "Jehad",
  age: 40,
  country: "bangladesh",
});
 */
//* we have passes name age and country but we can access only id
// console.log(user.id);
//* we can get the value but it is not getting the type for this
/* 
console.log(user.name); 
console.log(user.country); 
*/

// ** to solve this
// here you can use anything inside <> but it is convension is using <T> inside
// it is used to capture all the types what users is giving

// here is also a problem you can pass any value.
// to solve this
const addId = <
  T extends {
    name: string;
    age: number;
  }
>(
  obj: T
) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user = addId({
  name: "Jehad",
  age: 40,
  country: "bangladesh",
});
console.log(user.id);
console.log(user.name);
console.log(user.country);

//************** Using Generic on interface */
// you can actually dynamically get the type and set it
interface APIResponse<T> {
  status: number;
  type: string;
  data: T;
}
const response1: APIResponse<object> = {
  status: 200,
  type: "Good",
  data: {
    name: "Jehad",
    something: 300,
  },
};

const response2: APIResponse<string> = {
  status: 200,
  type: "Great",
  data: "Error",
};
