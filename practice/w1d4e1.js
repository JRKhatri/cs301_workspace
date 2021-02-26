/* Write a loop that prints all even number between 1 to 20 (inclusive) • 
Writebothwhileandforversions */

// let i = 2;
// while( i<=20){
//     console.log(i)
//     i +=2;
// }

// for(let i = 2; i <=20; i+=2){
//     console.log(i)
// }

/*Write a loop that keeps on prompting for age until you enter age older than 18
• Write both while and do while versions.*/
const prompt = require("prompt-sync")();
// let age;

// do{
//      age = parseInt(prompt("Enter age"));

// } while (age <= 18);

let age1 = parseInt(prompt("Enter age"));
while(age1 <=18){
    age1 = parseInt(prompt("Enter age"))
}