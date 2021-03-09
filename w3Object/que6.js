/**
 * Write a swap function that takes two parameters of number type and swap the values of the passed parameters.
a. Once your function is ready run following code and see if your swap function works?
 */
let x = 5; 
let y = 7;
console.log(x,y);
function swap (a , b){
    let original = a;
        x = b;
        y = original;
}
swap(x,y)
console.log(x,y);