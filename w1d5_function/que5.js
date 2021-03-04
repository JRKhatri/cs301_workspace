/**Write a function to find LCM of any two numbers using the HCF function from previous
question. Write it as a function expression.
a. Now write a program that asks two numbers from the user and displays HCF and LCM of
the two numbers.
Hint: search for relation between HCF and LCM. */
("use strict");
/**
 * 
 * @param {number} nbr1 number for finding hcf
 * @param {number} nbr2 number for finding hcf
 * @return {number}  hcf of two number
 */
let hcf = function (nbr1, nbr2){
    let factor =1;
    for(let i = 1; i <= nbr1 && i <= nbr2; i++){
        if(nbr1 % i === 0 && nbr2 % i === 0){
            factor = i;
            
        }
    }
    console.log(factor);
    return factor;
};

/**
 * 
 * @param {number} nbr1  number for finding LCM
 * @param {number} nbr2  number for finding LCM
 * @return {number}  LCM of two number
 */
let lcm = function(nbr1, nbr2){
    let factor = (nbr1 * nbr2) / hcf(nbr1, nbr2);
    return factor;
};

let prompt = require("prompt-sync")();
let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");

console.log(lcm(num1, num2));