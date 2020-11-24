var aux = 2;

//Primeiro testa e depois
while (aux <= 10) {
  if (aux % 2 == 0) {
    console.log(`Tudo bem? Aux recebe ${aux}`);
  } else {
    aux += 2;
  }
  aux++;
}

//Primeiro executa e depois testa
do {
  console.log(`Teste de auxiliar ${aux}`);
  aux++;
} while (aux <= 3);
