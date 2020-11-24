var agora = new Date();
var hora = agora.getHours();

console.log(`Agora são ${hora} hora(s).`);

if (hora < 5 && hora >= 0) {
  console.log("Boa madrugada!");
} else if (hora < 12 && hora > 0) {
  console.log("Bom dia!");
} else if (hora < 18 && hora > 0) {
  console.log("Boa tarde!");
} else if (hora < 24 && hora > 0) {
  console.log("Boa noite!");
} else {
  console.log("Horário inválido!");
}
