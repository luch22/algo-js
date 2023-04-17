let table1 = [0];
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    table1.push(i / 2);
  } else {
    table1.push(i * 3);
  }
}
console.log(table1);
