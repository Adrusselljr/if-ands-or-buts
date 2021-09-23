const prompt = require("prompt-sync")()

const person1Paid = Number(prompt("Please enter the amount Person 1 paid: "))
const person2Paid = Number(prompt("Please enter the amount Person 2 paid: "))
const person3Paid = Number(prompt("Please enter the amount Person 3 paid: "))

let owed1 = 0
let owed2 = 0
let owed3 = 0
let total = 0
let each = 0

function splitTheBill(person1Paid, person2Paid, person3Paid) {

    // find the total amount of bill
    total = person1Paid + person2Paid + person3Paid
    // find what each person should pay
    each = Math.trunc(total / 3)
    // find what each person owes
    owed1 = each - person1Paid
    owed2 = each - person2Paid
    owed3 = each - person3Paid

    console.log(`Owed1: ${owed1}, Owed2: ${owed2}, Owed3: ${owed3}`)

    if(person1Paid === person2Paid && person2Paid === person3Paid) {
        return "No one owes anyone money!"
    }
    else if(person1Paid === person2Paid && person2Paid > person3Paid) {
        return `Person 3 owes Person 1 and Person 2 $${owed3 /2}`
    }
    else if(person1Paid === person3Paid && person3Paid > person2Paid) {
        return `Person 2 owes Person 1 and Person 3 $${owed2 /2}`
    }
    else if(person2Paid === person3Paid && person3Paid > person1Paid) {
        return `Person 1 owes Person 2 and Person 3 $${owed1 / 2}`
    }
    else if(person1Paid > person2Paid && person1Paid > person3Paid && person2Paid > person3Paid) {
        return `Person 3 owes Person 1 $${owed3}`
    }
    else if(person1Paid > person2Paid && person1Paid > person3Paid && person2Paid < person3Paid) {
        return `Person 2 owes Person 1 $${owed2}`
    }
    else if(person2Paid > person3Paid && person2Paid > person1Paid && person3Paid > person1Paid) {
        return `Person 1 owes Person 2 $${owed1}`
    }
    else if(person2Paid > person3Paid && person2Paid > person1Paid && person3Paid < person1Paid) {
        return `Person 3 owes Person 2 $${owed3}`
    }
    else if(person3Paid > person2Paid && person3Paid > person1Paid && person2Paid > person1Paid) {
        return `Person 1 owes Person 3 $${owed1}`
    }
    else if(person3Paid > person2Paid && person3Paid > person1Paid && person2Paid < person1Paid) {
        return `Person 2 owes Person 3 $${owed2}`
    }

}
console.log(splitTheBill(person1Paid, person2Paid, person3Paid))


// I dont have all the If statements complete...but it all works as is right now