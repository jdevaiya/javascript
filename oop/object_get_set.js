const User = {
    _email : 'j@fb.com',
    _password :'abd',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value
    },

    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password = value
    }

}

const tea = Object.create(User)
console.log(tea.email);
