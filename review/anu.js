/**
 * //Find middle value and check if it is odd or even?
 ("use strict");
 */
  function getMiddle(arr){
    let index = Math.floor(arr.length / 2);
    let middleValue = 0;
    if(arr.length % 2 !== 0){
       middleValue = arr[index];

    } else {
        let average = (arr[index -1] + arr[index]) / 2;
         middleValue = average;
        
    }
    console.log(middleValue);
    return middleValue % 2 === 0;

}
console.log(getMiddle([1,2,3,4,5,7,5]));
 
//sum first and last value of array and check if it is prime ?

 function addCheck(arr){
    let last = arr.length - 1 ;
    let value = arr[0] + arr[last];
    console.log(value);
    if(value === 1 || value ==2) return true;
    for(let i = 2; i < value; i++){
        if(value  % i === 0){
            return false;
        }
    }
    return true;
}

console.log (addCheck([4, 2, 3, 4, 4, 10]));
 
//print array that are in even indices.

function evenIndices(arr){
    let newArray =[];
    for(let i =0; i <arr.length; i++){
        if(i % 2 == 0){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

console.log(evenIndices([0,1,2,3,4,5,6,7]));
 
//Even dominant array is an array that has sum of all even number bigger than the sum of all odd numbers.
//Write a function that tests if an array is even dominated?
function testEven(arr){
    let count1 =0;
    let count2 = 0
    for(let i =0; i<arr.length; i++) {   //can use    for(let n of arr){}
        if(arr[i] % 2=== 0){
            count2 +=1;
        } else {
            count1 +=1;
        }

    }
    return count2>count1;
    
}
 console.log(testEven([2,3,4,5,6,7,8,9,10,3,3,2,4,6]));
 