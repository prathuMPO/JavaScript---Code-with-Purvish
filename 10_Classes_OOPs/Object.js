function multiplyBy5(num){
 return num*5
}

multiplyBy5.power = 2
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(Username, score){
    this.Username = Username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
}


const chai = new createUser("chaiTea", 25)
const tea = new createUser("teaChai", 250)

chai.printMe()
tea.printMe()
