//Funciones anonimas
$(document).ready(function() {
  /*Inician las FUNCIONES ANONIMAS */

  /*Activar función de tooltip*/
  $('[data-bs-toggle="tooltip"]').tooltip();
  

  
  $('#producto-Formulario').on('hide.bs.tooltip', function (e) {
    /*e.preventDefault();*/
    
    $('#producto-Formulario').on('mouseenter', function () {
      $('#tooltip-productos').on('mouseenter', function () {
        e.preventDefault();
      });
    });


    $('#producto-Formulario').on('mouseleave', function () {
      $('#tooltip-productos').on('mouseleave', function () {
        return true;
      });
    });
  });
  
  
  $('body').on('click', '*', function() {
    $('.bs-tooltip-bottom').remove();
  });
  
  
  
  /*Se desactiva BOTON DE BUSQUEDA al cargar la página*/
  $('#div-icono-numero-personas').hide();
  $('#div-icono-fecha').hide();
  $('.C_tituloBarberosYHorarios').hide();
  $("#btnBusquedaCita").prop("disabled", true);
  //$("#btn-Aceptar-barberos-horas").prop("disabled", true); Boton aceptar horarios barberos
  $("#icono-maximizar-1").hide();
  $("#icono-maximizar-2").hide();
  $("#btnBrush2").hide();
  $('#cuarto-formulario').hide();
  


  //Ocultar información de horarios
  $('#icono-minimizar-1').on("click", function (){
    $('#icono-maximizar-1').show();
    $('#icono-minimizar-1').hide();
    $('.C_divHorarios_barbero1').hide();
  });

  //Mostrar información de horarios
  $('#icono-maximizar-1').on("click", function (){
    $('#icono-maximizar-1').hide();
    $('#icono-minimizar-1').show();
    $('.C_divHorarios_barbero1').show();
  });
  
  //Ocultar información de horarios
  $('#icono-minimizar-2').on("click", function (){
    $('#icono-maximizar-2').show();
    $('#icono-minimizar-2').hide();
    $('.C_horarios_barbero2').hide();
  });
  
  
  //Mostrar información de horarios
  $('#icono-maximizar-2').on("click", function (){
    $('#icono-maximizar-2').hide();
    $('#icono-minimizar-2').show();
    $('.C_horarios_barbero2').show();
  });  


  //Aumentar y disminuir el número de personas de Formularios 1,2,3, Mostrar Modal de Formulario 3
  //Contador de personas
  var contadorPersonas = 1;

  //Función para actualizar el contador y el valor de span
  function actualizarContador(){
    $('#numero-personas').text(contadorPersonas);
  }

  //Restar número de Personas
  $('#icono-resta-clientes').on('click', function () {
    if ($(this).hasClass('iconoRestaModal')) {
      // Si tiene la clase 'iconoRestaModal', solo abrir el modal en FORMULARIO 3
      $("#modalEliminarPersonasFormulario3").modal('show');
    } else {
      // Si no tiene la clase, realizar la lógica normal de restar
      if (contadorPersonas > 1) {
        contadorPersonas--;
        actualizarContador();
      }
    }
  });
  
  
  // Sumar número de Personas
  $('#icono-suma-clientes').on('click', function () {
    if (contadorPersonas < 5) {
      contadorPersonas++;
      actualizarContador();
    } else {
      alert("El número máximo de clientes son 5");
    }
  });



  //Función de Eliminar cita de Modal del FORMULARIO 3
  //Evento al hacer clic en el botón para eliminar clientes
  var estadoCheckboxes = {}; // Variable para almacenar el estado de los checkboxes
  $('#boton-eliminarCliente-modal').on("click", function () {
    // Recuperar todos los checkboxes seleccionados
    var checkboxesSeleccionados = $("[id^='checkbox-cita-a-eliminar']:checked");

    // Verificar si hay checkboxes seleccionados antes de intentar eliminar
    if (checkboxesSeleccionados.length >= 1 && $("#contenido-tabla-eliminar-clientes").children().length !== 1 ) {
      // Verificar si la cantidad de checkboxes seleccionados es menor o igual a 4 (puedes ajustar este valor según tus necesidades)
      if (checkboxesSeleccionados.length <= 4) {
        // Recorrer cada checkbox seleccionado
        checkboxesSeleccionados.each(function () {
        
          // Obtener el ID del checkbox actual
          var idCheckBoxEliminado = $(this).attr("id");
        
          // Almacenar el estado del checkbox antes de eliminarlo
          estadoCheckboxes[idCheckBoxEliminado] = true;
          
          // Eliminar el contenedor padre del checkbox con el ID especificado
          $("#" + idCheckBoxEliminado).closest(".informacionCliente").remove();
        });
        
        // Desactivar botón después de haber eliminado algún checkbox
        $("#boton-eliminarCliente-modal").prop('disabled', true);
        
        // Decrementar el contador de personas
        contadorPersonas -= checkboxesSeleccionados.length;
        
        // Verificar que el contador no sea menor que 1
        if (contadorPersonas < 1) {
          contadorPersonas = 1;
        }
        
        // Actualizar el contador en la interfaz
        actualizarContador();
        
        // Cerrar el modal después de eliminar los checkboxes
        $("#modalEliminarPersonasFormulario3").modal('hide');
        } else {
          // Mostrar mensaje de alerta si se intenta eliminar más de 4 checkboxes
          alert("Sólo se permite eliminar un máximo de 4 clientes");
        }
      } else {
        // Mostrar mensaje de alerta si no hay suficientes checkboxes seleccionados
        $("#boton-eliminarCliente-modal").prop('disabled', true);
        alert("Se requiere mínimo un cliente :)");
      }
    });
    
    
    
  //Activar boton si se ha seleccionado un checkbox
  // Agrega un controlador de eventos a los checkboxes
  $('.form-check').change(function() {
    var boton = $('#boton-eliminarCliente-modal');
    var contenedor = $("#contenido-tabla-eliminar-clientes");
    
    // Verifica si al menos un checkbox está seleccionado
    var alMenosUnoSeleccionado = $('.form-check:checked').length > 0;
    
    // Verifica si el número de hijos del contenedor es diferente de 1
    var hijosDiferentesDeUno = contenedor.children().length !== 1;
    
    // Verifica si se han seleccionado más de 4 checkboxes
    var checkboxesSeleccionados = $('.form-check:checked');
    let hijosC= $('#contenido-tabla-eliminar-clientes').children().length;

    if (checkboxesSeleccionados.length > hijosC -1 || hijosC === 1) {
      // Desactiva el último checkbox seleccionado (el que provocó el cambio)
      $(this).prop('checked', false);
    }
    
    // Activa o desactiva el botón según las condiciones
    boton.prop('disabled', !(alMenosUnoSeleccionado && hijosDiferentesDeUno));
  });
  
  
  
  // Restablecer el estado de los checkboxes al cerrar el modal
  $("#modalEliminarPersonasFormulario3").on("hidden.bs.modal", function () {
    // Desmarcar todos los checkboxes al cerrar el modal
    $("[id^='checkbox-cita-a-eliminar']").prop('checked', false);
  });
  


  //Icono de brocha para para limpiar campos del primer formulario
  $('#btnBrush1').on("click", function (){
    contadorPersonas = 1; //Reiniciar contador de número de clientes
    actualizarContador(); //Reiniciar contador de número de clientes
    $('#numero-personas').val('');
    $('#fecha-clientes').val('');
    $('#hora-clientes').val('');
    $("#btnBusquedaCita").prop("disabled", true);
    console.log("da click");
  });



  //Boton de búsqueda de cita del primer formulario
  $('#btnBusquedaCita').on("click", function(){
    $("#btnBrush2").show();
    $('.C_seccionBusqueda').hide();
    //$('#div-icono-back').removeClass("col-sm-12").addClass("col-sm-6");
    $('#div-icono-numero-personas').show();
    $('#div-icono-fecha').show();
    $('.C_tituloBarberosYHorarios').show()
    //Lineas para mover un div de número de clientes a otra sección del html al dar click al #btnBusquedaCita
    $("#div-numero-clientes-busqueda").insertAfter("#insertar-aqui");
    $("#div-numero-clientes-busqueda").addClass("C_disenoMovil");
    $('#div-numero-clientes-busqueda').removeClass("col-sm-4").addClass("col-sm-6");
    $("#div-numero-clientes-label").hide();
    $("#div-numero-clientes").addClass("C_NumeroDePersonas C_divIconoNumeroPersonas");
    $("#div-iconos-suma-resta").addClass("C_iconosDeSumaYResta");
    //Lineas para mover el input de fecha a otra seccion del html al dar click al #btnBusquedaCita
    $("#fecha-clientes").insertAfter("#insertar-aqui-fecha");
    $("#fecha-clientes").addClass("C_disenoMovil2");
    $('#div-icono-back').css('padding-top', '0');
  });

  /*Copiar fecha de cita del primero formulario al segundo
  $("#fecha-clientes").on("change", function(){
    //Se obtiene el valor del primer formulario
    var inputFecha1= $(this).val();

    //Se asigna el valor copiado al input al que se desea copiar
    $("#fecha-barberos-horarios").val(inputFecha1);
  });
  */
  
  //HORA
  //Configuración de formato a 12 hras
  let hora = new Date();

  //Formato en 12 horas para México
  let hora12Mexico = hora.toLocaleTimeString('es-MX', {hour: 'numeric', minute: 'numeric', hour12:true});
  //HORA

  //FECHA
  /*Establecer limite de fecha de selección, no se permite fechas posteriores a la actual, se permiten fechas posteriores 
  de hasta máximo 2 meses*/
  
  //Se obtiene fecha actual
  var fechaActual = new Date().toISOString().split('T')[0];
  
  //Establecer la fecha minima permitida (actual)
  $('#fecha-clientes').attr('min', fechaActual);

  //Calcular la fecha máxima permitida (actual + 2 meses)
  var maximo2Meses = new Date();
  maximo2Meses.setMonth(maximo2Meses.getMonth() + 2);
  var fechaMaxima = maximo2Meses.toISOString().split('T')[0];

  //Establecer la fecha máxima permitida
  $('#fecha-clientes').attr('max', fechaMaxima);

  //Validar la fecha seleccionada al cambiar
  $('#fecha-clientes').on('change',function(){
    var fechaSeleccionada = $(this).val();

    //Validar si la fecha seleccionada es anterior a la fecha actual
    if(fechaSeleccionada < fechaActual){
      alert('No puedes seleccionar fechas anteriores, intenta de nuevo');
      $(this).val('');
    }
  });

  /*SEGUNDO FORMULARIO*/
   /*Contador de personas*/
   var contadorPersonas2 = 1;

   //Función para actualizar el contador y el valor de span
   function actualizarContador2(){
     $('#numero-personas2').text(contadorPersonas2);
   }
 
   //Evento al hacer click en el icono de resta
   $('#icono-resta-clientes2').on('click', function (){
     if (contadorPersonas2 > 1){
       contadorPersonas2--; 
       actualizarContador2();
     }
   });
 
   //Evento al hacer click en el icono de suma
   $('#icono-suma-clientes2').on('click', function (){
     if (contadorPersonas2 < 5){
       contadorPersonas2++;
       actualizarContador2();
     }
     else{
       alert("El número máximo de clientes son 5");
     }
   });



   //TERCER FORMULARIO
   $('#btn-Aceptar-barberos-horas').on("click", function(){
    $('#div-titulo-iconos').hide();
    $('#titulo-barberos-horarios').hide();
    $('.C_seccionBarberos').hide();
    $('#div-btn-aceptar-barberos-horas').hide();
    $('#tercer-formulario').show();
    //Mover inputs del primer formulario a una seccion del tercer formulario
    //Se inserta el div del primer formulario dentro del contenedor del tercer formulario
    $('#div-numero-clientes-sumaResta').insertAfter('#insertar-numeroDePersonas-fecha-hora-tercerFormulario'); 
    $('#div-numero-clientes-sumaResta').removeClass(".C_numeroDeClientes").addClass("C_numeroDeClientes2-formulario3");
    /*Se agrega clase y atributos data-bs para poder desplegar el modal*/
    $('#icono-resta-clientes').addClass("iconoRestaModal");
    $('#icono-resta-clientes').attr({
      'data-bs-toggle': 'modal',
      'data-bs-target': '#modalEliminarPersonasFormulario3'
    });

    
    //Mostrar Iconos menu
    $('.C_home').show();
    $('.C_menu').show();
    
    $('#div-fecha-hora-inputs').insertAfter('#div-numero-clientes-sumaResta');
    /*Se inserta el id fecha clientes dentro del contenedor inicial en el cual se encontraba y a su vez se elimina la clase del segundo formulario
    y se le vuelve a asignar la clase inicial*/
    $("#fecha-clientes").insertAfter("#insertar-aqui-fecha-formulario-3");
    $("#fecha-clientes").removeClass("C_disenoMovil2").addClass("C_tercer_formulario");
   });

   $('#btnBrush3').on("click", function(){
    $('#nombre-cliente').val('');
    $('#contacto').val('');
    $('#barbero').val('');
    $('#servicio').val('');
    $('#canal-comunicacion').val('');
   });


   $('#btn-registro-cita-tercer-formulario').on("click", function(){
    $('#tercer-formulario').hide();
    $('#cuarto-formulario').show();
    $('#fecha-clientes').insertAfter('#referencia-para-mover-FechaHora-Formulario4');
    $('#hora-clientes').insertAfter('#fecha-clientes');
   });


  //Desactivar boton de eliminar
  $("#boton-eliminarCliente-modal").prop('disabled', true);


  


  

  $('#icono-ocultar-informacion-4F').on("click", function(){
    //iconos
    $('#icono-ocultar-informacion-4F').hide();
    $('#icono-Mostrar-informacion-4F').show();
    
    //campos
    $('#contenedor-hecha-hora-Form4').hide();
    $('.C_barberoFormualario4').hide();
    $('.C_servicioFormulario4').hide();
    $('.C_iconoProductoFormulario4').hide();    
    $('.C_totalAPagar').hide();
  });

  $('#icono-Mostrar-informacion-4F').on("click", function(){
    //iconos
    $('#icono-ocultar-informacion-4F').show();
    $('#icono-Mostrar-informacion-4F').hide();
    
    //campos
    $('#contenedor-hecha-hora-Form4').show();
    $('.C_barberoFormualario4').show();
    $('.C_servicioFormulario4').show();
    $('.C_iconoProductoFormulario4').show();    
    $('.C_totalAPagar').show();
  });


 

















  /*VERSION MÓVIL VERSION MÓVIL VERSION MÓVIL */

  /*Se muestran los iconos cuando la resolución es de 1000px */
  $(window).resize(function() {
    var width = $(window).width();
    if (width <= 850) {
        $('.C_home').show();
        $('.C_menu').show();
        $('.C_rowDivIconosHomeMenuF3').show();
        $('#div-icono-minimizarMovil4toF').show();
        $('.C_label_oculto').hide();
        $('#brush-4f').show();
        $('#br-cuartoFormulario').show();
        

    } else {
        $('.C_home').hide();
        $('.C_menu').hide();
        $('.C_rowDivIconosHomeMenuF3').hide();
        $('#div-icono-minimizarMovil4toF').hide();
        $('#brush-4f').hide();
        $('#br-cuartoFormulario').hide();

        //mostrar campos
        $('#contenedor-hecha-hora-Form4').show();
        $('.C_barberoFormualario4').show();
        $('.C_servicioFormulario4').show();
        $('.C_iconoProductoFormulario4').show();    
        $('.C_totalAPagar').show();
    }
    });
  $(window).resize();





});/*Terminan FUNCIONES ANONIMAS*/  




  
  
  