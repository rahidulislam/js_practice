let a =2+2
switch (a){
    case 3:
        console.log('Too small')
        break
    case 4:
        console.log('Exactly!')
        break
    case 5:
        console.log('Too large')
        break
    default:
        console.log('I dont know such values')
        break
}

let b = "1"
let c =0
switch (+b){
    case c+1:
        console.log("This runs,because +b is 1 exactly equals c+1")
        break
    default:
        console.log("This doesn't run")
}