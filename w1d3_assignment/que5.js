/*Write a defining table and then a program that determines what time a child should go to bed. Your program must read a child’s 
age and the season (winter, spring, summer, or fall) from the keyboard and output the child’s bedtime according to this table:*/

const prompt = require("prompt-sync")();
let age = parseInt(prompt("Enter child's age :"));
let season = prompt (" Enter season : ");
let bed_time;
if(age <= 5){
    if(season === "summer" || season ==="fall"){
        bed_time = "8:30 PM";
    } else if(season === "winter" || season === "spring"){
       bed_time = "8:00 PM" ;
    }
} else if ( age > 5 && age <=12){
    if( season === "summer"){
        bed_time = "9:30 PM";
    } else if ( season ==="winter" || season ==="spring" || season ==="fall"){
        bed_time = " 8:30 PM"
    }
} else {
    if( season === "summer"){
        bed_time = "10:30 PM";
    } else if ( season ==="winter" || season ==="spring" || season ==="fall"){
        bed_time = " 9:30 PM"
    }

}
console.log("Bed time for child of age " + age + " on " +  season + " is " + bed_time);