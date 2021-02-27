/* Write a program that calculates the total volume of a house, including the volume of the roof
space. Your program must allow the user to enter width, depth, height and sweep as shown in figure below. Write code to call and test your 
function. Here are some helpful formulas:
houseVolume = livingVolume + roofVolume
livingVolume = width * height * depth
roofVolume = triangleArea*depth
triangleArea = √s(s−a)(s−b)(s−c)
s = (a+b+c)/2
Write separate functions for each of the named formulas */

function livingVolume(width, height, depth){
    let liv_vol = width * height * depth;
    console.log("livingVolume = " + liv_vol)
    return liv_vol;
}

function triangleArea(width,sweep){
    let s = (sweep + sweep + width)/2;
    console.log("s = " + s);
    let area = Math.sqrt(s*(s-sweep)*(s-sweep)*(s-width));
    console.log("triangleArea = " + area)
    return area;
}
function roofVolume (width,depth,sweep){
    let r_volume = triangleArea(width, sweep) * depth;
    console.log("roofVolume = " + r_volume)
    return r_volume;
}
function houseVolume(w,h,d,s) {
    let h_vol = livingVolume(w, h, d) + roofVolume(w,d,s);
    console.log("houseVolume = " + h_vol);
    return h_vol;
}
const prompt = require("prompt-sync")();
let input_width = +prompt ("Enter width of the house : ");
let input_height = +prompt ("Enter height of the house: ");
let input_depth = +prompt ("Enter the depth of hourse: ");
let input_sweep = +prompt ("Enter the sweep of the house: ");
let total_Volume = houseVolume(input_width, input_height, input_depth, input_sweep);
console.log("Answer");
 console.log("Total volume of House is : " + Math.round(total_Volume));
 


