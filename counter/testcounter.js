let arrayOutput = [4, 7, 2];
let arraySet1 = [3, 1, 7, 9];
let arraySet2 = [2, 4, 1, 9, 3];
let counter = 0;

for (let i = 0; i < arrayOutput.length; i++) {
  for (let j = 0; j < arraySet1.length; j++) {
    if (arrayOutput[i] == arraySet1[j]) {
      counter += arrayOutput[i];
    }
  }
  for (let k = 0; k < arraySet2.length; k++) {
    if (arrayOutput[i] == arraySet2[k]) {
      counter += arrayOutput[i];
    }
  }
}
console.log(counter);
