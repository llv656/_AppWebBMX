$(document).ready(function() {
  
  //Validación de Entrada de texto para NOMBRE, APELLIDO PATERNO y APELLIDO MATERNO
  $(".nombres").on("keyup", function() {
    var regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,50}$/; // Expresión regular para letras de 1 a 50 caracteres

    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value)) {
      this.value = this.value.replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+/g, "").substring(0, 50);
    }

    // Elimina el primer carácter si es un espacio
    if (this.value.charAt(0) === ' ') {
      this.value = this.value.slice(1);
    }
  });


  /*Validación para FECHA DE REGISTRO y FECHA DE NACIMIENTO*/
  let fechaActual = new Date();
  fechaActual.setDate(fechaActual.getDate() + 0);
  $('.fechas').attr('max', fechaActual.toISOString().split('T')[0]);


  //Dirección del PERSONAL
  $("#dir_personal").on("input", function() {
    // Validación de entrada: Solo se permiten letras, números, espacios y el carácter '#'.
    var regex = /^[a-zA-Z0-9\s#.,]+$/;
    
    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value)) {
      this.value = this.value.replace(/[^a-zA-Z0-9\s#.,]+/g, "").substring(0, 300);
    }

    // Elimina espacios duplicados
    this.value = this.value.replace(/\s{2,}/g, ' ');
    
    // Elimina caracteres "#" adicionales
    var numHashTags = (this.value.match(/#/g) || []).length;
    if (numHashTags > 1) {
      this.value = this.value.replace(/#/g, '');
    }
  
  });
  


  //Validación de Entrada de 10 digitos de NÚMERO DE TELÉFONO
  $("#numero_telefonico").on("keyup", function() {
    // Expresión regular para letras de 1 a 130 caracteres
    var regex = /^[0-9]{10}$/; 
    
    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value)) {
      this.value = this.value.replace(/[^\d]/g, "").substring(0, 10);
    }

  });
  
  
  //Validacion de CORREO ELECTRONICO
  $("#correo_electr").on("keyup", function() {
      var regex = /^[_A-Za-z0-9-+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/
      this.value = this.value.replace(/[^_A-Za-z0-9-+@.]+/g, "");

      if (regex.test(this.value)) {
          let partes = this.value.split("@");
          let nombre = partes[0];
          let dominio = partes[1];

          if (nombre.length <= 67 && dominio.length <= 177 && this.value.length <= 241) {
              this.value = this.value.substring(0, 241);
              return true;
          } else {
              this.value = this.value.substring(0, 241);
              return false;
          }
      }
  });

  //Validaciones de Redes Sociales 
  //FACEBOOK
  $('#facebook').keyup(function() {
      var input = $(this).val();
      input = input.replace(/[^a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]/g, ''); // restringir entrada a solo caracteres alfanuméricos y algunos símbolos comunes
      if (input.length < 300) {
          input = input.substring(0, 300); // restringir entrada a un máximo de 300 caracteres
          $(this).val(input);
      }
    // Elimina el primer carácter si es un espacio
    if (this.value.charAt(0) === ' ') {
      this.value = this.value.slice(1);
  }
  
  });
  


  //INSTAGRAM
  $('#instagram').keyup(function() {
      var input = $(this).val();
      input = input.replace(/[^a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]/g, ''); // restringir entrada a solo caracteres alfanuméricos y algunos símbolos comunes
      if (input.length < 100) {
          input = input.substring(0, 100); // restringir entrada a un máximo de 100 caracteres
          $(this).val(input);
      }
    // Elimina el primer carácter si es un espacio
    if (this.value.charAt(0) === ' ') {
      this.value = this.value.slice(1);
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
      }
      
      // Actualizar el valor del campo
      $(this).val(valor);
    });

  /*Validación de Pago Fijo que solo permita entradas de hasta 1000000 */
  $('#pagoFijo').on('input', function() {
      var valor = $(this).val();

      // Validar el rango del valor
      if (valor < 1 || valor > 100000) {
        // Excede el límite, eliminar el último carácter
        valor = valor.substring(0, 7);
      }
      
      // Actualizar el valor del campo
      $(this).val(valor);
    });    

  /*Comisión de Productos y Servicios */
    $('.C_comision').on('input', function() {
      var valor = $(this).val();
      
      // Eliminar caracteres no numéricos
      valor = valor.replace(/[^0-9]/g, '');
      //valor= valor.concat('%')
      // Validar que el valor sea un número entre 1 y 100
      if (valor < 1 || valor > 100) {
        valor = valor.slice(0, -1); // Eliminar el último carácter
      }
      
      // Actualizar el valor del campo
      $(this).val(valor);
    });

//Checkbox ROL de PERSONAL
    $(".chosen-select").chosen({
      width: "95%",
      border_radius:"20px",
      allow_single_deselect: true,
      disable_search_threshold: 10,
      display_selected_options: false,
      placeholder_text_multiple: "Seleccionar opciones",
      no_results_text: "No se encontraron opciones",
      multiple: true,
      create_option: function(option) {
        const value = option.value;
        const label = option.text;
        const optionHTML = '<option value="' + value + '">' + label + '</option>';
        const $option = $(optionHTML);
        $option.attr("data-checkbox", true);
        return $option;
      },
      render_option: function(option) {
        const value = option.value;
        const label = option.text;
        const optionHTML = '<option value="' + value + '">' + label + '</option>';
        const $option = $(optionHTML);
        $option.attr("data-checkbox", true);
        return $option;
      }
    }).change(function(){
      var selectedValues = $(this).val();
      if (selectedValues.length === 4 ) {
        $(".search-field").hide();
      } else { 
        $(".search-field").show();
      }
      //console.log("validacion: "+selectedValues);
    });
    $('.chosen-search-input').on('keyup', function() {
      if ($(this).val().length > 5) {
        $(this).val($(this).val().substring(0, 5));
      }
    });


// Validación del BOTÓN SUBMIT
$(':input').on ("input",function() {
var rolP = $("#rolPersonal").val();
var nombre = $("#nombre").val();
var apPa = $("#apellido_paterno").val();
var dir = $("#dir_personal").val();
var numTel = $("#numero_telefonico").val();
var correo = $("#correo_electr").val();
var fb = $("#facebook").val();
var ins = $("#instagram").val();
var inputFecha = $("#fecha_nacimiento").val();
var Datos1 = validarDP(rolP, nombre, apPa, inputFecha, dir, numTel, correo, fb, ins);
var tipoP = $("#tipoPago").val();
var periodoP = $("#periodoPago").val();
var pagoF = $("#pagoFijo").val();
var diaPago = $("#dia_pago").val();
var fechaPago = $("#fecha_pago").val();
var comisionP = $("#comisionProductos").val();
var comisionS = $("#comisionServicios").val();
var Datos2= validarCS(tipoP, periodoP, pagoF, comisionP, comisionS, fechaPago,diaPago);
var lunEntrada = $('#lunesEntrada').val();
var lunSalida = $('#lunesSalida').val();
var marEntrada = $('#martesEntrada').val();
var marSalida = $('#martesSalida').val();
var mieEntrada = $('#miercolesEntrada').val();
var mieSalida = $('#miercolesSalida').val();
var jueEntrada = $('#juevesEntrada').val();
var jueSalida = $('#juevesSalida').val();
var vieEntrada = $('#viernesEntrada').val();
var vieSalida = $('#viernesSalida').val();
var sabEntrada = $('#sabadoEntrada').val();
var sabSalida = $('#sabadoSalida').val();
var domEntrada = $('#domingoEntrada').val();
var domSalida = $('#domingoSalida').val();

//Validacion de los 3 formularios - Datos personales- Configuracion de Sueldo - Configuracion de Horario
//Formulario navegable
if (Datos1) {
  $("#btn_form_datos_personales").prop("disabled", false);

  if (Datos2) {
    $("#btn_form_configuracion_sueldo").prop("disabled", false);

    if (((lunEntrada.trim() !== '' && lunSalida.trim() !== '') || (marEntrada.trim() !== '' && marSalida.trim() !== '')
      || (mieEntrada.trim() !== '' && mieSalida.trim() !== '') || (jueEntrada.trim() !== '' && jueSalida.trim() !== '') 
      || (vieEntrada.trim() !== '' && vieSalida.trim() !== '') || (sabEntrada.trim() !== '' && sabSalida.trim() !== '') 
      || (domEntrada.trim() !== '' && domSalida.trim() !== ''))) {
      $("#btn_form_registar").prop("disabled", false);
    } else {
      $("#btn_form_registar").prop("disabled", true);
    }

  } else {
    $("#btn_form_configuracion_sueldo").prop("disabled", true);
    $("#btn_form_registar").prop("disabled", true);
  }

} else {
  $("#btn_form_datos_personales").prop("disabled", true);
  $("#btn_form_registar").prop("disabled", true);
}  

//Validacion de los 3 formularios - Datos personales- Configuracion de Sueldo - Configuracion de Horario
if (Datos1 && Datos2 &&
  ((lunEntrada.trim() !== '' && lunSalida.trim() !== '') || (marEntrada.trim() !== '' && marSalida.trim() !== '')
    || (mieEntrada.trim() !== '' && mieSalida.trim() !== '') || (jueEntrada.trim() !== '' && jueSalida.trim() !== '') 
    || (vieEntrada.trim() !== '' && vieSalida.trim() !== '') || (sabEntrada.trim() !== '' && sabSalida.trim() !== '') 
    || (domEntrada.trim() !== '' && domSalida.trim() !== ''))) {
  $("#btn_form_datos_personales").hide();
  $("#btn_form_configuracion_sueldo").hide();
  $("#btn_form_registar").show();
  $("#btn_form_registar").prop("disabled", false);
} else {
  $("#btn_form_registar").prop("disabled", true);
}

});


//Validacion de Datos Personales
function validarDP(rolP, nombre, apPa, fechNac, dir, numTel, correo, fb, ins){
var regexFech = /^\d{4}\-\d{2}\-\d{2}$/;
var regexNombres = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,50}$/;
var regexDir = /^[a-zA-Z0-9\s#.,]+$/;
var regexTel = /^[0-9]{10}$/;
var regexCorreo = /^[_A-Za-z0-9-+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;

if(rolP.length > 0 && regexNombres.test(nombre) && regexNombres.test(apPa) && regexFech.test(fechNac) && regexDir.test(dir) && regexTel.test(numTel) 
&& (regexCorreo.test(correo) ||fb !== '' || ins !=='')){
  if (correo != '') {
    var partes = correo.split("@");
    var nombreCorreo = partes[0];
    var dominio = partes[1];

    if (nombreCorreo.length <= 67 && dominio.length <= 177 && correo.length <= 241) {
      return true;
    } 
    else {
      return false;
    }
  }
  return true;
}
else{
  return false;
}
};

//Validacion de Configuracion sueldo
function validarCS(tipoP, periodoP, pagoF, comisionP, comisionS,fechaPago, diaPago ){
if(tipoP.length > 0 && periodoP !== '' && ( pagoF !=='' ||comisionP !== '' || comisionS !== ''))
{
  if (periodoP === 'Semanal' && diaPago !=='') {
    return true;
  } else if (periodoP === 'Mensual' && fechaPago !=='') {
    return true;
  } else if (periodoP === 'Diario' || periodoP === 'Quincenal'){
    return true;
  } else {
    return false;
  }
  
} else {
  return false;
}
};





});