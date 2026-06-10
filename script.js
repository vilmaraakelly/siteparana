// ======================
// EFEITO FADE E HEADER
// ======================

const elements = document.querySelectorAll('.fade');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    elements.forEach((el) => {

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            el.classList.add('show');
        }

    });

    if(window.scrollY > 50){

        header.classList.add('scrolled');

    }else{

        header.classList.remove('scrolled');

    }

});

// Ativa os elementos já visíveis ao carregar a página

elements.forEach((el) => {

    const top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
        el.classList.add('show');
    }

});


// ======================
// QUIZ
// ======================

function quiz(resposta){

    let resultado =
    document.getElementById("resultadoQuiz");

    if(resposta === "certo"){

        resultado.innerHTML =
        "✅ Parabéns! Você acertou.";

    }else{

        resultado.innerHTML =
        "❌ Resposta incorreta.";

    }

}


// ======================
// TESOURO
// ======================

const tesouro =
Math.floor(Math.random() * 5) + 1;

function bau(numero){

    let resultado =
    document.getElementById("resultadoBau");

    if(numero === tesouro){

        resultado.innerHTML =
        "🏆 Você encontrou o Tesouro Perdido do Paraná!";

    }else{

        resultado.innerHTML =
        "📦 Este baú estava vazio.";

    }

}


// ======================
// CURIOSIDADES
// ======================

const curiosidades = [

    "O Paraná possui 399 municípios.",

    "As Cataratas do Iguaçu estão entre as maiores quedas d'água do planeta.",

    "A Ilha do Mel é uma das áreas mais preservadas do litoral brasileiro.",

    "Curitiba é referência mundial em planejamento urbano.",

    "O estado recebeu imigrantes de dezenas de nacionalidades diferentes."

];

function novaCuriosidade(){

    const indice =
    Math.floor(Math.random() * curiosidades.length);

    document.getElementById("curiosidade")
    .innerHTML =
    curiosidades[indice];

}


// ======================
// GALERIA
// ======================

function abrirImagem(src){

    document.getElementById("lightbox")
    .style.display = "flex";

    document.getElementById("imagemExpandida")
    .src = src;

}

function fecharImagem(){

    document.getElementById("lightbox")
    .style.display = "none";

}


// ======================
// CONTADORES
// ======================

let m = 0;
let h = 0;
let a = 0;
let t = 0;

const contador = setInterval(() => {

    if(m < 399) m += 3;
    if(h < 11000000) h += 85000;
    if(a < 199315) a += 1500;
    if(t < 10) t++;

    const municipios =
    document.getElementById("municipios");

    const habitantes =
    document.getElementById("habitantes");

    const area =
    document.getElementById("area");

    const regioes =
    document.getElementById("regioesTuristicas");

    if(municipios) municipios.innerHTML = m;

    if(habitantes){
        habitantes.innerHTML =
        h.toLocaleString('pt-BR');
    }

    if(area){
        area.innerHTML =
        a.toLocaleString('pt-BR');
    }

    if(regioes){
        regioes.innerHTML = t;
    }

    if(
        m >= 399 &&
        h >= 11000000 &&
        a >= 199315 &&
        t >= 10
    ){
        clearInterval(contador);
    }

}, 30);
