/**
 * Write a swap function that takes two parameters of number type and swap the values of the passed parameters.
a. Once your function is ready run following code and see if your swap function works?
let x = 5;
let y = 7;
console.log(x,y) // 5, 7
swap(x,y);
console.log(x,y) //??
 */
("use strict");
let xxx = 5; 
let yyy = 7;

console.log(xxx,yyy);

/**
 * 
 * @param {Number} one ;
 * @param {Number} two ;
 * @return {Boolean};
 */
function swap (one , two){
    let original = one;
        xxx = two;
        yyy = original;
       return true; 
}
swap(xxx,yyy);
console.log(xxx,yyy);