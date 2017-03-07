function C(){
  let nome= document.querySelector("#NX").value;
  let altura= document.querySelector("#HX").value;
  let peso= document.querySelector("#PX").value;
  let result = document.getElementById('result');
  let resul2 = document.getElementById('resul2');

  let resultado = peso / Math.pow(altura,2);
  result.innerHTML = "IMC: "+resultado;

  if (resultado<16) {
    resul2.innerHTML = "Baixo Peso Muito Grave";
  }else if (resultado<17) {
    resul2.innerHTML = "Baixo Peso Grave";
  }else if (resultado<18.50) {
    resul2.innerHTML = "Baixo Peso";
  }else if (resultado<25) {
    resul2.innerHTML = "Peso Normal";
  }else if (resultado<30) {
    resul2.innerHTML = "Sobrepeso";
  }else if (resultado<35) {
    resul2.innerHTML = "Obesidade grau I";
  }else if (resultado<40) {
    resul2.innerHTML = "Obesidade grau II";
  }else {
    resul2.innerHTML = "Obesidade grau III";
  }

}
