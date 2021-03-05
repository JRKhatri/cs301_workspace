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
      if(arr1.length !== arr2.length){
          return false;
      }

    for(let i = 0; i < arr1.length; i++){
   
        if(arr1[i] !== arr2[i]) {
            return false;
        }  
        }
        return true;
        
    }
    isArrayEqual(arr1, arr3);
    isArrayEqual(arr1, arr2);
    

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
getMiddle([1,2,3,4,5]);


/**
 * 
 * @param {Object} arr array whose last element should be rotated to left
 * @returns {Object};
 */
 function rotateLeft(arr){
    let first = arr.shift();
    arr.push(first);
    return arr;
    
}
rotateLeft([2,3,4,5]);
rotateLeft([1,2,3,4,5]);




/**
 * 
 * @param {Object} arr array whose first element should be rotated to right.
 * @returns {Object} roated array
 */
 function rotateRight( arr ){
    let last = arr.pop();
    arr.unshift(last);
   return  arr;
    
}
rotateRight([1,2,3,4,5,6]);
//rotateRight ([7,6,5,4,3,2,1]);



/**
 * 
 * @param {Object} arr array whose elements should be rotated
 * @param {number} times number of time elements shoud be rotated
 * @returns {Object} right rotated array
 */
 function rotateNRight(arr, times){
    let count = 1;
    while(count <= times){
    let element = arr.pop();
    arr.unshift(element);
    count++;
    }
    return arr;
}

rotateNRight([1,2,3,4,5], 3);






    module.exports= {isArrayEqual, addends, getMiddle,rotateLeft, rotateRight, rotateNRight};

