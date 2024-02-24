$(document).ready(function(){
    
    $("#miSelect").change(function() {
        var seleccion = $(this).val();
        if(seleccion === 'select_visitas'){
            $("#fecha_registro").on("keyup", function(event) {
                if (event.which === 13) {
                    $("#nomCliente").focus();
                }
            });
        
            $("#nomCliente").on("keyup", function(event) {
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
                    $("#btn-reg").focus();
                }
            });
        }

        else if (seleccion === 'select_clientes'){
            $("#fecha_registro").on("keyup", function(event) {
                if (event.which === 13) {
                    $("#nomCliente").focus();
                }
            });
        
            $("#nomCliente").on("keyup", function(event) {
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
                    $("#dir_client").focus();
                }
            });

            $("#dir_cliente").on("keyup", function(event) {
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
                    $("# btn-reg").focus();
                }
            });
        }

        else if (seleccion ==='select_miembros'){
            $("#fecha_registro").on("keyup", function(event) {
                if (event.which === 13) {
                    $("#nomCliente").focus();
                }
            });
        
            $("#nomCliente").on("keyup", function(event) {
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
                    $("#fecha_nac").focus();
                }
            });


            $("#fecha_nac").on("keyup", function(event) {
                if (event.which === 13) {
                    $("#dir_cliente").focus();
                }
            });

            $("#dir_cliente").on("keyup", function(event) {
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
                    $("# btn-reg").focus();
                }
            });

        }
    });

});
