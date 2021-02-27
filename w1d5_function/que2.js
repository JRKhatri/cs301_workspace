/* 2. volumeOfCylinder
a. Write a function, areaOfCircle, that computes and returns area of a circle based on the value of input radius.
b. Write a function, volumeOfCylinder, that compute volume of a cylinder and making use of the areaOfCircle function.
c. Write code to call and test your function.*/

function areaOfCircle(radius){
    let area = Math.PI * Math.pow(radius,2);
    return area;
}

function volumeOfCylinder(radius, height){
    let volume = areaOfCircle(radius) * height;
    return volume;
}

const prompt = require("prompt-sync")();
let input_radius = prompt("Please enter the radius of circle: ");
let input_height = prompt (" please enter the height of Cylinder : ");
let volume_Cylinder = Math.round(volumeOfCylinder(input_radius, input_height));
console.log(volume_Cylinder + " is the volume of Cylinder  with radius " + input_radius + " and height " +  input_height);
