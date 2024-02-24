$(document).ready(function() {

  //VALIDACIONES DE ENTRADAS DE FORMULARIO  VALIDACIONES DE ENTRADAS DE FORMULARIO  VALIDACIONES DE ENTRADAS DE FORMULARIO
  
  //PRODUCTO
  $("#nombreProducto").on("keyup", function() {
    var regex = /^[a-zA-Z0-9\s]{1,100}$/; // Expresión regular para caracteres alfanuméricos de 1 a 100 caracteres
    
    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value)) {
      this.value = this.value.replace(/[^a-zA-Z0-9\s]+/g, "").substring(0, 100);
      $('#nombreProducto').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
    else{
      $('#nombreProducto').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
  });
  
  

  //FECHA DE COMPRA
  //Obtener la fecha actual 
  var fechaActual = new Date(); 
  //Da formato a la fecha como YYY-MM-DD (formato requerido para un input de tipo date)
  var fechaFormato = fechaActual.toISOString().slice(0,10) 
  //Establece la fecha actual en el input 
  $('#fecha_compra').val(fechaFormato);

  $("#fecha_compra").blur(function() {
    if ($("#fecha_compra").val() === '') {
        $("#fecha_compra").removeClass("C_validacionCorrecta").addClass("C_colorBaseBorder");
    } else {
        $("#fecha_compra").removeClass("C_colorBaseBorder").addClass("C_validacionCorrecta");
    }
  });



  //RESPONSABLE DE COMPRA
  $("#responsable_compra").on("keyup", function() {
    var regex = /^[a-zA-Z0-9\s]{1,100}$/; // Expresión regular para caracteres alfanuméricos de 1 a 100 caracteres
    
    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value)) {
      this.value = this.value.replace(/[^a-zA-Z0-9\s]+/g, "").substring(0, 100);
      $('#responsable_compra').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
    else{
      $('#responsable_compra').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
  });



  //CANTIDAD DE PRODUCTOS
  $("#cantidadProductosMayoreo").on("keyup", function() {
    var cantidadEntrada = $(this).val();

    // Validación para verificar si el valor está dentro del rango permitido
    if (cantidadEntrada < 1 || cantidadEntrada > 1000000) {
      $(this).val(""); // Establece el valor del input como vacío
      $('#cantidadProductosMayoreo').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
    else{
      $('#cantidadProductosMayoreo').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
  });
  
  
  
  //CAMBIAR COLOR A CANTIDAD
  $('.C_aumentoCantidad').on("click", function(){
    if ($('#cantidadProductos') !== ''){
      $('#cantidadProductosMayoreo').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
    else{
      $('#cantidadProductosMayoreo').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
  });


  
  // TOTAL DE COMPRA
  //Deshabilita el campo total_compra y quita el focus
  $('#total_compra').prop('disabled', true);

  var resultadoTotal = 0; // Variable para almacenar el resultado
  

  function calcularTotal() {
    var cantidad = parseInt($("#cantidadProductosMayoreo").val()) || 0;

    if (cantidad > 0) {
      var precio = 100;
      resultadoTotal = cantidad * precio; // Guardar el resultado en la variable
      $("#total_compra").val(resultadoTotal.toFixed(0));

      // Habilitar los valores del INPUT
      $('#total_compra').prop('disabled', false);
      $('#total_compra').prop('readonly', false);
    } else {
      // Si la cantidad es 0, puedes dejar el campo de total vacío o mostrar un mensaje
      $("#total_compra").val('');
    }

    // Disparar el evento input después de calcular o dejar vacío el total
    $('#total_compra').trigger('input');
  }

  $("#cantidadProductosMayoreo").on("input", function() {
    calcularTotal();
  });

  $("#btn-mas").on("click", function() {
    var cantidad = parseInt($("#cantidadProductosMayoreo").val()) || 0;
    cantidad = Math.min(cantidad, 100); // Aumentar, pero no superar el límite
    $("#cantidadProductosMayoreo").val(cantidad);
    calcularTotal();
  });

  $("#btn-menos").on("click", function() {
    var cantidad = parseInt($("#cantidadProductosMayoreo").val()) || 0;
    cantidad = Math.max(cantidad - 1, 0); // Disminuir, pero no ser menor que 0
    $("#cantidadProductosMayoreo").val(cantidad);
    calcularTotal();
  });

  $('.C_aumentoCantidad').on("click", function(){
    if ($('#cantidadProductos') !== ''){
      $('#cantidadProductosMayoreo').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
    else{
      $('#cantidadProductosMayoreo').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
      
    }
  });


  $('#cantidadProductosMayoreo').on ('input', function(){
    if($('#cantidadProductosMayoreo').val() === '' || $('#cantidadProductosMayoreo').val() === 0){
      $('.C_motivoEdicionDeCosto').hide();
    }
  });

  //VALIDACIÓN DE COLOR PARA TOTAL VENTA
  $('#total_compra').on("input", function() {
    if($('#total_compra').val() !== ''){
      $('#total_compra').removeClass("C_colorBaseBorder").addClass("C_validacionCorrecta");
    } 
    else {
      $('#total_compra').removeClass("C_validacionCorrecta").addClass("C_colorBaseBorder");
    }
  });


  

  // MOSTRAR CAMPO SI EL TOTAL DE COMPRA HA SIDO MODIFICADO
  $("#total_compra").on("input", function() {
    var totalCompraInput = parseFloat($(this).val()) || 0;

    if (resultadoTotal !== totalCompraInput) {
      $('.C_motivoEdicionDeCosto').show();
    } else {
      $('.C_motivoEdicionDeCosto').hide();
    }

    if($('#total_compra').val() === ''){
      $('.C_motivoEdicionDeCosto').hide();
    }
  });


  /*
  $('#cantidadProductosMayoreo').on('input', function(){
    // Obtiene la cantidad desde el input actual
    var cantidad = parseFloat($(this).val()) || 0;

    // Realiza una solicitud al servidor para obtener el precio desde la base de datos
    $.ajax({
        url: '/ruta/donde/obtener/precio', // Reemplaza esto con la URL correcta en tu aplicación
        method: 'GET',
        success: function(response) {
            // La respuesta debe contener el precio obtenido desde la base de datos
            var precio = parseFloat(response.precio) || 0;

            // Calcula el total
            var total = cantidad * precio;

            // Muestra el total en el campo correspondiente
            $('#total_compra').val(total);
            $('#total_compra').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");

        },
        error: function(error) {
            console.error('Error al obtener el precio desde el servidor:', error);
            $('#total_compra').removeClass("C_validacionCorrecta").addClass("C_colorBaseBorder");
        }
    });
  });
*/


  //MOTIVO DE EDICIÓN DE COSTO
  $("#motivo_edicion_costo").on("keyup", function() {
    var regex = /^[a-zA-Z0-9\s]{1,300}$/; // Expresión regular para caracteres alfanuméricos de 1 a 300 caracteres
    
    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value)) {
      this.value = this.value.replace(/[^a-zA-Z0-9\s]+/g, "").substring(0, 300);
      $('#motivo_edicion_costo').removeClass("C_validacionCorrecta").addClass("C_colorBaseBorder");
    }
    else{
      $('#motivo_edicion_costo').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
  });



  //VALIDAR INPUT VALIDAR INPUT VALIDAR INPUT VALIDAR INPUT VALIDAR INPUT
  $(':input, #btn-mas').on("input blur click", function(){ 
    var nombreP = $('#nombreProducto').val();
    var responsable = $('#responsable_compra').val();
    var cantidad = $('#cantidadProductosMayoreo').val();
    var validarDatos = validacion(nombreP, responsable, cantidad);

    //Condición para activar el boton con los dos formularios de registro
    if (validarDatos) {
      $("#boton_comprar").prop("disabled", false);
    } 
    else {
      $("#boton_comprar").prop("disabled", true);
    }

  });


  //Function validar campos
  function validacion(nombreP, responsable, cantidad){
    var regexNombre = /^[a-zA-Z0-9\s]{1,100}$/; // Expresión regular para caracteres alfanuméricos de 1 a 100 caracteres
    if(regexNombre.test(nombreP) && regexNombre.test(responsable) && cantidad !== ''){
      return true;
    }
    else{
      return false;
    }
  } 

}); //Fin de FUNCIONES ANÓNIMAS



//CANTIDAD DE PRODUCTOS - Funciones de Aumentar y Disminuir cantidad de productos 
//Aumentar cantidad 
function aumentarCantidadDeProductos(){
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

//Disminuir cantidad
function disminuirCantidadDeProductos(){
  //comprobacion de que no sean numeros negativos
  if(document.getElementById('cantidadProductosMayoreo').value == 0){ 
    //Si es menor de 0 lo establece en 0
    document.getElementById('cantidadProductosMayoreo').value = 0; 
  }
  else{
    document.getElementById('cantidadProductosMayoreo').value--;
  }
}




