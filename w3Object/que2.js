/**
 * write the function which returns number of properties of an object.
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