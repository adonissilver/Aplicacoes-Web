

let paisesData = [];

// Carrega o JSON inicial ao abrir a página
async function carregarPaises() {
    try {
    const response = await fetch('paises.json');
    paisesData = await response.json();
    renderizarCards();
    } catch (error) {
    console.error('Erro ao carregar o JSON:', error);
    }
}

// Renderiza os cards na interface
function renderizarCards() {
    const container = document.getElementById('gridPaises');
    container.innerHTML = '';

    paisesData.forEach(pais => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${pais.bandeira}" alt="Bandeira do ${pais.nome}">
        <div class="card-body">
        <h3 class="card-title">${pais.nome}</h3>
        <p class="card-text"><strong>População:</strong> ${pais.populacao.toLocaleString('pt-BR')}</p>
        <p class="card-text"><strong>Idioma(s):</strong> ${pais.idiomas.join(', ')}</p>
        </div>
    `;
    container.appendChild(card);
    });
}

// Controles do Modal
function abrirModal() {
    document.getElementById('modalOverlay').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('formPais').reset();
}

// Adiciona o novo país ao estado local e re-renderiza
function adicionarPais(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const populacao = parseInt(document.getElementById('populacao').value, 10);
    const bandeira = document.getElementById('bandeira').value.trim();
    const idiomasInput = document.getElementById('idiomas').value;
    const idiomas = idiomasInput.split(',').map(item => item.trim()).filter(item => item !== '');

    const novoPais = {
    id: Date.now(),
    nome,
    populacao,
    bandeira,
    idiomas
    };

    paisesData.push(novoPais);
    renderizarCards();
    fecharModal();
}

// Exporta o JSON atualizado fazendo o download do arquivo
function salvarInformacoes() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(paisesData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "paises_atualizado.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

// Inicialização
document.addEventListener('DOMContentLoaded', carregarPaises);
