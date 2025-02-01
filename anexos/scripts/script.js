    // HEAD

document.head.innerHTML += `
    <meta name="description" content="Site de Física para ensino básico, ensino médio e ensino superior.">
    <link rel="shortcut icon" href="/anexos/midias/favicon-32x32.png" type="image/x-icon">
`;

    //BOTOES

botoes = document.getElementById('botoes');
botoes.innerHTML = `
    <button type="button" class="botao-icone" id="bhome">
        <a href="/03/index2.html"> 
        <img src="/anexos/midias/icon-home.svg" id="ihome" class="icon-botoes" alt="Voltar">
        </a>
    </button>

    <div id="aviso">
        Dúvidas? Sugestões? Envie para o email <address><a href="mailto:lumifisica@gmail.com">lumifisica@gmail.com</a></address> ou escreva abaixo.
        <form action="https://formsubmit.co/lumifisica@gmail.com" method="POST">
            <input type="email" name="email" placeholder="Seu email aqui" required>
            <textarea name="message" placeholder="Descreva o problema aqui..." required></textarea>
        <button type="submit" id="enviar">Enviar</button>
        </form>
    </div>
    <button type="button" class="botao-icone" id="bdark" onclick="fdark()">
        <img src="/anexos/midias/icon-dark1.svg" id="idark" class="icon-botoes" alt="Modo escuro">
    </button>
    <button type="button" class="botao-icone" id="bvolu" onclick="fvolu()">
        <img src="/anexos/midias/icon-volume-3.svg" id="ivolu" class="icon-botoes" alt="Mute">
    </button>
    <button type="button"  class="botao-icone"id="bajuda" onclick="fajuda()">
        <img src="/anexos/midias/icon-help.svg" id="iajuda" class="icon-botoes" alt="Ajuda">
    </button>
    <button type="button" class="botao-icone" id="bconf" onclick="fconf()">
        <img src="/anexos/midias/icon-conf.svg" id="bconf" class="icon-botoes" alt="Configuração">
    </button>

    <button type="button" class="botao-icone" id="bmaxi" onclick="fmaxi()">
        <img src="/anexos/midias/icon-maxi.svg"id="imaxi" class="icon-botoes" alt="Maximizar">
    </button>
`;

// Aviso

aviso = document.getElementById('aviso');
aviso.style.opacity = '0';
aviso.style.right = '0%';
aviso.style.visibility = 'collapse';

// INFO

function fconfig() {
    bconf = document.getElementById('bconf');
    bajuda = document.getElementById('bajuda');
    bvolu = document.getElementById('bvolu');
    bdark = document.getElementById('bdark');

    if (aviso.style.opacity == '0') {
        aviso.style.visibility = 'visible';
        aviso.style.right = 'calc(var(--bm) * 2 + clamp(1rem, 7vw, 2rem))';
        aviso.style.opacity = '1';
        aviso.style.transition = '1s';

        bconf.innerHTML = `
        <img src="/anexos/midias/icon-close.svg" class="icon" id="iconf" alt="Fechar">
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
        
        iconf.innerHTML = `
        <img src="/anexos/midias/icon-info.svg" class="icon" id="iconf" alt="Informação">
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
    if (bvolu.innerHTML != `<img src="/anexos/midias/icon-volume-mute.svg" class="icon" id="ivolu" alt="Volume">`) {
            document.querySelectorAll("video, audio").forEach((elem) => elem.volume = 0);
            bvolu.innerHTML = `<img src="/anexos/midias/icon-volume-mute.svg" class="icon" id="ivolu" alt="Volume">`;
        } else {
            document.querySelectorAll("video, audio").forEach((elem) => elem.volume = 1);
            bvolu.innerHTML = `<img src="/anexos/midias/icon-volume-3.svg" class="icon" id="ivolu" alt="Mute">`;
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
        <img src="/anexos/midias/icon-mini.svg" class="icon" id="imaxi" onclick="fmini()" alt="Minimizar">
        `;
        } else if (tela.webkitRequestFullscreen) { /* Safari */
        tela.webkitRequestFullscreen(), img.innerHTML = `
        <img src="/anexos/midias/icon-mini.svg" class="icon" id="imaxi" onclick="fmini()" alt="Minimizar">
        `;
        } else if (tela.msRequestFullscreen) { /* IE11 */
        tela.msRequestFullscreen(), img.innerHTML = `
        <img src="/anexos/midias/icon-mini.svg" class="icon" id="imaxi" onclick="fmini()" alt="Minimizar">
        `;
        }
}

function fmini() {
    let img = document.getElementById("bmaxi");
    if (document.exitFullscreen) {
        document.exitFullscreen(), img.innerHTML = `
        <img src="/anexos/midias/icon-maxi.svg" class="icon" id="imaxi" onclick="fmaxi()" alt="Maximizar">
        `;
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen(), img.innerHTML = `
        <img src="/anexos/midias/icon-maxi.svg" class="icon" id="imaxi" onclick="fmaxi()" alt="Maximizar">
        `;
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen(), img.innerHTML = `
        <img src="/anexos/midias/icon-maxi.svg" class="icon" id="imaxi" onclick="fmaxi()" alt="Maximizar">
        `;
    }
} 

    

/* 02 */

function gabarito() {
    opt = document.getElementsByName('opt');
    res = document.getElementById('res');

    for (c = 10; c < 40; c += 10) {
        botaoRes = document.getElementsByClassName('bresposta');
        for (i of botaoRes) {
            i.style.display = 'block';
        }
    } /* botoes de resposta aparecem */

    for (c = 0; c < 5; c++) {
        if (opt[c].checked) {
            document.getElementById(c+5).style.background = "red";
        }
    }
    
    selected = document.querySelector("input[name='opt']:checked").value; /* pega o valor da opção marcada */
    if (selected == '1') {
        res.style.display = 'block';
        res.innerHTML = `Resposta Certa!`;
        res.style.color = 'green';
        
        g = document.querySelector("input[name='opt']:checked").id; /* pega o label da opção certa */
        g = Number(g);
        document.getElementById(g+5).style.background = "green";
    } else {
        res.style.display = 'block';
        res.innerHTML = `Resposta Errada!`;
        res.style.color = 'red';
    }
}

// Respostas

function fabrir(x) {
    resposta = document.getElementsByClassName('divres');
    for (i of resposta) {
        i.style.visibility = 'collapse';
    }
    resposta[x].style.visibility = 'visible';
}

function abrir1() {
    resp.document.getElementsByClassName('divres');
    for (i = 0; i < 3; i++) {
        resp[i].style.display='none';
    }
    document.getElementById('resp1').style.display = 'block';
}
function abrir2() {
    resp.document.getElementsByClassName('divres');
    for (i = 0; i < 3; i++) {
        resp[i].style.display='none';
    }
    document.getElementById('resp2').style.display = 'block';
}
function abrir3() {
    resp.document.getElementsByClassName('divres');
    for (i = 0; i < 3; i++) {
        resp[i].style.display='none';
    }
    document.getElementById('resp3').style.display = 'block';
}
// Caixa de Dicas
function tip1() {
    box1.style.display = 'block';
}
function fechar() {
    box1.style.display = 'none';
}



/* 03 */

 
ganhar = document.getElementById('ganhar');
if (ganhar != null) {
    ganhar.innerHTML = `<h1 class="h1-ganhar">Você acertou!</h1>
                <button class="botao" onclick="fjogar()">Jogar de novo</button>
        <audio src="/anexos/midias/sound/erro1.wav"></audio>
    `;
}

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

/* 04 */

function curiosidade (url) {
    var urls = new Array();
    urls[0] = "http://learninginhand.com";
    urls[1] = "http://learninginhand.com/about";
    urls[2] = "http://learninginhand.com/contact";
    urls[4] = "http://learninginhand.com/services";
    urls[5] = "http://learninginhand.com/videos";
    urls[6] = "http://learninginhand.com/infographics";
    urls[7] = "http://learninginhand.com/resources";
    urls[8] = "http://learninginhand.com/stickaround";
    urls[9] = "http://learninginhand.com/posts";
    urls[10] = "http://learninginhand.com/pet";

    var random = Math.floor(Math.random()*urls.length);

    window.location = urls[random];

    return url
}