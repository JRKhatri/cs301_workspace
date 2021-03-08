/**
 * 12. Write a JavaScript program that number input from the user at once as comma separated values 
 * and stores it into an array and do following operations
a. Filters out negative values.
b. Maps the filtered elements to sum of its digits (optional)    
c. Reduce to get sum of all the elements (optional)
 */
const prompt = require("prompt-sync")();
let input = prompt("Enter the num: ");
let store = input.split(",");
console.log(store);
for(let i = 0; i<store.length; i++){
    store[i]= parseInt(store[i]);
}
let pArray = [];
let nArray = [];
let indexP = 0;
let indexN = 0;
let sumP = 0;
let sumN = 0;
for(let j = 0; j<store.length; j++){
    if(store[j]>=0){
        pArray[indexP] = store[j];
        sumP = sumP+ store[j];
        indexP++;
    } else {
        nArray[indexN] = store[j];
        sumN = sumN + store[j];
        indexN++;
    }
}
let sumOfAll = sumN + sumP;
console.log(store)
console.log(pArray)
console.log(nArray)
console.log(sumP);
console.log(sumN);
console.log(sumOfAll)