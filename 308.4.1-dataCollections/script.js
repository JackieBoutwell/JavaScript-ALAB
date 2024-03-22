// Part 1

// const CSVdata = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// console.log(CSVdata.split(' ,'))
// let rows = CSVdata.split('\n')
// console.log(rows)

// for (let i in rows) {
//     let cell = rows[i].split(',')

//     console.log(cell)
// }

// Part 2

const CSVdata = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// console.log(CSVdata.split(' ,'))
let rows = CSVdata.split('\n')
// console.log(rows)
const firstData = []

for (let i in rows) {
    let cell = rows[i].split(',')
    firstData.push(cell)

    // console.log(cell)
}
// console.log("first", firstData)



// // Part 3
// for (let i = 1; i < firstData.length; i++) {
// const object = {}
// object.id = firstData[i][0]
// object.name = firstData[i][1]
// object.occupation = firstData[i][2]
// object.age = firstData[i][3]

//      // console.log(object)
// }


// Part 4

let newArr = []

for (let i = 1; i < firstData.length; i++) {
const object = {} 
object.id = firstData[i][0]
object.name = firstData[i][1]
object.occupation = firstData[i][2]
     object.age = firstData[i][3]
     
     newArr.push(object)
}

console.log(newArr)
newArr.pop()

console.log(newArr)

// splice(index,arrayElemetnsTOdelete,thingYouwanttoadd)

newArr.splice(1,0, {id: "48", name: "Barry", occupation: "Runner", age: "25" })
console.log (newArr)

newArr.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
console.log (newArr)

// console.log(newData[0].Age+newData[1].Age+newData[2].Age+newData[3].Age)
// console.log

// Part 5

// let newData = [
//     { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//     { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//     { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//     { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//     { id: "7", name: "Bilbo", occupation: "None", age: "111" } ]

// let csc = ""
// for (let i = 0; i < newData.length; i++) {
//     csc = csc + newData[i].id + ","
//         + newData[i].name + ","
//         + newData[i].occupation + ","
//         + newData[i].age + ","
        
// }

// console.log(csc)
