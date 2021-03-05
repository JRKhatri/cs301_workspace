("use strict");

let scores = [ 10, 20, 30, 40, 50];


function findAverage(arr){
    let arraySum =0;

    for (let i = 0; i < arr.length; i++){
        arraySum = arraySum + arr[i];
    }
    let arrayAvg = arraySum / arr.length;
    return arrayAvg;
};
console.log(findAverage(scores));




let score2 = [];
for(let i = 0; i < 10; i++){
    score2[i] = Math.ceil(Math.random() * 10);
}
console.log(findAverage(score2));