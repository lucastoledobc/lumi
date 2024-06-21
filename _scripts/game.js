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
            Caso esteja tendo problemas desative o adblock, pode ajudar.
            Para outros casos você pode me mandar uma mensagem descrevendo o problema abaixo.
            <form action="">
                <label for="msg">Mensagem:</label><br>
                <input type="text" value="" placeholder="Descreva o problema aqui...">
            </form>
        </div>

`;

// WARNING

const war = document.getElementById("warn");
// war.innerHTML = `

// `;

const img = document.getElementById("info");

function info() {
    if (warn.style.display != 'block') {
        warn.style.display = 'block';
        img.innerHTML = `
        <img src="/_midias/icon-close.svg" id="iinfo" class="icon" alt="Informação"></img>
        `;
    } else {
        warn.style.display = 'none';
        img.innerHTML = `
        <img src="/_midias/icon-info.svg" id="iinfo" class="icon" alt="Informação"></img>
        `;
    }
}