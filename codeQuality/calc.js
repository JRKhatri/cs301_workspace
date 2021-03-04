("use strict");
/**
 * 
 * @param {number} op1 ;
 * @param {number} op2 ;
 * @return {number} Sum
 */
function add(op1, op2) {
    return op1 + op2;

}
/**
 * 
 * @param {number} op1;
 * @param {number} op2;
 * @return {number} Difference
 */
function sub(op1, op2) {
    return op1 - op2;
 
}
/**
 * 
 * @param {number} op1;
 * @param {number} op2;
 * @return {number} Quotient
 */
function div(op1, op2) {
    return op1 / op2;
    
}

module.exports = {add, sub, div};