var attempt=10;

function validate(){

    var usuar=document.getElementById("usuar").value;
    var password=document.getElementById("password").value;

    if(password=="24681012"){
        
        Swal.fire({
            icon: 'success',
            title: 'CONTRASEÑA CORRECTO',
            text: 'BIENVENIDO'
          })
        
          window.location="https://drive.google.com/drive/folders/1LAgfabdNTv1pYnBtrQ_pC34j43QO6wT5?usp=sharing";

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



