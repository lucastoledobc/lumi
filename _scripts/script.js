// Head

const head = document.getElementsByTagName("head")[0];
head.innerHTML += `
<!-- importações -->
<!-- 3 tracinhos - MENU e lupa-->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
`;

// Header
const body = document.getElementsByTagName("body");
const header = document.getElementsByTagName("header")[0];
header.innerHTML = `
    <h1>Lumi Física</h1>
    <nav id="nav1" class="nav1"></nav>
    <div id="barra"></div>
`;

const nav1 = document.getElementById('nav1');
nav1.innerHTML = `
<a href="/" id="nav01">Home</a>
<a href="/02/" id="nav02">Conteúdo</a>
<a href="/03/" id="nav03">Jogos</a>
<a href="/04/" id="nav04">Artigos</a>
<a href="/05/" id="nav05">Sobre</a>

<button id="lupa" onclick="lupa()"><span class="material-symbols-outlined">search</span></button>

<div id="search">
    <form action="../_php/search.php">
      <input type="text" placeholder="Procurar.." name="search">
      <button type="submit"><span class="material-symbols-outlined" style="color: white;">search</span></button></button>
    </form>
    <button id="x" onclick="fecharlupa()">[fechar]</button>
</div>
    `;
    

// Footer (criar ad aqui)
let footer = document.getElementsByTagName("footer")[0];
footer.innerHTML = `Site criado por Lucas Toledo.`;




// Lupa
let caixa = document.getElementById('search');
let lup = document.getElementById('lupa');

function lupa() {
    if (caixa.style.display == 'block') {
        caixa.style.display = 'none';
    }
    else {
        caixa.style.display = 'block';
        lup.style.display = 'block';
    }
}

function fecharlupa() {
    if (caixa.style.display == 'block') {
        caixa.style.display = 'none';
    }
}






// Caixa de Dicas

function tip1() {
    box1.style.display = 'block';
}
function fechar1() {
    box1.style.display = 'none';
}

function tip2() {
    box2.style.display = 'block';
}
function fechar2() {
    box2.style.display = 'none';
}

function tip3() {
    box3.style.display = 'block';
}
function fechar3() {
    box3.style.display = 'none';
}


