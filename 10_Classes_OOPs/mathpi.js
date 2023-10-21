const desripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(desripter);

// console.log(Math.PI);

const chai = {
    name: "gingeradrak chai",
    price: 499,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bani");

    }

}

console.log(Object.getOwnPropertyDescriptor(chai, "name")
);

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for(const [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);

    }
}

