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




//  AFTER HOURS...Chad, Jordan, and Neamen.
const numArr = [12, 3, 5, 42, 253, 21, 4, 6, 54];

// Take an array of numbers and return the sum.

const numSum = (numberArr) => {
    return numberArr.reduce((accumuulatior, currentValue) => acc + currentValue, 0);
};
// console.log('SUM OF NUMBERS', numSum(numArr));

// Take an array of numbers and return the average.

const average = (numberArr) => {
    return numSum(numberArr) / numberArr.length;
};
// console.log(average < numArr);

// Take an array of strings and return the longest string.
const stringArr = ['say', 'hello', 'in', 'the', 'morning'];
const colors = ['green', 'blue', 'yellow', 'red', 'aquamarin'];


const longestString(array) => {
    const sortedArray = strArray.sort((a, b) => a.length - b.length);

    return sortedArray[0];
};

console.log(longestString(colors));

// Take an array of strings, and a number and return an array of the strings that are longer than the given number.

function countBetween(number) {
    if (number > 0) {
        counteBetween(number - 1);
        console.log(number = " ");
    }
    return;
}
console.log(countBetween(10));


// Use callback functions alongside Array methods to accomplish the following:
// Sort the array by age.
// Filter the array to remove entries with an age greater than 50.



// Map the array to change the “occupation” key to “job” and increment every age by 1.
// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the 
const people = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
                { id: "48", name: "Barry", occupation: "Runner", age: "25" },
                { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
                { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
                { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

const sortByAge =(people) =>{
    const sortedPeople= people.sort(( personA))
}


