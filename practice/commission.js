const prompt = require("prompt-sync")();
let sales = parseInt(prompt("Please sales amount $ : "));
let commission;

if(sales < 300 ){
    commission = 0;
} else if(sales >=300 && sales < 500){
    commission = 0.01 * sales;
} else if (sales >= 500 && sales < 1000){
    commission = 0.02 * sales;
} else {
    commission = 0.03* sales;
}
console.log("Commission for the total sales of amount $ " + sales +  " is $  " + commission);
