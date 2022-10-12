let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
    let total = 0;
    for (let count = 0; count < scores.length; count++) {
        total = total + scores[count];
    }
    return total/scores.length;
}
let averageScore = getAverage(myScores);
let secondAverage = getAverage(yourScores);

console.log(averageScore.toFixed(2));
console.log(secondAverage.toFixed(2));