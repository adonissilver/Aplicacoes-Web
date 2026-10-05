// =====================================================
// DADOS INICIAIS
// =====================================================

const pacientesIniciais = [
    {
        nome: "Fulano de Tal",
        cpf: "164.173.429-00",
        queixa: "Estresse",
        foto: "pexels_a.jpg"
    },
    {
        nome: "Beltrano da Silva",
        cpf: "027.830.661-00",
        queixa: "Ansiedade",
        foto: "pexels_b.jpg"
    },
    {
        nome: "Ciclano dos Santos",
        cpf: "142.470.762-00",
        queixa: "Burnout",
        foto: "pexels_c.jpg"
    }
];

let listaPacientes = [];


// =====================================================
// ELEMENTOS DO HTML
// =====================================================

const selectPacientes =
    document.getElementById("selectPacientes");

const btnDetalhes =
    document.getElementById("btnDetalhes");

const btnAdicionarPaciente =
    document.getElementById("btnAdicionarPaciente");

const btnSalvarJSON =
    document.getElementById("btnSalvarJSON");

const btnCarregarDados =
    document.getElementById("btnCarregarDados");

const divNomePaciente =
    document.getElementById("divNomePaciente");

const divCPF =
    document.getElementById("divCPF");

const divQueixa =
    document.getElementById("divQueixa");

const divFoto =
    document.getElementById("divFoto");

const modalPaciente =
    document.getElementById("modalPaciente");

const formPaciente =
    document.getElementById("formPaciente");

const btnSalvarPaciente =
    document.getElementById("btnSalvarPaciente");

const inputNome =
    document.getElementById("inputNome");

const inputCPF =
    document.getElementById("inputCPF");

const inputQueixa =
    document.getElementById("inputQueixa");

const inputFotoURL =
    document.getElementById("inputFotoURL");

const btnFecharModal =
    document.getElementById("btnFecharModal");

const inputArquivoJSON =
    document.getElementById("inputArquivoJSON");


// =====================================================
// MEMÓRIA DO NAVEGADOR
// =====================================================

function salvarNoLocalStorage() {

    /*
        JSON.stringify() converte a lista
        de objetos para uma string JSON.
    */

    const dadosJSON =
        JSON.stringify(listaPacientes);

    localStorage.setItem(
        "listaPacientes",
        dadosJSON
    );
}


function carregarDadosMemoria() {

    /*
        Procura dados anteriormente salvos
        no navegador.
    */

    const dadosSalvos =
        localStorage.getItem("listaPacientes");


    /*
        Se não houver dados salvos,
        utiliza os pacientes iniciais.
    */

    if (dadosSalvos === null) {

        listaPacientes = [
            ...pacientesIniciais
        ];

        salvarNoLocalStorage();

        return;
    }


    try {

        /*
            JSON.parse() converte a string JSON
            novamente para objetos JavaScript.
        */

        const dados =
            JSON.parse(dadosSalvos);


        if (Array.isArray(dados)) {

            listaPacientes = dados;

        } else {

            listaPacientes = [
                ...pacientesIniciais
            ];
        }

    } catch (erro) {

        console.error(
            "Erro ao ler os dados salvos:",
            erro
        );

        listaPacientes = [
            ...pacientesIniciais
        ];
    }
}


// =====================================================
// LISTA DE PACIENTES
// =====================================================

function atualizarListaPacientes() {

    /*
        Limpa todas as opções da lista.
    */

    selectPacientes.innerHTML = "";


    /*
        Adiciona somente pacientes reais.

        Não existe mais a opção:
        "Selecione um paciente".
    */

    listaPacientes.forEach(
        function (paciente, index) {

            const opcao =
                new Option(
                    paciente.nome,
                    index
                );

            selectPacientes.add(
                opcao
            );
        }
    );


    /*
        Se houver pacientes, seleciona
        automaticamente o primeiro.
    */

    if (listaPacientes.length > 0) {

        selectPacientes.selectedIndex = 0;
    }
}


// =====================================================
// LIMPAR DETALHES
// =====================================================

function limparDetalhes() {

    divNomePaciente.textContent = "-";

    divCPF.textContent = "-";

    divQueixa.textContent = "-";

    divFoto.textContent = "-";
}


// =====================================================
// MOSTRAR IMAGEM
// =====================================================

function mostrarImagem(
    container,
    endereco,
    textoAlternativo
) {

    container.innerHTML = "";


    /*
        Se nenhuma URL foi informada,
        mostra a mensagem "Sem foto".
    */

    if (endereco === "") {

        container.textContent =
            "Sem foto";

        return;
    }


    const imagem =
        document.createElement("img");


    imagem.src =
        endereco;


    imagem.alt =
        textoAlternativo;


    /*
        Se o endereço estiver errado
        ou a imagem não puder ser carregada.
    */

    imagem.addEventListener(
        "error",
        function () {

            container.textContent =
                "Não foi possível carregar a foto";
        }
    );


    container.appendChild(
        imagem
    );
}


// =====================================================
// MOSTRAR DETALHES DO PACIENTE
// =====================================================

function mostrarDetalhesPaciente(index) {

    const paciente =
        listaPacientes[index];


    if (!paciente) {

        return;
    }


    divNomePaciente.textContent =
        paciente.nome;


    divCPF.textContent =
        paciente.cpf;


    divQueixa.textContent =
        paciente.queixa;


    mostrarImagem(
        divFoto,
        paciente.foto || "",
        "Foto de " + paciente.nome
    );
}


// =====================================================
// INICIALIZAÇÃO DA LISTA
// =====================================================

/*
    Primeiro recupera os pacientes salvos.

    Depois preenche a lista visual.

    Essa inicialização ocorre antes da
    configuração dos botões do modal.
*/

carregarDadosMemoria();

atualizarListaPacientes();


// =====================================================
// BOTÃO DETALHES
// =====================================================

btnDetalhes.addEventListener(
    "click",
    function () {

        /*
            Se a lista estiver vazia,
            nenhum paciente poderá ser mostrado.
        */

        if (
            listaPacientes.length === 0 ||
            selectPacientes.value === ""
        ) {

            alert(
                "Não existe paciente selecionado."
            );

            return;
        }


        const index =
            Number(selectPacientes.value);


        mostrarDetalhesPaciente(
            index
        );
    }
);


// =====================================================
// LIMPAR FORMULÁRIO
// =====================================================

function limparFormulario() {

    inputNome.value = "";

    inputCPF.value = "";

    inputQueixa.value = "";

    inputFotoURL.value = "";
}


// =====================================================
// ABRIR MODAL
// =====================================================

function abrirModal() {

    limparFormulario();


    modalPaciente.style.display =
        "flex";


    modalPaciente.setAttribute(
        "aria-hidden",
        "false"
    );


    inputNome.focus();
}


// =====================================================
// FECHAR MODAL
// =====================================================

function fecharModal() {

    modalPaciente.style.display =
        "none";


    modalPaciente.setAttribute(
        "aria-hidden",
        "true"
    );
}


// =====================================================
// EVENTOS DO MODAL
// =====================================================

btnAdicionarPaciente.addEventListener(
    "click",
    abrirModal
);


btnFecharModal.addEventListener(
    "click",
    fecharModal
);


/*
    Fecha o modal quando o usuário
    clica na área escura da tela.
*/

modalPaciente.addEventListener(
    "click",
    function (evento) {

        if (evento.target === modalPaciente) {

            fecharModal();
        }
    }
);


// =====================================================
// SALVAR PACIENTE
// =====================================================

function salvarPaciente(evento) {

    /*
        Impede que o formulário
        recarregue a página.
    */

    if (evento) {

        evento.preventDefault();
    }


    /*
        Captura os valores digitados.
    */

    const nome =
        inputNome.value.trim();


    const cpf =
        inputCPF.value.trim();


    const queixa =
        inputQueixa.value.trim();


    const foto =
        inputFotoURL.value.trim();


    /*
        Validação dos campos obrigatórios.

        A URL da foto não é obrigatória.
    */

    if (
        nome === "" ||
        cpf === "" ||
        queixa === ""
    ) {

        alert(
            "Preencha nome, CPF e queixa."
        );

        return;
    }


    /*
        Cria o objeto do novo paciente.
    */

    const novoPaciente = {

        nome: nome,

        cpf: cpf,

        queixa: queixa,

        foto: foto
    };


    /*
        Adiciona o paciente ao array.
    */

    listaPacientes.push(
        novoPaciente
    );


    try {

        /*
            Salva a lista completa
            no localStorage.
        */

        salvarNoLocalStorage();

    } catch (erro) {

        /*
            Caso não seja possível salvar,
            desfaz a inclusão no array.
        */

        listaPacientes.pop();


        console.error(
            "Erro ao salvar:",
            erro
        );


        alert(
            "Não foi possível salvar o paciente no navegador."
        );


        return;
    }


    /*
        Atualiza a lista visual.

        O novo paciente passa a aparecer
        junto dos demais pacientes.
    */

    atualizarListaPacientes();


    /*
        Descobre o índice do novo paciente.
    */

    const novoIndex =
        listaPacientes.length - 1;


    /*
        Seleciona automaticamente
        o paciente recém-cadastrado.
    */

    selectPacientes.value =
        String(novoIndex);


    /*
        Mostra automaticamente
        os detalhes do paciente.
    */

    mostrarDetalhesPaciente(
        novoIndex
    );


    fecharModal();


    alert(
        "Paciente salvo com sucesso!"
    );
}


/*
    O clique no botão Salvar
    executa diretamente a função.
*/

btnSalvarPaciente.addEventListener(
    "click",
    salvarPaciente
);


/*
    Evita que o formulário atualize
    a página ao pressionar Enter.
*/

if (formPaciente) {

    formPaciente.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();
        }
    );
}


// =====================================================
// ESCREVER E EXPORTAR JSON
// =====================================================

function escreverDadosJSON() {

    /*
        JSON.stringify() transforma os objetos
        em uma string JSON.

        O número 4 deixa o arquivo formatado.
    */

    const dadosJSON =
        JSON.stringify(
            listaPacientes,
            null,
            4
        );


    const arquivo =
        new Blob(
            [dadosJSON],
            {
                type: "application/json"
            }
        );


    const url =
        URL.createObjectURL(arquivo);


    const link =
        document.createElement("a");


    link.href =
        url;


    link.download =
        "pacientes.json";


    document.body.appendChild(
        link
    );


    link.click();


    link.remove();


    URL.revokeObjectURL(
        url
    );
}


// =====================================================
// BOTÃO SALVAR JSON
// =====================================================

btnSalvarJSON.addEventListener(
    "click",
    function () {

        /*
            Primeiro salva os dados atuais
            no navegador.
        */

        salvarNoLocalStorage();


        /*
            Depois exporta o arquivo.
        */

        escreverDadosJSON();
    }
);


// =====================================================
// BOTÃO CARREGAR DADOS
// =====================================================

btnCarregarDados.addEventListener(
    "click",
    function () {

        /*
            Limpa a seleção anterior para
            permitir escolher o mesmo arquivo.
        */

        inputArquivoJSON.value = "";


        /*
            Abre o seletor de arquivos.
        */

        inputArquivoJSON.click();
    }
);


// =====================================================
// IMPORTAR JSON DO COMPUTADOR
// =====================================================

inputArquivoJSON.addEventListener(
    "change",
    function (evento) {

        const arquivo =
            evento.target.files[0];


        if (!arquivo) {

            return;
        }


        const leitor =
            new FileReader();


        leitor.onload =
            function (eventoLeitura) {

                try {

                    /*
                        Obtém o conteúdo do arquivo
                        como texto.
                    */

                    const textoJSON =
                        eventoLeitura.target.result;


                    /*
                        Transforma a string JSON
                        em objetos JavaScript.
                    */

                    const dadosImportados =
                        JSON.parse(textoJSON);


                    /*
                        Verifica se o conteúdo
                        é realmente uma lista.
                    */

                    if (
                        !Array.isArray(
                            dadosImportados
                        )
                    ) {

                        throw new Error(
                            "O JSON precisa conter uma lista."
                        );
                    }


                    /*
                        Substitui a lista atual
                        pela lista importada.
                    */

                    listaPacientes =
                        dadosImportados;


                    /*
                        Salva os dados importados
                        no localStorage.
                    */

                    salvarNoLocalStorage();


                    /*
                        Atualiza a lista visual.
                    */

                    atualizarListaPacientes();


                    /*
                        Limpa os detalhes antigos.
                    */

                    limparDetalhes();


                    alert(
                        "Dados carregados com sucesso!"
                    );

                } catch (erro) {

                    console.error(
                        "Erro ao importar:",
                        erro
                    );


                    alert(
                        "Erro ao carregar o arquivo JSON."
                    );
                }
            };


        leitor.readAsText(
            arquivo
        );
    }
);


// =====================================================
// CARREGAR pacientes.json UTILIZANDO FETCH
// =====================================================

async function carregarDadosJSON() {

    try {

        /*
            Procura o arquivo pacientes.json
            na mesma pasta da aplicação.
        */

        const resposta =
            await fetch(
                "pacientes.json"
            );


        if (!resposta.ok) {

            throw new Error(
                "Não foi possível carregar pacientes.json"
            );
        }


        /*
            Obtém o conteúdo como texto.
        */

        const textoJSON =
            await resposta.text();


        /*
            Converte o texto JSON
            em objetos JavaScript.
        */

        const dados =
            JSON.parse(textoJSON);


        if (!Array.isArray(dados)) {

            throw new Error(
                "Formato JSON inválido."
            );
        }


        listaPacientes =
            dados;


        salvarNoLocalStorage();


        atualizarListaPacientes();


        limparDetalhes();


        console.log(
            "pacientes.json carregado com sucesso."
        );

    } catch (erro) {

        console.error(
            "Erro no fetch:",
            erro
        );
    }
}