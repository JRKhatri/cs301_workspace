/*1. checkPrime
a. Write a function named checkPrime that accepts a parameter and returns true if the
argument is a prime number otherwise returns false.
b. Now write a program that prompts user to input a number and calls the function
checkPrime to see if the entered number is a prime number or not. */

function checkPrime(num){
    if(num === 2){
        console.log("Prime");
        return;
    } else if (num>2){
        for(let i =2; i<num; i++){
            if(num % i === 0){
                console.log("Not Prime");
                return ;
            }

        }
    }
    console.log("Prime");
    return;
}
const prompt = require("prompt-sync")();
let number = parseInt(prompt("Please enter a positive number: "));
checkPrime(number);
