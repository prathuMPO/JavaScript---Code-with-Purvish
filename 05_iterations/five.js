const coding = ["js", "python", "java", "rubby"]

// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        lauName: "java",
        langFileName: "java"
    },
    {
        lauName: "python",
        langFileName: "py"
    },
    {
        lauName: "c++",
        langFileName: "cpp"
    },
]

myCoding.forEach( (item) =>{
    console.log(item.langFileName);
} )