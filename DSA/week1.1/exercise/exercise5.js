function printPyramid(rows){
    for(let i=1;i<=rows;i++){
        let line = ''
        for(let j=1;j<=i;j++){
            line += j
        }
        console.log(line)
    }
    for(let i=rows;i>0;i--){
        let line = ''
        for(let j=1;j<=i;j++){
            line += j
        }
        console.log(line)
    }
}

printPyramid(5)
