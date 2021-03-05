/* write  a function that check if an array is palindrome by using a stack;  do not modify the original array*/

function isPalindrome (arr){
    let copy = [];
    for(let a of arr){
        copy.push(a);
 
    }
    for (let i = 0; i < arr.length; i++){
        if(arr.shift() !== copy.pop()){
            return false;
        }
    }
    return true;
}

console.log(isPalindrome ([1,2,5,2,1]))