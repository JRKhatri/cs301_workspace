/**
5. Write a function to rotate the elements in an array to the right by 1.
 */

("use strict");
/**
 * 
 * @param {Object} arr array whose first element should be rotated to right.
 * @returns {Object} roated array
 */
function rotateRight( arr ){
    let last = arr.pop();
    arr.unshift(last);
    return arr;
}
console.log(rotateRight([1,2,3,4,5,6]));