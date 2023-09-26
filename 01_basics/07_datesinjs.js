let myDate = new Date()
console.log(myDate.toString()); 
console.log(myDate.toJSON()); 
console.log(myDate.toLocaleDateString()); 
console.log(myDate.toLocaleString()); 
console.log(typeof myDate); 

// let myCretaedDate = new Date(2023, 0, 23)
// let myCretaedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("01-14-2023")
// console.log(myCretaedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getDay());

//its imp 
newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: 'india'
})