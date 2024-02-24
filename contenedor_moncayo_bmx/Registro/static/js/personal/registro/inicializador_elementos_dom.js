$(document).ready(function() {
  //Desactiva los campos al cargar la página
  $("#ConfSueldo").hide();
  $("#ConfiHorario").hide();
  $(".C_leyendas2").hide();
  $(".C_pagoFijo").hide();
  $(".C_sueldo").hide();
  $(".C_diaPago").hide();
  $(".C_home").hide();
  $(".C_menu").hide();
  $(".C_fechaPago").show();
  $(".C_sueldoServicios").hide();
  $(".C_horarioComida").hide();
  $(".C_titulosHr").hide();
  $("#lineaDividora").hide();
  $("#btn-reg").prop("disabled", true);

  //OCULTA CAMPOS QUE NO SE VALIDARAN POR AHORA
  $(".C_tipoPago").hide();
  $(".C_diaPago").hide();
  $(".C_fechaPago").hide();
  $(".C_periodoPago").hide();
  $(".C_pagoFijo").hide();
  $(".C_sueldo").hide();
  $(".C_sueldoServicios").hide();
  $(".C_lunes").hide();
  $(".C_martes").hide();
  $(".C_miercoles").hide();
  $(".C_jueves").hide();
  $(".C_viernes").hide();
  $(".C_sabado").hide();
  $(".C_domingo").hide();
  
  //Ayuda para desplegar AYUDA DE USUARIO FACEBOOK
  $("#ComosaberUserFb").click(function() {
      $("#ayudauserFB").fadeIn(1000);
  });

  $("#ayudauserFB").mouseenter(function() {
      // No hace nada
  }).mouseleave(function() {
      $("#ayudauserFB").fadeOut(2000);
  });

  $("#ComosaberUserFb").click(function() {
      $("#ayudauserFB").fadeIn(1000);
  });

  //Ayuda para desplegar FECHA DE PAGO
  $("#fechaPa").click(function() {
      $("#ayudauserFP").fadeIn(1000);
  });

  $("#ayudauserFP").mouseenter(function() {
      // No hace nada
  }).mouseleave(function() {
      $("#ayudauserFP").fadeOut(2000);
  });

  $("#ComosaberUserFb").click(function() {
      $("#ayudauserFP").fadeIn(1000);
  });

  //CHECKBOX
  //Checkbox Seleccionado al cargar la Página Web DATOS PERSONALES 
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

    
    //Función que cambia los titulos de acuerdo a la selección del CHECKBOX
    $('#checkbox1').change(function() {
      if ($(this).is(":checked")) {
          //Checkbox1 titulos
          $("#DatosPersonales").show();
          $("#ConfSueldo").hide();
          $("#ConfiHorario").hide();
          //Campos que se muestran
          $(".C_fechaRegistro").show();
          $(".C_rolPersonal").show();
          $(".C_nombre").show();
          $(".C_ApPa").show();
          $(".C_apMa").show();
          $(".C_fechNac").show();
          $(".C_direccion").show();
          $(".C_telefono").show();
          $(".C_correoElectronico").show();
          $(".C_menuredSocial").show();
          $(".C_contrasena").show();
          $(".C_leyendas").show();
          $(".C_facebook").show();
          $(".C_instagram").show();

          //Campos que se ocultan
          $("#lineaDividora").hide();
          $(".C_tipoPago").hide();
          $(".C_diaPago").hide();
          $(".C_fechaPago").hide();
          $(".C_periodoPago").hide();
          $(".C_pagoFijo").hide();
          $(".C_sueldo").hide();
          $(".C_sueldoServicios").hide();
          $(".C_leyendas2").hide();
          $(".C_lunes").hide();
          $(".C_martes").hide();
          $(".C_miercoles").hide();
          $(".C_jueves").hide();
          $(".C_viernes").hide();
          $(".C_sabado").hide();
          $(".C_domingo").hide();
          $(".C_horarioComida").hide();
          $(".C_titulosHr").hide();
          $(".C_leyendas2").hide();

    }

    });


    $("#btnBrush").click(function() {
      if($('#checkbox1').is(":checked")){
        $("#fecha_registro").val('');
        $("#rolPersonal").val('').trigger('chosen:updated');
        $("#nombre").val('');
        $("#apellido_paterno").val('');
        $("#apellido_materno").val('');
        $("#fecha_nacimiento").val('');
        $("#dir_personal").val('');
        $("#numero_telefonico").val('');
        $("#correo_electr").val('');
        $("#menuRedSocial_select").val('');
        $("#pass").val('');
        $("#facebook").val('');
        $("#instagram").val('');
        $(".C_facebook").hide();
        $(".C_instagram").hide();
        $("#btn_form_datos_personales").prop("disabled", true);
      }
    });
  
    
    $('#checkbox2').change(function() {
      if ($(this).is(":checked")) {
      //CheckBox2
        $("#DatosPersonales").hide();
        $("#ConfSueldo").show();
        $("#ConfiHorario").hide();
      //Campos campos que se muestran
      $(".C_tipoPago").show();
      $(".C_periodoPago").show();
     
      //Campos que se ocultan
      $("#lineaDividora").hide();
      $(".C_fechaRegistro").hide();
      $(".C_rolPersonal").hide();
      $(".C_nombre").hide();
      $(".C_ApPa").hide();
      $(".C_apMa").hide();
      $(".C_fechNac").hide();
      $(".C_direccion").hide();
      $(".C_telefono").hide();
      $(".C_correoElectronico").hide();
      $(".C_menuredSocial").hide();
      $(".C_facebook").hide();
      $(".C_instagram").hide();
      $(".C_contrasena").hide();
      $(".C_lunes").hide();
      $(".C_martes").hide();
      $(".C_miercoles").hide();
      $(".C_jueves").hide();
      $(".C_viernes").hide();
      $(".C_sabado").hide();
      $(".C_domingo").hide();
      $(".C_horarioComida").hide();
      $(".C_titulosHr").hide();
      $(".C_leyendas").hide();
      $(".C_leyendas2").hide();

      //Mantiene los input desplegados
      var selectedValues = $("#tipoPago").val();
      $.each(selectedValues, function(index, value) {
        if (value === "Fijo") {
					$(".C_pagoFijo").show();
        } else if (value === "ComisionProd") {
          $(".C_sueldo").show();
        } else if (value === "ComisionServ") {
          $(".C_sueldoServicios").show();
        }

      });

      }  
    });

$("#periodoPago").change(function(e) {
  if ($(this).val() === "Diario") {
    $(".C_diaPago").hide();
    $(".C_fechaPago").hide();

  }
});

$("#periodoPago").change(function(e) {
  if ($(this).val() === "Semanal") {
    $(".C_diaPago").show();
    $(".C_fechaPago").hide();
  }
});

$("#periodoPago").change(function(e) {
  if ($(this).val() === "Quincenal") {
   $(".C_diaPago").hide();
    $(".C_fechaPago").hide();

  }
});


$("#periodoPago").change(function(e) {
    if ($(this).val() === "Mensual") {
      $(".C_fechaPago").show();
      $(".C_diaPago").hide();
    }
});



    $("#btnBrush").click(function() {
      if($('#checkbox2').is(":checked")){
        $("#tipoPago").val('').trigger('chosen:updated');
        $("#tipoPago").val('');
        $("#periodoPago").val('');
        $("#dia_pago").val('');
        $("#fecha_pago").val('');
        $("#pagoFijo").val('');
        $("#comisionProductos").val('');
        $("#comisionServicios").val('');
        $(".C_pagoFijo").hide();
        $(".C_sueldo").hide();
        $(".C_sueldoServicios").hide();
        $(".C_diaPago").hide();
        $(".C_fechaPago").hide();
        $("#btn_form_configuracion_sueldo").prop("disabled", true);
      }
    });

    $('#checkbox3').change(function() {
      if ($(this).is(":checked")) {
          //CheckBox
          $("#DatosPersonales").hide();
          $("#ConfSueldo").hide();
          $("#ConfiHorario").show();
          //Campos que se muestran
          $("#lineaDividora").show();
          $(".C_lunes").show();
          $(".C_martes").show();
          $(".C_miercoles").show();
          $(".C_jueves").show();
          $(".C_viernes").show();
          $(".C_sabado").show();
          $(".C_domingo").show();
          $(".C_horarioComida").show();
          $(".C_titulosHr").show();
          $(".C_leyendas2").show();
          //Campos que se ocultan
          $(".C_fechaRegistro").hide();
          $(".C_rolPersonal").hide();
          $(".C_nombre").hide();
          $(".C_ApPa").hide();
          $(".C_apMa").hide();
          $(".C_fechNac").hide();
          $(".C_direccion").hide();
          $(".C_telefono").hide();
          $(".C_correoElectronico").hide();
          $(".C_menuredSocial").hide();
          $(".C_facebook").hide();
          $(".C_instagram").hide();
          $(".C_contrasena").hide();
          $(".C_leyendas").hide();
          $(".C_tipoPago").hide();
          $(".C_diaPago").hide();
          $(".C_fechaPago").hide();
          $(".C_periodoPago").hide();
          $(".C_pagoFijo").hide();
          $(".C_sueldo").hide();
          $(".C_sueldoServicios").hide();
          
      }
    });  

    $("#btnBrush").click(function() {
      if($('#checkbox3').is(":checked")){
        $("#lunesEntrada").val('');
        $("#lunesSalida").val('');
        $("#martesEntrada").val('');
        $("#martesSalida").val('');
        $("#miercolesEntrada").val('');
        $("#miercolesSalida").val('');
        $("#juevesEntrada").val('');
        $("#juevesSalida").val('');
        $("#viernesEntrada").val('');
        $("#viernesSalida").val('');
        $("#sabadoEntrada").val('');
        $("#sabadoSalida").val('');
        $("#domingoEntrada").val('');
        $("#domingoSalida").val('');
        $(".C_horaComida").val('');
        $(".checkboxHorario").prop("checked", false); //limpiar campos de modal
        $("#btn_form_registar").prop("disabled", true);
      }
    });

    //Muestra los input del chosen seleccionado 
    $("#tipoPago").change(function(){
      var selectedValues = $(this).val();
      
      $.each(selectedValues, function(index, value) {
        if (value === "Fijo") {
					$(".C_pagoFijo").show();
        } 

        if (value === "ComisionProd") {
          $(".C_sueldo").show();
        }
        
        if (value === "ComisionServ") {
          $(".C_sueldoServicios").show();
        }

      });

    });

    $("#tipoPago").on("change", function(event, params) {
        var elementoEliminado = params.deselected;
        if (elementoEliminado === "Fijo") {
					$(".C_pagoFijo").hide();
        } 
        if (elementoEliminado === "ComisionProd") {
          $(".C_sueldo").hide();
        } 
        if (elementoEliminado === "ComisionServ") {
          $(".C_sueldoServicios").hide();
        }
    });


    $("#btn_form_datos_personales").click(function(){
      $("#checkbox2").click();
      $("#btn_form_datos_personales").hide();
      $("#btn_form_configuracion_sueldo").show();
      $("#btn_form_configuracion_sueldo").prop("disabled", true);
    });
    
    $("#btn_form_configuracion_sueldo").click(function(){
      $("#checkbox3").click();
      $("#btn_form_configuracion_sueldo").hide();
      $("#btn_form_registar").show();
      $("#btn_form_registar").prop("disabled", true);
    });
  
    /*Creación automática de contraseña*/
    var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"; /*Caracteres de la posible contraseña*/
    var longitud = 10; // Cambia la longitud de la contraseña según tus necesidades
    var contraseña = ""; /*Variable que almacena la nueva contraseña*/
    
    for (var i = 0; i < longitud; i++) {
        var randomIndex = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres.charAt(randomIndex);
    }
    $("#pass").val(contraseña);

    /*Nueva contraseña al presionar boton*/
    $("#newPass").click(function(){
      var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
      var longitud = 10; // Cambia la longitud de la contraseña según tus necesidades
      var contraseña = "";
      
      for (var i = 0; i < longitud; i++) {
          var randomIndex = Math.floor(Math.random() * caracteres.length);
          contraseña += caracteres.charAt(randomIndex);
      }
      $("#pass").val(contraseña);
    });

    /*Mostrar contraseña*/
    $("#togglePass").click(function() {
      const passwordInput = $("#pass")/*Obtener elemento con el ID*/;
      const icon = $(this).find("i"); /*Encontrar el icono dentro del elemento click*/

      if (passwordInput.attr("type") === "password") { /*Verificar si el tipo de entrada es Password*/
          passwordInput.attr("type", "text"); /*Cambiar el tipo de entrada a Texto y mostrar contraseña*/
          icon.removeClass("fa-eye").addClass("fa-eye-slash"); /*Cambiar icono a visible*/
      } else {
          passwordInput.attr("type", "password"); /*Si el tipo de entrada es diferente de password, cambia a password y oculta contaseña*/
          icon.removeClass("fa-eye-slash").addClass("fa-eye"); /*Cambia el icono a no visible*/
      }
  });

  /*Muesta los iconos de Home y de Menu cuando la pantalla llega a la resolución de 775px*/
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
    $(window).resize(); /*para forzar una actualización inmediata de ese diseño */

/*Quita el FOCO de activación del INPUT de contraseña*/
    $('input[readonly]').on('click', function(event) {
      event.preventDefault(); // Evitar el comportamiento predeterminado del clic
      $(this).blur();          // Quitar el foco del input
    });
    

$('#checkbox3').on('click', function() {
  var width = $(window).width();
  if (this.checked && width > 1000) {
    $('form').removeClass('form-max-height-100').addClass('form-max-height-90');
    $('.form-max-height-90').css("max-height", "87%");
  } else {
    $('form').removeClass('form-max-height-90');
  }
});

$('#checkbox3').on('click', function() {
  var width = $(window).width();
  if (this.checked && width > 1000) {
    $('#campoDerecho').removeClass('C_campoDerecho').addClass('C_campoDerecho2');
    $('.C_campoDerecho2').css("display", "block");
  } else {
    $('#campoDerecho').removeClass('C_campoDerecho2');
  }
});

$('#checkbox2').on('click', function() {
  var width = $(window).width();

  if (this.checked && width > 1000) {
    $('.C_campoDerecho2').css("display", "flex");
  }

  if (this.checked && width < 1000) {
    $('.formulario-personal').css("height", "100%");
  }
});

$('#checkbox1').on('click', function() {
  var width = $(window).width();
  if (this.checked && width > 1000) {
    $('.form-max-height-90').css("max-height", "100%");
  }
});
  

  var width = $(window).width();
  if (width < 1000) { 
    interact('#btnBrush')
    .draggable({
      listeners: {
        move: dragMoveListener,
      },
      inertia: true,
    });
  }

  function dragMoveListener(event) {
    const target = event.target;
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    target.style.transform = `translate(${x}px, ${y}px)`;

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  $(".chosen-select").chosen();

  $(".chosen-select").each(function() {
    $(this).find('option:first').prop('selected', false);
    $(this).trigger("chosen:updated");
  });

  $(".chosen-select").blur();

  $(".chosen-select").on("change", function() {
    var width = $(window).width();
    if (width < 1000) { 
      const selectedOptions = $(this).val() || [];
      const selectedText = selectedOptions.join(", ");
      
      $("#selected-options").val(selectedText);
      $(".chosen-choices").val(selectedText);
    }
    
  });
   //Activar tooltip
   $('[data-bs-toggle="tooltip"]').tooltip();

   //Asociar Evento Submit
   $('#btn_form_registar').click(function(){
      $('#formulario-personal').submit(); 
   });

});


