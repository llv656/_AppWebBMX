$(document).ready(function() {
  //Inician funciones AJAX

  //Validación de Entrada de 10 digitos de NÚMERO DE TELÉFONO
  $("#numero_telefonico").on("keyup", function() {
    $.ajax({
      url: '/validar-contacto-clientes/'+this.value+'/',
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
            
          } else {
            $('#errorTel').html("Teléfono Válido.<br>").css("color", "#6e842b");
          }
        }
      },
      error: function(data){
        console.error(data);
      }
    });
  });
  
  
  
  //Validaciones de Redes Sociales 
  //FACEBOOK
  $('#facebook').keyup(function() {
    $.ajax({
      url: '/validar-contacto-clientes/'+this.value+'/',
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
    $.ajax({
      url: '/validar-contacto-clientes/'+this.value+'/',
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
  
  
  
  //Correo electrónico
  $('#correo_electr').on("keyup", function(event){
    $.ajax({
      url: '/validar-contacto-clientes/'+this.value+'/',
      method: 'GET',
      success: function(data){
        console.log(data);
        if (!jQuery.isEmptyObject(data)){
          console.log(data.result.contacto_registrado);
          if (data.result.contacto_registrado){
            $('#errorCorreo').html("El correo ya se encuentra registrado."),css("color", "red");
            $('#errorCorreo').show();
            setTimeout(function() { //Función para asignarle tiempo de borrado al campo
              $('#correo_electr').val('');//Se limpia campo de correo repetido
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

  });


  //Terminan funciones de AJAX
});


