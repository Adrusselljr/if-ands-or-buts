const prompt = require("prompt-sync")()

const person1Paid = Number(prompt("Please enter the amount Person 1 paid: "))
const person2Paid = Number(prompt("Please enter the amount Person 2 paid: "))

let owed = 0

if(person1Paid === person2Paid) {
    console.log("Noone owes anyone money!")
}
else if(person1Paid > person2Paid) {
    owed = person1Paid - person2Paid
    console.log(`Person 2 owes Person 1 $${owed}`)
}
else {
    owed = person2Paid - person1Paid
    console.log(`Person 1 owes Person 2 $${owed}`)
}