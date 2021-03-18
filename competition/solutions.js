/** Write a function mostFrequentSight, that takes an array of bird sightings where every element 
 * represents a bird type id. It determines the id of the most frequently sighted type. 
 * If more than 1 type of birds are most frequent, return the smallest of their ids.
 * 
 */
//Question 1 by Jyoti Raj Khatri
("use strict");

function divisionSumPairs(arr, k){
    let count = 0;
    for(let i =0; i<arr.length; i++){

        for(j=i+1; j<arr.length; j++){
            if(i<j){
           sum =arr[i]+arr[j];
           if(sum % k === 0){
               count++;
           }
        }
        
    }

}
return count;
}
console.log(divisionSumPairs([1,2,3,4,5,6],5))
console.log(divisionSumPairs([1,3,2,6,1,2],3))

//Question No 2: by Gerard Karemera-Kwizera;
/**
 * 
 * @param {Array} array.
 * @returns {number} result.
 */
 function mostFrequentSight(array) {
    array.sort();
    let mostfrequently = array[0];
    let countmax = 1;
    let countTemp = 1;
    for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) {
    countTemp++;
    
    } else {
    if (countTemp > countmax) {
    countmax = countTemp;
    mostfrequently = array[i - 1];
    }
    countTemp =1;
    }
    }
    if(countTemp>countmax){
    countmax=countTemp;
    mostfrequently=array[array.length-1];
    }
    return mostfrequently;
    
   }
   console.log(mostFrequentSight([1,4,4,4,5,3]));
   module.exports = { mostFrequentSight };
   
//Question 2 by Jyoti

function countStockPairs(arr1){
    arr1.sort((a, b)=> a-b);
    console.log(arr1);
    let countpairs=0;
    let pair = 0;
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i]!==arr1[i+1]){
            if(countpairs==2){
                pair++;
                countpairs =0;
            }
        } else{
            countpairs++;
        }
        
    }
return pair;

}

console.log(countStockPairs([1,2,1,2,1,3,2]));


//Question no 1  by Frehiowot Asfaw
/**
 * 
 * @param {*} arr 
 * @param {*} k 
 * @returns 
 */
 function divisibleSumpairs(arr, k) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (i < j) {
                sum = arr[i] + arr[j];
                if (sum % k === 0) {
                    count++;
                }
            }
 
        }
    }
    return count;
}
let num = [1, 2, 3, 4, 5, 6];
 
let k = 5;
console.log(divisibleSumpairs(num, k));
console.log(divisibleSumpairs([1, 3, 2, 6, 1, 2], 3
));


