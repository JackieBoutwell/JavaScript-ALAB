// Part 1: Fizz Buzz
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(`For number ${i}: Fizz`);
  }
  if (i % 5 === 0) {
    console.log(`For number ${i}: Buzz`);
  }
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`For number ${i} Fizz Buzz`);
  }
  if (i % 3 != 0 && i % 5 != 0) {
    console.log(`For number ${i} Not divisible by 3 or 5 `);
  }
}

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

const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
for (const c of csvString) {
    let cell1 = "";
    if (c != ",") {
        cell1 += c
        console.log(cell1);
    } else {
        break;
    }


    let cell2 = "";
    let cell3 = "";
    let cell4 = "";

}




