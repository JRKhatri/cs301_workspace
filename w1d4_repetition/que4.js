const prompt = require ("prompt-sync")();
let term = parseInt(prompt("Enter positive Integer:"));
let pre = 0;
let sum = 1;
let series="";
let x = '';
let newSum;
for(let i = 0; i<=term-1; i++){
    if(i<2){
        x = x + i + ",";
    } else {
        newSum = pre +sum;
        series =series + newSum +",";
        pre = sum;
        sum = newSum;
    }
    
    
}
series = x + series;
console.log(series);
