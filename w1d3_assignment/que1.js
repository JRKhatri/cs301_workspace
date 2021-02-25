/*1. Write a program that helps a user choose the correct footwear for the day’s weather based on the table shown below. 
If the user enters any other weather type, your program should output “sneakers”*/

const prompt = require("prompt-sync")();
let weather = prompt("Enter weather type: ");
switch(weather){
case "hot" : 
    console.log("Wear sandals");
    break;
case "rain" :
    console.log("Wear galoshes");
    break;
case "snow": 
    console.log("Wear boots");
    break;
default :
    console.log ("Wear sneakers")
}
