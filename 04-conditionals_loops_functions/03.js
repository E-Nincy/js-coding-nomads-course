function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

/**
 * 1. Create while loop equivalents of the loops in the previous exercises!
 *
 * 2. Using the random number generator above, write a while loop that generates
 *    random numbers until it has generated one that is divisible by 11. Do you
 *    remember what operator to use?
 */

// Numbers 5 to 1000
let i = 5;
while (i <= 1000) {
    console.log(i);
    i += 5;
}

// Numbers 100 to -100
let j = 100;
while (j >= -100) {
    console.log(j);
    j--;
}

// Sequence 3,2,5,4,7,6,...
let num = 0;
let k = 0;
while (k < 5000) {
    if (k % 2 === 0) {
        num += 3;
    } else {
        num -= 1;
    }
    k++;
}
console.log(num);

// Random numbers until one divisible by 11
let randomNum = getRandomNumber();

while (randomNum % 11 !== 0) {
    console.log(randomNum); // Optional: log the numbers generated
    randomNum = getRandomNumber();
}

console.log(`Divisible by 11 found: ${randomNum}`);
