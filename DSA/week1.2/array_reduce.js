const arr = [1,2,3,4,5]
const result = arr.reduce((total,current_num)=>{return total+=current_num},0)
console.log(result)

// example 1
const friends = [
    {name: 'John', books:['Book1', 'Book2'], age: 30},
    {name: 'Sarah', books:['Book3', 'Book4'], age: 31},
    {name: 'Mike', books:['Book5', 'Book6'], age: 32}
]
const friendsBookList = friends.reduce((books,friend)=>{
    return [...books, ...friend.books]
},[])

console.log(friendsBookList)

// example 2
const people = ['John', 'Sarah', 'Mike', 'Sarah',]
const result2 = people.reduce((obj, person)=>{
    if(!obj[person]){
        obj[person]=1
    }else{
        obj[person]++
    }
    return obj
},{})

console.log(result2)

// example 3
const people2 = [{name: 'John', age: 30}, {name: 'Sarah', age: 31}, {name: 'Mike', age: 32}]
function groupByPeople(objArr,property){
    const groupProp = objArr.reduce((acc,curr)=>{
        const prop = curr[property]
        if (prop in acc){
            acc[prop].push(curr)
        }else{
            acc[prop] = [curr]
        }
        return acc
    },{}) 
    return groupProp
    
}
console.log(groupByPeople(people2,'age'))