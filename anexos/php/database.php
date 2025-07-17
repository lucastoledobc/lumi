<?php 
$db_server = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "tokid";

$conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name);

$value = $_POST["submit"];
if($value == "Cadastrar") {
    $nome = $_POST["nome"] ?? "NULL";
    $nasc = $_POST["nasc"] ?? "NULL";
    $sexo = $_POST["sexo"] ?? "NULL";
    $esco = $_POST["esco"] ?? "NULL";

    $mail = $_POST["mail"] ?? "NULL";
    $pass = $_POST["pass"] ?? "NULL";


    $id = rand(100000000, 999999999);
    $sql = "INSERT INTO usuarios (id_usuario, nome, nascimento, sexo, escolaridade, email, senha)
            VALUES ('$id','$nome', '$nasc', '$sexo', '$esco', '$mail', '$pass')";
    $conn->query($sql);
    $id2 = rand(100000000, 999999999);
    $sql = "INSERT INTO registro_pep (id_registro_pep, id_user_pep, cirurgias, vacinas,  tipo_sanguineo, observacoes)
            VALUES ('$id2', '$id', NULL, NULL, NULL, NULL)";
    $conn->query($sql);

    echo '<script>location.replace("../")</script>';
        
}
$conn->close();
?>