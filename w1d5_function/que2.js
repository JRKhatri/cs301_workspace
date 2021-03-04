/* 2. volumeOfCylinder
a. Write a function, areaOfCircle, that computes and returns area of a circle based on the value of input radius.
b. Write a function, volumeOfCylinder, that compute volume of a cylinder and making use of the areaOfCircle function.
c. Write code to call and test your function.*/
"use strict";
/**
 * 
 * @param {number} radius   input from user
 * @return {number}  area 
 */
function areaOfCircle(radius) {
    let area = Math.PI * Math.pow(radius, 2);
    return area;
}

/**
 * 
 * @param {number} radius input from user
 * @param {number} height input form user
 * @return {number} volume
 */
function volumeOfCylinder(radius, height){
    let volume = areaOfCircle(radius) * height;
    return volume;
}

const prompt = require("prompt-sync")();
let inputRadius = prompt("Please enter the radius of circle: ");
let inputHeight = prompt (" please enter the height of Cylinder : ");
let volumeCylinder = Math.round(volumeOfCylinder(inputRadius, inputHeight));
console.log(volumeCylinder + " is the volume of Cylinder  with radius " + inputRadius + " and height " +  inputHeight);
