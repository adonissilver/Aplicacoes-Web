function processarJSON() {
  const jsonTexto = document.getElementById("jsonInput").value;
  const output = document.getElementById("output");

  try {
    // TODO: Converta a string 'jsonTexto' em um Objeto/Array JavaScript utilizando JSON.parse()
    const dados = ""; /* TODO - mudar */

    // Limpa o output
    output.textContent = "";

    // TODO: Verifique se 'dados' é um Array e exiba o nome de cada item no elemento 'output'
    // Dica: Você pode usar dados.forEach(...) para concatenar os nomes
    
  } catch (erro) {
    output.textContent = "Erro: O formato inserido não é um JSON válido!";
  }
}

function exportarNovoJSON() {
  const output = document.getElementById("output");

  // Objeto JS de exemplo
  const novoProduto = {
    id: 101,
    nome: "Monitor Gamer 144Hz",
    categoria: "Eletrônicos",
    emEstoque: true
  };

  // TODO: Converta o objeto 'novoProduto' para uma string JSON formatada utilizando JSON.stringify()
  // Dica: Use JSON.stringify(novoProduto, null, 2) para formatar com recuo
  const jsonFormatado = ""; /* TODO - mudar */

  // Exibe na tela
  output.textContent = jsonFormatado;
}