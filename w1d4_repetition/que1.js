/*A prime number (or a prime) is a natural number greater than 1 that is not a product of two smaller natural numbers. 
In other words, it is a number that is only perfectly divisible by number 1 and itself. Write a JavaScript program to test weather
 user input is a prime number or not.*/


const prompt = require("prompt-sync")();
let prime = parseInt(prompt("Enter the Integer: "));
let i = 2;
while(i <= prime ){
     if(prime === 2){
        console.log("Integer " + prime + " is  Prime Number")
        break;
     }
     else if(prime % i === 0 ){
        console.log("Integer " + prime + " is not Prime Number")
        break;

    } else if( i === prime -1){
        console.log("Integer " + prime + " is Prime Number");
        break;
    }
    i++;
}
