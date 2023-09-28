const tinderUser = new Object()
const tinderuser = {}

tinderUser.id = "124gfg"
tinderUser.name = "Andries"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regUser = {
    email: "strnge@yahoo.com",
    fullname: {
        userfullname: {
            fisrtname: "Chavanuk",
            lastname: "kreli"
        }
    }
}

console.log(regUser.fullname.userfullname);

const obj1 = {1: "a", 2: "n"}
const obj2 = {3: "J", 4: "K"}

// const obj3 = Object.assign({}, obj1, obj2) // {} it means all the objects targeted into that bracket, ptherwise all the objects combined into 1st obj, so {}, is the good practoce to use.
const obj3 = {...obj1, ...obj2} // spread operator 
console.log(obj3);

const users = [
    {
        id:1,
        email: "h2f@gmail.com"
    },
    {

    },
    {

    }
]

users[1].email // to access th 1st value

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));