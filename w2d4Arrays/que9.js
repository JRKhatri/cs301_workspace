/**
 * Write a function that transforms a given array as following. Use appropriate array methods. 
 * Input (Array) 
['Quick', 'Brown', 'Fox'] 
Output (String)
"Fox_Brown_Quick"
 */

function transform(arr){
    arr.reverse();
    console.log(arr)
    return arr.join("_");
}

console.log(transform(['Quick', 'Brown', 'Fox'] ));