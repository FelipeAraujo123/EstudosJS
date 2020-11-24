function verificar() {
  var data = new Date();
  var ano = data.getFullYear(); //Pegar os 4 dias do ano, no caso 2020 e não 20 apenas
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");

  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("Informe um ano de nascimento válido!");
  } else {
    var sexo = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (sexo[0].checked) {
      genero = "Homem";
      if (idade < 10) {
        //Criança
        img.setAttribute("src", "crianca_homem.png");
      } else if (idade < 25) {
        //Jovem
        img.setAttribute("src", "jovem_homem.png");
      } else if (idade < 60) {
        //Adulto
        img.setAttribute("src", "adulto_homem.png");
      } else {
        //Idoso
        img.setAttribute("src", "idoso_homem.png");
      }
    } else if (sexo[1].checked) {
      genero = "Mulher";
      if (idade < 10) {
        //Criança
        img.setAttribute("src", "crianca_mulher.png");
      } else if (idade < 25) {
        //Jovem
        img.setAttribute("src", "jovem_mulher.png");
      } else if (idade < 60) {
        //Adulto
        img.setAttribute("src", "adulto_mulher.png");
      } else {
        //Idoso
        img.setAttribute("src", "idoso_mulher.png");
      }
    } else {
      genero = "Incorreto";
    }
    res.style.textAlign = "center";
    res.innerHTML = `${genero} com ${idade} anos<br>`;
    res.appendChild(img);
  }
}
