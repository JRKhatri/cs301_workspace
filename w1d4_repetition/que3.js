/**
  * Write a JavaScript program that gives the user three tries
  *  to guess the correct pin of the account. You set the pin as a constant.
  *When correct display “Correct, welcome back.” 
 *When incorrect display “Incorrect, try again.”. When run out of 
 *tries display “Sorry but you have been locked out.
  */
 "use strict";
 const prompt = require("prompt-sync")();
 const correctPin = 1234;
 let attempt = 0;
 do{
    
     let enter = + prompt("Enter your PIN: ");
     if(enter === correctPin){
        console.log("Correct, welcome back");
        break;
    }else if(enter != correctPin && attempt <2){
       console.log("Incorrect, try again ")

    } if(attempt ===2){
        console.log("Sorry but you have been locked out!")
    }
    
    
    attempt++;
} while (attempt<3)
