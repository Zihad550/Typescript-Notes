enum RType {
  SUCCESS,
  FAILURE,
  UNAUTHENTICATED,
  FORBIDDEN,
}
interface APIResponse<T> {
  status: number;
  // think of there are many types of type and you cannot remember it so you use enum
  type: RType;
  data: T;
}
const response1: APIResponse<object> = {
  status: 200,
  type: RType.SUCCESS,
  data: {
    name: "Jehad",
    something: 300,
  },
};

const response2: APIResponse<string> = {
  status: 200,
  type: RType.FAILURE,
  data: "Error",
};
