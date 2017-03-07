$(document).ready(function (){
     alert("Carregou o Documento")
     /*$("#button").click(function (){
       let nomeUsuario = $("#nome").val()
       $("#Resul").html(nomeUsuario)
     })
     $("#nome").keyup(function (){
       let nomeUsuario = $("#nome").val()
       $("#Resul").html(nomeUsuario)
     })*/

     $("#button").click(function (){
       let idade = parseFloat($("#idade").val())
       if (idade < 18) {
         $("#Resul").html("Vai brincar no parqunho da praça da igreja")
       } else if (idade >= 18 && idade <90){
         $("#Resul").html("E open-bar!!!")
       } else {
         $("#Resul").html("Vai jogar xadrez no parqunho da praça da igreja")
       }
     })
})
