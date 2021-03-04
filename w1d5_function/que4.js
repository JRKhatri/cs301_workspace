/**Write a function to compute HCF of two numbers. Write it as a function expression.
 */
("use strict");
/**
 * 
 * @param {number} num1 number for finding HCF
 * @param {number} num2 number for finding HCF
 * @return {number} HCF of two number
 */
 let hcf = function (num1, num2){
     let factor =1 ;
     for(let i = 1; i <= num1 && i <= num2; i++){
         if(num1%i === 0 && num2 % i === 0){
             factor = i;
             
         }
     }
     return factor;
 };
 console.log(hcf(5, 12));
