/**
 * 1. Write a function addend(arr) that accepts an array of numbers as parameters and returns the sum of 
 * first and last elements of the array.
 */

 ("use strict");
 /**
  * 
  * @param {Object} arr array of numbers
  * @returns {number} sum of first and last element of array
  */
 function addend(arr){
     let last = arr.length - 1 ;
     return arr[0] + arr[last];
 }

 console.log (addend([1, 2, 3, 4, 4]));
 