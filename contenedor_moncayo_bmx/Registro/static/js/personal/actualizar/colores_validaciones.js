$(document).ready(function() {

  /*Fecha de Registro */
  $("#fecha_registro").blur(function() {
    if ($("#fecha_registro").val() === '') {
        $("#fecha_registro").removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    } else {
        $("#fecha_registro").removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
});

/*Validación de Nombre*/
  $("#nombre").on("keyup", function() {
    var regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,50}$/; // Expresión regular para letras de 1 a 50 caracteres
    var nombre = $("#nombre").val();
    
    if(regex.test(nombre)){
      $('#nombre').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
    else{
      this.value = this.value.replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+/g, "").substring(0, 50);
      $('#nombre').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
  // Elimina el primer carácter si es un espacio
  if (this.value.charAt(0) === ' ') {
    this.value = this.value.slice(1);
  }
});


/*Validación Apellido Paterno */
$("#apellido_paterno").on("keyup", function() {
  var regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,50}$/; // Expresión regular para letras de 1 a 50 caracteres
  var appa = $("#apellido_paterno").val();
  
  if(regex.test(appa)){
    $('#apellido_paterno').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
  }
  else{
    this.value = this.value.replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+/g, "").substring(0, 50);
    $('#apellido_paterno').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
  }
// Elimina el primer carácter si es un espacio
if (this.value.charAt(0) === ' ') {
  this.value = this.value.slice(1);
}
});

/*Validación Apellido Materno */
$("#apellido_materno").on("keyup", function() {
  var regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,50}$/; // Expresión regular para letras de 1 a 50 caracteres
  var nombre = $("#apellido_materno").val();
  
  if(regex.test(nombre)){
    $('#apellido_materno').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
  }
  else{
    this.value = this.value.replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+/g, "").substring(0, 50);
    $('#apellido_materno').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
  }
// Elimina el primer carácter si es un espacio
if (this.value.charAt(0) === ' ') {
  this.value = this.value.slice(1);
}
});

/*Fecha de Nacimiento */
$("#fecha_nacimiento").blur(function() {
  if ($("#fecha_nacimiento").val() === '') {
      $("#fecha_nacimiento").removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
  } else {
      $("#fecha_nacimiento").removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
  }
});

/*Dirección*/
$("#dir_personal").on("keyup", function() {
  var regex = /^[a-zA-Z0-9\s,#.]{1,299}$/;


    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value)) {
      this.value = this.value.replace(/[^a-zA-Z0-9\s#]+/g, "").substring(0, 300);
      $('#dir_personal').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    } else{
      $('#dir_personal').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }

    // Elimina caracteres "#" adicionales
    var numHashTags = (this.value.match(/#/g) || []).length;
    if (numHashTags > 1) {
        this.value = this.value.replace(/#/g, '');
    }

    // Elimina el primer carácter si es un espacio
    if (this.value.charAt(0) === ' ') {
        this.value = this.value.slice(1);
    }

});

/*Número de teléfono */
  $("#numero_telefonico").on("keyup", function() {
    var regex = /^[0-9]{10}$/; 

    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value) && this.value.length < 12) {
      this.value = this.value.replace(/[^\d]/g, "").substring(0, 10);
      $('#numero_telefonico').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
    else{
      $('#numero_telefonico').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta"); 
    }

});

/*Correo electrónico*/
  
  //Validacion de CORREO ELECTRONICO
  $("#correo_electr").on("keyup", function() {
    var regex = /^[_A-Za-z0-9-+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/
    this.value = this.value.replace(/[^_A-Za-z0-9-+@.]+/g, "");

    if (regex.test(this.value)) {
        let partes = this.value.split("@");
        let nombre = partes[0];
        let dominio = partes[1];

        if (nombre.length <= 67 && dominio.length <= 177 && this.value.length <= 241) {
          $('#correo_electr').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
            this.value = this.value.substring(0, 241);
            return true;
        } else {
            this.value = this.value.substring(0, 241);
            return false;
        }
    }
    else{
      $('#correo_electr').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
});

/*Facebook*/
//FACEBOOK
$('#facebook').keyup(function() {
  var input = $(this).val();
  input = input.replace(/[^a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]/g, ''); // restringir entrada a solo caracteres alfanuméricos y algunos símbolos comunes
  if (input.length < 300) {
      input = input.substring(0, 300); // restringir entrada a un máximo de 300 caracteres
      $(this).val(input);
      $('#facebook').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
  }
  else{
    $('#facebook').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
  }
});

/*Instagram*/
  
  //INSTAGRAM
  $('#instagram').keyup(function() {
    var input = $(this).val();
    input = input.replace(/[^a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]/g, ''); // restringir entrada a solo caracteres alfanuméricos y algunos símbolos comunes
    if (input.length < 100) {
      input = input.substring(0, 100); // restringir entrada a un máximo de 100 caracteres
      $(this).val(input);
      $('#instagram').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
    else{
      $('#instagram').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
});
  /*FECHA DE PAGO */
  $('#fecha_pago').on('input', function() {
    var valor = $(this).val();
    
    // Eliminar caracteres no numéricos
    valor = valor.replace(/[^0-9]/g, '');
    //valor= valor.concat('%')
    // Validar que el valor sea un número entre 1 y 31
    if (valor < 1 || valor > 31) {
      valor = valor.slice(0, -1); // Eliminar el último carácter
      $('#fecha_pago').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
    else{
      $('#fecha_pago').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");

    }
    
    // Actualizar el valor del campo
    $(this).val(valor);
  });





//Tipo Pago//
/*$("tipoPago").change(function(){
  var tipoP = $(this).val();
  if(tipoP ===''){
    $(this).removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
  }
  else{
    $(this).removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
  }
});
*/


// Periodo Pago//
$("#periodoPago").change(function() {
  var periodoP = $(this).val(); // Obtener el valor actual del select
  if (periodoP === '' || periodoP === 'Periodo Pago') {
    $(this).removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    console.log("incorrecto");
  } else {
    $(this).removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    console.log("correcto");
  }
});

  /*Validación de Pago Fijo que solo permita entradas de hasta 1000000 */
  $('#pagoFijo').on('input', function() {
    var valor = $(this).val();
    // Validar el rango del valor
    if (valor < 1 || valor > 100000) {
      // Excede el límite, eliminar el último carácter
      valor = valor.substring(0, 7);
      $('#pagoFijo').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
    else{
      $('#pagoFijo').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }

    
    // Actualizar el valor del campo
    $(this).val(valor);
  });

  /*Comisión productos*/
  $('#comisionProductos').on('input', function() {
    var valor = $(this).val();
    
    // Eliminar caracteres no numéricos
    valor = valor.replace(/[^0-9]/g, '');
    //valor= valor.concat('%')
    // Validar que el valor sea un número entre 1 y 100
    if (valor < 1 || valor > 100) {
      valor = valor.slice(0, -1); // Eliminar el último carácter
      $('#comisionProductos').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
    else{
      $('#comisionProductos').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
    
    // Actualizar el valor del campo
    $(this).val(valor);
  });

    /*Comisión Servicios*/
    $('#comisionServicios').on('input', function() {
      var valor = $(this).val();
      
      // Eliminar caracteres no numéricos
      valor = valor.replace(/[^0-9]/g, '');
      //valor= valor.concat('%')
      // Validar que el valor sea un número entre 1 y 100
      if (valor < 1 || valor > 100) {
        valor = valor.slice(0, -1); // Eliminar el último carácter
        $('#comisionServicios').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
      }
      else{
        $('#comisionServicios').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
      }
      
      // Actualizar el valor del campo
      $(this).val(valor);
    });

    /*ROL*/
    $("#rolPersonal").on("change", function () {
      // Obtenemos el valor seleccionado en "rolPersonal"
      var selectedValue = $(this).val();

      // Buscamos el elemento ".chosen-choices" dentro del contenedor relacionado con "rolPersonal"
      var $chosenChoices = $(this).siblings(".chosen-container-multi").find(".chosen-choices");

      // Verificamos si no se ha seleccionado ningún valor o si la longitud es cero
      if (!selectedValue || selectedValue.length === 0) {
        // Si no se ha seleccionado un valor, aplicamos la clase "chosen-validacion-incorrecta"
        $chosenChoices.removeClass("chosen-validacion-correcta").addClass("chosen-validacion-incorrecta");
      } else {
        // Si se ha seleccionado un valor, aplicamos la clase "chosen-validacion-correcta"
        $chosenChoices.removeClass("chosen-validacion-incorrecta").addClass("chosen-validacion-correcta");
      }
    });


    /*TIPO PAGO*/
    $("#tipoPago").on("change", function () {
      // Obtenemos el valor seleccionado en "rolPersonal"
      var selectedValue = $(this).val();

      // Buscamos el elemento ".chosen-choices" dentro del contenedor relacionado con "rolPersonal"
      var $chosenChoices = $(this).siblings(".chosen-container-multi").find(".chosen-choices");

      // Verificamos si no se ha seleccionado ningún valor o si la longitud es cero
      if (!selectedValue || selectedValue.length === 0) {
        // Si no se ha seleccionado un valor, aplicamos la clase "chosen-validacion-incorrecta"
        $chosenChoices.removeClass("chosen-validacion-correcta").addClass("chosen-validacion-incorrecta");
      } else {
        // Si se ha seleccionado un valor, aplicamos la clase "chosen-validacion-correcta"
        $chosenChoices.removeClass("chosen-validacion-incorrecta").addClass("chosen-validacion-correcta");
      }
    });

    
    




});