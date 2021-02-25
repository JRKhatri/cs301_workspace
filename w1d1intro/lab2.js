//write a program that computes volume of a cylinder based on user inputs for radius and 
//height of a cylinder, using formula v=pi * radius *2 hright
const prompt = require("prompt-sync")();
let radius = parseFloat(prompt("Enter radius : "));
let height = parseFloat(prompt ("Enter height : "));
let volume = Math.PI * height * Math.pow(radius, 2);
console.log("The volume of given cylinder is ${volume}");

//write a program that takes x and y coordinates of two points as inputs and computes distance between there 
//two points based on formula 
//const prompt = require("prompt-sync")();
let x1= parseFloat(prompt("Enter X1 coordinate:"));
let y1  = parseFloat(prompt("Enter Y1 coordinate:"));
let x2 = parseFloat(prompt("Enter X2 coordinate:"));
let y2 = parseFloat(prompt("Enter Y2 coordinate:"))
let d =  Math.sqrt((x2-x1)**2 + (y2-y1)**2);
console.log("The distance between two coordinate is ${d}");
