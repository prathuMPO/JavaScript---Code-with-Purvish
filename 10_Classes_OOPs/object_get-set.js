const USer = {
    _email: 'teradholida@garba.nav',
    _password: "Pass number",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }

}

const TEa = Object.create(USer)
console.log(TEa.email);