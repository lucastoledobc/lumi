function flexivel() {
    if (menus.style.display == 'block') {
        menus.style.display = 'none'
    }
    else {
        menus.style.display = 'block'
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