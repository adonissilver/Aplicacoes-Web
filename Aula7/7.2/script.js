function verificarAcesso() {
  const input = document.getElementById("inputEntrada");
  const resultado = document.getElementById("resultado");

  // Obter o valor digitado e converter para Número
  const idade = Number(input.value);

if (idade < 0) {
  resultado.textContent = `Volte daqui a ${(idade*-1) + 18} anos`;
  resultado.classList.remove("permitido");
  resultado.classList.remove("negado");
  resultado.classList.remove("melhoridade")
  resultado.classList.add("naonasceu")

}


  if (idade >= 18) {
    resultado.textContent = "Acesso Concedido";
    resultado.classList.add("permitido");
    resultado.classList.remove("negado");
    resultado.classList.remove("melhoridade")
    resultado.classList.remove("naonasceu")
  }

  if (idade>60){
    resultado.textContent = "Vc deveria estar no baile da terceira idade";
    resultado.classList.remove("permitido");
    resultado.classList.remove("negado");
    resultado.classList.add("melhoridade")
    resultado.classList.remove("naonasceu")

  }
    
  if (idade<18 && idade>=0){
    resultado.textContent = "Seus pais sabem que vc está aqui ? ";
    resultado.classList.remove("permitido");
    resultado.classList.add("negado");
    resultado.classList.remove("melhoridade")
    resultado.classList.remove("naonasceu")
    
  }



}
