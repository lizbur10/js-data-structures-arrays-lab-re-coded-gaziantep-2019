// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  newArray = [...drivers, name];
  return newArray;
}

function prependDriver(name) {
  newArray = [name, ...drivers];
  return newArray;
}

function removeLastDriver() {
  drivers.splice(-1);
}