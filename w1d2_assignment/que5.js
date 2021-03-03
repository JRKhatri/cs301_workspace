/*When you exercise to strengthen your heart, you should maintain your heart rate within a range. 
To find that range, subtract your age from 220. This difference is your maximum heart rate per minute. 
Your heart simply will not beat faster than this maximum (220 − age). When exercising to strengthen your heart, you should keep 
your heart rate between 65% and 85% of your heart’s maximum. Write a JavaScript program that asks for a person’s age and computes and 
outputs the slowest and fastest rates necessary to strengthen his heart.*/

const prompt = require("prompt-sync")();
let age = parseInt(prompt("Enter your age: "))
let max_rate = 220 - age;
let lowest_rate = Math.round(max_rate * 0.65);
let highest_rate = Math.round(max_rate * 0.85);
console.log(`Slowest rate for ${age} is ${lowest_rate} per minute`);
console.log(`Fastest rate is ${highest_rate} per minute`);
console.log(2);