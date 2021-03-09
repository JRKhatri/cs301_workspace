/**
 * write the function which returns number of properties of an object.
 */
("use strict");

/**
 * 
 * @param {Object} obj  Object for which properties is to be counted;
 * @returns {Number} number of properties in Object;
 */
function numOfProperties(obj){
    let count = 0;
    for(let prop in obj){
        count++;
    }
    return count;
}

let user = { Firstname :"Jyoti", lastName:"Khatri"};
 console.log(numOfProperties(user));