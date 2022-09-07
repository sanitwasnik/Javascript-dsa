let user = {
    age:45,
    name:"sanit",
    magic:true,
    scream: function(){
        console.log("ahhhhh!");
    }
}
// o(n)
user.name;  //o(1)
user.scream();                              //o(1)
user.spell="Abbraka dabra ";                //o(1)
//all the properties in the variable user ,when we call out the property it gives the time complexity of o(1)