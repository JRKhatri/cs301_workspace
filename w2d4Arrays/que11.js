/**
 * 11. Write a function that returns reversed copy of a given array. Do this without using reverse method, 
 * instead use splice and slice methods.
 */

function reversedCopy(arr){
    let copy =[];
    let size = arr.length;
    let i = 0;
    while(i< size){
         copy[i]= arr.splice(-1);
        i++;
    }
    
return copy;
}
console.log(reversedCopy([1,2,3,4]));