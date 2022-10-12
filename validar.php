<?php
session_start();

$usuario=$_POST['usuario']='josue';
$_clave=$_POST['clave']='20590237';

if $usuario == 'usuario' and $_clave =='clave'{
    
    header("panel.php");

}  
else{
    echo" USTED NO PERTENECE A ESTE CORO !!!"
}
?>