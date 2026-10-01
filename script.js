/* =========================================================
   DADOS DAS AULAS

   Aqui você poderá alterar futuramente:

   - título
   - descrição
   - exercícios
   - arquivos HTML
   ========================================================= */


const aulas = {


    /* =====================================================
       AULA ZERO
       ===================================================== */

    0: {

        titulo: "🧭 Aula Zero",

        descricao: "O início da jornada",

        links: [

            {
                titulo: "Acessar Aula Zero",
                subtitulo: "Começar por aqui",
                url: "https://adonissilver.github.io/Aplicacoes-Web/Aula0/Aulazero.html"
            }

        ]

    },



    /* =====================================================
       AULA 1
       ===================================================== */

    1: {

        titulo: "🏠 Aula 1",

        descricao: "Introdução",

        links: [

            {
                titulo: "Exercício 1.0",
                subtitulo: "Praticar",
                url: "Aula1/exercicio-1-0.html"
            },

            {
                titulo: "Exercício 1.1",
                subtitulo: "Praticar",
                url: "Aula1/exercicio-1-1.html"
            }

        ]

    },



    /* =====================================================
       AULA 2
       ===================================================== */

    2: {

        titulo: "🧮 Aula 2",

        descricao: "Fundamentos numéricos",

        links: [

            {
                titulo: "Exercício 2.1",
                subtitulo: "Praticar",
                url: "Aula2/exercicio-2-1.html"
            },

            {
                titulo: "Exercício 2.2",
                subtitulo: "Somatório e Produtório · Tarefa",
                url: "Aula2/exercicio-2-2.html"
            },

            {
                titulo: "Exercício 2.3",
                subtitulo: "Potência · Tarefa",
                url: "Aula2/Exerc2_3/potencia/exercicio-2-3.1.html"
            },

           {
                titulo: "Exercício 2.3",
                subtitulo: "Fatorial · Tarefa",
                url: "Aula2/Exerc2_3/fatorial/exercicio-2-3.2.html"
            },



           

            {
                titulo: "Exercício 2.4",
                subtitulo: "Combinação",
                url: "Aula2/Exerc2_4/exercicio-2-4.html"
            }

        ]

    },



    /* =====================================================
       AULA 3
       ===================================================== */

    3: {

        titulo: "📊 Aula 3",

        descricao: "Exercícios da Aula 3",

        links: [

            {
                titulo: "Exercícios — Aula 3",
                subtitulo: "Abrir lista completa",
                url: "Aula3/exercicios-aula-3.html"
            }

        ]

    },



    /* =====================================================
       AULA 4
       ===================================================== */

    4: {

        titulo: "💻 Aula 4",

        descricao: "Conteúdo da Aula 4",

        links: [

            {
                titulo: "Acessar Aula 4",
                subtitulo: "Ir para o conteúdo",
                url: "Aula4/aula-4.html"
            }

        ]

    },



    /* =====================================================
       AULA 5
       ===================================================== */

    5: {

        titulo: "🚀 Aula 5",

        descricao: "Exercícios da Aula 5",

        links: [

            {
                titulo: "Link 5.1.a",
                subtitulo: "Praticar",
                url: "Aula5/link-5-1-a.html"
            },

            {
                titulo: "Link 5.1.b",
                subtitulo: "Praticar",
                url: "Aula5/link-5-1-b.html"
            },

            {
                titulo: "Link 5.2",
                subtitulo: "Praticar",
                url: "Aula5/link-5-2.html"
            },

            {
                titulo: "Link 5.3",
                subtitulo: "Praticar",
                url: "Aula5/link-5-3.html"
            }

        ]

    },



    /* =====================================================
       AULA 6
       ===================================================== */

    6: {

        titulo: "💡 Aula 6",

        descricao: "Exercícios da Aula 6",

        links: [

            {
                titulo: "Link 6.1.a",
                subtitulo: "Praticar",
                url: "Aula6/link-6-1-a.html"
            },

            {
                titulo: "Link 6.1.b",
                subtitulo: "Praticar",
                url: "Aula6/link-6-1-b.html"
            }

        ]

    },



    /* =====================================================
       AULA 7
       ===================================================== */

    7: {

        titulo: "🏆 Aula 7",

        descricao: "Conteúdo da Aula 7",

        links: [

            {
                titulo: "Acessar Aula 7",
                subtitulo: "Ir para o conteúdo",
                url: "Aula7/aula-7.html"
            }

        ]

    }

};



/* =========================================================
   ELEMENTOS DO HTML
   ========================================================= */


const mapa =
    document.getElementById("mapa-container");


const menu =
    document.getElementById("menu-aula");


const botoes =
    document.querySelectorAll(".botao-aula");



/* =========================================================
   GUARDA QUAL AULA ESTÁ ABERTA
   ========================================================= */


let aulaAberta = null;



/* =========================================================
   EVENTO DE CLIQUE NOS BOTÕES
   ========================================================= */


botoes.forEach(function(botao) {


    botao.addEventListener("click", function(event) {


        /*
           Impede que o clique continue
           para outros elementos.
        */

        event.stopPropagation();



        /*
           Descobre qual aula foi clicada.

           Exemplo:

           data-aula="0"

           retorna:

           0
        */

        const numeroAula =
            Number(botao.dataset.aula);



        /* =================================================
           SE CLICOU NOVAMENTE NA MESMA AULA
           ================================================= */


        if (aulaAberta === numeroAula) {


            fecharMenu();


            return;

        }



        /* =================================================
           ABRE A NOVA AULA
           ================================================= */


        abrirMenu(
            numeroAula,
            botao
        );


    });


});



/* =========================================================
   FUNÇÃO ABRIR MENU
   ========================================================= */


function abrirMenu(numeroAula, botao) {


    const aula =
        aulas[numeroAula];


    if (!aula) {

        return;

    }



    /* =====================================================
       REMOVE DESTAQUE DO BOTÃO ANTERIOR
       ===================================================== */


    botoes.forEach(function(b) {

        b.classList.remove("ativo");

    });



    /* =====================================================
       MARCA O BOTÃO ATUAL
       ===================================================== */


    botao.classList.add("ativo");



    /* =====================================================
       MONTA O CABEÇALHO DO MENU
       ===================================================== */


    let conteudo = `

        <h2 class="menu-titulo">

            ${aula.titulo}

        </h2>


        <span class="menu-descricao">

            ${aula.descricao}

        </span>

    `;



    /* =====================================================
       MONTA OS LINKS
       ===================================================== */


    aula.links.forEach(function(link) {


        conteudo += `

            <a
                class="menu-link"
                href="${link.url}"
            >

                <span class="menu-link-conteudo">


                    <span class="menu-link-titulo">

                        ✨ ${link.titulo}

                    </span>


                    <span class="menu-link-subtitulo">

                        ${link.subtitulo}

                    </span>


                </span>


                <span class="menu-seta">

                    →

                </span>


            </a>

        `;


    });



    /* =====================================================
       COLOCA O CONTEÚDO NO MENU
       ===================================================== */


    menu.innerHTML =
        conteudo;



    /* =====================================================
       MOSTRA O MENU
       ===================================================== */


    menu.classList.add(
        "aberto"
    );



    /* =====================================================
       POSICIONA O MENU PERTO DO BOTÃO
       ===================================================== */


    posicionarMenu(botao);



    /* =====================================================
       GUARDA QUAL AULA ESTÁ ABERTA
       ===================================================== */


    aulaAberta =
        numeroAula;


}



/* =========================================================
   POSICIONAR MENU
   ========================================================= */


function posicionarMenu(botao) {


    /*
       Posição do botão dentro do mapa
    */

    const botaoRect =
        botao.getBoundingClientRect();


    const mapaRect =
        mapa.getBoundingClientRect();



    /*
       Converte para coordenadas relativas
       ao mapa.
    */


    let esquerda =

        botaoRect.right
        -
        mapaRect.left
        +
        15;



    let topo =

        botaoRect.top
        -
        mapaRect.top;



    /* =====================================================
       DESCOBRE O TAMANHO DO MENU
       ===================================================== */


    const larguraMenu =
        menu.offsetWidth;


    const alturaMenu =
        menu.offsetHeight;



    /* =====================================================
       SE NÃO COUBER À DIREITA
       COLOCA À ESQUERDA
       ===================================================== */


    if (

        esquerda
        +
        larguraMenu
        >
        mapaRect.width

    ) {


        esquerda =

            botaoRect.left
            -
            mapaRect.left
            -
            larguraMenu
            -
            15;


    }



    /* =====================================================
       SE PASSAR DA PARTE DE BAIXO
       SOBE O MENU
       ===================================================== */


    if (

        topo
        +
        alturaMenu
        >
        mapaRect.height

    ) {


        topo =

            mapaRect.height
            -
            alturaMenu
            -
            10;


    }



    /* =====================================================
       EVITA PASSAR DO TOPO
       ===================================================== */


    if (topo < 10) {

        topo = 10;

    }



    /* =====================================================
       EVITA PASSAR DA ESQUERDA
       ===================================================== */


    if (esquerda < 10) {

        esquerda = 10;

    }



    /* =====================================================
       APLICA A POSIÇÃO
       ===================================================== */


    menu.style.left =
        esquerda + "px";


    menu.style.top =
        topo + "px";


}



/* =========================================================
   FECHAR MENU
   ========================================================= */


function fecharMenu() {


    menu.classList.remove(
        "aberto"
    );


    menu.innerHTML = "";


    botoes.forEach(function(botao) {

        botao.classList.remove(
            "ativo"
        );

    });


    aulaAberta = null;


}



/* =========================================================
   SE A TELA FOR REDIMENSIONADA
   REPOSICIONA O MENU
   ========================================================= */


window.addEventListener(
    "resize",
    function() {


        if (aulaAberta !== null) {


            const botaoAtual =
                document.querySelector(
                    `[data-aula="${aulaAberta}"]`
                );


            if (botaoAtual) {

                posicionarMenu(
                    botaoAtual
                );

            }

        }


    }
);
