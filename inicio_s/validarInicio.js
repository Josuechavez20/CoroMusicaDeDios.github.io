var attempt=10;

function validateInicio(){

    var password=document.getElementById("password").value;

    if(password =="12345678"){

        window.location="P_secun/inicio.html";

        return true;
    
    }
    else{
        
        Swal.fire({
            icon: 'error',
            title: 'Lo siento  :(',
            text: 'No perteneces a este coro'
          })
    }

}

function Recordatorio1(){
        
    Swal.fire({
        //icon: 'error',
        title: 'MISA COMPLETADA',
        //text: 'ㅤㅤFecha: 12 DE NOVIEMBRE 2022ㅤㅤㅤㅤㅤㅤHorario: 13:00 ㅤㅤㅤㅤㅤㅤLugar: El sauz Bajo'
      })
}

function Recordatorio2(){
        
    Swal.fire({
        //icon: 'error',
        title: 'Misa de boda',
        text: 'ㅤㅤㅤㅤFecha: 12 DE NOVIEMBRE 2022ㅤㅤㅤㅤㅤㅤㅤㅤ Horario: 13:00ㅤㅤㅤㅤㅤ ㅤㅤㅤㅤLugar: El sauz Bajo'
      })
}

