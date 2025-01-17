let id = Symbol('id')
let id2 = Symbol('id')
console.log(id === id2)
console.log(id.toString())
console.log(id2.description)

let user = {
    name: 'rahidul',}

user.id = 'our id value'
user.id = 'their id value'
user[id] = 'our id value'

console.log(user)