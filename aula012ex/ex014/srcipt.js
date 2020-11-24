function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var minuto = data.getMinutes();
  msg.innerHTML = `<p>Agora são ${hora}:${minuto}.</p>`;

  if (hora >= 0 && hora < 12) {
    //BOM DIA
    img.src = "manha.png";
    document.body.style.background = "#dabc7e";
    msg.innerHTML += `<p>Bom dia</p>`;
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE
    img.src = "tarde.png";
    document.body.style.background = "#f1a162";
    msg.innerHTML += "<p>Boa tarde</p>";
  } else {
    //BOA NOITE
    img.src = "noite.png";
    document.body.style.background = "#ac8abd";
    msg.innerHTML += "<p>Boa noite</p>";
  }
}
