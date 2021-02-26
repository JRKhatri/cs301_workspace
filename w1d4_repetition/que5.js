/*Write a JavaScript program to compute sum of all the digits in a given integer number.
input 123   output = 6; input 102    output 3; input 8    output 8 */

const prompt = require("prompt-sync")();
let input = parseInt(prompt("Enter digits: "));
let sum = 0;
while(input !=0){
    sum += input % 10;
    input /=  10;
}
console.log(Math.floor(sum));