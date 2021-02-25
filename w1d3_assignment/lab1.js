/*1. Write a program that asks user to enter weather for today and print 
"Get an umbrella" if weather is rainy.*/
const prompt = require ("prompt-sync")();
// let weather  = prompt("Enter weather for today :");
// if(weather === "rainy"){
//     console.log("Get an umnrella");
//}
/*Write a program that asks user to enter a number between 1 to 10, and print 
"Bingo!" if user enters 7 otherwise prints "Try again."
• Use === for comparison not == */
// let number = parseInt(prompt("Enter number between 1 to 10"));
// if(number === 7){
//     console.log("Bingo");
// } else {
//     console.log("Try Again");
// }

/*Write a program that accepts user age as input and output following based on the input
• If age <= 0
• print "please enter valid age"
• if age is between 0 and 14 • print "You can't drive yet."
• if age is between 15 and 18
• print "You can drive under supervision."
• if age is 19 or higher • print "You can drive."
*/

// let age = parseInt(prompt("Enter age"));
//  if(age <= 0){
    // console.log("please enter valid age");
// } 
//else if(age <=14){
//     console.log("You can't drive yet")
// } else if (age <= 18){
//     console.log("You can drive under supervision")
// } else {
//     console.log ("You can drive");
// }

// if (age > 0 && age<=14 ){
//     console.log("You can't drive yet")
// }
// if (age > 14 && age<=18 ){
//     console.log("You can drive under supervision")
// }
//  if(age>=19) {
//     console.log("You can drive")
//  }

let number = parseInt(prompt("Enter number from 1 to 5"))
// if( number === 1){
//     console.log("One")
// } else if ( number === 2){
//     console.log("Two");
// } else if ( number === 3){
//     console.log("Three");
// } else if ( number === 4){
//     console.log("Four")
// } else if (number === 5){
//     console.log("Five")
// }


 switch (number){
     case 1 :
         console.log("One");
  //       break;
     case 2 : 
         console.log("Two");
  //       break;
     case 3 : 
         console.log("Three");
         break;
    case 4 : 
         console.log ("Four");
         break;
     case 5 :
         console.log ("Five");
         break;      

 }
 

 