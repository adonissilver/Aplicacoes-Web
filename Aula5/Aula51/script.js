const estados = [
    "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará",
    "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão",
    "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará",
    "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro",
    "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia",
    "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
];

const siglas = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO",
    "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI",
    "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

const capitais = [
    "Rio Branco", "Maceió", "Macapá", "Manaus", "Salvador",
    "Fortaleza", "Brasília", "Vitória", "Goiânia", "São Luís",
    "Cuiabá", "Campo Grande", "Belo Horizonte", "Belém",
    "João Pessoa", "Curitiba", "Recife", "Teresina",
    "Rio de Janeiro", "Natal", "Porto Alegre", "Porto Velho",
    "Boa Vista", "Florianópolis", "São Paulo", "Aracaju", "Palmas"
];

const areas = [
    "164.173,429 km²", "27.830,661 km²", "142.470,762 km²",
    "1.559.255,881 km²", "564.760,429 km²", "148.894,447 km²",
    "5.760,784 km²", "46.074,448 km²", "340.242,859 km²",
    "329.651,496 km²", "903.208,361 km²", "357.142,082 km²",
    "586.513,983 km²", "1.245.870,704 km²", "56.467,242 km²",
    "199.298,981 km²", "98.067,877 km²", "251.755,481 km²",
    "43.750,425 km²", "52.809,599 km²", "281.707,151 km²",
    "237.754,172 km²", "223.644,530 km²", "95.730,690 km²",
    "248.219,485 km²", "21.938,188 km²", "277.423,627 km²"
];

const populacoes = [
    "830.018 hab.", "3.127.683 hab.", "733.759 hab.",
    "3.941.613 hab.", "14.141.626 hab.", "8.794.957 hab.",
    "2.817.381 hab.", "3.833.712 hab.", "7.056.495 hab.",
    "6.776.699 hab.", "3.658.649 hab.", "2.757.013 hab.",
    "20.539.989 hab.", "8.120.131 hab.", "3.974.687 hab.",
    "11.444.380 hab.", "9.058.931 hab.", "3.271.199 hab.",
    "16.055.174 hab.", "3.302.729 hab.", "10.882.965 hab.",
    "1.581.196 hab.", "636.707 hab.", "7.610.361 hab.",
    "44.411.238 hab.", "2.210.004 hab.", "1.511.460 hab."
];

const bandeiras = [
    "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bandeira_do_Acre.svg",
    "https://upload.wikimedia.org/wikipedia/commons/8/88/Bandeira_de_Alagoas.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0c/Bandeira_do_Amap%C3%A1.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bandeira_do_Amazonas.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/28/Bandeira_da_Bahia.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2e/Bandeira_do_Cear%C3%A1.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/3c/Bandeira_do_Distrito_Federal_%28Brasil%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/43/Bandeira_do_Esp%C3%ADrito_Santo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_Goi%C3%A1s.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/45/Bandeira_do_Maranh%C3%A3o.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Bandeira_de_Mato_Grosso.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/64/Bandeira_de_Mato_Grosso_do_Sul.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/f4/Bandeira_de_Minas_Gerais.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/02/Bandeira_do_Par%C3%A1.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/bb/Bandeira_da_Para%C3%ADba.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/93/Bandeira_do_Paran%C3%A1.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/59/Bandeira_de_Pernambuco.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/33/Bandeira_do_Piau%C3%AD.svg",
    "https://upload.wikimedia.org/wikipedia/commons/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/30/Bandeira_do_Rio_Grande_do_Norte.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/63/Bandeira_do_Rio_Grande_do_Sul.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Bandeira_de_Rond%C3%B4nia.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/98/Bandeira_de_Roraima.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1a/Bandeira_de_Santa_Catarina.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2b/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/be/Bandeira_de_Sergipe.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/ff/Bandeira_do_Tocantins.svg"
];

// Elementos da página
const selectEstados = document.getElementById("selectEstados");
const btnDetalhes = document.getElementById("btnDetalhes");
const divCapital = document.getElementById("divCapital");
const divArea = document.getElementById("divArea");
const divPopulacao = document.getElementById("divPopulacao");
const divBandeira = document.getElementById("divBandeira");

// Cria as opções da lista
selectEstados.replaceChildren(new Option("Selecione um estado", ""));

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

    divCapital.textContent = `Capital: ${capitais[index]}`;
    divArea.textContent = `Área: ${areas[index]}`;
    divPopulacao.textContent = `População: ${populacoes[index]}`;

    const imagem = document.createElement("img");
    imagem.src = bandeiras[index];
    imagem.alt = `Bandeira de ${estados[index]}`;
    imagem.width = 220;

    divBandeira.replaceChildren(imagem);
});