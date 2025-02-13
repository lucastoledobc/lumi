// Head

document.head.innerHTML += `
    <meta name="description" content="Site de Física para ensino básico, ensino médio e ensino superior.">
    <link rel="shortcut icon" href="/anexos/midias/favicon-32x32.png" type="image/x-icon">
    `;

// Header
const header = document.getElementsByTagName("header")[0];
header.innerHTML += `
        <section id="cabe">
            <div class="space">
                <button type="submit" onclick="dark()" id="dark" class="dark">
                    <img  id="idark" class="icon" src="/anexos/midias/icon-dark1.svg" alt="Modo escuro">
                </button>
            </div>
            <h1>Lumi Física</h1>
            <div id="space" class="space">
                <button id="lupa" onclick="lupa()" class="lupa">
                    <img id="ilupa" class="icon" src="/anexos/midias/icon-search-2.svg" alt="procurar">
                </button>
            </div>
        </section>
        <div id="search">
            <form action="/php/search.php">
                <input type="text" placeholder="Procurar.." name="search">
                <button type="submit" id="lupa2" class="lupa">
                    <img  id="ilupa" class="icon" src="/anexos/midias/icon-search-2.svg" alt="procurar">
                </button>
            </form>
        </div>
        <nav id="nav1" class="nav1"></nav>
        <div id="barra"></div>
`;

const nav1 = document.getElementById('nav1');
nav1.innerHTML = `
<a href="/01/" id="nav01">Home</a>
<a href="/02/" id="nav02">Conteúdo</a>
<a href="/03/" id="nav03">Jogos</a>
<a href="/04/" id="nav04">Projetos</a>
<a href="/05/" id="nav05">Sobre</a>
`;
    
// Footer (criar ad aqui)
const footer = document.getElementsByTagName("footer")[0];
footer.innerHTML = `Site criado por Lucas Toledo.`;

/* MODO ESCURO */

let root = document.querySelector(':root');
root.style.setProperty('--branco', '#ffffff');

function dark() {
    if (getComputedStyle(root).getPropertyValue('--branco') == '#ffffff') {
        root.style.setProperty('--branco', '#000000');
        root.style.setProperty('--preto', '#ffffff');
        root.style.setProperty('--fundo', '#01202D');
        root.style.setProperty('--shadow', '#ffffff45');

        root.style.setProperty('--cor5', '#14546F');
        root.style.setProperty('--cor4', '#04415B');
        root.style.setProperty('--cor3', '#023145');
        root.style.setProperty('--cor2', '#01202D');
        root.style.setProperty('--cor1', '#000F15');

        // root.style.setProperty('filter', 'invert(100%)');
    } else {
        root.style.setProperty('--branco', '#ffffff');
        root.style.setProperty('--preto', '#000000');
        root.style.setProperty('--fundo', '#ffffff');
        root.style.setProperty('--shadow', '#00000050');

        root.style.setProperty('--cor1', '#B7E8FD');
        root.style.setProperty('--cor2', '#5DCBFA');
        root.style.setProperty('--cor3', '#07ADF5');
        root.style.setProperty('--cor4', '#056F9C');
        root.style.setProperty('--cor5', '#023145');

        // root.style.setProperty('filter', 'invert(0%)');
    }
}

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


// BACK

// document.getElementById("back").addEventListener("click", () => {
//     history.back();
// });


function fconf() {
    bconf = document.getElementById('bconf');
    bajuda = document.getElementById('bajuda');
    bvolu = document.getElementById('bvolu');
    bdark = document.getElementById('bdark');

    if (bconf.innerHTML == '<img src="/anexos/midias/icon-close.svg" class="icon-botao" id="iconf" alt="Fechar">') {
        bconf.innerHTML = `
        <img src="/anexos/midias/icon-close.svg" class="icon-botao" id="iconf" alt="Fechar">
        `;
        
        bajuda.style.top = 'calc(var(--bm) * 2 + clamp(1rem, 7vw, 2rem))';
        bajuda.style.opacity = '1';
        bajuda.style.transition = '1s';

        bvolu.style.top = 'calc(var(--bm) * 3 + clamp(1rem, 7vw, 2rem) * 2)';
        bvolu.style.opacity = '1';
        bvolu.style.transition = '1s';

        bdark.style.top = 'calc(var(--bm) * 4 + clamp(1rem, 7vw, 2rem) * 3)';
        bdark.style.opacity = '1';
        bdark.style.transition = '1s';

        iconf = document.getElementById('iconf');
        if (vdark == 1) {
            iconf.style.filter = 'invert(100%)';
        } else {
            iconf.style.filter = 'invert(0%)';
        }
    } else {
        aviso.style.opacity = '0';
        aviso.style.right = '0%';
        aviso.style.transition = '1s';
        aviso.style.visibility = 'collapse';
        
        bconf.innerHTML = `
        <img src="/anexos/midias/icon-conf-outline.svg" class="icon-botao" id="iconf" alt="Configuração">
        `;

        bajuda.style.top = '10px';
        bajuda.style.opacity = '0';
        bajuda.style.transition = '1s';
        
        bvolu.style.top = '10px';
        bvolu.style.opacity = '0';
        bvolu.style.transition = '1s';

        bdark.style.top = '10px';
        bdark.style.opacity = '0';
        bdark.style.transition = '1s';

        iconf = document.getElementById('iconf');
        if (vdark == 1) {
            iconf.style.filter = 'invert(100%)';
        } else {
            iconf.style.filter = 'invert(0%)';
        }
    }
}

//ajuda
function fajuda() {
    ajuda = document.getElementById('ajuda');
    ajuda.style.display = 'block';
}

// Volume
function fvolu() {
    if (bvolu.innerHTML != `<img src="/anexos/midias/icon-volume-mute.svg" class="icon-botao" id="ivolu" alt="Volume">`) {
            document.querySelectorAll("video, audio").forEach((elem) => elem.volume = 0);
            bvolu.innerHTML = `<img src="/anexos/midias/icon-volume-mute.svg" class="icon-botao" id="ivolu" alt="Volume">`;
        } else {
            document.querySelectorAll("video, audio").forEach((elem) => elem.volume = 1);
            bvolu.innerHTML = `<img src="/anexos/midias/icon-volume-3.svg" class="icon-botao" id="ivolu" alt="Mute">`;
    }
}

// MODO ESCURO

root = document.querySelector(':root');
icon = document.getElementsByClassName('icon');
vdark = 1;

function fdark() {
    if (getComputedStyle(root).getPropertyValue('--branco') == '#ffffff') {
        root.style.setProperty('--branco', '#000000');
        root.style.setProperty('--preto', '#ffffff');
        for (let i = 0; i < icon.length; i++) {
            console.dir(icon[i].style.filter = 'invert(0%)');
        }
        vdark = 0;
    } else {
        root.style.setProperty('--branco', '#ffffff');
        root.style.setProperty('--preto', '#000000');
        for (let i = 0; i < icon.length; i++) {
            console.dir(icon[i].style.filter = 'invert(100%)');
        }
        vdark = 1;
    }
}