/**Write a JavaScript function named secondSmallest that accepts three integer numbers as parameters and return the second-smallest
 *  value among them.
For e.g. secondSmallest(-1,9,7) à 7
 */
const prompt = require ("prompt-sync")();
// let number1 = +prompt("Enter no 1 : ");
//     let number2 = +prompt ("Enter no 2: ");
//     let number3 = + prompt ("Enter no 3: ");
// let secondSmall = secondSmallest(number1,number2,number3);
// console.log("Second smallest number is : " + secondSmall);

// function secondSmallest(n1,n2,n3){
    
//     if (n1 > n2 && n1 < n3 || n1> n3 && n1< n2){
//         return n1;
//     } else if  (n2 > n1 && n2 < n3 || n2> n3 && n2< n1){
//         return n2;
// } 
//     return n3;
// }
let number = prompt("Enter number");
let highest =0;
let x = highestNum(number)
function highestNum(num){
if(num != "stop"){
    highsest = +num;
}
    while (num !== "stop"){
        
        num = prompt("Enter number:")
            if (num === "stop"){
                break;
            } else {
                let y = +num
                if(y > highest ){
                    highest = y;
            }
        }
    
        }
        return highest;
    }
        console.log(x);

    
    


