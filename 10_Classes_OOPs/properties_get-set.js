function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this.password.toUpperCase()
        },
        set: function(value){
            this.password = value
        }
    })
}

const chai = new User("Chai@chai.com", "Tea")
console.log(chai.email);