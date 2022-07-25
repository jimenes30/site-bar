var botaoSaibaMais = document.querySelector('.banner__botao')
var nav_sobre = document.querySelector('#sobre')
function rolar_para_sobre() {
  scrollTo(0, 663)
}

botaoSaibaMais.addEventListener('click', rolar_para_sobre)
nav_sobre.addEventListener('click', rolar_para_sobre)
