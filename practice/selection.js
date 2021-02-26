const prompt = require("prompt-sync")();
let age = prompt("Enter age: ");
console.log(age);
let message = (age < 5)? "baby": 
(age < 13) ? "child" :
(age < 20) ? "teen" :
(age < 40) ? " adult" : "old";

console.log(message);