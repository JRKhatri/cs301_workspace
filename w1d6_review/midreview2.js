/**Write a JavaScript program that asks user to guess a number between 1 and 10 until the user enters 5. Program also keeps track of number 
of attempts user made before guessing the correct number that is 5. Program should output following results based on the attempts made:
1I.f user guessed 5 in first attempt, program should print "Awesome!"
2I.f user guessed 5 in second attempt, program should print "Great!"
3I.f user guessed 5 in third attempt, program should print "Not bad!"
4O. therwise, program should print "It took you n attempts!", where n is the number of attempts user made before guessing the correct answer.
 */

 const prompt = require("prompt-sync")();
 let guessNumber;
 let attempt = 0;
do{
    ++attempt;
    guessNumber = +prompt("Enter the number between 1 to 10: ");

}while (guessNumber !== 5)

if(attempt === 1){
    console.log("Awesome!");
} else if(attempt === 2){
    console.log("Great!");
} else if(attempt === 3){
    console.log("Not Bad !");
} else {
    console.log("It took you " + attempt + " attempts!");
}