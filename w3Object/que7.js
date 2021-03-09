/**
 * Write the function getAverageAge(users) that gets an array of objects with two properties name and age 
 * and returns the average age.
Input Output
[{name:"abc", age:20}, 
{name:"xyz", age:10}]
15 (average of 10 and 20) 
 */
("use strict");
let user = [{name:"abc", age:20}, 
{name:"xyz", age:10},
];
/**
 * 
 * @param {Object} users contains array of objects with two properties
 * @returns {Number} average value of one properties;
 */
function getAverageAge(users){
    let count =0;
    let sum =0;
    for(let ave of users){
        sum +=ave.age;
        count ++; 
    }
    return sum/count;
}
console.log(getAverageAge(user));
// console.log(user)
// console.log(user[0])
