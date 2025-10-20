/**
 * Create three variables with numbers assigned to them.
 * Do not use zero.
 * Make the numbers at least 4 digits long, e.g. 3874, 2398.
 * Create a 4th variable with the number 7 and call it "luckyNumber".
 *
 * After creating the variables, do the
 * following without typing any more numbers.
 *
 * Output the following to the console:
 *      1. The sum of the numbers.
 *      2. The result of subtracting the two smallest
 *         numbers from the larger one.
 *      3. The result of multiplying all the numbers.
 *      4. The result of the largest number divided
 *         by the difference between the smaller ones.
 *      5. The result of the the numbers modulo 7.
 *
 * Finally, label all of the outputs by using console log in the way
 * that is demonstrated below. For the labels, be sure to come up
 * with clear and descriptive names.
 */

let i = 1234;
let n = 5897;
let z = 6458;
let luckyNumber = 7;

// Sum of all numbers:
console.log("Sum", i + n + z + luckyNumber);

// Subtraction of two smallest from largest:
let largest = Math.max(i, n, z);
let smallest = Math.min(i, n, z);
let middle = i + n + z - largest - smallest;
console.log("Subtraction", largest - (smallest + middle));

// Multiplication of all numbers:
console.log("Multiplication", i * n * z * luckyNumber);

// Largest divided by difference of smaller numbers:
console.log("Division", largest / (middle - smallest));

// Remainders modulo 7:
console.log("Modulo", (i % luckyNumber) + (n % luckyNumber) + (z % luckyNumber));
