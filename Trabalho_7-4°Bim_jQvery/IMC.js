$("#button").click(function (){
  let nome = parseFloat($("#NX").val());
  let altura = parseFloat($("#HX").val());
  let peso = parseFloat($("#PX").val());
  let result = parseFloat($('#result').val());
  let resul2 = parseFloat($('#resul2').val());

  let resultado = peso / Math.pow(altura,2);
  $("#result").html("IMC: "+resultado);

  if (resultado<16) {$("#resul2").html("Baixo Peso Muito Grave");
  }else if (resultado<17) {$("#resul2").html("Baixo Peso Grave");
  }else if (resultado<18.50) {$("#resul2").html("Baixo Peso");
  }else if (resultado<25) {$("#resul2").html("Peso Normal");
  }else if (resultado<30) {$("#resul2").html("Sobrepeso");
  }else if (resultado<35) {$("#resul2").html("Obesidade grau I");
  }else if (resultado<40) {$("#resul2").html("Obesidade grau II");
  }else {$("#resul2").html("Obesidade grau III");}
})
