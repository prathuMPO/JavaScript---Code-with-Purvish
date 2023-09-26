// Primitive

// 7types: String, number, boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidetemp = null

const id = Symbol('256')   // this and down line has same value but retuen the different value cause of Symbol
const anotherId = Symbol('256')
console.log(id === anotherId)

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
    console.log(" Hello World");
}

console.log(typeof bigNumber);
console.log(typeof myFunction);