function gabarito() {
    var opt = document.getElementsByName('opt');
    //var gab = document.getElementsByClassName('gab');
    var res = document.getElementById('res');

    document.getElementById("gab").style.background = "green";

    for (c=10;c<40;c+=10) {
        document.getElementById(c).style.display = 'block';
    }

    var c1=0
    for (c=0;c<4;c++) {
        c1 -=1
        if (opt[c].checked) {
            document.getElementById(c1).style.background = "red";
        }
    } 
    
    gab = 2

    if (opt[gab].checked) {
        res.innerHTML = `Resposta Certa`;
    }
    else {
        res.innerHTML = `Resposta Errada`;
    }
}