// ======================
// MENU HAMBÚRGUER
// ======================

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if(menuToggle && menu){

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {

        if(
            !menu.contains(e.target) &&
            !menuToggle.contains(e.target)
        ){
            menu.classList.remove("active");
        }

    });

    document.querySelectorAll("#menu a").forEach(link => {

        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });

    });

}

// ======================
// HEADER + FADE
// ======================

const elementos = document.querySelectorAll(".fade");
const header = document.querySelector("header");

function revelar(){

    elementos.forEach(el => {

        const topo = el.getBoundingClientRect().top;

        if(topo < window.innerHeight - 100){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", () => {

    revelar();

    if(header){

        if(window.scrollY > 50){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    }

});

revelar();

// ======================
// QUIZ AVANÇADO
// ======================

const perguntas = [

{
    pergunta:"Qual é a capital do Paraná?",
    respostas:["Londrina","Curitiba","Maringá","Paranaguá"],
    correta:1
},

{
    pergunta:"Quantos municípios possui o Paraná?",
    respostas:["399","250","497","350"],
    correta:0
},

{
    pergunta:"Qual é o principal cartão-postal do estado?",
    respostas:["Cristo Redentor","Pantanal","Cataratas do Iguaçu","Chapada Diamantina"],
    correta:2
},

{
    pergunta:"Qual árvore é símbolo do Paraná?",
    respostas:["Ipê","Araucária","Mangueira","Jatobá"],
    correta:1
},

{
    pergunta:"Qual cidade é conhecida pelo planejamento urbano?",
    respostas:["Curitiba","Londrina","Ponta Grossa","Foz"],
    correta:0
}

];

let perguntaAtual = 0;
let pontuacao = 0;

function carregarQuiz(){

    const pergunta =
    document.getElementById("perguntaQuiz");

    const respostas =
    document.getElementById("respostasQuiz");

    if(!pergunta || !respostas) return;

    pergunta.innerHTML =
    perguntas[perguntaAtual].pergunta;

    respostas.innerHTML = "";

    perguntas[perguntaAtual].respostas.forEach(
    (resposta,index)=>{

        respostas.innerHTML += `
        <button onclick="responderQuiz(${index})">
        ${resposta}
        </button>
        `;

    });

}

function responderQuiz(indice){

    if(
        indice ===
        perguntas[perguntaAtual].correta
    ){
        pontuacao++;
    }

    perguntaAtual++;

    if(perguntaAtual < perguntas.length){

        carregarQuiz();

    }else{

        document.getElementById("perguntaQuiz")
        .innerHTML =
        `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;

        document.getElementById("respostasQuiz")
        .innerHTML = "";

    }

}

window.addEventListener("load", carregarQuiz);

// ======================
// TESOURO
// ======================

const tesouro =
Math.floor(Math.random() * 5) + 1;

function bau(numero){

    const resultado =
    document.getElementById("resultadoBau");

    if(!resultado) return;

    if(numero === tesouro){

        resultado.innerHTML =
        "🏆 Você encontrou o Tesouro Perdido do Paraná!";

    }else{

        resultado.innerHTML =
        "📦 Baú vazio. Continue procurando.";

    }

}

// ======================
// CURIOSIDADES
// ======================

const curiosidades = [

"O Paraná possui 399 municípios.",

"As Cataratas do Iguaçu estão entre as maiores quedas d'água do mundo.",

"A Ilha do Mel é considerada um dos lugares mais preservados do Brasil.",

"Curitiba foi pioneira no sistema BRT.",

"O Paraná é um dos maiores produtores agrícolas do país.",

"A araucária é símbolo oficial do estado.",

"O Parque Nacional do Iguaçu é Patrimônio Natural da Humanidade.",

"O estado recebeu milhares de imigrantes europeus.",

"O Porto de Paranaguá é um dos mais importantes do Brasil.",

"O Paraná faz fronteira com Argentina e Paraguai."

];

function novaCuriosidade(){

    const texto =
    document.getElementById("curiosidade");

    if(!texto) return;

    const indice =
    Math.floor(Math.random() * curiosidades.length);

    texto.innerHTML =
    curiosidades[indice];

}

// ======================
// LIGHTBOX
// ======================

function abrirImagem(src){

    const lightbox =
    document.getElementById("lightbox");

    const imagem =
    document.getElementById("imagemExpandida");

    if(!lightbox || !imagem) return;

    imagem.src = src;

    lightbox.style.display = "flex";

}

function fecharImagem(){

    const lightbox =
    document.getElementById("lightbox");

    if(lightbox){

        lightbox.style.display = "none";

    }

}

document.addEventListener("keydown", (e)=>{

    if(e.key === "Escape"){

        fecharImagem();

    }

});

// ======================
// CONTADORES
// ======================

function animarContador(id, alvo, velocidade){

    const elemento =
    document.getElementById(id);

    if(!elemento) return;

    let valor = 0;

    const incremento =
    Math.ceil(alvo / 100);

    const intervalo =
    setInterval(()=>{

        valor += incremento;

        if(valor >= alvo){

            valor = alvo;

            clearInterval(intervalo);

        }

        elemento.innerHTML =
        valor.toLocaleString("pt-BR");

    }, velocidade);

}

window.addEventListener("load",()=>{

    animarContador(
    "municipios",
    399,
    20
    );

    animarContador(
    "habitantes",
    11000000,
    20
    );

    animarContador(
    "area",
    199315,
    20
    );

    animarContador(
    "regioesTuristicas",
    10,
    150
    );

});

// ======================
// SCROLL SUAVE
// ======================

document.querySelectorAll('a[href^="#"]')
.forEach(link => {

    link.addEventListener("click", function(e){

        const destino =
        document.querySelector(
        this.getAttribute("href")
        );

        if(!destino) return;

        e.preventDefault();

        destino.scrollIntoView({

            behavior:"smooth"

        });

    });

});
