/*Write a JavaScript program that asks a user for a distance in kilometers and then
 convert that value in miles.*/
 const prompt = require("prompt-sync")();
 let dist_km= parseFloat(prompt("Enter distance Kilometer: "));
 let dist_miles = (dist_km / 1.609);
 console.log(`${dist_km} kilometer is ${dist_miles} miles`);
 

