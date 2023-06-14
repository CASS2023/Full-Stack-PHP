<?php
// Obtener los valores enviados desde el formulario
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];

// Realizar la conexión a la base de datos y ejecutar la consulta SQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cursosamsungsql";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$sql = "SELECT * FROM usuario WHERE NOMBRE = '$nombre' AND APELLIDO = '$apellido' AND EMAIL = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Los datos son válidos y la consulta SQL fue exitosa
    echo "Los datos son válidos y la consulta SQL fue exitosa.";
} else {
    // Los datos no son válidos o la consulta SQL no tuvo resultados
    echo "Los datos no son válidos o la consulta SQL no tuvo resultados.";
}

$conn->close();
?>
