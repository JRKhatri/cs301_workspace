/**
 * Write a function, isArrayEqual, that returns true if two arrays have === elements, else returns false.
 */

 ("use strict");
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

 let arr1 = [1,2,3,4,23];
 let arr2= [1,2,3,4,23];
 console.log(isArrayEqual(arr1, arr2));
