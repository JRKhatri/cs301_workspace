/*Write JavaScript program to compute the mileage of a vehicle. Your program should allow the user to enter the beginning and 
ending odometer readings and the number of gallons of gas used and should output the mileage in miles per gallon.*/
const prompt = require("prompt-sync")();
let begin_odo = parseFloat(prompt("Enter the begining odometer reading in Miles: "));
let final_odo = parseFloat(prompt("Enter the final odometer reading in Miles: "));
let gas = parseFloat(prompt("Enter the number of gallons of gas used : "));
let total_distance = final_odo - begin_odo;
let mileage = total_distance/ gas;
console.log(`Your mileage is ${mileage} miles per gallon`);
