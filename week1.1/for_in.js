const arr = [1, 2, 3, 4, 5]
for (let i in arr) {
    console.log(i)
    console.log(arr[i])
}
// for-of loop is used to loop into array instead of for-in loop
for (element of arr){
    console.log(element)
}
// looping into object. for-in loop is used in object
const profile = {
    name: 'John',
    age: 30,
    city: 'New York',
    skills: ['JavaScript', 'Python', 'C++']
}
for (let key in profile) {
    console.log(key)
    console.log(profile[key])
}