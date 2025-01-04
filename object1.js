// let user = new Object();
// let user = {}
let user = {
    name:"John",
    age:30
}
console.log(user)
// add a property
user.isAdmin = true;
user["likes birds"]=true
console.log(user)

// delete a property
delete user.isAdmin
console.log(user)


function makeUser(name,age){
    return {
        name:name,
        age:age
    }
}
let user1=makeUser("John",30);
console.log(user1)

// shorthand
function makeUser1(name,age){
    return {
        name,
        age
    }
}
let user2=makeUser1("John",30);
console.log(user2)

let obj = {
    for:1,
    let:2,
    return:3
}
console.log(obj.for+obj.let+obj.return)

let obj1 = {0:"test"};
console.log(obj1[0])
console.log(obj1["0"])
let key="age"
console.log(key in user)

for(let key in user){
    console.log(key)
    console.log(user[key])
}

let codes ={
    "49":"Germany",
    "44":"UK",
    "1":"USA"
}
for(let code in codes){
    console.log(code)
    console.log(codes[code])
}

let menu = {
    width:200,
    height:300,
    title:"My menu"
}
multiplyNumeric(menu);
function multiplyNumeric(obj){
    for (let key in obj){
        if (typeof obj[key]=="number"){
            obj[key]*=2;
        }
    }
}

let user3 = {
    name:"John",
    age:30
}
let admin = user3;
admin.age=40;
console.log(user3)

let clone ={}
for (let key in user3){
    clone[key]=user3[key]
}
console.log(clone)
clone.name="Pete"
console.log(clone)
console.log(user3)
let permissions1 = {canView:true}
let permissions2 = {canEdit:true}
Object.assign(user3,permissions1,permissions2)
console.log(user3)
let clone1 = Object.assign({},user3)
console.log(clone1)

let user4={
    name:"John",
    sizes:{
        height:182,
        width:50
    }
}
let clone2 = Object.assign({},user4)
console.log(user4.sizes===clone2.sizes)
let clone3 = structuredClone(user4)
console.log(user4.sizes===clone3.sizes)

console.log(clone3.me === clone3)

// this in object
let user5 = {name:"John"}
let admin1 = {name:"Admin"}
function sayHi(){
    console.log(this.name)
}
user5.f = sayHi;
admin1.f = sayHi;
user5.f()
admin1.f()

function makeUser2(){
    return {
        name:"John",
        ref:this
    }
}
let user6 = makeUser2();
console.log(user6.ref.name)
