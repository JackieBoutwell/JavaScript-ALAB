// Part 1: Fizz Buzz

// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0) {
//     console.log(`For number ${i}: Fizz`);
//   }
//   if (i % 5 === 0) {
//     console.log(`For number ${i}: Buzz`);
//   }
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`For number ${i} Fizz Buzz`);
//   }
//   if (i % 3 != 0 && i % 5 != 0) {
//     console.log(`For number ${i} Not divisible by 3 or 5 `);
//   }
// }

// Part 2: Prime Time

// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number,
// starting at n and incrementing from there.
// As soon as you find the prime number,
// log that number and exit the loop.

// without while loop.
// for (let n = 15; n <= 100; n++) {
//     let isPrime = true;
//     for (let m = 2; m < n; m++) {
//         if (n % m === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(n, 'is prime');
//         break;
//     }
// }

// with a while loop
// let n = 55;
// while (true) {
//     for (let n = 15; n <= 100; n++) {
//         let isPrime = true;
//         for (let m = 2; m < n; m++) {
//             if (n % m === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             console.log(n, 'is prime');
//             break;
//         }
//     }
//     n++;
// }


//Part 3:Feeling Loopy

// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.

const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let cellBuilder = "";
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let rowCounter = 0;

for (const c of csvString) {
  if (c != ",") {
    cellBuilder += c;
  } else {
    if (rowCounter == 0) {
      cell1 = cellBuilder;
    } else if (rowCounter == 1) {
      cell2 = cellBuilder;
    } else if (rowCounter == 2) {
      cell3 = cellBuilder;
    }

    rowCounter++;
    cellBuilder = "";
  }
  
  if (c == "\n") {
    cell4 = cellBuilder;
    console.log(cell1, cell2, cell3, cell4);
    rowCounter = 0;
  }
}
console.log(cell1, cell2, cell3, cell4);