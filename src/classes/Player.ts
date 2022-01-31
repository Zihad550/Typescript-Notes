import { IsPlayer } from "../interfaces/IsPlayer.js";
// ******* using interface on class
export class Player implements IsPlayer {
  // only public values of class are available for interface
  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {}
  // to make a private property you can store it on a method and make it private
  getProperty() {
    return this.age;
  }

  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}
