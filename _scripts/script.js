/* Lupa */
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

/* nav 2 */

function flexivel() {
    let nav2 = document.getElementById('nav2');
    if (nav2.style.opacity == '1') {
        nav2.style.opacity = '0.9';
        nav2.style.right = '-200px';
        nav2.style.width = '200px';
    }
    else {
        nav2.style.opacity = '1';
        nav2.style.right = '0%';
        nav2.style.width = '200px';
        nav2.style.transition = '0.5s';
    }
}


/* Caixa de dicas */

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


