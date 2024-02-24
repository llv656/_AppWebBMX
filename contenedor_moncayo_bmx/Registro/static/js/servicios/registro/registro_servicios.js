//Funciones anonimas
$(document).ready(function() {
  /*Inician las FUNCIONES ANONIMAS */
  
  //Desactivar Botón de Registrar
  $("#btn-reg").prop("disabled", true);
  
  //Activar tooltip
  $('[data-bs-toggle="tooltip"]').tooltip();
  
  //Limpiar campos con icono BRUSH
  $("#btnBrush").click(function() {
    $("#nombreServicio").val('');
    $('#nombreServicio').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
    $("#descripcionServicio").val('');
    $('#descripcionServicio').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
    $("#tiempoServicio").val('');
    $('#tiempoServicio').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
    $("#precioPublico").val('');
    $('#precioPublico').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
    $("#precioInterno").val('');
    $('#precioInterno').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
    $("#btn-reg").prop("disabled", true);
  });
      

  /*Se muestran los iconos cuando la resolución es de 1000px */
  $(window).resize(function() {
    var width = $(window).width();
    if (width <= 775) {
        $('.C_home').show();
        $('.C_menu').show();
    } else {
        $('.C_home').hide();
        $('.C_menu').hide();
    }
    });
  $(window).resize();

  // Asociar Evento Click al botón con id 'btn-reg'
  $("#btn-reg").click(function(){
    // Extraindo SRC de las imagenes cargadas en el carrusel
    // Selecciona todas las imágenes con la clase 'C_nuevaImagenCargada'
    var imagenesCargadas = $('.C_nuevaImagenCargada');
    var contenedorSelect = $('#copiaimagenesCargadasEnCarrusel');
    
    // Verificar si hay al menos una imagen cargada
    if (imagenesCargadas.length > 0) {
      // Limpiar opciones existentes antes de agregar nuevas
      contenedorSelect.empty();

      // Itera sobre cada imagen cargada
      imagenesCargadas.each(function(index, imagen) {
        // Obtén el valor completo del atributo 'src' para cada imagen
        var srcCompleto = $(imagen).attr('src');
        // Encuentra la posición del prefijo 'data:image/' que indica el inicio de los datos base64
        var base64Index = srcCompleto.indexOf('data:image/');
        
        // Verifica si se encuentra el prefijo
        if (base64Index !== -1) {
          // Extrae la parte después del prefijo
          var base64Data = srcCompleto.substring(base64Index + 'data:image/'.length);
          // Crea una nueva opción y asigna el valor base64Data
          var nuevaOpcion = $('<option>').val(base64Data);
          // Agrega la nueva opción al select
          contenedorSelect.append(nuevaOpcion);
          // Imprime el valor en la consola para verificar
          console.log('Imagen ' + (index + 1) + ': ' + base64Data);
        } 
        else {
          console.log('Imagen ' + (index + 1) + ': No se encontró el prefijo para datos base64.');
        }
      });
    } 
    else  {
      console.log('No hay imágenes cargadas en el carrusel.');
    }

    $('#formulario-servicios').submit();
  });

});/*Terminan FUNCIONES ANONIMAS*/  




  
  
  