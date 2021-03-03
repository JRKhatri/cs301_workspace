/**Write a function to find LCM of any two numbers using the HCF function from previous
question. Write it as a function expression.
a. Now write a program that asks two numbers from the user and displays HCF and LCM of
the two numbers.
Hint: search for relation between HCF and LCM. */

let hcf = function (n1,n2){
    let h_factor =1;
    for(let i =1; i<=n1 && i<=n2; i++){
        if(n1%i === 0 && n2%i === 0){
            h_factor = i;
            
        }
    }
    console.log(h_factor);
    return h_factor;
}

let lcm = function(n1,n2){
    let l_factor = (n1 * n2)/hcf(n1,n2);
    return l_factor;
}


let prompt = require("prompt-sync")();
let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");

console.log(lcm(num1,num2));