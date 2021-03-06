/**
 * 11. Write a function that returns reversed copy of a given array. Do this without using reverse method, 
 * instead use splice and slice methods.
 */

function reversedCopy(arr){
    let copy = [];
    while(arr.length > 0){
    copy[arr.length-1] = arr.splice(-1);
    return copy;
}
}
console.log(reversedCopy([1,2,3,4]));