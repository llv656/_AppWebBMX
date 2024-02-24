$(document).ready(function() {
    $('body').click(function() {
        
    });
    
    
    /*Mensaje de campo vacio de FECHA REGISTRO
    $("#fecha_registro").blur(function() {
        if ($("#fecha_registro").val() === '') {
            $("#errorFR").html('<span style="color:red;">* </span>Este campo es requerido');
            $("#errorFR").show();
        } else {
            $("#errorFR").hide();
        }
    });*/



//Mensaje de Campo Vacio de Rol de Personal
$(".chosen-search-input").blur(function() {
    var selectedValues = $(".chosen-select").chosen().val();
    if (selectedValues.length === 0 &&
        ($(".chosen-search-input").val() === undefined ||$(".chosen-search-input").val() === '' || $(".chosen-search-input").val() === null )) {
        $("#errorRP").html('<span style="color:red;"> <br>* </span>Este campo es requerido');
        $("#errorRP").show();
    } else {
        $("#errorRP").hide();

    }
});


//Mensaje de Campo Vacio de NOMBRE
$("#nombre").blur(function() {
    if ($("#nombre").val() === '') {
        $("#errorN").html('<span style="color:red;">* </span>Este campo es requerido');
        $("#errorN").show();
    } else {
        $("#errorN").hide();
    }
});

$("#apellido_paterno").blur(function() {
    if ($("#apellido_paterno").val() === '') {
        $("#errorAP").html('<span style="color:red;">* </span>Este campo es requerido');
        $("#errorAP").show();
    } else {
        $("#errorAP").hide();
    }
});

//Mensaje de Campo Vacio de Fecha de Nacimiento
$("#fecha_nacimiento").blur(function() {
    if ($("#fecha_nacimiento").val() === '') {
        $("#errorFN").html('<span style="color:red;">* </span>Este campo es requerido');
        $("#errorFN").show();
    } else {
        $("#errorFN").hide();
    }
});

//Mensaje de Campo Vacio de Dirección
$("#dir_personal").blur(function() {
    if ($("#dir_personal").val() === '') {
        $("#errorDir").html('<span style="color:red;">* </span>Este campo es requerido');
        $("#errorDir").show();
    } else {
        $("#errorDir").hide();
    }
});

//Mensaje de Campo Vacio de Teléfono
$("#numero_telefonico").blur(function() {
    if ($("#numero_telefonico").val() === '') {
        $("#errorTel").html('<span style="color:red;">* </span>Este campo es requerido');
        $("#errorTel").show();
    } else {
        $("#errorTel").hide();
    }
});



//Mensaje de Campo Vacio de Tipo de Pago
$("#tipoPago").blur(function() {
    console.log($("#tipoPago").val());
    if ($("#tipoPago").val() === undefined ||$("#tipoPago").val() === '' || $("#tipoPago").val() === null ) {
        $("#errorTP").html('<span style="color:red;">* </span>Este campo es requerido');
        $("#errorTP").show();
    } else {
        $("#errorTP").hide();
    }
});


  //Mensaje de Campo Vacio de Periodo
$("#periodoPago").blur(function() {
    if ($("#periodoPago").val() === '') {
      $("#errorP").html('<span style="color:red;">* </span>Este campo es requerido');
      $("#errorP").show();
    } else {
      $("#errorP").hide();
    }
  });

//Mensaje de Campo Vacio Periodo
$("#periodoPago").blur(function() {
    if ($("#periodoPago").val() === undefined ||$("#periodoPago").val() === '' || $("#periodoPago").val() === null ) {
        $("#errorP").html('<span style="color:red;">* </span>Este campo es requerido');
        $("#errorP").show();
    } else {
        $("#errorP").hide();
    }
});


//Mensaje de Campo Vacio de Sueldo fijo
$("#pagoFijo").blur(function() {
    if ($("#pagoFijo").val() === undefined ||$("#pagoFijo").val() === '' || $("#pagoFijo").val() === null ) {
        $("#errorPFijo").html('<span style="color:red;">* </span>Este campo es requerido');
        $("#errorPFijo").show();
    } else {
        $("#errorPFijo").hide();
    }
});

  //Mensaje de Campo Vacio de Comisión por Productos
$("#comisionProductos").blur(function() {
    if ($("#comisionProductos").val() === undefined ||$("#comisionProductos").val() === '' || $("#comisionProductos").val() === null ) {
        $("#errorCP").html('<span style="color:red;">* </span>Este campo es requerido');
        $("#errorCP").show();
    } else {
        $("#errorCP").hide();
    }
});



  //Mensaje de Campo Vacio de Comisión por Servicios
$("#comisionServicios").blur(function() {
    if ($("#comisionServicios").val() === undefined ||$("#comisionServicios").val() === '' || $("#comisionServicios").val() === null ) {
        $("#errorCS").html('<span style="color:red;">* </span>Este campo es requerido');
        $("#errorCS").show();
    } else {
        $("#errorCS").hide();
    }
});



$("#distribuidor").blur(function() {
    if ($("#distribuidor").val() === undefined ||$("#distribuidor").val() === '' || $("#distribuidor").val() === null ) {
        $("#errorDistribuidor").html('<span style="color:red;">* </span>Este campo es requerido');
        $("#errorDistribuidor").show();
    } else {
        $("#errorDistribuidor").hide();
    }
});
    

$("#nombreProducto").blur(function() {
    if ($("#nombreProducto").val() === undefined ||$("#nombreProducto").val() === '' || $("#nombreProducto").val() === null ) {
        $("#errorNombre").html('<span style="color:red;">* </span>Este campo es requerido');
        $("#errorNombre").show();
    } else {
        $("#errorNombre").hide();
    }
});

$("#inputCantProd").blur(function() {
    if ($("#inputCantProd").val() === undefined ||$("#inputCantProd").val() === '' || $("#inputCantProd").val() === null ) {
        $("#errorCantidad").html('<span style="color:red;">* </span>Este campo es requerido');
        $("#errorCantidad").show();
    } else {
        $("#errorCantidad").hide();
    }
});



});


