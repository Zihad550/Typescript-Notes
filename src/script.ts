import { Player } from "./classes/Player.js";
import { IsPlayer } from "./interfaces/IsPlayer.js";

//************* using interface on Functions */

interface RectangleOptions {
  width: number;
  length: number;
}
function drawRectangle(options: RectangleOptions) {
  let width = options.width;
  let length = options.length;
}

//! drawRectangle({ width: 30, length: 30, height: 30 });

// if you pass and object then and pass reference then it will not give error
let threeDOptions = {
  width: 30,
  length: 30,
  height: 40,
};

drawRectangle(threeDOptions);

// ************ player class is using IsPlayer interface and here sakib object is also using the IsPlayer interface
const rabbi = new Player("Rabbi", 20, "Bangladesh");
let sakib: IsPlayer;
sakib = new Player("sakib", 25, "Bandladesh");

console.log(rabbi);
console.log(sakib);

// *************** using interface on array
const players: IsPlayer[] = [];

players.push(rabbi);
players.push(sakib);
console.log(players);
