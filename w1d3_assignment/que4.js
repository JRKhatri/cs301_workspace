/*A university library that loans book to students, faculty, and the public has a written policy that determines 
how long someone may borrow a book before it is due, which is shown on the table below. Write a defining table and 
JavaScript program that determines how long a person may borrow a book.*/

const prompt = require("prompt-sync")();
let status = prompt("What is your status: Student/Faculty/Other: ");
let overdue_books = parseInt(prompt ("Number of books Overdue: "));
let duration;
if(status === "Student"){
     if(overdue_books ===0){
         duration = 6;
     } else if (overdue_books < 3){
         duration = 4;
     } else {
         duration = 2;
     }
} else if (status === "Faculty"){
    if(overdue_books === 0){
        duration = 12;
    } else if (overdue_books < 3){
        duration = 10;
    } else {
        duration = 8;
    }
} else {
    if ( overdue_books === 0){
        duration = 4;
    } else if (overdue_books < 3){
        duration = 3;
    } else {
        duration = 2;
    }
}
console.log("Your Loan duration is : " + duration +  " weeks");

