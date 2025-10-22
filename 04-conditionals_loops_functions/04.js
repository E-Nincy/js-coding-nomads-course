/**
 * You have already made some functions for temperatures. Now you will make some
 * more functions!
 *
 * 1. Research the formula for conversions to and from Kelvin. Write a KtoC,
 *    CtoK, FtoK and a KtoF function. Be sure to return the value so that the
 *    code below functions without error.
 *
 * 2. Research and write a function that uses the pythagorean formula to get the
 *    length of the hypotenuse of a right angled triangle. It should take in two
 *    arguments, the two shorter sides of a triangle, and return the longest
 *    side. Call the function "pythagoras". After writing your function the code
 *    below should work without error.
 *
 * 3. Research and write a functions to convert
 *      - inches to centimeters (inchToCm)
 *      - centimeters to inches (CmToInch)
 *      - miles to kilometers (MToKm)
 *      - kilometers to miles (KmToM)
 *
 */

// Write your code here:

// Conversions with Kelvin

function KtoC(kelvin) {
  return kelvin - 273.15;
}

function CtoK(celsius) {
  return celsius + 273.15;
}

function FtoK(fahrenheit) {
  return (fahrenheit - 32) * 5/9 + 273.15;
}

function KtoF(kelvin) {
  return (kelvin - 273.15) * 9/5 + 32;
}

//  Pythagoras
function pythagoras(a, b) {
  return Math.sqrt((a ** 2) + (b ** 2));
}

// Conversions between imperial and metric units
function inchToCm(inch) {
  return inch * 2.54;
}

function CmToInch(cm) {
  return cm / 2.54;
}

function MToKm(miles) {
  return miles * 1.60934;
}

function KmToM(km) {
  return km / 1.60934;
}


// Do not modify anything below this line

console.log(KtoC(272));
console.log(CtoK(0));
console.log(FtoK(30));
console.log(KtoF(100));

console.log(pythagoras(10, 20));
console.log(pythagoras(30, 100));
console.log(pythagoras(20, 50));

console.log(MToKm(100));
console.log(KmToM(25));

console.log(inchToCm(10));
console.log(CmToInch(425));