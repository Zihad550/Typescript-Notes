class Player {
  name: string;
  age: number;
  country: string;
  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}

// todo: if you give wring type value then it will give error
const tamim = new Player("Tamim", 18, "Bangladesh");
const sakib = new Player("Sakib", 20, "Bangladesh");

// todo: we can use the class as an type
const players: Player[] = [];
// ! players.push('sakib')  you cannot do this
players.push(sakib);
console.log(players);

// ************** access modifiers
// we can access the created object properties and also modify them
tamim.name = "Mushfiq";
console.log(tamim.name);
// todo: to stop this we have to use access modifiers
// by default everything are public

class Person {
  // * all of them are by default public you can access them outside this class and also modify them outside this class
  /*  public name: string;
  public age: number;
  public country: string;
  public gender: string; */
  // todo: you can prevent them by making them private
  /* private name: string;
  private age: number;
  private country: string;
  private gender: string; */

  // todo: you can also make them readonly by making it it will only be accessible but you cannot modify them
  /* readonly name: string;
  readonly age: number;
  readonly country: string;
  readonly gender: string; */

  // * here you are first initializing them then defining them inside constructor
  // you can do this in a short way
  /* readonly name: string;
  readonly age: number;
  readonly country: string;
  readonly gender: string;

  constructor(name: string, age: number, country: string, gender: string) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.gender = gender;
  } */

  // todo: here is the short way
  // * it is only writable when you have declared your access modifiers
  constructor(
    private name: string,
    public age: number,
    readonly country: string,
    public gender: string
  ) {}

  detail() {
    console.log(
      `${this.name} is from ${this.country}. ${
        this.gender === "Male" ? "Boy" : "Girl"
      }`
    );
  }
}

const Jehad = new Person("Jehad", 18, "Bangladesh", "Male");
// here it will tell that it is private
// console.log(Jehad.name);
Jehad.detail();
