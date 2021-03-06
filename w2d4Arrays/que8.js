/**
 * Write a function that merges two sorted arrays into one single sorted array. Make use of shift and push 
 * array methods.
 */

("use strict");

function singleArray(arr1, arr2){
    let mergedArray =[];
    while(arr1.length > 0 && arr2.length > 0){
        if(arr1[0] < arr2[0]){
            mergedArray.push(arr1.shift())
          
        } else {
            mergedArray.push(arr2.shift())
        }
    }

    if(arr1.length > 0){
       return mergedArray.concat(arr1);
    } else {
       return mergedArray.concat(arr2);
    }
        }
    
console.log(singleArray([1,2,3,4,5,6,7],[0,1,2,3,4,5]));

