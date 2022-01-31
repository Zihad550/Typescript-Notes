import { Player } from "./classes/Player.js";
function drawRectangle(options) {
    let width = options.width;
    let length = options.length;
}
let threeDOptions = {
    width: 30,
    length: 30,
    height: 40,
};
drawRectangle(threeDOptions);
const rabbi = new Player("Rabbi", 20, "Bangladesh");
let sakib;
sakib = new Player("sakib", 25, "Bandladesh");
console.log(rabbi);
console.log(sakib);
const players = [];
players.push(rabbi);
players.push(sakib);
console.log(players);
