// function multiple(num){
//     return num*5;

// }
// multiple(8)
// multiple.power5 = 6;

// console.log(multiple(7));
// console.log(multiple.power5.prototype);

function createUser(username , score){
    this.username  = username,
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
}

const chai = new createUser("chai" , "25");
const tea  = new createUser("tea" , "250");


createUser.prototype.printMe  = function(){
    console.log(`Price of  ${this.score}`);
}

chai.printMe()