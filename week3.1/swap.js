function swap(a,b) {
    const c = a
    a = b
    b = c
    return [a,b]
}
console.log(swap(5,3))