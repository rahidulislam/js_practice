const profile = {
    lastName:"islam",
    email:"rahiseli@gmail.com"

}
if ('firstname' in profile){
    console.log(profile.firstname)
}else if('lastName' in profile){
    console.log(profile.lastName)
}
else{
    console.log('Not valid')
}

for (let key in profile){
    console.log(key)
    console.log(profile[key])
}
const keys = Object.keys(profile)
console.log(keys)
const values = Object.values(profile)
console.log(values)
const entries = Object.entries(profile)
console.log(entries)
