/*Write a JavaScript program to check whether a number is Perfect number or not?
 For example: 6 is the first perfect number
  Sum of its proper divisors = 1 + 2 + 3 = 6.
 Hence 6 is a perfect number.
*/
let prompt = require("prompt-sync")();
let input = parseInt(prompt("Enter Number"));
let sum = 0;
let i = 1;
while(i< input){
    if(input % i === 0){
        sum = sum + i;
    }
    i++;
}
if(input === sum){
    console.log("Perfect numner");
} else {
    console.log("Not Perfect")
}