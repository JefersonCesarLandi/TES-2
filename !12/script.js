function validaNome(){
  let regex = /^[a-zA-Z ]{3,50}$/
  let elementoNome = document.dados.nome
  let nome = elementoNome.value
  if (regex.test(nome)) {
    elementoNome.classList.remove("erro");return false
    elementoNome.classList.add("certo");return true
  } else {
    elementoNome.classList.add("erro");return false
    elementoNome.classList.remove("certo");return true
  }
}

function validaCPF(){
  let regex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\.[0-9]{2}$/
  let elementoCPF = document.dados.cpf
  let cpf = elementoCPF.value
  if (regex.test(cpf)) {
    elementoCPF.classList.remove("erro");return false
    elementoCPF.classList.add("certo");return true
  } else {
    elementoCPF.classList.add("erro");return false
    elementoCPF.classList.remove("certo");return true
  }
}

function validaidade(){
  let regex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\.[0-9]{2}$/
  let elementoidade = document.dados.idade
  let idade = elementoidade.value
  if (regex.test(idade)) {
    elementoidade.classList.remove("erro");return false
    elementoidade.classList.add("certo");return true
  } else {
    elementoidade.classList.add("erro");return false
    elementoidade.classList.remove("certo");return true
  }
}

function validar(){
  let flag = true;

  if(!validaNome()){flag=false;}
  if(!validaCPF()){flag=false;}
  if(!validaidade()){flag=false;}
  return flag;
}
