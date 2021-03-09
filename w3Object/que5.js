/**
 * Write a function named titleCase with one parameter named s. This function returns a copy 
 * of s but with the first letter of each word capitalized.
 */

function titleCase(str){
    let length = str.length;
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

console.log(titleCase(" i love java script and i love coding    "))