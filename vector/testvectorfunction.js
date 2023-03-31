function dot_product(arrayV1, arrayV2) {
  let ps = 0;

  for (let i = 0; i < arrayV1.length; i++) {
    ps += arrayV1[i] * arrayV2[i];
  }

  return ps;
}

let arrayV1 = [-4, 1, 1];
let arrayV2 = [2, 9, -1];
let ps = dot_product(arrayV1, arrayV2);
console.log(ps);
