function gabarito() {
    let opt = document.getElementsByName('opt');
    let res = document.getElementById('res');

    for (c=10;c<40;c+=10) {
        document.getElementById(c).style.display = 'block';
    } /* botoes de resposta aparecem */

    for (c=0;c<5;c++) {
        if (opt[c].checked) {
            document.getElementById(c+5).style.background = "red";
        }
    }
    
    let selected = document.querySelector("input[name='opt']:checked").value; /* pega o value da opção marcada */
    if (selected=='1') {
        res.style.display = 'block';
        res.innerHTML = `Resposta Certa!`;
        res.style.color = 'green';
        let g = document.querySelector("input[name='opt']:checked").id;
        g = Number(g);
        document.getElementById(g+5).style.background = "green";
    } else {
        res.style.display = 'block';
        res.innerHTML = `Resposta Errada!`;
        res.style.color = 'red';
    }
}

// Respostas

function abrir1() {
    if (res1.style.display == 'block') {
        res1.style.display = 'none';
    }
    else {
        res1.style.display = 'block';
    }
}
function abrir2() {
    if (res2.style.display == 'block') {
        res2.style.display = 'none'
    }
    else {
        res2.style.display = 'block'
    }
}
function abrir3() {
    if (res3.style.display == 'block') {
        res3.style.display = 'none'
    }
    else {
        res3.style.display = 'block'
    }
}