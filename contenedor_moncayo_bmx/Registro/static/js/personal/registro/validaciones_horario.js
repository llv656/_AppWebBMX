$(document).ready(function() {
    const MENSAJE_ERROR = 'El horario de salida no puede ser antes del horario de entrada, verifique su configuración';

    $('#lunesSalida').prop("disabled", true);
    $('#martesSalida').prop("disabled", true);
    $('#miercolesSalida').prop("disabled", true);
    $('#juevesSalida').prop("disabled", true);
    $('#viernesSalida').prop("disabled", true);
    $('#sabadoSalida').prop("disabled", true);
    $('#domingoSalida').prop("disabled", true);
    
    $('#lunesFinHoraComida').prop("disabled", true);
    $('#martesFinHoraComida').prop("disabled", true);
    $('#miercolesFinHoraComida').prop("disabled", true);
    $('#juevesFinHoraComida').prop("disabled", true);
    $('#viernesFinHoraComida').prop("disabled", true);
    $('#sabadoFinHoraComida').prop("disabled", true);
    $('#domingoFinHoraComida').prop("disabled", true);

    //LUNES
    $('#lunesEntrada').on('change', function(){
        if ($(this).val() !== ''){
            $('#lunesSalida').prop("disabled", false);
        } else {
            $('#lunesSalida').prop("disabled", true);
        }
    });
    
    $('#lunesSalida').on('change', function(){
        if ($(this).val() !== ''
            && $('#lunesEntrada').val() > $(this).val()){
            $(this).val('');
            alert(MENSAJE_ERROR);
        }
    });

    $('#lunesInicioHoraComida').on('change', function(){
        if ($(this).val() !== ''){
            $('#lunesFinHoraComida').prop("disabled", false);
        } else {
            $('#lunesFinHoraComida').prop("disabled", true);
        }
    });
    $('#lunesFinHoraComida').on('change', function(){
        if ($(this).val() !== ''
            && $('#lunesInicioHoraComida').val() > $(this).val()){
            $(this).val('');
            alert(MENSAJE_ERROR);
        }
    });

    //MARTES
    $('#martesEntrada').on('change', function(){
        if ($(this).val() !== ''){
            $('#martesSalida').prop("disabled", false);
        } else {
            $('#martesSalida').prop("disabled", true);
        }
    });
    $('#martesSalida').on('change', function(){
        if ($(this).val() !== ''
            && $('#martesEntrada').val() > $(this).val()){
            $(this).val('');
            alert(MENSAJE_ERROR);
        }
    });

    $('#martesInicioHoraComida').on('change', function(){
        if ($(this).val() !== ''){
            $('#martesFinHoraComida').prop("disabled", false);
        } else {
            $('#martesFinHoraComida').prop("disabled", true);
        }
    });
    $('#martesFinHoraComida').on('change', function(){
        if ($(this).val() !== ''
            && $('#martesInicioHoraComida').val() > $(this).val()){
            $(this).val('');
            alert(MENSAJE_ERROR);
        }
    });

    //MIERCOLES
    $('#miercolesEntrada').on('change', function(){
        if ($(this).val() !== ''){
            $('#miercolesSalida').prop("disabled", false);
        } else {
            $('#miercolesSalida').prop("disabled", true);
        }
    });
    $('#miercolesSalida').on('change', function(){
        if ($(this).val() !== ''
            && $('#miercolesEntrada').val() > $(this).val()){
            $(this).val('');
            alert(MENSAJE_ERROR);
        }
    });

    $('#miercolesInicioHoraComida').on('change', function(){
        if ($(this).val() !== ''){
            $('#miercolesFinHoraComida').prop("disabled", false);
        } else {
            $('#miercolesFinHoraComida').prop("disabled", true);
        }
    });
    $('#miercolesFinHoraComida').on('change', function(){
        if ($(this).val() !== ''
            && $('#miercolesInicioHoraComida').val() > $(this).val()){
            $(this).val('');
            alert(MENSAJE_ERROR);
        }
    });

    //JUEVES
    $('#juevesEntrada').on('change', function(){
        if ($(this).val() !== ''){
            $('#juevesSalida').prop("disabled", false);
        } else {
            $('#juevesSalida').prop("disabled", true);
        }
    });
    $('#juevesSalida').on('change', function(){
        if ($(this).val() !== ''
            && $('#juevesEntrada').val() > $(this).val()){
            $(this).val('');
            alert(MENSAJE_ERROR);
        }
    });

    $('#juevesInicioHoraComida').on('change', function(){
        if ($(this).val() !== ''){
            $('#juevesFinHoraComida').prop("disabled", false);
        } else {
            $('#juevesFinHoraComida').prop("disabled", true);
        }
    });
    $('#juevesFinHoraComida').on('change', function(){
        if ($(this).val() !== ''
            && $('#juevesInicioHoraComida').val() > $(this).val()){
            $(this).val('');
            alert(MENSAJE_ERROR);
        }
    });

    //VIERNES
    $('#viernesEntrada').on('change', function(){
        if ($(this).val() !== ''){
            $('#viernesSalida').prop("disabled", false);
        } else {
            $('#viernesSalida').prop("disabled", true);
        }
    });
    $('#viernesSalida').on('change', function(){
        if ($(this).val() !== ''
            && $('#viernesEntrada').val() > $(this).val()){
            $(this).val('');
            alert(MENSAJE_ERROR);
        }
    });

    $('#viernesInicioHoraComida').on('change', function(){
        if ($(this).val() !== ''){
            $('#viernesFinHoraComida').prop("disabled", false);
        } else {
            $('#viernesFinHoraComida').prop("disabled", true);
        }
    });
    $('#viernesFinHoraComida').on('change', function(){
        if ($(this).val() !== ''
            && $('#viernesInicioHoraComida').val() > $(this).val()){
            $(this).val('');
            alert(MENSAJE_ERROR);
        }
    });

    //SABADO
    $('#sabadoEntrada').on('change', function(){
        if ($(this).val() !== ''){
            $('#sabadoSalida').prop("disabled", false);
        } else {
            $('#sabadoSalida').prop("disabled", true);
        }
    });
    $('#sabadoSalida').on('change', function(){
        if ($(this).val() !== ''
            && $('#sabadoEntrada').val() > $(this).val()){
            $(this).val('');
            alert(MENSAJE_ERROR);
        }
    });

    $('#sabadoInicioHoraComida').on('change', function(){
        if ($(this).val() !== ''){
            $('#sabadoFinHoraComida').prop("disabled", false);
        } else {
            $('#sabadoFinHoraComida').prop("disabled", true);
        }
    });
    $('#sabadoFinHoraComida').on('change', function(){
        if ($(this).val() !== ''
            && $('#sabadoInicioHoraComida').val() > $(this).val()){
            $(this).val('');
            alert(MENSAJE_ERROR);
        }
    });

    //DOMINGO
    $('#domingoEntrada').on('change', function(){
        if ($(this).val() !== ''){
            $('#domingoSalida').prop("disabled", false);
        } else {
            $('#domingoSalida').prop("disabled", true);
        }
    });
    $('#domingoSalida').on('change', function(){
        if ($(this).val() !== ''
            && $('#domingoEntrada').val() > $(this).val()){
            $(this).val('');
            alert(MENSAJE_ERROR);
        }
    });

    $('#domingoInicioHoraComida').on('change', function(){
        if ($(this).val() !== ''){
            $('#domingoFinHoraComida').prop("disabled", false);
        } else {
            $('#domingoFinHoraComida').prop("disabled", true);
        }
    });
    $('#domingoFinHoraComida').on('change', function(){
        if ($(this).val() !== ''
            && $('#domingoInicioHoraComida').val() > $(this).val()){
            $(this).val('');
            alert(MENSAJE_ERROR);
        }
    });

});