function contar() {
  let inicio = document.getElementById("txtinicio");
  let final = document.getElementById("txtfim");
  let passo = document.getElementById("txtpasso");
  let res = document.getElementById("res");

  if (inicio.value.length == 0 || final.value.length == 0) {
    res.innerHTML = "Impossível contar.";
  } else {
    res.innerHTML = "Contando: ";
    let ini = Number(inicio.value);
    let fim = Number(final.value);
    let pa = Number(passo.value);

    if (passo.value.length == 0 || pa <= 0) {
      window.alert("Passo inválido. Será considerado 1 (um) para cálculo.");
      pa = 1;
    }

    if (ini < fim) {
      for (let x = ini; x <= fim; x += pa) {
        res.innerHTML += `${ini} \u{1F449}`;
      }
    } else {
      for (let x = ini; x <= fim; x -= pa) {
        res.innerHTML += `${ini} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
