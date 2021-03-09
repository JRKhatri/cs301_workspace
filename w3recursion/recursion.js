("use strict");

/**
 * 
 * @param {Number} num  Numbers for counting digits
 * @returns {Number} Total digits;
 */
 function countDigits(num){
    if(num === 0){
        return 0;
    } else {
        let newNum = Math.floor(num /10 );
        return 1 + countDigits(newNum);
    }

}
console.log(countDigits(25));


/**
 * 
 * @param {String} string  Text for reversing
 * @returns {String} Reverse text
 */
 function reverse(string){
    
    if(string === ""){
        return "";
    } else {
       return reverse(string.substr(1)) + string.charAt(0);
    }
    
}
console.log(reverse(" i love nepal"));


/**  
 * @param {Number} num  Base integer
 * @param {Number} pow;
 * @returns {Number};
 */
function power(num, pow){
    if(pow === 0 ){
        return 1;
    } else {
        return num * power(num, pow -1);
    }
}
console.log(power(2,1));


module.exports = {countDigits,reverse, power};
