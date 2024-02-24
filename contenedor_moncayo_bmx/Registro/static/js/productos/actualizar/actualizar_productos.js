//Funciones anonimas
$(document).ready(function() {
  
  /*DESACTIVA CAMPOS AL CARGAR LA PAGINA*/
  /*Titulos*/
  $('#ventaProductos').hide();
  /*Segundo formulario*/
  $('.C_unidadesMinimasVenta').hide();
  $('.C_unidadesMinimasUsoInterno').hide();
  $('.C_precioVentaUnidad').hide();
  $('.C_precioVentaUnidadInterno').hide();
  /*Tercer Formulario */
  $('.C_nombreDistribuidor').hide();
  $('.C_direccionDistribuidor').hide();
  $('.C_telefono').hide();
  $('.C_correo').hide();
  $('.C_giroComercial').hide();
  $("#btn-reg").prop("disabled", true);
  $("#btnGuardarDistribuidor").prop("disabled", true);
  
  
  
  //CHECKBOX DE FORMULARIOS
  //Checkbox Seleccionado al cargar la pagina
  $("#checkbox1").prop("checked", true);
  
  //Solo permite seleccionar un valor del CHECKBOX
  $('input[name="option"]').change(function() {
    $('input[name="option"]').not(this).prop('checked', false);
  });
    
  //Se define la selección de por lo menos 1 CHECKBOX
  $('.C_Checklist_navegacion').on('change', function() {
    // Verificar si al menos un checkbox está seleccionado
    var checkboxes = $('.C_Checklist_navegacion');
    var isChecked = false;
    
    checkboxes.each(function() {
      if ($(this).is(':checked')) {
        isChecked = true;
        return false; // Salir del bucle each si se encuentra un checkbox seleccionado
      }
    });
    
    if (!isChecked) {
      // No se ha seleccionado ningún checkbox
      $(this).prop('checked', true); // Mantener el checkbox actual seleccionado
    }
  });
  
  

  $('#checkbox1').change(function() {
    if ($(this).is(":checked")) {
      //CHECKTITULOS DE MENUS}
      $('#compraProductos').show();
      $('#ventaProductos').hide();

      //CAMPOS QUE SE MUESTRAN
      //Primer formulario
      $('.C_nombreProducto').show();
      $('.C_distribuidor').show();
      $('.C_descripcion').show();
      $('.C_precioCompra').show();
      $('.C_cantidadProductos').show();
      $('.C_precioProductoMayoreUnidad').show();
      //CAMPOS QUE SE OCULTAN
      //Segundo formulario
      $('.C_unidadesMinimasVenta').hide();
      $('.C_unidadesMinimasUsoInterno').hide();
      $('.C_precioVentaUnidad').hide();
      $('.C_precioVentaUnidadInterno').hide();
      /*Tercer Formulario */
      $('.C_nombreDistribuidor').hide();
      $('.C_direccionDistribuidor').hide();
      $('.C_telefono').hide();
      $('.C_correo').hide();
      $('.C_giroComercial').hide();
    }
  });



  $("#btnBrush").click(function() {
    if($('#checkbox1').is(":checked")){
      $("#nombreProducto").val('');
      $('#nombreProducto').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
      $("#distribuidor").val('');
      $('#distribuidor').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
      $("#descripcion").val('');
      $('#descripcion').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
      $("#precioCompra").val('');
      $('#precioCompra').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
      $("#cantidadProductosMayoreo").val('');
      $('#cantidadProductosMayoreo').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
      $("#precioProductoMayoreoUnidad").val('');
      $('#precioProductoMayoreoUnidad').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
          
    }
  });



  $('#checkbox2').change(function() {
    if ($(this).is(":checked")) {
      //CHECKTITULOS DE MENUS}
      $('#ventaProductos').show();
      $('#compraProductos').hide();

      //CAMPOS QUE SE MUESTRAN
      //Segundo formulario
      $('.C_unidadesMinimasVenta').show();
      $('.C_unidadesMinimasUsoInterno').show();
      $('.C_precioVentaUnidad').show();
      $('.C_precioVentaUnidadInterno').show();

      //CAMPOS QUE SE OCULTAN
      //Primer formulario
      $('.C_nombreProducto').hide();
      $('.C_distribuidor').hide();
      $('.C_descripcion').hide();
      $('.C_precioCompra').hide();
      $('.C_cantidadProductos').hide();
      $('.C_precioProductoMayoreUnidad').hide();

      /*Tercer Formulario */
      $('.C_nombreDistribuidor').hide();
      $('.C_direccionDistribuidor').hide();
      $('.C_telefono').hide();
      $('.C_correo').hide();
      $('.C_giroComercial').hide();
    }
  });



  $("#btnBrush").click(function() {
    if($('#checkbox2').is(":checked")){
      $("#inputUnidsMinVenta").val('');
      $('#inputUnidsMinVenta').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
      $("#inputUnidsMinUsoInter").val('');
      $('#inputUnidsMinUsoInter').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
      $("#precioVentaUnidad").val('');
      $('#precioVentaUnidad').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
      $("#precioVentaUnidadInterno").val('');
      $('#precioVentaUnidadInterno').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
    }
  });



  $(window).resize(function() {
    var width = $(window).width();
    
    if (width <= 1000) {
      $('#checkbox1').change(function() {
        if ($(this).is(":checked")) {
          $('.C_seccionCarrusel').show();
          $('#campoDerecho').removeAttr("height");
          $('#campoDerecho').attr('style', "height: 65%;")
          $(window).resize();
        };
      });

      $('#checkbox2').change(function() {
        if ($(this).is(":checked")) {
          $('.C_seccionCarrusel').hide();
          $('#campoDerecho').removeAttr("height");
          $('#campoDerecho').attr('style', "height: 78%;")
          $(window).resize();
        }
      });
    }
    
    else{
      $('.C_seccionCarrusel').show();
      $('#campoDerecho').removeAttr("height");
      $('#campoDerecho').attr('style', "height: 50vh;")                  
    }
  });
  $(window).resize();
    
      
  // Se define una variable contadorTelefono con valor inicial de 1, que llevará la cuenta de los campos de teléfono agregados.
  var contadorTelefono = 1;

  // Se agrega un evento de clic al botón con el id "btnTelefono".
  $('#btnTelefono').click(function() {
    // Se verifica si el contadorTelefono es menor o igual a 3 (límite de campos de teléfono permitidos).
    if (contadorTelefono <= 2) {
      // Se crea un nuevo elemento div con un id único y se le asigna una clase "C_nuevoDiv".
      var nuevoDiv = $('<div id="DivdelInput' + contadorTelefono + '">' + '<label>Teléfono ' + contadorTelefono + '</label>' + '</div>').addClass("C_nuevoDiv");

      // Se crea un nuevo elemento div que contiene un campo de entrada de número de teléfono, un botón de eliminar y se le asigna una clase "C_nuevoDiv".
      var nuevoInput = $('<div>' +
      '<input type="number" id="idAdicional' + contadorTelefono + '" class="NumAdicional form-control" placeholder="Teléfono Distribuidor ' + contadorTelefono + '">' +
      '<button id="btn_borrar_tel_' + contadorTelefono + '" class="C_btnTelMenos">-</button>' +
      '</div>').addClass("C_nuevoDiv");
  
      // Se verifica si ya existen elementos con la clase "C_nuevoDiv" en el documento.
      if ($('.C_nuevoDiv').length > 0) {
        // Si existen, se inserta el nuevoDiv después del último elemento con la clase "C_nuevoDiv".
        $('.C_nuevoDiv').last().after(nuevoDiv);
        // Se inserta el nuevoInput después de nuevoDiv.
        nuevoDiv.after(nuevoInput);
      } 
      
      else {
        // Si no existen elementos con la clase "C_nuevoDiv", se inserta nuevoDiv después del elemento con el id "telAdic".
        $('#telAdic').after(nuevoDiv);
        // Se inserta nuevoInput después de nuevoDiv.
        nuevoDiv.after(nuevoInput);
      }

      // Agregar evento de click al botón de eliminar
      // Se agrega un evento de clic al botón dentro de nuevoInput.
      nuevoInput.find('button').click(function() {
        // Se obtienen las referencias al div anterior (currentDiv) y al div actual (currentInput) que contienen el botón que se hizo clic.
        var currentDiv = $(this).parent().prev('.C_nuevoDiv');
        var currentInput = $(this).parent();
        // Se eliminan los campos correspondientes al div y al input actuales.
        currentDiv.remove();
        currentInput.remove();
        
        // Se recorren los campos restantes y se actualizan las posiciones y los ids.
        $('.C_nuevoDiv').each(function(index) {
          var divId = 'DivdelInput' + (index + 1);
          var inputId = 'idAdicional' + (index + 1);
          // Se actualiza el id del div.
          $(this).attr('id', divId);
          // Se actualiza el texto de la etiqueta dentro del div.
          $(this).find('label').text('Teléfono ' + (index + 1));
          // Se actualiza el id del input dentro del siguiente div.
          $(this).next('.C_nuevoDiv').find('input').attr('id', inputId);
          // Se actualiza el id del botón dentro del siguiente div.
          $(this).next('.C_nuevoDiv').find('button').attr('id', 'btn_borrar_tel_' + (index + 1));
        });

        // Se decrementa el contador de teléfonos.
        contadorTelefono--;
      });

      // Se incrementa el contador de teléfonos.
      contadorTelefono++;
    }
  });
  


  // Agregar evento de click al botón de borrar todos los campos
  // Se agrega un evento de clic al botón con el id "btn_borrar_todos".
  $('#btn_borrar_todos').click(function() {
    // Se eliminan todos los elementos con la clase "C_nuevoDiv".
    $('.C_nuevoDiv').remove();
    // Se restablece el contador de teléfonos a 1.
    contadorTelefono = 1;
  });

      
  //Activar Mensajes de tooltip
  $('[data-bs-toggle="tooltip"]').tooltip();

  //Función para mover el carrusel cuando cambie de VERSIÓN-ESCRITORIO a VERSIÓN-MÓVIL
  $(window).resize(function() {
    var width = $(window).width();
    
    if (width <= 1000) {
      $('.C_home').show();
      $('.C_menu').show();
      
      var copiaCarrusel = $('.C_seccionCarrusel').clone();
      $('.C_seccionCarrusel').remove();
      copiaCarrusel.insertAfter("#campoDerecho");

    } 
    else {
      $('.C_home').hide();
      $('.C_menu').hide();
      var copiaCarrusel = $('.C_seccionCarrusel').clone();
      $('.C_seccionCarrusel').remove();
      copiaCarrusel.insertAfter(".C_tituloCampoIzquierdo");
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

    $('#formulario-productos').submit();
  });


  /*Terminan FUNCIONES ANONIMAS*/
});



//CANTIDAD DE PRODUCTOS POR MAYOREO
/*Aumentar cantidad de productos por mayoreo*/
function aumentarCantidadProd(){
  if(document.getElementById('cantidadProductosMayoreo').value == null){
  document.getElementById('cantidadProductosMayoreo').value = 0;
  }
  else if(document.getElementById('cantidadProductosMayoreo').value ==  1000000){
    document.getElementById('cantidadProductosMayoreo').value = 1000000;
  }
  else{
    document.getElementById('cantidadProductosMayoreo').value++;
  }
}



/*Disminuir cantidad de productos por mayoreo*/
function disminuirCantidadProd(){
  //comprobacion de que no sean numeros negativos
  if(document.getElementById('cantidadProductosMayoreo').value == 0){ 
    //Si es menor de 0 lo establece en 0
    document.getElementById('cantidadProductosMayoreo').value = 0; 
  }
  else{
    document.getElementById('cantidadProductosMayoreo').value--;
  }
}



/*UNIDADES MINIMAS DISPONIBLES PARA VENTAS */
/*Aumentar unidades minimas disp. para ventas*/
function aumenUnidsMinVent(){
  if(document.getElementById('inputUnidsMinVenta').value == null){
    document.getElementById('inputUnidsMinVenta').value = 0;
  }
  else if(document.getElementById('inputUnidsMinVenta').value ==  1000000){
    document.getElementById('inputUnidsMinVenta').value = 1000000;
  }
  else{
    document.getElementById('inputUnidsMinVenta').value++;
  }
}



/*Disminuir unidades minimas disp. para ventas*/
function dismiUnidsMinVent(){
  //comprobacion de que no sean numeros negativos
  if(document.getElementById('inputUnidsMinVenta').value == 0){ 
    //Si es menor de 0 lo establece en 0
    document.getElementById('inputUnidsMinVenta').value = 0; 
  }
  else{
    document.getElementById('inputUnidsMinVenta').value--;
  }
}
  


/*UNIDADES MINIMAS DISPONIBLES PARA USO INTERNO */
/*Aumentar unidades minimas disp para uso interno*/
function aumenUnidsMinUsoInterno(){
  if(document.getElementById('inputUnidsMinUsoInter').value == null){
    document.getElementById('inputUnidsMinUsoInter').value = 0;
  }
  else if(document.getElementById('inputUnidsMinUsoInter').value ==  1000000){
    document.getElementById('inputUnidsMinUsoInter').value = 1000000;
  }
  else{
    document.getElementById('inputUnidsMinUsoInter').value++;
  }
}



/*Disminuir unidadds minimas disp para uso interno */
function dismiUnidsMinUsoInterno(){
  //comprobacion de que no sean numeros negativos
  if(document.getElementById('inputUnidsMinUsoInter').value == 0){ 
    //Si es menor de 0 lo establece en 0
    document.getElementById('inputUnidsMinUsoInter').value = 0; 
  }
  else{
    document.getElementById('inputUnidsMinUsoInter').value--;
  }
}
