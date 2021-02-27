/*write a function named reverseDigits that reverses the digit of an input number value.
now call the function to wiht the digit 123 */
const prompt = require("prompt-sync")();
let digit = parseInt(prompt("Please enter digits: "))
reverseDigits(digit);
function reverseDigits(digit){
    let reverseDigit = "";
    while(digit != 0){
        reverseDigit += digit % 10;

        digit = Math.floor(digit/10);
    }
    console.log(reverseDigit);
}


// function reverseD(n){
//     let reversed = 0;
//     while(n > 0){
//         let lastDigit = n % 10;
//         reversed = reversed * 10 + lastDigit;
//         n = Math.floor (n/10);
//     }
//     console.log(reversed);
// }
// reverseD(0123);