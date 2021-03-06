/**
 * Write a function findMin that takes an array as a parameter and returns the minimum value.
 *  Now use this function to find minimum value in the array [2,3, -1,-4,3,2,1]
 */
("use strict");
/**
 * 
 * @param {Object} arr array of numbers whose minium value is to be find
 * @returns {number} Minium value among arrays element
 */
function findMin(arr){
    let min = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
 
console.log(findMin([2,3, -1,-4,3,2,1]));


/**
 * Write a function sumOddIndicesValues that takes an array as a parameter and returns the sum of values
  on the odd indices.
Input 
[1,3,4,6,4,7,2] 
Result
3+6+7 i.e. 16
 */
/**
 * 
 * @param {Object} arr;
 * @returns {number} sum of odd indices
 */
function sumOddIndicesValues(arr){
    let sum = 0;

    for(let i =0; i<arr.length; i++){
        
        if(i %  2 !== 0){
            sum = sum + arr[i];
        }
    }
    return sum;

}
console.log(sumOddIndicesValues([1,3,4,6,4,7,2,9] ));


/**
 * Write a function sumArrays, that takes two arrays as parameters (you can assume of same
length) then returns a new array by adding two array values at the corresponding indices. Inputs output
[1,2,3,4,5] , [5,4,3,2,1] [6,6,6,6,6]         
 */
/**
 * 
 * @param {Object} arr1 array of numbers for summation
 * @param {Object} arr2 another array of numbers for summation
 * @returns {Object} New Array 
 */
function sumArrays(arr1, arr2){
 let newArray = [];
 for (let i = 0; i<arr1.length; i++){
 newArray[i] = arr1[i] + arr2[i];
 }
 return newArray;
}

console.log(sumArrays([1,2,3,4,5] , [5,4,3,2,1] ));

