<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Com Ciência</title>
    <meta name="description" content="Site sobre Física no ensino básico, ensino médio, ensino superior">
    <link rel="shortcut icon" href="_midias/favicon.ico" type="image/x-icon">

    <link rel="stylesheet" href="_estilos/style.css" media="all">
    <link rel="stylesheet" href="_estilos/style-pc.css" media="screen and (min-width: 960px)">
    <link rel="stylesheet" href="_estilos/print.css" media="print">

    <!-- importações -->
    <!-- 3 tracinhos - MENU e lupa-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

</head>
<body>
    <header>
        <h1>Com Ciência Física</h1>
        <button class="bnav2" onclick="flexivel()"><span class="material-symbols-outlined">menu</button>
    </header>

    <nav class="nav1">
        <a href="/">Home</a>
        <a href="/002/index.html">Conteúdo</a>
        <a href="/003/index.html">Jogos</a>
        <a href="/004/index.html">Artigos</a>
        <a href="/005/index.html">Sobre</a>

        <button id="lupa" onclick="lupa()"><span class="material-symbols-outlined">search</span></button>
        
        <div id="search">
            <form action="../_php/search.php">
              <input type="text" placeholder="Procurar.." name="search">
              <button type="submit"><span class="material-symbols-outlined" style="color: white;">search</span></button></button>
            </form>
            <button id="x" onclick="lupa2()">[fechar]</button>
        </div>
    </nav>

    <nav class="nav2" id="nav2" onclick="flexivel()">
        <ul type="none">
            <ul type="none"><a href="">Mecânica</a></ul>
                <li><a href="">Cinemática</a></li>
                <li><a href="">Dinâmica</a></li>
            <ul type="none"><a href="">Termologia</a></ul>
                <li><a href="">Calor</a></li>
                <li><a href="">Calorimetria</a></li>
                <li><a href="">Fluxo de Calor</a></li>
            <ul type="none"><a href="">Ondulatória</a></ul>
                <li><a href="">Ondas</a></li>
                <li><a href="">Acústica</a></li>
                <li><a href="">Eq. de Onda</a></li>
            <ul type="none"><a href="">Eletromagnetismo</a></ul>
                <li><a href="">Eletricidade</a></li>
                <li><a href="">Magnetismo</a></li>
                <li><a href="">Eletromagnetismo</a></li>
            <ul type="none"><a href="">Moderna</a></ul>
                <li><a href="">Relatividade</a></li>
                <li><a href="">Física Quântica</a></li>
        </ul>
    </nav>

    <main>
        <p>Resultado da pesquisa:</p>
        <section id="res">
            <?php 
            echo "oi";
            ?>
        </section>
    </main>

    <footer>
        Site criado por Lucas Toledo.
    </footer>

    <script src="../_scripts/script.js"></script>
</body>
</html>