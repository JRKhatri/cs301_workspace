/*A teacher frequently divides her class into teams. Write a defining table and a program that allows her to enter the number of students 
in her class and the number of teams she wants. The number of members on each team must be as balanced as possible. 
In other words, if not all the teams can have the same number of members then some of the teams will have only one more member than 
the other teams. Your program must output a phrase that tells the teacher how to divide her class into teams. 
For example, if the teacher entered 22 class members and 5 teams, your program must output "2 teams with 5 members and 3 teams 
with 4 members." Your program must list the larger teams first.*/

const prompt = require('prompt-sync')();
let tot_student = parseInt(prompt("Enter total number of Students:"));
let  noOfteams = parseInt(prompt("Enter number of teams: "));
let member = Math.floor(tot_student/noOfteams);
console.log(member);
let extra_st = tot_student % noOfteams;
console.log(extra_st);
let small_team = noOfteams - extra_st;
console.log(small_team);
console.log( extra_st + " teams with " + (member +1) + " members and " + small_team + " teams with " + member + " members.");


