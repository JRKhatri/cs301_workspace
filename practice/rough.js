
// let i =1;
// while(i<=100){
//     if(i %3 === 0){
//         console.log ("Foo");
//     }
//     if(i % 5 === 0){
//         console.log("Bar")
//     } 
//     if (i % 3 != 0 && i % 5 != 0){
//         console.log(i);
//     }
//     i++;
// }
// let x =null;

// let y = +"2";
// console.log("2"**"5");
// console.log("name"== "");
// console.log("1">0);
// console.log(""==0);
// console.log("0"==0);
// console.log(typeof x);

("use strict");

// function fac(n){
//     if(n === 0){
//         return 0;
//     } else if( n === 1){
//         return 1;
//     } else {
//         return fac(n-1)+fac(n-2);
//     }
// }
// console.log(fac(6));

// function str(strng){
//     if(strng ===""){
//         return 0;
//     }else {
//         return 1 + str(strng.substr(1))
//     }
// }

// console.log(str("happybirthday"))

// function pallin(string){
//     if(string.length === 0 || string.length === 1){
//         return true;
//     } else {
//         if(string[0] === string[string.length-1]){ 
//         return pallin(string.substr(1,string.length-2))
//     } else {
//         return false;
//     }
// }
// }
// console.log(pallin("daadd"))


// function count(num){
//     if(num === 0){
//         return 0;
//     } else {
//         return 1 + count(Math.floor(num/10));
//     }
// }
// console.log(count(1250));

// function reverse(string){
//     if(string === ""){
//         return "";
//     }else {
//         return string[string.length-1] + reverse(string.substr(0,string.length-1))
//     }
// }
// console.log(reverse("jyoti"));

// function powerOf(num1, num2){
//     if(num2 === 0){
//         return 1;
//     } else {
//         return num1 * powerOf(num1, num2-1)
//     }
// }
// console.log(powerOf(3,1));

// let newO = {name:"jyoti", school:"MIU", het: 5,
// " loves music":true
// };
// newO.class = "msd";
// console.log(newO);
// console.log(newO[" loves music"]);
// console.log(delete newO.name);
// console.log(delete newO["het"]);
// console.log(newO);


// const prompt = require("prompt-sync")();
// let fruits = prompt("Give the name:");

// 
// console.log('hi i\'m jack. \n i live in kathmandu.');

// let nam = "fairfeild";
// console.log(nam[0]);
// console.log(nam.charAt(3));

// for(let s of nam){
//     console.log(s)
// }

let str ="n,a,m,e";
let newstr = str.split(",");
console.log(newstr.reverse());
