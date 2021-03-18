/**Write a JavaScript function isSumOfPrimesEven that takes an array of positive integers as 
 * an argument and returns true if the sum of all the prime elements in the given array is even 
 * otherwise returns false. If the array is empty or if the array does not contain any prime element 
 * it should return false.
 * 
Input
Output
[1,2,3,4,5,6]  true
[] false
[1,6,9,10]   false
[1,2,2,3,9]  false
 */

function isPrime(n){
    if(n==0 || n==1){
        return false;
    }
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }
        return true;
    }


    function isSumOfPrimeEven(arr){
        if(arr.length === 0){
            return false;
        }
        let primeSum = 0;

        for(let ele of arr){
            if(isPrime(ele)){
                primeSum += ele;
            }
        }
        console.log(primeSum); //return primeSum %2 ===0;
        if(primeSum ===0){                  
            return false;
        } else if (primeSum % 2 === 0){
            return true;
        } else{ 
            return false;
        }
        

    }

console.log(isSumOfPrimeEven([1,2,3,4,5,6,9]))
console.log(isSumOfPrimeEven([]))
console.log(isSumOfPrimeEven([1,6,9,10]))
//console.log(isSumOfPrimeEven([1,2,3,4,5,6]))
console.log(isSumOfPrimeEven([1,2,2,3,9]))


/**
 * An array is called a perfectly odd array if every element at the odd indices of the array is
 *  also odd. Write a function named isPerfectlyOdd that takes an array of integers as a parameter 
 * and checks whether it is perfectly odd. Return false if the array is an empty array.
 *  [] false
 [2,3,4,5,7,8]
 false 
 [3,9,9,5,5,7,9]
 true
 */

 function isPerfectlyOdd(arr){
     if(arr.length === 0){
         return false;
     } 
for(let i =1; i<arr.length; i +=2){
    console.log(i);
         if(arr[i] % 2 === 0){
          //   console.log(arr[i]);
             return false;
     }

}
return true;
 }
console.log("::::::");
 console.log(isPerfectlyOdd([]));
 console.log(isPerfectlyOdd([2,3,4,5,7,8]));
 console.log(isPerfectlyOdd([3,9,9,5,5,7,9,3,13,11]));



 /**
  * Write a function that given an array of integers returns the sum of elements at the prime indices. 
  * For e.g. for an array [1,5,6,7,8,3] result would be a sum of 6+7+3=16 which are values at the 
  * prime indices of the array.

  */

 function sumOfPrimeIndices(arr){
     let sumPrime = 0;
     for(let i = 0 ; i< arr.length; i++){
         if(isPrime(i)){
             sumPrime += arr[i];
         }

     }
     return sumPrime;

 }

 console.log(sumOfPrimeIndices([1,5,6,7,8,3]))


 /**
  * Write a function that takes a string parameter and returns the middle character of the string.
  *  If string is of even length then function should return the middle two characters.
  */
 function returnMidChar(string){
     let length = string.length;
     let char= "";
     if(length % 2 !== 0){
         char = string.charAt(Math.ceil(length/2)-1) // str[Math.floor(str.length/2)]
     } else {
         char = string.charAt((length/2) -1)+ string.charAt(length/2);
     }
     return char;
 }

 console.log(returnMidChar("abcdefg"))

 
 /**
  * Write a function isSumEqual that takes two array parameters and returns true if the sum of elements in 
  * both arrays are equal.
  */

 function isSumEqual(arr1,arr2){
     let sum1 =0;
     let sum2 =0;

     for(let ele1 of arr1){
         sum1 += ele1;
     }
     for(let ele2 of arr2){
         sum2 += ele2;
     }
     return sum1 === sum2;
 }
 console.log(isSumEqual([1,2,3,4], [1,2,3,4]))
 console.log(isSumEqual([1,2,3], [1,2,3,4]))



 function checkArray(arr){
     if(arr[0] !==1 || arr[arr.length-1] !== 1){
         return false;
     } else {
         for(let i = 1; i < arr.length-1; i++){
             if(arr[i]!== 2){
                 return false;
             } 

         }
         
     }
     return true;
    
 }

         console.log(checkArray([1,2,2,2,1])); //t
         console.log(checkArray([1,2,2,2,3]));//f
         console.log(checkArray([3,2,2,2,1]));//f
         console.log(checkArray([1,2,2,3,2,2,1]));//f
         console.log(checkArray([3,5,3,4,3]));//f
     
 


         function getDistinctElements(arr){
             arr.sort();
             let distinctArr =[];
             distinctArr.push[arr[0]]
             for(let i = 1; i<arr.length; i++){
                 if(arr[i] !== arr[i-1])
                 distinctArr.push[arr[i]]
             }
         }


         let obj1 ={name:"jyoti", age : 20};
         let obj2 ={name:"hari", age : 20};

         function aveAge(ob1, ob2){
             let char = ob1.name.substring(0,1) + ob2.name.substring(0,1)
             return char;
         }
         console.log(aveAge(obj1,obj2));



let arx = ["jyoti khatri", "mohan acharya", "hari lal"] // J.K, M.A, H.L

function initial(arr){
    if(arr.length ===0){
        return "";
    }
    let char = ",";
    let name = arr.shift();
    let space = name.indexOf(" ");
    let char1 = name.charAt(0);
    let char2 = name.charAt(space +1);
    char =  char1.toUpperCase() + "."+  char2.toUpperCase() + char+initial(arr)  ;
    return char;

}

console.log(initial(arx))

// console.log(arx.pop())
// let strn ="jyoti kahtri and raj";
// let rnd = strn.split(" ");
//       console.log(strn.split(" "));
//     console.log(rnd);
//     console.log(rnd.join(" ,"))
             

         