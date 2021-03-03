/** 5. Write a JavaScript function isReversedPrime, that takes a number as an input and check if the reverse of the input number is prime or not.
Hint: Write two helper functions, one for reversing and another for checking prime and use it in the function isReversedPrime.
e.g., isReversedPime(32) returns true because reverse of 32 which is 23 is prime*/

const prompt = require ("prompt-sync")();
let number = + prompt ("Enter number: ");
function isReversedPrime(num){
    let for_rev = reverse(num);
    checkPrime(for_rev);
    
}
isReversedPrime(number);


function reverse(n){
    
    let reversed ="";
    while(n >0){
    
    reversed += n % 10;
    n = Math.floor(n/10);
}
return Number(reversed);
}



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

