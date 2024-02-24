$(document).ready(function() {
    /*
    $('#fecha_pago').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    $('#fecha_pago').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    */

    //LUNES ENTRADA
    $('#lunesEntrada').on('change', function(){
        if ($(this).val() !== ''){
            $('#lunesEntrada').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#lunesEntrada').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //LUNES SALIDA
    $('#lunesSalida').on('change', function(){
        if ($(this).val() !== ''){
            $('#lunesSalida').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#lunesSalida').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //LUNES INICIO HORA DE COMIDA
    $('#lunesInicioHoraComida').on('change', function(){
        if ($(this).val() !== ''){
            $('#lunesInicioHoraComida').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#lunesInicioHoraComida').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //LUNES FIN HORA DE COMIDA
    $('#lunesFinHoraComida').on('change', function(){
        if ($(this).val() !== ''){
            $('#lunesFinHoraComida').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#lunesFinHoraComida').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });
    
    //MARTES ENTRADA
    $('#martesEntrada').on('change', function(){
        if ($(this).val() !== ''){
            $('#martesEntrada').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#martesEntrada').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //MARTES SALIDA
    $('#martesSalida').on('change', function(){
        if ($(this).val() !== ''){
            $('#martesSalida').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#martesSalida').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //MARTES INICIO HORA DE COMIDA
    $('#martesInicioHoraComida').on('change', function(){
        if ($(this).val() !== ''){
            $('#martesInicioHoraComida').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#martesInicioHoraComida').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //MARTES FIN HORA DE COMIDA
    $('#martesFinHoraComida').on('change', function(){
        if ($(this).val() !== ''){
            $('#martesFinHoraComida').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#martesFinHoraComida').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });


    //MIERCOLES ENTRADA
    $('#miercolesEntrada').on('change', function(){
        if ($(this).val() !== ''){
            $('#miercolesEntrada').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#miercolesEntrada').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //MIERCOLES SALIDA
    $('#miercolesSalida').on('change', function(){
        if ($(this).val() !== ''){
            $('#miercolesSalida').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#miercolesSalida').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //MIERCOLES INICIO HORA DE COMIDA
    $('#miercolesInicioHoraComida').on('change', function(){
        if ($(this).val() !== ''){
            $('#miercolesInicioHoraComida').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#miercolesInicioHoraComida').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //MIERCOLES FIN HORA DE COMIDA
    $('#miercolesFinHoraComida').on('change', function(){
        if ($(this).val() !== ''){
            $('#miercolesFinHoraComida').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#miercolesFinHoraComida').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //JUEVES ENTRADA
    $('#juevesEntrada').on('change', function(){
        if ($(this).val() !== ''){
            $('#juevesEntrada').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#juevesEntrada').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //JUEVES SALIDA
    $('#juevesSalida').on('change', function(){
        if ($(this).val() !== ''){
            $('#juevesSalida').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#juevesSalida').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //JUEVES INICIO HORA COMIDA
    $('#juevesInicioHoraComida').on('change', function(){
        if ($(this).val() !== ''){
            $('#juevesInicioHoraComida').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('juevesInicioHoraComida').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //JUEVES FIN HORA COMIDA
    $('#juevesFinHoraComida').on('change', function(){
        if ($(this).val() !== ''){
            $('#juevesFinHoraComida').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#juevesFinHoraComida').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //VIERNES ENTRADA
    $('#viernesEntrada').on('change', function(){
        if ($(this).val() !== ''){
            $('#viernesEntrada').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#viernesEntrada').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //VIERNES SALIDA
    $('#viernesSalida').on('change', function(){
        if ($(this).val() !== ''){
            $('#viernesSalida').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#viernesSalida').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //VIERNES INICIO HORA COMIDA
    $('#viernesInicioHoraComida').on('change', function(){
        if ($(this).val() !== ''){
            $('#viernesInicioHoraComida').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#viernesInicioHoraComida').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //VIERNES FIN HORA COMIDA
    $('#viernesFinHoraComida').on('change', function(){
        if ($(this).val() !== ''){
            $('#viernesFinHoraComida').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#viernesFinHoraComida').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //SABADO ENTRADA
    $('#sabadoEntrada').on('change', function(){
        if ($(this).val() !== ''){
            $('#sabadoEntrada').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#sabadoEntrada').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //SABADO SALIDA
    $('#sabadoSalida').on('change', function(){
        if ($(this).val() !== ''){
            $('#sabadoSalida').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#sabadoSalida').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });
    
    //SABADO INICIO HORA COMIDA
    $('#sabadoInicioHoraComida').on('change', function(){
        if ($(this).val() !== ''){
            $('#sabadoInicioHoraComida').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#sabadoInicioHoraComida').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //SABADO FIN HORA COMIDA
    $('#sabadoFinHoraComida').on('change', function(){
        if ($(this).val() !== ''){
            $('#sabadoFinHoraComida').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#sabadoFinHoraComida').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //DOMINGO ENTRADA
    $('#domingoEntrada').on('change', function(){
        if ($(this).val() !== ''){
            $('#domingoEntrada').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#domingoEntrada').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //DOMINGO SALIDA
    $('#domingoSalida').on('change', function(){
        if ($(this).val() !== ''){
            $('#domingoSalida').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#domingoSalida').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //DOMINGO INICIO HORA COMIDA
    $('#domingoInicioHoraComida').on('change', function(){
        if ($(this).val() !== ''){
            $('#domingoInicioHoraComida').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#domingoInicioHoraComida').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });

    //DOMINGO FIN HORA COMIDA
    $('#domingoFinHoraComida').on('change', function(){
        if ($(this).val() !== ''){
            $('#domingoFinHoraComida').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
        } else {
            $('#domingoFinHoraComida').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
        }
    });


});