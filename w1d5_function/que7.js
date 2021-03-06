/**7. Write a function compute, that takes three parameters. First parameter is a call back function that does the actual operation, 
 * second and third are the operands. For e.g., compute (add, 2,3) should return 5 */
("use strict");

/**
 * 
 * @param {number} num1 first number for addition
 * @param {number} num2 second number for addition
 * @return {number} Sum of two number
 */
  function  add(num1, num2){
      return num1 + num2;
  }

/**
 * @param {function} sum function for addition
 * @param {number} no1 first number for addition
 * @param {number} no2 second number for addition
 * @return {number} Sum of two number
 */
 function compute(sum, no1, no2){
    return sum(no1, no2);
 }
 console.log(compute(add, 10, 20));

 
 //Write compute function as a function expression.
  let toCal = function(sum, num1, num2){
      return sum(num1, num2);
  };


//Write add function as a function expression and call compute passing add as a callback.

 let addn = function(num1, num2){
    return num1 +num2;
};
console.log(toCal(addn, 11, 22));

 

//o Refactor to pass add logic as an anonymous function. (Make a copy first)
/**
 * 
 * @param {function} add addition function for two numbers
 * @param {number} num1 number for addition
 * @param {number} num2 number for addition
 * @return {number} sum value
 */
 function calcult(add, num1, num2){
    return add (num1, num2);
}

let copy = calcult;

 console.log(calcult(
    function(num1, num2) {return (num1 + num2);},
    4,
    6
));

console.log(copy(function(num1, num2) {return (num1 + num2);},
4,
9));




// o Refactor to pass add logic as an arrow function. (Make a copy first) */

let cal = function (sum, num1, num2){
return sum(num1, num2);
};

 let addition = (num1, num2) => num1 + num2;
 let func = addition;

 console.log(cal(func, 23, 24));