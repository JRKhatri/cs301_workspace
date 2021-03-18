function isPrimeFactor(num){
    if(num <=0){
        return 0;
    } 
    let result = [];

        for(let i =2; i<=num; i++){
            if(num % i !== 0){
               continue;
               } else {
                if (isPrime(i)){
                    result.push(i);
               }
               }
            }
           res = result[result.length-1];
            return res;
        }
        
    

function isPrime(num){
    for(i =2; i<num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrimeFactor(50))


function reverseStr(text){
    let arr1 = text.split(" ");
    let finalStr = "";

    for(let i =arr1.length-1; i>=0; i--){
        str1 = arr1[i];
        arr2 = str1.split("");
        arr2.reverse();
        finalStr += arr2.join("") + " "

    }
    return finalStr;
}

console.log(reverseStr("hello how"));