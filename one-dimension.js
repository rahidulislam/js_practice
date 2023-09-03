//one dimension array
function highestScore(score){
    let max = score[0]
    for(let x=0; x<score.length; x++){
        if(max < score[x]){
            max = score[x]
        }
    }
    return max;

}

let score = [45,67,37,80,83,95];
console.log(highestScore(score));
