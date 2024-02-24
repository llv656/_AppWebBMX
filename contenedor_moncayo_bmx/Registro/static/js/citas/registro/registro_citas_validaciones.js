$(document).ready(function(){
  /*Inician funciones ANONIMAS */  
  /*Validación de Botón de búsqueda*/

  $(':input').on('input', function(){
    fechaBusqueda = $('#fecha-clientes').val();
    horaBusqueda = $('#hora-clientes').val();


    if (fechaBusqueda !== '' && horaBusqueda !== '') {
      $("#btnBusquedaCita").prop("disabled", false);
    }
    else{
      $("#btnBusquedaCita").prop("disabled", true);
    }

  });
  
  /*Terminan funciones ANONIMAS*/
});