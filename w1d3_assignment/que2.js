/*Write a program that reads from the keyboard a student's name and number of completed credits and then outputs the student's name 
and label on following rules:
a. "Freshman" if 0<credits<30
b. "Sophomore" if 30<=credits<60 c. "Junior" if 60<=credits<90
d. "Senior" if credits>90 */

const prompt = require("prompt-sync")();
let name = prompt("Please enter name:");
let credit = parseInt(prompt(" Please enter your completed credit: "));
if(credit >0 && credit<30) {
    console.log(`${name} - Freshman`)
}else if (credit < 60){
    console.log(`${name}  - Sophomore`)
}else if (credit < 90){
    console.log(`${name} - Junior`)
}else  if  (credit >=90){
    console.log(`${name} - Senior`)
};