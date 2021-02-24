const PromptSync = require("prompt-sync");

 /*Write a JavaScript program that ask a user for a volume in quarts then converts 
 that value in liters. 1 Liter is equal to 1.05668821 US quarts. To convert liters 
 to quarts, multiply the liter value by 1.05668821.*/
const prompt = require("prompt-sync")();
let volume = parseFloat(prompt("Enter the volume in quarts: "));
let vol_ltr = volume / 1.057;
console.log(`${volume} quarts is ${vol_ltr} liters`);
