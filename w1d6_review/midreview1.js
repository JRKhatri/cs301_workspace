/**Write a JavaScript program that asks user to input gross salary and shows the federal tax he/she need to pay for the year. 
 * Federal tax brackets are as follows.
1S.alary up to 20K, do not have to pay any federal tax. 
2S.alary above 20K and up to 50K, 5% of the salary above 20K.
3S.alary above 50K needs to pay, 1500 plus 10% of the salary above 50K.
For e.g., if the gross salary is 70K that person will pay 1500+ 10% of 20K = $3500 in federal tax.
 */
const prompt = require ("prompt-sync")();
let grossSalary = + prompt("Please Enter your Gross Salary: ");
let federal_tax = 0;
if (grossSalary <= 20000){
    federal_tax = 0;
} else if (grossSalary <=50000){
    federal_tax = .5 * (grossSalary - 20000);
}else {
    federal_tax = 1500 + 0.1*(grossSalary - 50000);
}
console.log("$" + federal_tax);