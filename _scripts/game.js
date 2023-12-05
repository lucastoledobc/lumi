// const body = document.getElementsByTagName("body")[0];
// body.innerHTML += `

// `;



function h1() {
    document.getElementById("hum").style.display = 'none';
}




// WARNING

const war = document.getElementById("war");
// war.innerHTML = `

// `;

const img = document.getElementById("info");

function info() {
    if (war.style.display != 'block') {
        war.style.display = 'block';
        img.innerHTML = `
        <img src="/_midias/icon-close.svg" id="iinfo" class="icon" alt="Informação"></img>
        `;
    } else {
        war.style.display = 'none';
        img.innerHTML = `
        <img src="/_midias/icon-info.svg" id="iinfo" class="icon" alt="Informação"></img>
        `;
    }
}