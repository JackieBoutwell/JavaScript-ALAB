// PART 1 Sum of Array

// function numSum(param) {
//     let sum = 0;
//     for (let i = 0; i < param.length; i++) {
//         sum += param[i];
//     }
//     return sum;
// }
// console.log(numSum(numArr));

// //PART 2 Average of Array

// function average(nums){
//      sum = numSum;
//      console.log(sum)
//     let average = numSum(nums) /nums.length;
//     return console.log(average);
// }

// average(numArr);

// //PART 3 Longest String

// const newArr2 = ["to", "quick", "brown", "fox", "jumped", "over", "toe"]
// function longestString(array) {
//     let longWordLength = 0;
//     let longestWord;
//     for (let i = 0; i < array.length; i++) {
//         let currentWord = array[i];
//         if (currentWord.length > longWordLength) {
//             longWordLength = currentWord.length;
//             longestWord = currentWord;
//         }
//     }
//     return longestWord;
// }
// console.log(longestString(newArr2))




//  CHAD HELPING ME AFTER HOURS...
const numArr = [1, 2, 3, 4, 5, 6, 7];


const numSum = (numberArr) => {
    return nuymberArr.reduce((accumuulatior, currentValue) => acc + currentValue, 0);
};
console.log('SUM OF NUMBER', numSUm(numArr));


const average = (numberArr) => {
    return numSum(numberArr) / numberArr.length;
};
console.log(average < numArr);



// function printNos(n) {
//     if (n >= 0) {
//         printNos(n - 1);
//         console.log(n + " "); '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
//     }
//     return;
// }
// let n = 10;
// printNos(n);


