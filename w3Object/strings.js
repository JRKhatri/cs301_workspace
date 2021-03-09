("use strict");
/*
2. Write the function countProperties(obj) which returns number of properties of an object.
*/

/**
 * 
 * @param {Object} obj  Object for which properties is to be counted;
 * @returns {Number} number of properties in Object;
 */
function countProperties(obj){
    let count = 0;
    for(let prop in obj){
        count++;
    }
    return count;
}

let user = { Firstname :"Jyoti", lastName:"Khatri"};
 console.log(countProperties(user));

 /*

3.  Write a function checkSpam(str) that returns true if str contains text "lottery" or "prize", otherwise return false.

*/
/**
 * 
 * @param {String} str whose word is to check 
 * @returns {Boolean} ;
 */
 function checkSpam(str){
    let newStr = str.split(" ");
    for(let check of newStr){
        if (check === "lottery" || check === "prize"){
         return true;
        }
            
        
    }
    return false;
    
}


console.log(checkSpam("there is prize in lottery"));
console.log(checkSpam("there is nothing in anything"));

/**
 * 
 * @param {String} str1 first text
 * @param {String} str2 second text
 * @returns {String} common suffix of two text
 */
 function suffix(str1, str2){
    let length1 = str1.length;
    let length2 = str2.length;
    let suf ="";
    for(let i = 1; i<=length1; i++){
        if(str1[length1 -i] === str2[length2-i]) {
            suf = str1[length1-i] + suf;
        } else {
            break;
        }

    }
    return suf;
}
console.log(suffix("swimming","walking"));
console.log(suffix("sing","good"));
  


// 5.  Write a function named titleCase with one parameter named s. This function returns a copy of s but with the first letter of each word capitalized.

/**
 * 
 * @param {String} str Text whose first letter of each word should be capitalized;
 * @returns {String} Text with capitalize first letter of each word
 */
 function titleCase(str){
    let firstChar = str.charAt(0);
    str = firstChar.toUpperCase() + str.substr(1, str.length);
    for(let i =0; i<str.length-1; i++){
        //console.log(str[i]);
        if(str[i] === " "){
            let char = str[i +1];
            str = str.substr(0,i) +" "+ char.toUpperCase() + str.substr(i+2,str.length -1);
        }
       
    }
return str;
}

console.log(titleCase(" i love java script and i always love coding    "));





/**
 * Write the function getAverageAge(users) that gets an array of objects with two properties name and age 
 * and returns the average age.
Input Output
[{name:"abc", age:20}, 
{name:"xyz", age:10}]
15 (average of 10 and 20) 
 */

let array = [{name:"abc", age:20}, 
{name:"xyz", age:20},
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
console.log(getAverageAge(array));


module.exports = {countProperties, checkSpam, suffix, titleCase, getAverageAge};