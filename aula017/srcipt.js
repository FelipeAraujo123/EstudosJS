let numero = document.querySelector("input#txtnumero");
let res = document.querySelector("div#res");
let lista = document.querySelector("select#lista");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(numero.value) && !inLista(numero.value, valores)) {
    valores.push(Number(numero.value));
    let item = document.createElement("option");
    item.text = `Valor ${numero.value}`;
    lista.appendChild(item);
  } else {
    window.alert("Valor inválido ou já encontrado na lista!");
  }
  numero.value = "";
  numero.focus();
  res.innerHTML = "";
}

function finalizar() {
  valores.sort();
  if (valores.length == 0) {
    window.alert("Adicione valores");
  } else {
    let total = valores.length;
    let menor = valores[0];
    let maior = valores[total - 1];
    let soma = 0;
    let media = soma / total;

    for (let aux in valores) {
      soma += valores[aux];
    }
    media = soma / total;

    res.innerHTML = "";
    res.innerHTML += `<p> Números cadastrados: ${total}`;
    res.innerHTML += `<p> Menor valor: ${menor}`;
    res.innerHTML += `<p> Maior valor: ${maior}`;
    res.innerHTML += `<p> Soma dos valores: ${soma}`;
    res.innerHTML += `<p> Media dos valores: ${media.toFixed(2)}`;
  }
}
