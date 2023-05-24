
function flexivel() {
    let nav2 = document.getElementById('nav2');
    if (nav2.style.opacity == '1') {
        nav2.style.opacity = '0.9';
        nav2.style.left = '-200px';
        nav2.style.width = '200px';
    }
    else {
        nav2.style.opacity = '1';
        nav2.style.left = '0px';
        nav2.style.width = '100vw';
        nav2.style.transition = '0.5s';
    }
}


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