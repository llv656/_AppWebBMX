

/* Esperamos a la carga del DOM */
window.addEventListener('DOMContentLoaded', (evento) => {
    /* Obtenemos la fecha de hoy en formato ISO */
    const hoy_fecha = new Date().toLocaleDateString().substring(0, 10);
    var arrFecha=hoy_fecha.split("/");
    var fecha=arrFecha[2]+"/"+arrFecha[1]+"/"+arrFecha[0];
    fecha = fecha.replaceAll('/','-');
    /* Buscamos la etiqueta, ya sea por ID (que no tiene) o por su selector */
    document.querySelector("input[name='fecha']").max = fecha;
});


function generator(event){
    event.preventDefault();
    document.getElementById('PassU').value = autoCreate(16);
}


function autoCreate(plength){
    var chars = "abcdefghijklmnopqrstubwsyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var password = '';    
      for(i=0; i<plength; i++){
        password+=chars.charAt(Math.floor(Math.random()*chars.length));
      }
    
    return password;
  }

  function mostrarContrasena(){
    var tipo = document.getElementById("PassU");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}