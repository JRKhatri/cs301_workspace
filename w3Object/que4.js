/**
 * Write a function named suffix that returns the common suffix of two strings.
 *  For example, the common suffix of “swimming” and “walking” is “ing”. 
 * This function takes two parameters and returns the common suffix.
 */

function suffix(str1, str2){
    let length1 = str1.length;
    let length2 = str2.length;
    let suffix ="";
    for(let i = 1; i<=length1; i++){
        if(str1[length1 -i] === str2[length2-i]) {
            suffix = str1[length1-i] + suffix;
        } else {
            break;
        }

    }
    return suffix;
}

console.log(suffix("swmming","running"))