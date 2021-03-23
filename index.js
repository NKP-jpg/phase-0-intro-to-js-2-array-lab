const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  name = cats.push("Ralph");
}
function destructivelyPrependCat(name) {
  name = cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
  cats.pop();
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}
let copyCats = [];
function appendCat(name) {
  name = [...cats.push("Broom")];
  copyCats = [...cats.slice()];
}