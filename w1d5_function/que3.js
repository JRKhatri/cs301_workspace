/* Write a program that calculates the total volume of a house, including the volume of the roof
space. Your program must allow the user to enter width, depth, height and sweep as shown in figure below. Write code to call and test your 
function. Here are some helpful formulas:
houseVolume = livingVolume + roofVolume
livingVolume = width * height * depth
roofVolume = triangleArea*depth
triangleArea = √s(s−a)(s−b)(s−c)
s = (a+b+c)/2
Write separate functions for each of the named formulas */
"use strict";

/**
 * 
 * @param {number} width user input width of house
 * @param {number} height user input height of house
 * @param {number} depth user input depth of house
 * @return {number} Volume of house excluding roof volume
 */
function livingVolume(width, height, depth){
    let livVol = width * height * depth;
    console.log("livingVolume = " + livVol);
    return livVol;
}

/**
 * 
 * @param {number} width user input width of house
 * @param {number} sweep user input sweep of house
 * @return {number} area of house
 */
function triangleArea(width, sweep){
    let roofPeri = (sweep + sweep + width) / 2;
    console.log("Half perimeter of roof= " + roofPeri);
    let area = Math.sqrt(roofPeri * (roofPeri - sweep) * (roofPeri - sweep) * (roofPeri - width));
    console.log("triangleArea = " + area);
    return area;
}

/**
 * 
 * @param {number} width user input width of house
 * @param {nuber} depth user input depth of house
 * @param {number} sweep user input sweep of house
 * @return {numbr} Volume of roof
 */
function roofVolume(width, depth, sweep){
    let rfVolume = triangleArea(width, sweep) * depth;
    console.log("roofVolume = " + rfVolume);
    return rfVolume;
}

/**
 * 
 * @param {number} wth  user input width of house
 * @param {numbr} hht  user input height of house
 * @param {number} dth  user input depth of house 
 * @param {number} swp  user input sweep of house
 * @return {number} Total Volume of House
 */
function houseVolume(wth, hht, dth, swp) {
    let hsVol = livingVolume(wth, hht, dth) + roofVolume(wth, dth, swp);
    console.log("houseVolume = " + hsVol);
    return hsVol;
}

const prompt = require("prompt-sync")();

let inputWidth = +prompt ("Enter width of the house : ");
let inputHeight = +prompt ("Enter height of the house: ");
let inputDepth = +prompt ("Enter the depth of hourse: ");
let inputSweep = +prompt ("Enter the sweep of the house: ");
let totalVolume = houseVolume(inputWidth, inputHeight, inputDepth, inputSweep);

console.log("Answer");
 console.log("Total volume of House is : " + Math.round(totalVolume));
 


