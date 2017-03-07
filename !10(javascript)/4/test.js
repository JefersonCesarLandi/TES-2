function digaOi() {
  alert("Oi!");
}

function clicou() {
  let elementoNome = document.getElementById('nome');
  let nomeUsuario = elementoNome.value;
  let resultado = document.getElementById('result');
  resultado.innerHTML = nomeUsuario;
}
