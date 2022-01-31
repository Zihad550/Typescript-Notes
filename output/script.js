"use strict";
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const tamim = new Player("Tamim", 18, "Bangladesh");
const sakib = new Player("Sakib", 20, "Bangladesh");
const players = [];
players.push(sakib);
console.log(players);
tamim.name = "Mushfiq";
console.log(tamim.name);
class Person {
    constructor(name, age, country, gender) {
        this.name = name;
        this.age = age;
        this.country = country;
        this.gender = gender;
    }
    detail() {
        console.log(`${this.name} is from ${this.country}. ${this.gender === "Male" ? "Boy" : "Girl"}`);
    }
}
const Jehad = new Person("Jehad", 18, "Bangladesh", "Male");
Jehad.detail();
