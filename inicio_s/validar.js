var attempt=10;

function validate(){
    
    var password=document.getElementById("password").value;

    if(password=="0000"){
        
        Swal.fire({
            icon: 'success',
            title: 'CONTRASEÑA CORRECTO',
            text: 'BIENVENIDO'
          })
        
          window.location="......";

        return true;
    
    }
    else{
        
        Swal.fire({
            icon: 'error',
            title: 'Algo salio mal',
            text: 'Intenta de nuevo'
          })
    }

}



