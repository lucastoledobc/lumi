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



// Label ao dar check

function check1() {
    for (c=5; c<9; c++) {
        document.getElementById(c).style.borderStyle = "outset";
    }
        document.getElementById(5).style.borderStyle = "inset";
    }

function check2() {
    for (c=5; c<9; c++) {
        document.getElementById(c).style.borderStyle = "outset";
    }
        document.getElementById(6).style.borderStyle = "inset";
    }

function check3() {
    for (c=5; c<9; c++) {
        document.getElementById(c).style.borderStyle = "outset";
    }
        document.getElementById(7).style.borderStyle = "inset";
    }

function check4() {
    for (c=5; c<9; c++) {
        document.getElementById(c).style.borderStyle = "outset";
    }
        document.getElementById(8).style.borderStyle = "inset";

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