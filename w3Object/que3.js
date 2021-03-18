/**
 * write a function   that returns true if str contains text "lottery" or "prize",
otherwise return false.
 */
("use strict");
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

console.log(checkSpam("there is lottery and prize"));
console.log(checkSpam("there is nolottery and noprize"));


//return (str.includes("lottery")|| str.includes("prize")
    


