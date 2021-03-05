/**
 * 1. Write a function addend(arr) that accepts an array of numbers as parameters and returns the sum of 
 * first and last elements of the array.
 */
 
 ("use strict");
 let arr1 = [1,2,3,4,23];
 let arr2= [1,2,3,4,23];
 let arr3 = [1,2,3,4,5];
 /**
  * 
  * @param {Object} arr1 array to be tested for equal
  * @param {Object} arr2 array to be tested for equal
  * @returns {Boolean};
  */
  function isArrayEqual(arr1, arr2){

    for(let i = 0; i < arr1.length; i++){
   
        if(arr1[i] !== arr2[i]) {
            return false;
        }  
        }
        return true;
        
    }
    isArrayEqual(arr1, arr2);
    isArrayEqual(arr1, arr3);

 /**
  * 
  * @param {Object} arr array of numbers
  * @returns {number} sum of first and last element of array
  */
 function addends(arr){
     let last = arr.length - 1 ;
     return arr[0] + arr[last];
 }

 addends([1, 2, 3, 4, 4]);

 /**
  * 
  * @param {Object} arr array of numbers
  * @returns {number} value of the middle element in an array
  */
  function getMiddle(arr){
    let index = Math.floor(arr.length / 2);
    if(arr.length % 2 !== 0){
       return arr[index];

    } else {
        let average = (arr[index -1] + arr[index]) / 2;
        return average;
        
    }

}
getMiddle([1,2,3,4,5,7]);







    module.exports= {isArrayEqual, addends, getMiddle};

