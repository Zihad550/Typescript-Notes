import { Player } from "./classes/Player.js";
// todo: if you give wring type value then it will give error
const tamim = new Player("Tamim", 18, "Bangladesh");
const sakib = new Player("Sakib", 20, "Bangladesh");

// todo: we can use the class as an type
const players: Player[] = [];
// ! players.push('sakib')  you cannot do this
players.push(sakib);
console.log(players);

tamim.name = "Mushfiq";
console.log(tamim.name);

class Person {
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

Jehad.detail();
console.log(Jehad);
