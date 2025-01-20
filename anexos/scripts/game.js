    // HEAD

document.head.innerHTML += `
    <link rel="shortcut icon" href="/anexos/midias/favicon-32x32.png" type="image/x-icon">
`;
 
ganhar = document.getElementById('ganhar');
ganhar.innerHTML = `<h1>Você acertou!</h1>
<div id="start">
            <button onclick="fstart()">Jogar de novo</button>
        </div>
`;
    //BOTOES

botoes = document.getElementById('botoes');
botoes.innerHTML = `
    <button type="button" id="bback" class="button">
        <a href="/03/"> 
        <img src="/anexos/midias/icon-back.svg" id="iback" class="icon" alt="Voltar">
        </a>
    </button>

    <div class="info" id="info"></div>
    <button type="button" id="bdark" class="button" onclick="fdark()">
        <img src="/anexos/midias/icon-dark1.svg" id="idark" class="icon" alt="Modo escuro">
    </button>
    <button type="button" id="bajuda" class="button" onclick="fajuda()">
        <img src="/anexos/midias/icon-help.svg" id="iajuda" class="icon" alt="Ajuda">
    </button>
    <button type="button" id="binfo" class="button" onclick="finfo()">
        <img src="/anexos/midias/icon-info.svg" id="iinfo" class="icon" alt="Informação">
    </button>

    <button type="button" id="bmaxi" class="button">
        <img src="/anexos/midias/icon-maxi.svg"id="imaxi" class="icon" onclick="fmaxi()" alt="Maximizar">
    </button>
`;

    // info

info = document.getElementById("info");
info.innerHTML = `
    Caso esteja tendo problemas desative o adblock, pode ajudar.
    Para outros casos você pode me mandar uma mensagem descrevendo o problema abaixo.
    <form action="">
        <input type="text" value="" placeholder="Descreva o problema aqui...">
    </form>
    <button type="button" id="enviar">Enviar</button>
`;
info.style.opacity = '0';
info.style.right = '0%';
info.style.visibility = 'collapse';

    // FUNÇÕES BOTÕES
      
// INFO

function finfo() {
    binfo = document.getElementById('binfo');
    bajuda = document.getElementById('bajuda');
    bdark = document.getElementById('bdark');

    if (info.style.opacity == '0') {
        info.style.visibility = 'visible';
        info.style.opacity = '100';
        info.style.right = 'calc(var(--bm) * 2 + clamp(1rem, 7vw, 2rem) + 4px)';
        info.style.transition = '1s';

        binfo.innerHTML = `
        <img src="/anexos/midias/icon-close.svg" id="iinfo" class="icon" alt="Fechar">
        `;
        
        bajuda.style.top = 'calc(var(--bm) * 2 + clamp(1rem, 7vw, 2rem) + 4px)';
        bajuda.style.opacity = '100';
        bajuda.style.transition = '1s';

        bdark.style.top = 'calc(var(--bm) * 3 + clamp(1rem, 7vw, 2rem) * 2 + 4px * 2)';
        bdark.style.opacity = '100';
        bdark.style.transition = '1s';

        iinfo = document.getElementById('iinfo');
        if (vdark == 1) {
            iinfo.style.filter = 'invert(100%)';
        } else {
            iinfo.style.filter = 'invert(0%)';
        }
    } else {
        info.style.opacity = '0';
        info.style.right = '0%';
        info.style.transition = '1s';
        info.style.visibility = 'collapse';
        
        binfo.innerHTML = `
        <img src="/anexos/midias/icon-info.svg" id="iinfo" class="icon" alt="Informação">
        `;

        bajuda.style.top = '10px';
        bajuda.style.opacity = '0';
        bajuda.style.transition = '1s';

        bdark.style.top = '10px';
        bdark.style.opacity = '0';
        bdark.style.transition = '1s';

        iinfo = document.getElementById('iinfo');
        if (vdark == 1) {
            iinfo.style.filter = 'invert(100%)';
        } else {
            iinfo.style.filter = 'invert(0%)';
        }
    }
}

//ajuda
function fajuda() {
    ajuda = document.getElementById('ajuda');
    ajuda.style.display = 'block';
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

// TELA CHEIA

function fmaxi() {
    let img = document.getElementById("bmaxi");
    let tela = document.documentElement;
    if (tela.requestFullscreen) {
        tela.requestFullscreen(), img.innerHTML = `
        <img src="/anexos/midias/icon-mini.svg" id="imaxi" class="icon" alt="Minimizar" onclick="fmini()">
        `;
      } else if (tela.webkitRequestFullscreen) { /* Safari */
        tela.webkitRequestFullscreen(), img.innerHTML = `
        <img src="/anexos/midias/icon-mini.svg" id="imaxi" class="icon" alt="Minimizar" onclick="fmini()">
        `;
      } else if (tela.msRequestFullscreen) { /* IE11 */
        tela.msRequestFullscreen(), img.innerHTML = `
        <img src="/anexos/midias/icon-mini.svg" id="imaxi" class="icon" alt="Minimizar" onclick="fmini()">
        `;
      }
}

function fmini() {
    let img = document.getElementById("bmaxi");
    if (document.exitFullscreen) {
        document.exitFullscreen(), img.innerHTML = `
        <img src="/anexos/midias/icon-maxi.svg" id="imaxi" class="icon" alt="Maximizar" onclick="fmaxi()">
        `;
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen(), img.innerHTML = `
        <img src="/anexos/midias/icon-maxi.svg" id="imaxi" class="icon" alt="Maximizar" onclick="fmaxi()">
        `;
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen(), img.innerHTML = `
        <img src="/anexos/midias/icon-maxi.svg" id="imaxi" class="icon" alt="Maximizar" onclick="fmaxi()">
        `;
    }
} 

// BACK

// document.getElementById("back").addEventListener("click", () => {
//     history.back();
// });


// FUNÇÕES

function fganhar() {
    ganhar.style.display = 'block';
}