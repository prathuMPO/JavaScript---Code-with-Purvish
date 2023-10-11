const user = {
    username:"purvish",
    price: 989,

    // this refers to currwnt context.
    welcomeMessage: function(){
        console.log(`${this.username}, WELCOME TO WEBSITE`)
        console.log(this)
    }
}


// user.welcomeMessage()
// user.username = "kailash"
// user.welcomeMessage()

console.log(this)

// function chai(){
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "purvish "
    console.log(this);
}

//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2

//}

// another way to use it arrow fun
// const addTwo = (num1, num2) =>  (num1 + num2)

// we have to add to the () this brackets to get result.
const addTwo = (num1, num2) =>  ({username: "Krviol"})


console.log(addTwo(5, 9))

const myArray = [2,5,3,7,15]

// myArray.forEach(() => )