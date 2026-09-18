
    // 5 Arrays paralelos com informações da Wikipédia
    const siglas    = ["ES", "MG", "RJ", "SP"];
    const capitais  = ["Vitória", "Belo Horizonte", "Rio de Janeiro", "São Paulo"];
    const areas     = ["46.074,447 km²", "586.521,121 km²", "43.750,423 km²", "248.219,481 km²"];
    const populacoes= ["3.833.712 hab.", "20.538.718 hab.", "16.054.524 hab.", "44.411.238 hab."];
    const bandeiras = [
        "https://upload.wikimedia.org/wikipedia/commons/4/43/Bandeira_do_Esp%C3%ADrito_Santo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/f/f4/Bandeira_de_Minas_Gerais.svg",
        "https://upload.wikimedia.org/wikipedia/commons/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg",
        "https://upload.wikimedia.org/wikipedia/commons/2/2b/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg"
    ];

    // Mapeamento dos elementos da DOM
    const selectEstados = document.getElementById("selectEstados");
    const btnDetalhes   = document.getElementById("btnDetalhes");
    const divCapital    = document.getElementById("divCapital");
    const divArea       = document.getElementById("divArea");
    const divPopulacao  = document.getElementById("divPopulacao");
    const divBandeira   = document.getElementById("divBandeira");

    // EventListener para o evento onclick do botão
    btnDetalhes.addEventListener("click", function() {
        // Pega o índice selecionado na listbox (0 a 3)
        const index = selectEstados.value;

        // Se houver seleção válida
        if (index !== "") {
            // Preenche as divs usando o mesmo índice nos arrays paralelos
            divCapital.textContent = capitais[index];
            divArea.textContent = areas[index];
            divPopulacao.textContent = populacoes[index];
            
            // Exibe a imagem da bandeira no quarto quadro
            divBandeira.innerHTML = `<img src="${bandeiras[index]}" alt="Bandeira de ${siglas[index]}">`;
        }
    });

