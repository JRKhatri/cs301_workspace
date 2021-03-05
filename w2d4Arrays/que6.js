/**
 * 6. Modify rotate functions to rotate array right by n times where, n is the second parameter
passed in the function.
 */
("use strict");
/**
 * 
 * @param {Object} arr array whose elements should be rotated
 * @param {number} times number of time elements shoud be rotated
 * @returns {Object} right rotated array
 */
function rotateTimes(arr, times){
    let count = 1;
    while(count <= times){
    let element = arr.shift();
    arr.push(element);
    count++;
    }
    return arr;
}

console.log(rotateTimes([1,2,3,4,5], 3));