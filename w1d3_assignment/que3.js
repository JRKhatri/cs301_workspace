/*Write a program that calculates down payment for a home loan based on following rules.
$50K to less than 100K $1000 + 10% of (cost - $50K)
$200K and above $5000 + 10% of (cost - $200K)*/
const prompt = require("prompt-sync")();
let cost = prompt("Enter  the total cost of house :  ");
let downpayment;
if( cost >=0  && cost < 50000){
    downpayment = 0.05 * cost;
} else if(cost < 100000){
    downpayment = 1000 + 0.1 * (cost - 50000);
} else if (cost < 200000){
    downpayment = 2000 + 0.15 * (cost - 100000);
} else {
    downpayment = 5000 + 0.1 * (cost - 200000);
}
console.log("Your downpayment is $ " + downpayment);
