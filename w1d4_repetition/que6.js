let output = "";
for (let i = 1; i<=5; i++){
    for(let j = 1; j<=i; j++){
    output += i;
    } 
    output+="\n"
}
console.log(output);

console.log("===================");


let output1 ="";
for(let i = 1; i<=5; i++){
    for(let j = 1; j<=i; j++){
        output1 +=j;
    }
    output1+="\n"
}
console.log(output1);

console.log("===================");

let output2 ="";
for(let i =5; i>=1; i--){
    for(let j = i; j>=1; j--){
        output2 +=i;
    }
    output2 +="\n";
}
console.log(output2);
console.log("--------------------")

