$(document).ready(function() {
  /*Carga inicial de la página*/
  $("#boton_comprar").prop("disabled", true);/*Boton de compra desactivado*/
  $('.C_motivoEdicionDeCosto').hide();

  //Activar mensajes de tooltip
  $('[data-bs-toggle="tooltip"]').tooltip();

  //Limpiar campos al presionar el icono de brocha
  $("#btnBrush").click(function() {
      $("#nombreProducto").val('');
      $('#nombreProducto').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
      var fechaActual = new Date(); 
      var fechaFormato = fechaActual.toISOString().slice(0,10) 
      $('#fecha_compra').val(fechaFormato);
      $('#fecha_compra').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
      $("#responsable_compra").val('');
      $('#responsable_compra').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
      $("#cantidadProductosMayoreo").val('');
      $('#cantidadProductosMayoreo').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
      $("#total_compra").val('');
      $('#total_compra').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
      $("#motivo_edicion_costo").val('');
      $('#motivo_edicion_costo').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
      $('.C_motivoEdicionDeCosto').hide(); 
  });

  //EJECUTAR MODAL DESLIZANDO EL MOUSE ENCIMA DEL ICONO
  $("#icono_informacion, #modalEmergente").hover(
    function() {
        // Muestra el modal al pasar el ratón sobre el icono o el modal mismo
        $('#modalEmergente').modal('show');
    },
    function() {
        // Oculta el modal al salir del ratón del icono o el modal mismo
        $('#modal-contenidoo').modal('hide');
    }
    );


    $(window).resize(function() {
        var width = $(window).width();
        
        if (width <= 1000) {
            $('.C_home').show();
            $('.C_menu').show();
            $('.C_botonCerrarModal').show();
            $('#titulosMODAL').removeClass("col-sm-10").addClass("col-sm-8");
        } 
        else {
            $('.C_home').hide();
            $('.C_menu').hide();
            $('.C_botonCerrarModal').hide();
            $('#titulosMODAL').removeClass("col-sm-8").addClass("col-sm-10");
            $('#botoncerrarmodal').removeClass("col-sm-2");
        }
    });
    $(window).resize();

  



});