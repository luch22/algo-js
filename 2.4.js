let table2 = [];
let table1 = [];
let table3 = [];
let table4 = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    table1.push(i / 2);
  } else {
    table1.push(i * 3);
  }
}
console.log(table1);