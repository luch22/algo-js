let min = new Number(prompt("nombre minimal ?"));
let max = new Number(prompt("Nombre max ?"));
if (min > max) {
  alert("désole... MAIS VOUS N'AVEZ RIEN COMPRIS ");
  close();
}
let current = new Number(prompt("Nombre actuelle ?"));

if (min < current < max) {
  alert(
    current.toString() +
      " est plus petit que " +
      max.toLocaleString() +
      " et est plus grand que " +
      min.toString()
  );
  console.log(
    current,
    " est plus petit que ",
    max,
    " et est plus grand que ",
    min
  );
}
