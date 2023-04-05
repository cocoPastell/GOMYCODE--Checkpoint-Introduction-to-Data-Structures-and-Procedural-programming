//version 1
let arraySet1 = [3, 1, 7, 9];
let arraySet2 = [2, 4, 1, 9, 3];
let counter = true;
let output = 0;

for (let i = 0; i < arraySet2.length; i++) {
  for (let j = 0; j < arraySet1.length; j++) {
    if (arraySet2[i] == arraySet1[j]) {
      counter = false;
    }
  }
  if (counter == true) {
    output += arraySet2[i];
  }
  counter = true;
}
for (let i = 0; i < arraySet1.length; i++) {
  for (let j = 0; j < arraySet2.length; j++) {
    if (arraySet1[i] == arraySet2[j]) {
      counter = false;
    }
  }
  if (counter == true) {
    output += arraySet1[i];
  }
  counter = true;
}
console.log(output);

//version 2
let arrSet1 = [3, 1, 7, 9];
let arrSet2 = [2, 4, 1, 9, 3];
let result = 0;

for (let i = 0; i < arrSet1.length; i++) {
  if (!arrSet2.includes(arrSet1[i])) {
    result += arrSet1[i];
  }
}

for (let i = 0; i < arrSet2.length; i++) {
  if (!arrSet1.includes(arrSet2[i])) {
    result += arrSet2[i];
  }
}

console.log(result);
