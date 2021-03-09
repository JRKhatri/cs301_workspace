/**
 * 1. What will be the output of following codes?
a. Analyze without running the code and write it down.
b. Run the code and compare the answers.
i. If you answer and output are different try to understand by debugging it.
 */

let person1={
    name: "Allen",
    age: 23,
    employed: true,
}
let person2 = person1;
console.log(person1 === person2);
person1.salary = 5000;
person1.age = 35;
console.log(person2.salary); console.log(person2.age);
delete person2.salary;
console.log(person1.salary); person2.salary = 3000; console.log(person1.salary);



let person3={
    name: "Allen",
    age: 23,
    employed: true,
}
let person4 = {
    name: "Allen",
age: 23,
    employed: true,
}
console.log(person3 === person4); 
person3.age = 35;
console.log(person4.age);
person4.salary = 5000; 
console.log(person3.salary);




let a = 5;
let b = 7;
console.log(a,b);
swap1(a,b);
console.log(a,b)
let arr = [1,2,3];
console.log(arr);
swap2(arr, 0, 2);
console.log(arr);
function swap1(a,b){
    let temp = a;
a=b;
b=a; }
function swap2(arr, i, j){
    let temp = arr[i];
    arr[i]= arr[j];
    arr[j]= temp;
}



let obx = {name:"Jyoti", age: 33};
let oby = {name: "Khatri", age: 25};

function swap3(ob1, ob2, prop){ //prop is a variable not value so it does not work like ob1.prop so do ob1[prop]
    
    let temp = ob1[prop];
    ob1[prop] = ob2[prop];
    ob2[prop] = temp;
}

console.log(swap3(obx,oby,"age"));
console.log(obx);
console.log(oby);
