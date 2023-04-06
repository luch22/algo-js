jour = new Number(prompt("Entrer un nombre entre 1-7")).valueOf();

switch (jour) {
  case 1:
    alert("Lundi");
    console.log("1");
    break;
  case 2:
    alert("Mardi");
    console.log("2");
    break;
  case 3:
    alert("Mercredi");
    console.log("3");
    break;
  case 4:
    alert("Jeudi");
    console.log("4");
    break;
  case 5:
    alert("Vendredi");
    console.log("5");
    break;
  case 6:
    alert("Samedi");
    console.log("6");
    break;
  case 7:
    alert("Dimanche");
    console.log("7");
    break;
  default:
    alert("mauvaise entré");
}
