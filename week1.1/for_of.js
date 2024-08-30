// for-of loop is used in array
const profile = ['rahidul',30, 'developer']
for (element of profile) {
    console.log(element)
}

// for of loop inside a function
function addProfile(profile){
    for (let p of profile){
        console.log(p)
    }
}

addProfile(profile)