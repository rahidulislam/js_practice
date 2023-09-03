//two dimension array

function highestScorer(playerInfo){
    let highestRunScorer = playerInfo[0][0];
    let highestRunScore = playerInfo[0][1];
    for(x=1; x<playerInfo.length; x++){
        if(highestRunScore < playerInfo[x][1]){
            highestRunScore = playerInfo[x][1];
            highestRunScorer = playerInfo[x][0];

        }
    }
    return highestRunScorer

}
let playerInfo = [
    ["player1",45],
    ["player2",67],
    ["player3",87],
    ["player4",80],
    ["player5",83],
]
console.log(highestScorer(playerInfo));