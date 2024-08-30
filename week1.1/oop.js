class Person{
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

person1=new Person('John','Doe')
console.log(person1)
console.log(person1.fullName())