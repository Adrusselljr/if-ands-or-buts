const prompt = require("prompt-sync")()

const person1Paid = Number(prompt("Please enter the amount Person 1 paid: "))
const person2Paid = Number(prompt("Please enter the amount Person 2 paid: "))

let total = 0
let owed = 0
let each = 0

if(person1Paid > person2Paid) {
    total = person1Paid + person2Paid
    each = total / 2
    owed = each - person2Paid
    console.log(`Person 2 owes Person 1 $${owed}`)
}
else if(person2Paid > person1Paid) {
    total = person2Paid + person1Paid
    each = total / 2
    owed = each - person1Paid
    console.log(`Person 1 owes Person 2 $${owed}`)
}
else {
    console.log("Noone owes anyone money!")
}