// Head

const head = document.getElementsByTagName("head")[0];
head.innerHTML += `
    <meta name="description" content="Site de Física para ensino básico, ensino médio e ensino superior.">
    <link rel="shortcut icon" href="/anexos/midias/CTRNF-WarpOrb.ico" type="image/x-icon">

    `;

// Header
const body = document.getElementsByTagName("body");
const header = document.getElementsByTagName("header")[0];
header.innerHTML += `

        <section id="cabe">
            <div class="space"></div>
            <h1>Lumi Física</h1>
            <div id="space" class="space">
                <button id="lupa" onclick="lupa()" class="lupa">
                    <img id="ilupa" class="icon" src="/anexos/midias/icon-search-2.svg" alt="procurar">
                </button>
            </div>
        </section>
        <nav id="nav1" class="nav1"></nav>
        <div id="barra"></div>

        <div id="search">
            <form action="/php/search.php">
                <input type="text" placeholder="Procurar.." name="search">
                <button type="submit" id="lupa2" class="lupa">
                    <img  id="ilupa" class="icon" src="/anexos/midias/icon-search-2.svg" alt="procurar">
                </button>
            </form>
        </div>
`;

const nav1 = document.getElementById('nav1');
nav1.innerHTML = `
<a href="/" id="nav01">Home</a>
<a href="/02/" id="nav02">Conteúdo</a>
<a href="/03/" id="nav03">Jogos</a>
<a href="/04/" id="nav04">Projetos</a>
<a href="/05/" id="nav05">Sobre</a>
`;
    
// Footer (criar ad aqui)
let footer = document.getElementsByTagName("footer")[0];
footer.innerHTML = `Site criado por Lucas Toledo.`;

/*  */

// Lupa
let caixa = document.getElementById('search');
let space = document.getElementById('space');

function lupa() {
    if (caixa.style.opacity == '1') {
        caixa.style.top = '-10%';
        caixa.style.opacity = '0';
        caixa.style.transition = '0.5s';
        space.innerHTML =`
        <button id="lupa" onclick="lupa()" class="lupa">
            <img id="ilupa" class="icon" src="/anexos/midias/icon-search-2.svg" alt="procurar">
        </button>
        `;
    }
    else {
        caixa.style.top = '0%';
        caixa.style.opacity = '1';
        caixa.style.transition = '0.5s';
        space.innerHTML =`
        <button id="lupa" onclick="lupa()" class="lupa">
            <img id="ilupa" class="icon" src="/anexos/midias/icon-close-2.svg" alt="procurar">
        </button>
        `;
    }
}

/*  */

// Caixa de Dicas
function tip1() {
    box1.style.display = 'block';
}
function fechar() {
    box1.style.display = 'none';
}