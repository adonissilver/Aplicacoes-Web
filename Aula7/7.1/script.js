function atualizarPerfil() {
  // 1. Declare três variáveis com suas informações (nome, idade e biografia)
  let nome="Adonis";
  let idade="42";
  let bio="Desenvolvedor web apaixonado por educação."

document.getElementById("nome").textContent=nome;
document.getElementById("idade").textContent="Idade: " + idade;
document.getElementById("biografia").textContent=bio;
}