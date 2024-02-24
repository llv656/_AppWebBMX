$(document).ready(function(){

    $("#nombreServicio").on("keyup", function(event) {
        if (event.which === 13) {
            $("#descripcionServicio").focus();
        }
    });

    $("#descripcionServicio").on("keyup", function(event) {
        if (event.which === 13) {
            $("#tiempoServicio").focus();
        }
    });

    $("#tiempoServicio").on("keyup", function(event) {
        if (event.which === 13) {
            $("#precioPublico").focus();
        }
    });

    $("#precioPublico").on("keyup", function(event) {
        if (event.which === 13) {
            $("#precioInterno").focus();
        }
    });

    $("#precioInterno").on("keyup", function(event) {
        if (event.which === 13) {
            $("#btn-reg").focus();
        }
    });


});