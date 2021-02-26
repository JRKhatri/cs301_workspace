/*Write a JavaScript program that gives the user three tries to guess the correct pin of the account. You set the pin as a constant.
 When correct display “Correct, welcome back.” When incorrect display “Incorrect, try again.”. When run out of 
 tries display “Sorry but you have been locked out.” */
 
 const prompt = require("prompt-sync")();
 const correct_pin = 1234;
 let i = 1;
 let enter_pin = parseInt(prompt("Enter your pin: "));
 for( let i = 0; i<3; i++){
     if(enter_pin === correct_pin){
         console.log("Correct, welcome back");
         break;
     }if(enter_pin != correct_pin){
        console.log("Incorrect, try again ")
         enter_pin = parseInt(prompt("Enter your pin"));
     } if(i == 2){
     console.log("Sorry but you have been locked out.")
     }
}
 