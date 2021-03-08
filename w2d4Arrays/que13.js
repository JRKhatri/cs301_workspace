/**
 13. Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with
values >= a and values<= b and return a result as an array.
 */

function filterRange(arr, a, b){
    let result =[];
    let index = 0;
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] >= a && arr[i] <= b){
            result[index] = arr[i];
            index++;
        }
    }
    return result;
}

console.log(filterRange([1,-2,3,4,5,-6,1,2,0,3,5,6,7,8], 0 , 7));

