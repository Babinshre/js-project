//singleton 
/* 
used by constructure
object.create
*/

//objects literals
const JsUser = {} // empty object

const sym = Symbol("key1")

const ObjUser = {
    name : "babin",
    age : 27,
    [sym] : "key1", // this way we refer to above symbol variable
    "nickname" : "kando",
    location : "khandbari",
    isLoggedIn : true,
    loginDay : ["friday", "saturday" , "sunday"]
}

// add function to object

ObjUser.greeting = function () {
    console.log("hello user");
}
ObjUser.greetingtwo = function () {
    console.log(`hello user,${this.name}`); // ` this symbol is used for string interpolation
}

//different ways to display
console.log(ObjUser.name);
console.log(typeof ObjUser[sym]);
console.log(ObjUser["name"]);

console.log(ObjUser["nickname"]) //in this case only this way can show the value
console.log(ObjUser.greeting());
console.log(ObjUser.greetingtwo());


