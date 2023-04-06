let table2 = [];
let table1 = [];
let table3 = [];
let table4 = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    table1.push(i);
  }
}
let i = 0;
do {
  i++;
  if (i % 2 === 0) {
    table2.push(i);
  }
} while (i < 100);

for (let i = 1; i <= 50; i++) {
  table3.push(i * 2);
}
for (let i = 2; i <= 100; i = i + 2) {
  table4.push(i);
}
console.log(table1);
console.log(table2);
console.log(table3);
console.log(table4);
