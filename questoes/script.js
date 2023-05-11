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
        res.innerHTML = `Resposta Certa`;
        let g = document.querySelector("input[name='opt']:checked").id;
        g = Number(g);
        document.getElementById(g+5).style.background = "green";
    } else {
        res.innerHTML = `Resposta Errada`;
    }
}