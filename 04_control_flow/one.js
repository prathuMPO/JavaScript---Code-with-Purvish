// if
// const isUserloggedIn = true

// const temp = 41

// if( temp < 50){
//     console.log("less than 50")

// }
// else{
// console.log("temp is greater than 50")
// } 

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`user power: ${power}`)
// }
// console.log(`user power: ${power}`)

// const balance = 1000

// if(balance > 500) console.log("test");    >> donot use this syntax


// if(balance < 500){
//     console.log("less than 500")
// }

// else if(balance < 750){
//     console.log(" less than 750")
// }
// else if(balance < 900){
//     console.log(" less than 900")
// }
// else{
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){    // && means both the conditions must be satisfied
    console.log("Allowed to buy course")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user loggedIn")
}     // || means any of one should satisfy to run the code