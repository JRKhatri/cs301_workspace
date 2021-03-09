/**
 * write a function   that returns true if str contains text "lottery" or "prize",
otherwise return false.
 */

function checkSpam(str){
    return str === "lottery" || str === "prize";
}

console.log(checkSpam("happu"));
console.log(checkSpam("lottery"));
console.log(checkSpam(" "));
console.log(checkSpam("prize"));
console.log(checkSpam("   prize"));