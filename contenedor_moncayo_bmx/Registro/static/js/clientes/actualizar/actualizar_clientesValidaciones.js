$(document).ready(function() {
  
  //Validación Select para los colores
  $("#menuTipoUsuario").on("change", function() {
    menuUsuario= $("#menuTipoUsuario").val();
    
    if (menuUsuario === "select_visitas" || menuUsuario === "select_clientes" || menuUsuario === "select_miembros") {
      $(this).removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    } 
    else {
      $(this).removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
  });



  //Validación para cambiar el color del border-color de la fecha cuando se seleccione una fecha
  $("#fecha_registro").on("change", function() {
    var fechaSeleccionada = $("#fecha_registro").val();
    var regexFecha = /^\d{4}-\d{2}-\d{2}$/; // Formato de fecha de tipo "date"

    if (regexFecha.test(fechaSeleccionada)) {
      $(this).removeClass("C_colorBaseBorder").addClass("C_validacionCorrecta");
    } 
    else {
      $(this).removeClass("C_validacionCorrecta").addClass("C_colorBaseBorder");
    }
  });



  // Agrega un evento keyup al campo de entrada de texto
  $("#nomCliente").on("keyup", function() {
    var regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,50}$/; // Expresión regular para letras de 1 a 50 caracteres

    // Verifica si el valor del campo cumple con la expresión regular
    if (regex.test(this.value)) {
      $('#nomCliente').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    } 
    else {
      this.value = this.value.replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+/g, "").substring(0, 50);
      $('#nomCliente').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
  });
  
  
  
  $("#apellido_paterno").on("keyup", function() {
    var regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,50}$/; // Expresión regular para letras de 1 a 50 caracteres
  
    // Verifica si el valor del campo cumple con la expresión regular
    if (regex.test(this.value)) {
      $('#apellido_paterno').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    } 
    else {
      this.value = this.value.replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+/g, "").substring(0, 50);
      $('#apellido_paterno').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
  });



  $("#apellido_materno").on("keyup", function() {
    var regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,50}$/; // Expresión regular para letras de 1 a 50 caracteres

    // Verifica si el valor del campo cumple con la expresión regular
    if (regex.test(this.value)) {
      this.value = this.value.replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+/g, "").substring(0, 50);
      $('#apellido_materno').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
    else{
      this.value = this.value.replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+/g, "").substring(0, 50);
      $('#apellido_materno').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
  });



  //Validación de Entrada de 10 digitos de NÚMERO DE TELÉFONO
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

    $.ajax({
      url: '/validar-contacto-personal/'+this.value+'/',
      method: 'GET',
      success: function(data){
        console.log(data);
        if (!jQuery.isEmptyObject(data)){
          console.log(data.result.contacto_registrado);
          if (data.result.contacto_registrado){
            $('#errorTel').html("El Teléfono ya se encuentra registrado.<br>").css("color", "red");
            $("#errorTel").show(); //Se muestra mensaje de error
            setTimeout(function() { //Función para asignarle tiempo de borrado al campo
              $('#numero_telefonico').val('');//Se limpia campo de numero telefonico repetido
              $("#errorTel").hide(); //Se oculta mensaje de error
            }, 1500); // 1500 milisegundos (1.5 segundos)  
          } 
          else {
            $('#errorTel').html("Teléfono Válido.<br>").css("color", "#6e842b");
          }
        }
      },
      error: function(data){
        console.error(data);
      }
    });
  });
    
  

  //Agrega guiones al número telefónico
  $("#numero_telefonico").on("change", function() {
    var regex = /^[0-9]{10}$/; 
    
    // Verifica si el valor del campo cumple con la expresión regular
    if (regex.test(this.value)) {
      $(this).attr("maxlength", "12");
      this.value = this.value.substring(0,3) + '-' + this.value.substring(3,6) + '-' + this.value.substring(6,10);
    }
  });



  //Establece el máximo de la Entrada de Fecha
  let fechaActual = new Date();
  fechaActual.setDate(fechaActual.getDate() + 0);
  $('#fecha_nac').attr('max', fechaActual.toISOString().split('T')[0]);

    
 
  //Validación de entrada de Dirección de cliente
  $("#dir_client").on("keyup", function() {
    var regex = /^[a-zA-Z0-9\s,#.]{1,299}$/;

    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value)) {
      this.value = this.value.replace(/[^a-zA-Z0-9\s#]+/g, "").substring(0, 300);
      $('#dir_client').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    } 
    else{
      $('#dir_client').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
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



  //Validación de entrada de Correo Electrónico
  $("#correo_electr").on("keyup", function() {
    var regex = /^[_A-Za-z0-9-+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/              
    this.value = this.value.replace(/[^_A-Za-z0-9-+@.]+/g, "");
    
    if (regex.test(this.value)) {
      let partes = this.value.split("@");
      let nombre = partes[0];
      let dominio = partes[1];
      
      if (nombre.length <= 67 && dominio.length <= 177 && this.value.length <= 241) {
        this.value = this.value.substring(0, 241);
        $('#correo_electr').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        console.log("correo valido alv");
        return true;
      } 
      else {
        this.value = this.value.substring(0, 241);
        console.log("No mames, esta mal el correo bro, vuelve a intentar");
        return false;
      }
    } 
    else {
      console.log("No es válido");
      $('#correo_electr').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
  });
  
  

  //Validación de entrada de Nombre Cliente
  $("#nomCliente").blur(function() {
    if ($("#nomCliente").val() === '') {
      $("#errorN").html('<span style="color:red;">* </span>Este campo es requerido');
      $("#errorN").show();
    } 
    else {
      $("#errorN").hide();
    }
  });



  //Validación de entrada de Apellido Paterno
  $("#apellido_paterno").blur(function() {
    if ($("#apellido_paterno").val() === '') {
      $("#errorAP").html('<span style="color:red;">* </span>Este campo es requerido');
      $("#errorAP").show();
    } 
    else {
      $("#errorAP").hide();
    }
  });



  //Validación de entrada de Fecha de Nacimento
  $("#fecha_nac").blur(function() {
    if ($("#fecha_nac").val() === '') {
      $("#errorFech").html('<span style="color:red;">* </span>Este campo es requerido');
      $("#errorFech").show();
      $("#fecha_nac").removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    } 
    else {
      $("#errorFech").hide();
      $("#fecha_nac").removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
  });


  
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

    // Elimina el primer carácter si es un espacio
    if (this.value.charAt(0) === ' ') {
      this.value = this.value.slice(1);
    }
    $.ajax({
      url: '/validar-contacto-personal/'+this.value+'/',
      method: 'GET',
      success: function(data){
        console.log(data);
        if (!jQuery.isEmptyObject(data)){
          console.log(data.result.contacto_registrado);
          if (data.result.contacto_registrado){
            $('#errorFacebook').html("El Facebook ya se encuentra registrado.<br>").css("color", "red");
            $("#errorFacebook").show(); //Se muestra mensaje de error
            setTimeout(function() { //Función para asignarle tiempo de borrado al campo
              $('#facebook').val('');//Se limpia campo de facebook repetido
              $("#errorFacebook").hide(); //Se oculta mensaje de error
            }, 1500); // 1500 milisegundos (1.5 segundos)
            
          } else {
            $('#errorFacebook').html("Facebook Válido.<br>").css("color", "#6e842b");

          }
        }
      },
      error: function(data){
        console.error(data);
      }
    });

  });



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
    
    // Elimina el primer carácter si es un espacio
    if (this.value.charAt(0) === ' ') {
      this.value = this.value.slice(1);
    }

    $.ajax({
      url: '/validar-contacto-personal/'+this.value+'/',
      method: 'GET',
      success: function(data){
        console.log(data);
        if (!jQuery.isEmptyObject(data)){
          console.log(data.result.contacto_registrado);
          if (data.result.contacto_registrado){
            $('#errorInstagram').html("El Instagram ya se encuentra registrado.<br>").css("color", "red");
            $("#errorInstagram").show(); //Se muestra mensaje de error
            setTimeout(function() { //Función para asignarle tiempo de borrado al campo
              $('#instagram').val('');//Se limpia campo de facebook repetido
              $("#errorInstagram").hide(); //Se oculta mensaje de error
            }, 1500); // 1500 milisegundos (1.5 segundos)
            
          } else {
            $('#errorInstagram').html("Instagram Válido.<br>").css("color", "#6e842b");
          }
        }
      },
      error: function(data){
        console.error(data);
      }
    });

  });
  


  //Validación de Fecha de Nacimiento
  $('#fech_nac').on('click', function() {
    $('#fech_nac').get(3).click(3); // Simula el click en el input de tipo "date"
  });
  


  //Validaciones de campos
  $(':input').on ("input",function() {
    menuUsuario= $("#menuTipoUsuario").val();
    nombreC= $("#nomCliente").val();
    appa= $("#apellido_paterno").val();
    fech= $("#fecha_nac").val();
    menured= $("#menuRedSocial").val();
    //numtel= $("#numero_telefonico").val();
    //correo= $("#correo_electr").val();
    //dir= $("#dir_client").val();
    //ins=$("#instagram").val();
    //fb=$("#facebook").val();
    
    console.log(fech)

    if (menuUsuario === "select_visitas" && validarCamposVisitas(nombreC,appa)) {
      $("#btn-reg").prop("disabled", false);
    }
    else if(menuUsuario === "select_clientes" && validarCamposClientes(nombreC,appa)){
      $("#btn-reg").prop("disabled", false);
    }
    else if(menuUsuario==="select_miembros" && validarCamposMiembros(nombreC,appa,fech)){
      $("#btn-reg").prop("disabled", false);
    } 
    else {
      $("#btn-reg").prop("disabled", true);
    }
  });



  //Validación de CAMPOS de Formularios para Habilitar el boton en APARTADO de VISITAS
  function validarCamposVisitas(nombreC,appa){
    var regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,50}$/;
    if (!regex.test(nombreC)||!regex.test(appa)){
      return false;
    }
    else{
      return true;
    }
  };



  //Validación de CAMPOS de Formularios para Habilitar el boton en APARTADO de CLIENTES
  function validarCamposClientes(nombreC,appa){
    var regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,50}$/;
    if (!regex.test(nombreC)||!regex.test(appa)){
      return false;
    }
    else{
      return true;
    }
  };



  //Validación de CAMPOS de Formularios para Habilitar el boton en APARTADO de MIEMBROS
  function validarCamposMiembros(nombreC,appa,fech){
    var regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,50}$/;
    var regexAppa = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,50}$/;
    
    if (regexNombre.test(nombreC) && regexAppa.test(appa) && fech!=''){
      return true;
    }
    else{
      return false;
    }
  };



  //Correo Electrónico
  $('#correo_electr').on("keyup", function(event){
    var regexCorreo = /^[_A-Za-z0-9-+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
    
    if(regexCorreo.test(this.value)){
      var partes = this.value.split("@");
      var nombreCorreo = partes[0];
      var dominio = partes[1];
    
      if (nombreCorreo.length <= 67 && dominio.length <= 177 && this.value.length <= 241) {       
        $.ajax({
          url: '/validar-contacto-personal/'+this.value+'/',
          method: 'GET',
          success: function(data){
            console.log(data);
            if (!jQuery.isEmptyObject(data)){
              console.log(data.result.contacto_registrado);
              if (data.result.contacto_registrado){
                $('#errorCorreo').html("El correo ya se encuentra registrado."),css("color", "red");
                $('#errorCorreo').show();
                setTimeout(function() { //Función para asignarle tiempo de borrado al campo
                  $('#correo_electr').val('');//Se limpia campo de facebook repetido
                  $("#errorCorreo").hide(); //Se oculta mensaje de error
                }, 1500); // 1500 milisegundos (1.5 segundos)
                
              } else {
                $('#errorCorreo').html("Correo valido").css("color","#6e842b");
              }
            }
          },
          error: function(data){
            console.error(data);
          }
        });
      }
    }
  });

});

