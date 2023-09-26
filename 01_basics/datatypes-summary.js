// Primitive

// 7types: String, number, boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidetemp = null

const id = Symbol('256')   // this and down line has same value but retuen the different value cause of Symbol
const anotherId = Symbol('256')
// console.log(id === anotherId)

// const bigNumber = 246468468468464669469469496496n


// Refrece types(non-primitive): 

// Array, objects, Functions

const heros = ["Shaktiman","jethalaal", "doga"]

//objects:

let myibj = {
    name: "purvish",
    age: 22
}

const myFunction = function(){
    // console.log(" Hello World");
}

// console.log(typeof bigNumber);
// console.log(typeof myFunction);

// ********* Memories ********************************

// Stack (primitives) - when we use it one more time then we get its copy niot orginal products,stack make copy of product to use it more time.
// Heap(non-primitive) * whereAs here if we use it more time then we gets its original reference so if we change anything in secondtime it changes in 1st one aswell.both taleke ref. from memory stored in heap.

let myYoutubeName = "SOLOFACTS"

let anotherName = myYoutubeName

anotherName = "bestOFfacts"


console.log(myYoutubeName)
console.log(anotherName)

let user1 = {
    email: "user@fmail.com",
    upi: " user@wdw"
}

let user2 = user1
user2.email = " heving@vernvn.com"
console.log(user1.email);
console.log(user2.email);