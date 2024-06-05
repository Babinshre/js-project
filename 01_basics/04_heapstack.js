
//stack(primitive) heap(non-primitive)

//this is how stack works for primitive types
let memoryOne = "value1"
let memoryTwo = memoryOne
console.log(memoryOne);
console.log(memoryTwo);

//let's change the value of memorytwo

memoryTwo = "changedvalued"
console.log(memoryOne);
console.log(memoryTwo);

//this is how heap works for non primitive types

let objOne = {
    name : "babin",
    email : "bingoggle@gmail.com"
}
console.log(objOne.email);

let objTwo = objOne

objTwo.email = "babinnewmail@gmail.com" //this will change to both obj mail

console.log(objOne.email)
console.log(objTwo.email)
