/**Write a function named getMiddle that returns the value of the middle element in an array. 
 * If the array has an even number of elements, then this function must return the average of the 
 * two middle elements.
 */

 ("use strict");
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
 console.log(getMiddle([1,2,3,4,5,7]));
