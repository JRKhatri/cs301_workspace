
let sam1 = {name: "Sam", age : 10};
let sam2 = {name: "Sam", age : 10};
let john = {name: "John", age: 10}

function isPersonEqual(obj1, obj2){
    return obj1 === obj2;
}
console.log(isPersonEqual(sam1, sam2))
console.log(isPersonEqual(sam1, john))

// aWrite a program that keeps on asking for user input and prints it, until user types 
//the word "stop" (without quotes). "Stop" word can be in any case (small, capital or mixed)

 const prompt = require("prompt-sync")();
// let word;

// do{
//     let input = prompt("Please input words");
//      word = input.toLowerCase();
//     console.log(input)
 
// }while (word !== "stop" )


// Write a program that takes comma separated text from user and converts it into an array of words 
// and prints in reverse order.

// let input1 = prompt("Enter text with word:");
// let array = input1.split(",");

// console.log(array.reverse());

//Write a program to replace the first occurrence of "for" in an input string with 4.
// input Thanks for joining us.
// output  Thanks 4 joining us.
let input2 = prompt("Enter text with word:");
let replaced = input2.replace("for" , "4")

console.log(replaced);

