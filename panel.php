<?php
 session_start();
 error_reporting(0);
 $varsesion =$_SESSION['usuario'];

 if($varsesion == null || $varsesion == ''){
    echo 'Usted no tiene autorizacion';
    die();
   }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DALEM</title>

    <script src="https://kit.fontawesome.com/41bcea2ae3.js" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="css/estilos.css">

    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

</head>
<body>

   <h1> PANEL DE ADMINISTRACION</h1>
   <h2>BIENVENIDO: <?php echo $_SESSION['usuario']?></h2>
   <a href="cerrarS.php"> CERRAR SESSION</a>

</body>
</html>