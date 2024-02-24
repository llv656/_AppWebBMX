$(document).ready(function() {
    $("#btnBrush").click(function() {
        /*Oculta campos que no se requieren mostrar en al elegir el tipo de usuario*/
        $(".C_fecha_registro").hide();
        $(".C_nombrecliente").hide();
        $(".C_instagram").hide();
        $(".C_facebook").hide();
        $(".C_apellidopaterno").hide();
        $(".C_apellidomaterno").hide();
        $(".C_telefono").hide();
        $(".C_correoelectronico").hide();
        $(".C_fechanacimiento").hide();
        $(".C_btnregistrar").hide();
        $("form").css("overflow", "hidden");
        $(".C_direccion").hide();
        $(".C_leyendas").hide();

        /*Restablece los valores a vacio */
        $("#menuTipoUsuario").val('');
        $('#menuTipoUsuario').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
        $("#fecha_registro").val('');
        $('#fecha_registro').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
        $("#nomCliente").val('');
        $('#nomCliente').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
        $("#apellido_paterno").val('');
        $('#apellido_paterno').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
        $("#apellido_materno").val('');
        $('#apellido_materno').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
        $("#numero_telefonico").val('');
        $('#numero_telefonico').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
        $("#fecha_nac").val('');
        $('#fecha_nac').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
        $("#correo_electr").val('');
        $('#correo_electr').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
        $("#dir_client").val('');
        $('#dir_client').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
        $("#instagram").val('');
        $('#instagram').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
        $("#facebook").val('');
        $('#facebook').removeClass("C_validacionCorrecta C_validacionIncorrecta").addClass("C_colorBaseBorder");
        $("#btn-reg").prop("disabled", true);
    });


    /*Desactiva los campos al cargar los archivos */
    $(".C_nombrecliente").hide();
    $(".C_apellidopaterno").hide();
    $(".C_apellidomaterno").hide();
    $(".C_fecha_registro").hide();
    $(".C_telefono").hide();
    $(".C_correoelectronico").hide();
    $(".C_fechanacimiento").hide();
    $(".C_direccion").hide();
    $(".C_facebook").hide();
    $(".C_instagram").hide();
    $(".C_btnregistrar").hide();
    $(".C_leyendas").hide();
    $(".C_home").hide();
    $(".C_menu").hide();
    $("form").css("overflow", "hidden");
    $("#btn-reg").prop("disabled", true);
    
    

    $("#menuTipoUsuario").change(function(e) {
        if ($(this).val() === "select_visitas") {
            $("form").css("overflow", "hidden");
            $(".C_nombrecliente").show();
            $(".C_apellidopaterno").show();
            $(".C_apellidomaterno").show();
            $(".C_fecha_registro").show();
            $(".C_telefono").hide();
            $(".C_correoelectronico").hide();
            $(".C_fechanacimiento").hide();
            $(".C_direccion").hide();
            $(".C_facebook").hide();
            $(".C_instagram").hide();
            $("form").css("overflow-y", "scroll");
            $(".C_leyendas").hide();
            
            $(".C_btnregistrar").show();


        } else if ($(this).val() === "select_clientes") {
            $(".C_nombrecliente").show();
            $(".C_apellidopaterno").show();
            $(".C_apellidomaterno").show();
            $(".C_fecha_registro").show();
            $(".C_telefono").show();
            $(".C_correoelectronico").show();
            $(".C_fechanacimiento").hide();
            $(".C_direccion").show();
            $(".C_facebook").show();
            $(".C_instagram").show();
            $("form").css("overflow-y", "scroll");
            $(".C_leyendas").show();
            $(".C_btnregistrar").show();

        } else if ($(this).val() === "select_miembros") {
            $(".C_nombrecliente").show();
            $(".C_apellidopaterno").show();
            $(".C_apellidomaterno").show();
            $(".C_fecha_registro").show();
            $(".C_telefono").show();
            $(".C_correoelectronico").show();
            $(".C_fechanacimiento").show();
            $(".C_direccion").show();
            $(".C_facebook").show();
            $(".C_instagram").show();
            $(".C_btnregistrar").show();
            $("form").css("overflow-y", "scroll");
            $(".C_leyendas").show();

        }

    });

    $("#menuRedSocial").change(function(e) {
        if ($(this).val() === "Instagram") {
            $(".C_instagram").show();
            $(".C_facebook").hide();
        }
    });

    $("#ComosaberUserFb").click(function() {
        $("#ayudauserFB").fadeIn(1000);
    });

    $("#ayudauserFB").mouseenter(function() {
        // No hace nada
    }).mouseleave(function() {
        $("#ayudauserFB").fadeOut(2000);
    });


    $('.C_menuredsocial').each(function() {
        var $this = $(this),
            numeroOpciones = $this.children('option').length;

        $this.addClass('.C_menuredsocial' + numeroOpciones);
    });


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
    $(window).resize();


    $(".icn-back").on("mouseup", function() {
        console.log("hola");
        $("#img-back").attr("src", "../../icons/menu2.svg");
    });

    $("#btn-reg").click(function(){
        $("#formulario-clientes").submit();
    });

     //Activar tooltip
     $('[data-bs-toggle="tooltip"]').tooltip();

});