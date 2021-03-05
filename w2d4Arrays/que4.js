/**
 * 4. Write a function to rotate the elements in an array to the left by 1.
 */
("use strict");
/**
 * 
 * @param {Object} arr array whose last element should be rotated to left
 * @returns {Object};
 */
function rotateLeft(arr){
    let last = arr.pop();
    
    arr.unshift(last);
   return  arr;
}

console.log(rotateLeft([1,2,3,4,5]));
