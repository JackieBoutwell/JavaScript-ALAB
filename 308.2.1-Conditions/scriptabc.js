// Your task is to create a program that advises a group of environmental scientists how to handle the growth and spread of a unique plant species under their supervision. You must develop a growth control system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.
// Here is the information you have been given:
// The area in which the plants are contained is circular, with a radius of 5 meters.
//const growthRadius = 5;
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
//const pi = 3.1415;
// const initialArea = pi * growthRadius * growthRadius;
//console.log('Area available =${area}');
// Each
//const requiredArea = 0.8;
//  The area
//let startingPlants = 20;

const initialArea = 3.1415 * 5 * 5;
let weeksGrown = 1;
let totalPlants = 20;

for (let i = 0; i < weeksGrown; i++) {
    totalPlants = totalPlants * 2;
}

const plantArea = totalPlants * 0.8;

if (initialArea * 0.8 < plantArea) {
    console.log("Should be pruned");
} else if (initialArea * 0.5 < plantArea) {
    console.log("Should be monitored");
} else {
    console.log("Planted");
}








// The pla
// const growRate = 2;

//console.log('\n\n\n\n Part2 \n\n\n')

// Using this information, your objectives are to:

// Predict the plant growth after a specific number of weeks.



// Implement control flow to make decisions on whether the plants should be:
// Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.





    // let weeksGrown = 0;



    // let weeksGrown = 1;



//  let weeksGrown = 2;


    // let weeksGrown = 3;


// The conservation area in which the garden is located has multiple other gardens.
// Using the logic you have already created, determine:
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.

// If the space remained circular, what would be the radius of this expanded garden?


// Part 3: Errors in Judgement
// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.


// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.
