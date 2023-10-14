// reduce:

const myNums = [1,2,3]

// const mytotal = myNums.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// }, 4)

// using =>

const mytotal = myNums.reduce( (acc, curr) => (acc+curr), 0)

console.log(mytotal)


const shoppingCart = [
    {
        itemName: "learn JS",
        price: 199,
    },
    {
        itemName: "Learn Java",
        price: 199,
    },
    {
        itemName: "learn Pythonpp",
        price: 499,
    },
    {
        itemName: "learn CPPPP",
        price: 1999,
    },
    {
        itemName: "learn Data science",
        price: 599,
    },
    {
        itemName: "learn Business analyst",
        price: 299,
    },
]

// here item denotes the every objects of an array

const priceTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceTotal);