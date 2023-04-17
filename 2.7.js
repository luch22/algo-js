let n = new Number(prompt("Quel est ton nombre ?")).valueOf();
let value = 0;

for (let i = 0; i <= n; i++) {
  value = value + i;
  console.log(value);
}

console.log(value);
