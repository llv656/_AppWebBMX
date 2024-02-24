$(document).ready(function() {
    $("#fecha_registro").on("keyup", function(event) {
        if (event.which === 13) {
            $("#rolPersonal").focus();
        }
    });

    $("#rolPersonal").on("keyup", function(event) {
        if (event.which === 13) {
            $("#nombre").focus();
        }
    });

    $("#nombre").on("keyup", function(event){
        if (event.which === 13) {
            $("#apellido_paterno").focus();
        }
    });

    $("#apellido_paterno").on("keyup", function(event) {
        if (event.which === 13) {
            $("#apellido_materno").focus();
        }
    });

    $("#apellido_materno").on("keyup", function(event) {
        if (event.which === 13) {
            $("#fecha_nacimiento").focus();
        }
    });

    $("#fecha_nacimiento").on("keyup", function(event) {
        if (event.which === 13) {
            $("#dir_personal").focus();
        }
    });

    $("#dir_personal").on("keyup", function(event) {
        if (event.which === 13) {
            $("#numero_telefonico").focus();
        }
    });

    $("#numero_telefonico").on("keyup", function(event) {
        if (event.which === 13) {
            $("#correo_electr").focus();
        }
    });

    $("#correo_electr").on("keyup", function(event) {
        if (event.which === 13) {
            $("#facebook").focus();
        }
    });

    $("#facebook").on("keyup", function(event) {
        if (event.which === 13) {
            $("#instagram").focus();
        }
    });

    $("#instagram").on("keyup", function(event) {
        if (event.which === 13) {
            $("#btn_form_datos_personales").focus();
        }
    });

});