/**
 * 6. A porcupine number is a prime number whose last digit is 9 and the next prime number that follows it 
 * also ends with the digit 9. For example, 139 is a porcupine number because:
a. it is a prime
b. it ends in a 9
c. The next prime number after it is 149 which also ends in 9.
Write a method named findPorcupineNumber which takes an integer argument n and returns the first 
porcupine number that is greater than n. So findPorcupineNumber(0) would return 139 (because 139 happens 
to be the first porcupine number) and so would findPorcupineNumber(138). But findPorcupineNumber(139) 
would return 409 which is the second porcupine number.
 */


   
function isPrime(n){
        let count= 0;
        if(n==2){
            return true;
        }
        
        for(let k=3; k < n; k++){
            if(n % k ==0){
            
                return false;
            }

        }
        console.log(n)
        return true;
    }


function pNumber(int){
    int++;
    let pre = 0;
    let flag = 0

    for(let i = int; i < int+1; i++){

        if(isPrime(int)){
           
            if((int - 9) % 10 === 0){
               flag += 1;

                if(flag < 2){
                    pre = int;
                } else if(flag === 2){
                    console.log("Answer");
                    return pre;
                } else {
                    flag = 0;
                }
            } else {
                pre = 0;
                flag = 0;
            }
        } 
       int++; 
    }
}
    console.log(pNumber(919))