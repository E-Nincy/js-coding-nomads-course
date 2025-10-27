/**
 * In these questions you will be practicing how to use the forEach syntax.
 *
 * 1. Use a random number generator to generate an array of 100 values.
 * 2. Use forEach on the array to output the sum, count and average.
 * 3. Use forEach to create a new array from the first one that halves all the
 *    values.
 * 4. Use forEach on the new array to output the sum, count and average again.
 * 5. Refactor: define the sum, count and average function as a separate
 *    function and pass it to the forEach functions as a name.
 */

// 1. Generate array of 100 random numbers
let numbers = [];
for (let i = 0; i < 100; i++) {
  numbers.push(Math.random() * 100);
}

// 2. Use forEach to calculate sum, count, average
function calculateStats(array) {
  let sum = 0;
  let count = 0;

  array.forEach(num => {
    sum += num;
    count++;
  });

  let average = sum / count;

  console.log("Sum:", sum.toFixed(2));
  console.log("Count:", count);
  console.log("Average:", average.toFixed(2));
}

// Show stats for original array
console.log("Original array:");
calculateStats(numbers);

// 3. Create new array with halved values
let halvedNumbers = [];
numbers.forEach(num => {
  halvedNumbers.push(num / 2);
});

// Show stats for halved array
console.log("Halved array:");
calculateStats(halvedNumbers);

// 4. Show stats for halved array
// (Already done above by calling calculateStats on halvedNumbers)

