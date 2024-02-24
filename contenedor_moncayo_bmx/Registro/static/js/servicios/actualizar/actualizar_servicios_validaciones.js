$(document).ready(function(){
  /*Inician funciones ANONIMAS */  
  /*NOMBRE DE SERVICIO*/
  $("#nombreServicio").on("keyup", function() {
    var regex = /^[a-zA-Z0-9\s]{1,131}$/;
    
    if (regex.test(this.value)) {
      $('#nombreServicio').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }

    else{
      this.value = this.value.replace(/[^a-zA-Z0-9\s]+/g, "").substring(0, 131);
      $('#nombreServicio').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
  });
  
  
  /*DESCRIPCIÓN*/
  $("#descripcionServicio").on("keyup", function() {
    var regex = /^[a-zA-Z0-9\s]{1,301}$/;
    if (regex.test(this.value)) {
      $('#descripcionServicio').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
    
    else{
      this.value = this.value.replace(/[^a-zA-Z0-9\s]+/g, "").substring(0, 301);
      $('#descripcionServicio').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
  });


  //NOMBRE SERVICIO
  $("#nombreServicio").blur(function() {
    if ($("#nombreServicio").val() === '') {
      $("#errorNombreServicio").html('<span style="color:red;">* </span>Este campo es requerido');
      $("#errorNombreServicio").show();
    } 
    
    else {
      $("#errorNombreServicio").hide();
    }
  });
  
  
  //DESCRIPCION
  $("#descripcionServicio").blur(function() {
    if ($("#descripcionServicio").val() === '') {
      $("#errorDescripcion").html('<span style="color:red;">* </span>Este campo es requerido');
      $("#errorDescripcion").show();
    } 
    
    else {
      $("#errorDescripcion").hide();
    }
  });
  
  
  //TIEMPO DE SERVICIO
  $("#tiempoServicio").blur(function() {
    if ($("#tiempoServicio").val() === '') {
      $("#errorTiempo").html('<span style="color:red;">* </span>Este campo es requerido');
      $("#errorTiempo").show();
      $("#tiempoServicio").removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    } 
    
    else {
      $("#errorTiempo").hide();
      $("#tiempoServicio").removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
  });
  
  
  /*PRECIO PUBLICO*/
  $('#precioPublico').on("input", function() {
    var regex = /^(?:[1-9]\d{0,5}|1000000)$/;
    var valor = $(this).val();
    
    if (valor === "") {
      $('#precioPublico').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    } 
    
    else if (regex.test(valor)) {
      $('#precioPublico').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    } 
    
    else {
      valor = valor.substring(0, valor.length - 1); // Eliminar el último carácter solo si es mayor a 1,000,000
      $(this).val(valor);
    }
  });


  /*PRECIO INTERNO*/
  $('#precioInterno').on("input", function() {
    var regex = /^(?:[1-9]\d{0,5}|1000000)$/;
    var valor = $(this).val();
    
    if (valor === "") {
      $('#precioInterno').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    } 
    
    else if (regex.test(valor)) {
      $('#precioInterno').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    } 
    
    else {
      valor = valor.substring(0, valor.length - 1); // Eliminar el último carácter solo si es mayor a 1,000,000
      $(this).val(valor);
    }
  });
  
  
  //VALIDACIÓN DE BOTÓN DE REGISTRO
  $(':input').on("input", function () {
    var nombreServicio = $("#nombreServicio").val();
    var descripcionServicio = $("#descripcionServicio").val();
    var tiempoServicio = $("#tiempoServicio").val();
    var validacion = validacionCampos(nombreServicio, descripcionServicio, tiempoServicio);
  
    if (validacion) {
      $("#btn-reg").prop("disabled", false);
    } 
    
    else {
      $("#btn-reg").prop("disabled", true);
    }
  });
  
  
  // Función de validación de entradas
  function validacionCampos(nombreServicio, descripcionServicio, tiempoServicio) {
    var regexNombre = /^[a-zA-Z0-9\s]{1,131}$/;
    var regexDescripcion = /^[a-zA-Z0-9\s]{1,301}$/;
  
    if (regexNombre.test(nombreServicio) && regexDescripcion.test(descripcionServicio) && tiempoServicio.trim() !== '') {
      return true;
    } 
    
    else {
      return false;
    }
  }
  
  /*Terminan funciones ANONIMAS*/
});