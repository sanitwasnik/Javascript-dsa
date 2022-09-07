// reference type : it is a non-primitive type 
var object1 = {value: 10};
var object2 = object1;
var object3 = {value:10};

// context vs scope

const object4 = {
    a: function(){
        console.log(this);
    }
}

// instantation type
// copy of object and reuse the code 
// whenever we extend class ,we use super essentially has access to these.


class Player{
    constructor(name, type){
        console.log('Player', this);
        this.name=name;
        this.type=type;
    }
    inroduce(){
        console.log('hi ${this.name} , ${this.type}' );
    }
}
class Wizard extends Player{
    constructor(name, type){
        super(name,type)
        console.log('Wizard', this);
    }
    play(){
        console.log("woooooh! it's me ${this.name}");
    }
}
const wizard1 = new Wizard("sanit","programmer");
