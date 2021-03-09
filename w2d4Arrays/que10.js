/**
 * 10. Write a JavaScript function named enhancedIncludes that takes two parameters, an array, and 
 * a value to search in the array and return an array result with three values.
a. First value is boolean representing if the search value exists in the array.
b. Second value is the first index of value found in the array or -1
c. Third value is the last index of value found in the array or -1.
 */

function enhancedIncludes(arr, search){
    let result = [];
    result[0] = arr.includes(search, 0);
    result[1] = arr.indexOf(search, 0);
    result[2] = arr.lastIndexOf(search,arr.length-1);

    return result;
}

console.log(enhancedIncludes([1,2,1,3,4],1));