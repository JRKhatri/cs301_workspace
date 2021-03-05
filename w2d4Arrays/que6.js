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
function rotateNRight(arr, times){
    let count = 1;
    while(count <= times){
    let element = arr.shift();
    arr.push(element);
    count++;
    }
    return arr;
}

console.log(rotateNRight([-1, -100, 1, 2, 3, -55], 3));