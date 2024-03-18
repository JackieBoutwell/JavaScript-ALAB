// Your task is to create a program that advises a group of environmental scientists how to handle the growth and spread of a unique plant species under their supervision. You must develop a growth control system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.
// Here is the information you have been given:
// The area in which the plants are contained is circular, with a radius of 5 meters.
const growthRadius = 5; 
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
const = 3.1415;
const initialArea = PI * growthRadius * growthRadius;
console.log('Area available =${area}');
// Each 
const requiredArea = 0.8;
//  The area
let startingPlants = 20;
// The pla
const growRate = 2;

console.log('\n\n\n\n Part2 \n\n\n')

// Using this information, your objectives are to:

// Predict the plant growth after a specific number of weeks.
let weeksGrown = 0;
console.log('Weeks grown =${weeksGrown}');
let totalPlants = startingPlants * (growthRate ** weeksGrown);
console.log('Total plants =${toatalPlants}')
let plantArea = totalPlants * requiredArea
console.log('Area Needed =${plantArea}');

// Implement control flow to make decisions on whether the plants should be:
// Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.

plantGrowth = startingPlants * requiredArea * (growthRate ** weeksGrown);
console.log('weeksgrown =')
console.log('prune plants') {



    let weeksGrown = 0;
console.log('Weeks grown =${weeksGrown}')
    plantGrowth = startingPlants * requiredArea * (growthRate ** weeksGrown)
} if (plantGrowth > area * .8) {
    console.log('Prune Plants.');
} else if (plant Growth > area > .5) {
    console.log('Plants should be monitored.')
} else {
    console.log('There is room to plant more.')
}


let weeksGrown = 1;
console.log('Weeks grown =${weeksGrown}')
plantGrowth = startingPlants * requiredArea * (growthRate ** weeksGrown);
if (plantGrowth > area * .8) {
    console.log('Prune Plants.');
} else if (plant Growth > area > .5) {
    console.log('Plants should be monitored.')
} else {
    console.log('There is room to plant more.')
}


let weeksGrown = 2;
console.log('Weeks grown =${weeksGrown}')
plantGrowth = startingPlants * requiredArea * (growthRate ** weeksGrown);
if (plantGrowth > area * .8) {
    console.log('Prune Plants.');
} else if (plant Growth > area > .5) {
    console.log('Plants should be monitored.')
} else {
    console.log('There is room to plant more.')
}

weeksGrown = 3;
console.log('\n Weeks grown: ${weeksGrown}');
totalPlants = initialStartingPlants * (growthRate ** weeksGrown);
console.log('Total plant: ${'totalPlants}');
requiredArea = totalPlants * requiredAreaPerPlant;
console.log('Area needed: ${requiredArea} m2');


let weeksGrown = 3;
console.log('Weeks grown =${weeksGrown}')
plantGrowth = startingPlants * requiredArea * (growthRate ** weeksGrown);
if (requiredArea > initialArea * .8) {
    console.log('Prune Plants.');
} else if (requiredArea > initialArea* .5) {
    console.log('Plants should be monitored.');
} else {
    console.log('There is room to plant more.');
}

console.log('\n\n\n\n Part2 \n\n\n')

// The conservation area in which the garden is located has multiple other gardens.
// Using the logic you have already created, determine:
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
let new StartingPlants = 100;
weeksGrown = 10;
console.log('Weeks grown: ${weeksGrown}');
totalPlants = startingPlants * (growRate ** weeksGrown);
console.log('Total plant: $ {totalPlants}');
requiredArea = totalPlants * requiredAreaPerPlant;
console.log('Area needed: ${requiredArea} m2');

// If the space remained circular, what would be the radius of this expanded garden?
let newGrowthRadius = Math.sqrt(plantGrowth / PI);
console.log('Radius needed: ${newGrowthRadius.toFixed(2)}m');

console.log('\n\n\n\n Part3 \n\n\n')

// Part 3: Errors in Judgement
// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
startingPlants = 100;
requiredArea = StartingPlants * requiredAreaPerPlant;
console.log('Starting plants: ${StartingPlants}');
console.log('Area needed: ${RequiredArea}');
console.log('Area available: ${initialArea.toFixed(2)} m2');

// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.
try {
    if (requiredArea < initialArea) {
        console.log('There is enought space available.');
    } else {
        throw "Error =Not enough space available.");
    } catch (error) {
        console.log(error);
    }