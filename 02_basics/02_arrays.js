const marvel_heros = ["thor", "IronMan", "Spiderman"]
const dc_heros = ["Superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros[3][1])

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);   // by using concat make new var and store in it to get combined data

const allNewHeros = [...marvel_heros, ...dc_heros]
console.log(allNewHeros);   // spread operator also combines use, ...name

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_array = anotherArray.flat(Infinity)
console.log(real_array);

console.log(Array.isArray("SOlofacts"))
console.log(Array.from("SOlofacts"))
console.log(Array.from({name:"solofcats"}))  //interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2,score3))