//Exercise #2: At Least Five Function
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

let scoreRoom1Result = atLeastFive(studentScoresRoom1, countScore);
console.log(scoreRoom1Result);

let scoreRoom2Result = atLeastFive(studentScoresRoom2,countScore);
console.log(scoreRoom2Result);

let scoreRoom3Result = atLeastFive(studentScoresRoom3,countScore);
console.log(scoreRoom3Result);
function atLeastFive(array, operation) {
  // Start coding here l
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      count++;
    }
  }
  return count >= 5;
}
function countScore(score) {
  return score > 70;
}

// Using `atLeastFive` function here
//
//
// 
