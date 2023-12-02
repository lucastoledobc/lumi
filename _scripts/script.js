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
    <h1>Com Ciência Física</h1>
    <button class="bnav2" onclick="flexivel()"><span class="material-symbols-outlined">menu</button>
`;

const nav1 = document.getElementById('nav1')
nav1.innerHTML = `
<a href="/01/">Home</a>
<a href="/02/">Conteúdo</a>
<a href="/03/">Jogos</a>
<a href="/04/">Artigos</a>
<a href="/05/">Sobre</a>

<button id="lupa" onclick="lupa()"><span class="material-symbols-outlined">search</span></button>

<div id="search">
    <form action="../_php/search.php">
      <input type="text" placeholder="Procurar.." name="search">
      <button type="submit"><span class="material-symbols-outlined" style="color: white;">search</span></button></button>
    </form>
    <button id="x" onclick="lupa2()">[fechar]</button>
</div>
    `;
    


const nav21 = document.getElementById('nav21')
nav21.innerHTML = `
    <ul>
        <ul><a href="">Mecânica</a></ul>
            <li><a href="">Cinemática</a></li>
            <li><a href="">Dinâmica</a></li>
        <ul><a href="">Termologia</a></ul>
            <li><a href="">Calor</a></li>
            <li><a href="">Calorimetria</a></li>
            <li><a href="">Fluxo de Calor</a></li>
        <ul><a href="">Ondulatória</a></ul>
            <li><a href="">Ondas</a></li>
            <li><a href="">Acústica</a></li>
            <li><a href="">Eq. de Onda</a></li>
        <ul><a href="">Eletromagnetismo</a></ul>
            <li><a href="">Eletricidade</a></li>
            <li><a href="">Magnetismo</a></li>
            <li><a href="">Eletromagnetismo</a></li>
        <ul><a href="">Moderna</a></ul>
            <li><a href="">Relatividade</a></li>
            <li><a href="">Física Quântica</a></li>
    </ul>
`;

const nav22 = document.getElementById('nav22')
nav22.innerHTML = `
    <ul>
        <ul><a href="">Mecânica</a></ul>
            <li><a href="">Cinemática</a></li>
            <li><a href="">Dinâmica</a></li>
        <ul><a href="">Termologia</a></ul>
            <li><a href="">Calor</a></li>
            <li><a href="">Calorimetria</a></li>
            <li><a href="">Fluxo de Calor</a></li>
        <ul><a href="">Ondulatória</a></ul>
            <li><a href="">Ondas</a></li>
            <li><a href="">Acústica</a></li>
            <li><a href="">Eq. de Onda</a></li>
        <ul><a href="">Eletromagnetismo</a></ul>
            <li><a href="">Eletricidade</a></li>
            <li><a href="">Magnetismo</a></li>
            <li><a href="">Eletromagnetismo</a></li>
        <ul><a href="">Moderna</a></ul>
            <li><a href="">Relatividade</a></li>
            <li><a href="">Física Quântica</a></li>
    </ul>
    <div id="ad2" class="ad"></div>
`;

// ad

const ad = document.getElementsByClassName("ad");
for (c=0; c<2; c++) {
    ad[c].innerHTML = `oi1`;
}

// Footer
let footer = document.getElementById('footer')
footer.innerHTML = `Site criado por Lucas Toledo.`




// Lupa
let caixa = document.getElementById('search');
let lup = document.getElementById('lupa');

function lupa() {
    if (caixa.style.display == 'block') {
        caixa.style.display = 'none';
    }
    else {
        caixa.style.display = 'block';
        lup.style.display = 'none';
    }
}

function lupa2() {
    if (lup.style.display == 'block') {
        lup.style.display = 'none';
    }
    else {
        lup.style.display = 'block';
        caixa.style.display = 'none';
    }
}



// nav 2

function flexivel() {
    let nav21 = document.getElementById('nav21');
    if (nav21.style.right != '0px') {
        nav21.style.right = '0px';
        nav21.style.transition = '0.5s';
        
    } else {
        nav21.style.right = '-200px';
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


