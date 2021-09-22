const prompt = require("prompt-sync")()

const pinCode = '1234'

const enterCode = prompt("Please Enter The Pin Code: ")

if(enterCode === pinCode) {
    console.log("Success!")
}
else {
    console.log("Failure!")
}