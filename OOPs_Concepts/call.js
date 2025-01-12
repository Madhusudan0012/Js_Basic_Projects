function SetUserName(username) {
    //complex DB Call
    this.username = username;
}
function createUser(username , email  , password){
    SetUserName.call(this , username);
    this.email = email;
    this.password = password;

}

const chai = new createUser("chai" , "chai@gmail.com" , "234")
console.log(chai);