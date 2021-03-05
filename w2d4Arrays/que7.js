/**
 * 7. Given an expression array exp, write a program to examine whether the pairs and the orders of
“{“, “}”, “(“, “)”, “[“, “]” are correct in exp. 
Example:
Input: exp = ["(", ")", "[", "{", "}", "]"]
 Output: Balanced
Input: exp = ["[", "(", "]", ")"] 
Output: Not Balanced
 */

("use strict");

const exp = ["(", ")", "[", "{", "}", "]"];
let copy = [];
let length = exp.length;

for(let i = 0; i < length; i++){
 copy[i] = exp.pop();
 
}
console.log(copy);

for ( let j =0; j < exp.length; j++){
    if(exp[j] !== copy[j]){
        return(console.log("Not Balanced"));
    }
    return (console.log("Balanced"));
}

