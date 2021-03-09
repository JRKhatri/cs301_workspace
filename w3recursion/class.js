/* write recursive and iterative solution to calculate factorial of an integer
*/

function factorial(num){
    if(num === 0) return 1;
    else {
        return num * factorial(num -1);
    }
}


function fact(num){
    let factorial =1;
    for(let i = 1; i <= num; i++){
        factorial *= i;
    }
    return factorial;
}

console.log(factorial(50));
console.log(fact(50));



/*write recursive solution to find Fibonacci(n) based on following definition;
*/
 
function fib(num){
    if(num === 0){
        return 0;
    } else if(num === 1){
        return 1;
    }
    else {
        return  fib(num-2) + fib(num-1);
}

}
console.log(fib(6));


function fibon(num){
    if(num === 0){
        return 0;
    } else if(num === 1){
        return 1;
    }
    else {
        let prev2 = 0;
        let prev1 = 1;
        let result;
        for(let i =2; i<=num; i++){
            result = prev2 + prev1;
            prev2 = prev1;
            prev1 = result;
        }
        return result;
}

}
console.log(fibon(6));

/*write a recursive function to test weather a give string is palindrome or not */

function testPalindrome(s) {
    if (s.length === 0 || s.length === 1)
            return true;
        else {
            if (s[0] === s[s.length - 1])
                    return testPalindrome(s.substr(1, s.length - 2));
    else
                    return false;
    
        }
    }
    console.log(testPalindrome("madam"));


