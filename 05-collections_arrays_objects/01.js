/**
 * 1. Create an array of strings with the names of some items in the room you
 *    are sitting in right now. For example "chair", "keyboard" etc
 * 2. Now think of 3 drawers or shelves or boxes that you have nearby. Make an
 *    array with a sub-array for each drawer or box, and add 5 things in each
 *    sub-array. Do this for 3 boxes. You should have a two dimensional array.
 * 3. Pick 5 things from the two dimensional array just created, and log them to
 *    the console using array referencing.
 * 4. Use a for loop to create a array of the numbers from 1 to 100.
 * 5. Use another for loop to go through the array of numbers just created and
 *    log the sum of all the numbers.
 * 6. Use the random number generator from previous labs and another for loop to
 *    create a array of 100 random numbers.
 * 7. Use another for loop to go over each of these random numbers and put them
 *    in one of two arrays. One for odd numbers, and one for even numbers.
 * 8. Make the for loop that logs the sum of all the numbers in an array into a
 *    function that takes an array as an argument and returns the sum. Use this
 *    function to log the sum of the two arrays of odd and even numbers.
 */


/** --Array with obejcts in my room-- */
let itemsInRoom = ["chair", "keyboard", "monitor", "desk", "lamp"];

/** --Array with sub-arrays */
let boxes = [
    ["notebook", "pen", "stapler", "paper clips", "tape"],
    ["socks", "t-shirt", "jeans", "jacket", "hat"],
    ["book", "usb", "watch", "eraser", "earphones"]
];

/** --5 elements using referencies */
console.log(boxes[0][1]); // pen
console.log(boxes[1][3]); // jacket
console.log(boxes[2][0]); // book
console.log(boxes[0][4]); // tape
console.log(boxes[1][0]); // socks

/** --Array of numbers from 1 to 100-- */
let numbers = [];

for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

/** --Sum of all numbers from 1 to 100-- */
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Sum of numbers from 1 to 100:", sum);

/** --Array of 100 random numbers-- */
function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

let randomNumbers = [];
for (let i = 0; i < 100; i++) {
    randomNumbers.push(getRandomNumber());
}

/** --Separate odd and even numbers-- */
let oddNumbers = [];
let evenNumbers = [];

for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i] % 2 === 0) {
        evenNumbers.push(randomNumbers[i]);
    } else {
        oddNumbers.push(randomNumbers[i]);
    }
}

/** --Function to sum arrays-- */
function sumArray(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

console.log("Sum of odd numbers:", sumArray(oddNumbers));
console.log("Sum of even numbers:", sumArray(evenNumbers));

