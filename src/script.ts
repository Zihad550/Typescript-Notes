enum RType {
  SUCCESS,
  FAILURE,
  UNAUTHENTICATED,
  FORBIDDEN,
}
interface APIResponse<T> {
  status: number;
  type: RType;
  data: T;
}
const response1: APIResponse<object> = {
  status: 200,
  type: RType.FAILURE,
  data: {
    name: "Jehad",
    something: 300,
  },
};

const response2: APIResponse<string> = {
  status: 200,
  type: RType.SUCCESS,
  data: "Error",
};

console.log(response1);
console.log(response2);
