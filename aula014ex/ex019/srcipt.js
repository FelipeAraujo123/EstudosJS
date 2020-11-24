function calcular() {
  var numero = Number(document.getElementById("numero").value);
  var res = document.getElementById("res");

  if (numero.value == 0 || numero == 0) {
    window.alert("Informe um valor correto!");
  } else {
    res.innerHTML = "";
    for (var x = 0; x <= 10; x++) {
      var item = document.createElement("option");
      item.text = `${x} x ${numero} = ${x * numero}`;
      res.appendChild(item);
    }
  }
}
