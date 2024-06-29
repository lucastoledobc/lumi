//BOTOES

let botoes = document.getElementById('botoes')
botoes.innerHTML = `
        <button type="button" id="back" class="button">
            <img src="/_midias/icon-back.svg" id="iback" class="icon" alt="Voltar">
        </button>
        <button type="button" id="info" class="button" onclick="info()">
            <img src="/_midias/icon-info.svg" id="iinfo" class="icon" alt="Informação">
        </button>
        <div class="warn" id="warn">
        </div>
        <button type="button" id="maxi" class="button">
            <img src="/_midias/icon-maxi.svg" id="imaxi" class="icon" alt="Maximizar" onclick="maxi()">
        </button>

`;


// WARNING

const war = document.getElementById("warn");
    war.innerHTML = `
        Caso esteja tendo problemas desative o adblock, pode ajudar.
            Para outros casos você pode me mandar uma mensagem descrevendo o problema abaixo.
            <form action="">
                <label for="msg">Mensagem:</label><br>
                <input type="text" value="" placeholder="Descreva o problema aqui...">
            </form>
        `;


// Functions

function info() {
    let img = document.getElementById("info");
    if (warn.style.display != 'block') {
        warn.style.display = 'block';
        img.innerHTML = `
        <img src="/_midias/icon-close.svg" id="iinfo" class="icon" alt="Informação">
        `;
    } else {
        warn.style.display = 'none';
        img.innerHTML = `
        <img src="/_midias/icon-info.svg" id="iinfo" class="icon" alt="Informação">
        `;
    }
}

function maxi() {
    let img = document.getElementById("maxi");
    let elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen(), img.innerHTML = `
        <img src="/_midias/icon-mini.svg" id="imaxi" class="icon" alt="Minimizar" onclick="mini()">
        `;
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen(), img.innerHTML = `
        <img src="/_midias/icon-mini.svg" id="imaxi" class="icon" alt="Minimizar" onclick="mini()">
        `;
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen(), img.innerHTML = `
        <img src="/_midias/icon-mini.svg" id="imaxi" class="icon" alt="Minimizar" onclick="mini()">
        `;
      }
    }

function mini() {
    let img = document.getElementById("maxi");
    if (document.exitFullscreen) {
        document.exitFullscreen(), img.innerHTML = `
        <img src="/_midias/icon-maxi.svg" id="imaxi" class="icon" alt="Maximizar" onclick="maxi()">
        `;
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen(), img.innerHTML = `
        <img src="/_midias/icon-maxi.svg" id="imaxi" class="icon" alt="Maximizar" onclick="maxi()">
        `;
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen(), img.innerHTML = `
        <img src="/_midias/icon-maxi.svg" id="imaxi" class="icon" alt="Maximizar" onclick="maxi()">
        `;
    }
    }  