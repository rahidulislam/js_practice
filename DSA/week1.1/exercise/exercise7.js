function countOccurrence(a, b) {
    let count = 0;
    for (let i = 0; i < b.length; i++) {
        if (b[i] === a) {
            count++;
        }
    }
    return count;
}
console.log(countOccurrence('a', 'abracadabra'))