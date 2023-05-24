function gabarito() {
    var opt = document.getElementsByName('opt');
    var res = document.getElementById('res');

    for (c=10;c<40;c+=10) {
        document.getElementById(c).style.display = 'block';
    }

    for (c=0;c<4;c++) {
        if (opt[c].checked) {
            document.getElementById(c+5).style.background = "red";
        }
    }
    
    var selected = document.querySelector("input[name='opt']:checked").value;
    if (selected=='1') {
        res.innerHTML = `Resposta Certa!`;
        res.style.color = 'green';
        let g = document.querySelector("input[name='opt']:checked").id;
        g = Number(g);
        document.getElementById(g+5).style.background = "green";
    } else {
        res.innerHTML = `Resposta Errada!`;
        res.style.color = 'red'
    }
}



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