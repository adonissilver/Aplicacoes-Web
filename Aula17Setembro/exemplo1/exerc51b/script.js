const estados = [
    "Fulano", "Beltrano", "Ciclano"
];

const siglas = [
    "FT", "BS", "CS"
];

const capitais = [
    "Fulano de Tal", "Beltrano da Silva", "Ciclano dos  Santos "
];

const areas = [
    "164.173.429", "27.830.661", "142.470.762",
];

const populacoes = [
    "stress", "ansiedade", "burnout.",
];

const bandeiras = ["pexels_a.jpg","pexels_b.jpg","pexels_c.jpg"
    
];

// Elementos da página
const selectEstados = document.getElementById("selectEstados");
const btnDetalhes = document.getElementById("btnDetalhes");
const divCapital = document.getElementById("divCapital");
const divArea = document.getElementById("divArea");
const divPopulacao = document.getElementById("divPopulacao");
const divBandeira = document.getElementById("divBandeira");

// Cria as opções da lista
selectEstados.replaceChildren(new Option("Selecione um Paciente", ""));

estados.forEach((estado, index) => {
    selectEstados.add(new Option(`${estado} (${siglas[index]})`, index));
});

// Mostra os detalhes
btnDetalhes.addEventListener("click", function () {
    const valor = selectEstados.value;

    if (valor === "") {
        divCapital.textContent = "";
        divArea.textContent = "";
        divPopulacao.textContent = "";
        divBandeira.replaceChildren();
        return;
    }

    const index = Number(valor);

    divCapital.textContent = `Nome: ${capitais[index]}`;
    divArea.textContent = `CPF: ${areas[index]}`;
    divPopulacao.textContent = `Queixa: ${populacoes[index]}`;

    const imagem = document.createElement("img");
    imagem.src = bandeiras[index];
    imagem.alt = `Bandeira de ${estados[index]}`;
    imagem.width = 220;

    divBandeira.replaceChildren(imagem);
});