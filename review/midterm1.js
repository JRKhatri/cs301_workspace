//1. Write the outputs of flowing JavaScript program.
// let x = 1;
// let y = '2';
// let z = true;
// let s = x + y;
//  console.log(s);
//   console.log(typeof s);
//    x = x + z; 
//    console.log(x) ;
//    console.log(typeof x);
//     y = x++ * y; 
//     console.log(x); 
//     console.log(typeof x);

// s = parseInt(s)
// s+='3';

// console.log(s); // output? 
// console.log(typeof s); // output? 
// z= !z;
// console.log(z); // output? 
// console.log(typeof z); // output?

//console.log("===================que 1.2====================")
// let x = 0;
// x++; 
// console.log(x); 
// ++x; 
// console.log(x); 
// console.log(++x);
//  console.log(x); 
//  console.log(x++); 
//  console.log(x);

// console.log("===================que 1.3====================")
//  let x = 5;
//  let y = 7+''; console.log(x+y);

 //console.log("===================que 1.4====================")
//  let x= 0;
// let y = "hello";
// let z = x || "Hi"; 
// console.log(z); 
// let w = y || 5; 
// console.log(w);

//console.log("===================que 1.5====================")
// for(let count =1; count<=10; count++)
// { console.log(count);
// }
// console.log(count); // value of count here?

//console.log("===================que 2====================")
/**2. Write a JavaScript program that asks user to input gross salary and shows the federal tax he/she need to pay for the year. 
 Federal tax brackets are as follows
a. Salary up to 20K, don't have to pay any federal tax
b. Salary above 20K and up to 50K, 5% of the salary
c. Salary above 50K needs to pay 10% of the salary */
//  const prompt = require("prompt-sync")();
//  let grossSalary = prompt("Please Enter your gross Salary: ");
//  let federalTax;
//  if (grossSalary <= 20000 ){
//      federalTax = 0
//  } else if( grossSalary <= 50000){
//      federalTax = 0.05* grossSalary;
//  }else {
//      federalTax = 0.1 * grossSalary;
//  }
//  console.log("Federal Tax for gross Salary of $ " + grossSalary + " is  $ : "+ federalTax);

// console.log("===================que 3====================")
/* 3. Write a JavaScript program that asks radius of a circle as input form the user and prints the area of the circle using 
formula (πr2). Program should keep on prompting user to enter correct value, until the value enter is a positive number. 
Use Math object for getting the value of π and getting the square of the radius.*/

// const prompt = require ("prompt-sync")();
// let radius;
// do{ 
//      radius = +prompt("Enter the radius of Circle")
// }while (radius < 0)
//  let areaOfCircle = Math.PI * Math.pow(radius, 2);
//  console.log("Area of Circle is " + areaOfCircle);

//console.log("===================que 4====================")

 /*4. Write a JavaScript program that prints numbers between 10 and 100 that are multiple of both 3 and 5*/
//  let numbers = "";
//  let i = 10;
//  while(i < 100){
//      if(i % 3===0 &&  i % 5===0){
//          numbers += i + ",";
//      }
//      i++;
//  }
//  console.log(numbers);

 console.log("===================que 5====================")


 /*5. Write a program that asks for users age and prints "Happy Birthday!" based on the age. For e.g. if the user enters 5,
  program should print "Happy Birthday!" five time. */

  const prompt = require("prompt-sync")();
  let age = parseInt(prompt("Please enter your age : "));
  let i =0;
  while(i < age){
  console.log("Happy Birthday !");
  i++;
  }

  console.log("===================que 6 output====================")

  let x = 1, y = 7; 
  let message = "Hi"; 
  if (x < 2) {
    if (y > 7) {
        message = "Bye";
}else{
    message = "HOla";
} 
} else {
    message = "Hello";
}
console.log(message);

console.log("===================que 6 output====================")

for (let i = 0; i > 3; i++) { 
    console.log("Goodbye");
}