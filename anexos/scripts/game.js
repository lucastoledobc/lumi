    // HEAD

document.head.innerHTML += `
    <link rel="shortcut icon" href="/anexos/midias/favicon-32x32.png" type="image/x-icon">
`;
 
ganhar = document.getElementById('ganhar');
ganhar.innerHTML = `<h1 class="h1-ganhar">Você acertou!</h1>
            <button class="botao" onclick="fjogar()">Jogar de novo</button>
    <audio src="/anexos/midias/sound/erro1.wav"></audio>
`;
    //BOTOES

botoes = document.getElementById('botoes');
botoes.innerHTML = `
    <button type="button" id="bback" class="button">
        <a href="/03/index2.html"> 
        <img src="/anexos/midias/icon-back.svg" id="iback" class="icon" alt="Voltar">
        </a>
    </button>

    <div class="info" id="info"></div>
    <button type="button" id="bdark" class="button" onclick="fdark()">
        <img src="/anexos/midias/icon-dark1.svg" id="idark" class="icon" alt="Modo escuro">
    </button>
    <button type="button" id="bvolu" class="button" onclick="fvolu()">
        <img src="/anexos/midias/icon-volume-3.svg" id="ivolu" class="icon" alt="Mute">
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
    bvolu = document.getElementById('bvolu');
    bdark = document.getElementById('bdark');

    if (info.style.opacity == '0') {
        info.style.visibility = 'visible';
        info.style.opacity = '1';
        info.style.right = 'calc(var(--bm) * 2 + clamp(1rem, 7vw, 2rem))';
        info.style.transition = '1s';

        binfo.innerHTML = `
        <img src="/anexos/midias/icon-close.svg" id="iinfo" class="icon" alt="Fechar">
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
        
        bvolu.style.top = '10px';
        bvolu.style.opacity = '0';
        bvolu.style.transition = '1s';

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

// Volume
function fvolu() {
    if (bvolu.innerHTML != `<img src="/anexos/midias/icon-volume-mute.svg" id="ivolu" class="icon" alt="Volume">`) {
            document.querySelectorAll("video, audio").forEach((elem) => elem.volume=0);
            bvolu.innerHTML = `<img src="/anexos/midias/icon-volume-mute.svg" id="ivolu" class="icon" alt="Volume">`;
        } else {
            document.querySelectorAll("video, audio").forEach((elem) => elem.volume=1);
            bvolu.innerHTML = `<img src="/anexos/midias/icon-volume-3.svg" id="ivolu" class="icon" alt="Mute">`;
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
    audio = document.getElementsByTagName('audio')[0];
    audio.play();
    var count = 200;
    var defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio)
  });
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});
fire(0.2, {
  spread: 60,
});
fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8
});
fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2
});
fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}