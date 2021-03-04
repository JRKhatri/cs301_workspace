/*Write a Java program to calculate the factorial value of a given number. E.g., factorial 4 = 4*3*2*1 = 24 */
"use strict";
const prompt = require("prompt-sync")();
let  number = parseInt(prompt("Enter number"));
let factorial = 1;
while(number > 1){
    factorial = factorial * number;
 number--;
}
console.log(factorial);