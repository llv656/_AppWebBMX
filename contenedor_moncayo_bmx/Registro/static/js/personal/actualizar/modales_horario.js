$(document).ready(function() {

    //LUNES
    $('#iconoCopyLunes').click(function() {
        validarYCopiarHorario($('#lunesEntrada'), $('#lunesSalida'), $('#formularioEmergenteLunes'), 'lunes');
    });

    $('#iconoCopyHorarioComidaLunes').click(function() {
        validarYCopiarHorario($('#lunesInicioHoraComida'), $('#lunesFinHoraComida'), $('#formularioEmergenteLunesComida'), 'lunes');
    });

    //MARTES
    $('#iconoCopyMartes').click(function() {
        validarYCopiarHorario($('#martesEntrada'), $('#martesSalida'), $('#formularioEmergenteMartes'), 'martes');
    });

    $('#iconoCopyHorarioComidaMartes').click(function() {
        validarYCopiarHorario($('#martesInicioHoraComida'), $('#martesFinHoraComida'), $('#formularioEmergenteMartesComida'), 'martes');
    });

    //MIERCOLES
    $('#iconoCopyMiercoles').click(function() {
        validarYCopiarHorario($('#miercolesEntrada'), $('#miercolesSalida'), $('#formularioEmergenteMiercoles'), 'miercoles');
    });

    $('#iconoCopyHorarioComidaMiercoles').click(function() {
        validarYCopiarHorario($('#miercolesInicioHoraComida'), $('#miercolesFinHoraComida'), $('#formularioEmergenteMiercolesComida'), 'miercoles');
    });

    //JUEVES
    $('#iconoCopyJueves').click(function() {
        validarYCopiarHorario($('#juevesEntrada'), $('#juevesSalida'), $('#formularioEmergenteJueves'), 'jueves');
    });

    $('#iconoCopyHorarioComidaJueves').click(function() {
        validarYCopiarHorario($('#juevesInicioHoraComida'), $('#juevesFinHoraComida'), $('#formularioEmergenteJuevesComida'), 'jueves');
    });

    //VIERNES
    $('#iconoCopyViernes').click(function() {
        validarYCopiarHorario($('#viernesEntrada'), $('#viernesSalida'), $('#formularioEmergenteViernes'), 'viernes');
    });

    $('#iconoCopyHorarioComidaViernes').click(function() {
        validarYCopiarHorario($('#viernesInicioHoraComida'), $('#viernesFinHoraComida'), $('#formularioEmergenteViernesComida'), 'viernes');
    });

    //SABADO
    $('#iconoCopySabado').click(function() {
        validarYCopiarHorario($('#sabadoEntrada'), $('#sabadoSalida'), $('#formularioEmergenteSabado'), 'sabado');
    });

    $('#iconoCopyHorarioComidaSabado').click(function() {
        validarYCopiarHorario($('#sabadoInicioHoraComida'), $('#sabadoFinHoraComida'), $('#formularioEmergenteSabadoComida'), 'sabado');
    });

    //DOMINGO
    $('#iconoCopyDomingo').click(function() {
        validarYCopiarHorario($('#domingoEntrada'), $('#domingoSalida'), $('#formularioEmergenteDomingo'), 'domingo');
    });

    $('#iconoCopyHorarioComidaDomingo').click(function() {
        validarYCopiarHorario($('#domingoInicioHoraComida'), $('#domingoFinHoraComida'), $('#formularioEmergenteDomingoComida'), 'domingo');
    });

    function validarYCopiarHorario(inputInicioId, inputFinId, modalId, diaCopia) {
        const valorInicio = inputInicioId.val();
        const valorFin = inputFinId.val();
      
        if (valorInicio.trim() === '' || valorFin.trim() === '') { 
            alert('Debes configurar el horario de entrada y salida');
        } else {
            modalId.modal("show");
            const nombreIdModal = modalId.attr('id');
            
            copiarHorarioDias(valorInicio, valorFin, nombreIdModal, diaCopia);

        }
    }
    
    function copiarHorarioDias(valorInicio, valorFin, nombreIdModal, diaCopia) {

        const diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

        const idCheckboxDiaActual = "#" + nombreIdModal + "_" + diaCopia;
        $(idCheckboxDiaActual).prop('checked', true);
        $(idCheckboxDiaActual).on("change", function(){
            $(this).prop('checked', true);
        });

        diasSemana.forEach(function(diaSemana) {

            if (diaSemana !== diaCopia) {

                let idCheckboxDiaSemana = "#" + nombreIdModal + "_" + diaSemana;
                $(idCheckboxDiaSemana).on("change", function(){
                    if(nombreIdModal.includes('Comida')) {
                        switch (diaSemana) {
                            case "lunes":
                                if($(this).is(":checked")){
                                    $("#lunesInicioHoraComida").val(valorInicio);
                                    $("#lunesFinHoraComida").val(valorFin);
                                    $("#lunesInicioHoraComida").trigger("change");
                                } else {
                                    $("#lunesInicioHoraComida").val('');
                                    $("#lunesFinHoraComida").val('');
                                    $("#lunesInicioHoraComida").trigger("change");
                                }
                                break;
                            case "martes":
                                if($(this).is(":checked")){
                                    $("#martesInicioHoraComida").val(valorInicio);
                                    $("#martesFinHoraComida").val(valorFin);
                                    $("#martesInicioHoraComida").trigger("change");
                                } else {
                                    $("#martesInicioHoraComida").val('');
                                    $("#martesFinHoraComida").val('');
                                    $("#martesInicioHoraComida").trigger("change");
                                }
                                break;
                            case "miercoles":
                                if($(this).is(":checked")){
                                    $("#miercolesInicioHoraComida").val(valorInicio);
                                    $("#miercolesFinHoraComida").val(valorFin);
                                    $("#miercolesInicioHoraComida").trigger("change");
                                } else {
                                    $("#miercolesInicioHoraComida").val('');
                                    $("#miercolesFinHoraComida").val('');
                                    $("#miercolesInicioHoraComida").trigger("change");
                                }
                                break;
                            case "jueves":
                                if($(this).is(":checked")){
                                    $("#juevesInicioHoraComida").val(valorInicio);
                                    $("#juevesFinHoraComida").val(valorFin);
                                    $("#juevesInicioHoraComida").trigger("change");
                                } else {
                                    $("#juevesInicioHoraComida").val('');
                                    $("#juevesFinHoraComida").val('');
                                    $("#juevesInicioHoraComida").trigger("change");
                                }
                                break;
                            case "viernes":
                                if($(this).is(":checked")){
                                    $("#viernesInicioHoraComida").val(valorInicio);
                                    $("#viernesFinHoraComida").val(valorFin);
                                    $("#viernesInicioHoraComida").trigger("change");
                                } else {
                                    $("#viernesInicioHoraComida").val('');
                                    $("#viernesFinHoraComida").val('');
                                    $("#viernesInicioHoraComida").trigger("change");
                                }
                                break;
                            case "sabado":
                                if($(this).is(":checked")){
                                    $("#sabadoInicioHoraComida").val(valorInicio);
                                    $("#sabadoFinHoraComida").val(valorFin);
                                    $("#sabadoInicioHoraComida").trigger("change");
                                } else {
                                    $("#sabadoInicioHoraComida").val('');
                                    $("#sabadoFinHoraComida").val('');
                                    $("#sabadoInicioHoraComida").trigger("change");
                                }
                                break;
                            case "domingo":
                                if($(this).is(":checked")){
                                    $("#domingoInicioHoraComida").val(valorInicio);
                                    $("#domingoFinHoraComida").val(valorFin);
                                    $("#domingoInicioHoraComida").trigger("change");
                                } else {
                                    $("#domingoInicioHoraComida").val('');
                                    $("#domingoFinHoraComida").val('');
                                    $("#domingoInicioHoraComida").trigger("change");
                                }
                                break;
                        }
                    } else {
                        switch (diaSemana) {
                            case "lunes":
                                if($(this).is(":checked")){
                                    $("#lunesEntrada").val(valorInicio);
                                    $("#lunesSalida").val(valorFin);
                                    $("#lunesEntrada").trigger("change");
                                } else {
                                    $("#lunesEntrada").val('');
                                    $("#lunesSalida").val('');
                                    $("#lunesEntrada").trigger("change");
                                }
                                break;
                            case "martes":
                                if($(this).is(":checked")){
                                    $("#martesEntrada").val(valorInicio);
                                    $("#martesSalida").val(valorFin);
                                    $("#martesEntrada").trigger("change");
                                } else {
                                    $("#martesEntrada").val('');
                                    $("#martesSalida").val('');
                                    $("#martesEntrada").trigger("change");
                                }
                                break;
                            case "miercoles":
                                if($(this).is(":checked")){
                                    $("#miercolesEntrada").val(valorInicio);
                                    $("#miercolesSalida").val(valorFin);
                                    $("#miercolesEntrada").trigger("change");
                                } else {
                                    $("#miercolesEntrada").val('');
                                    $("#miercolesSalida").val('');
                                    $("#miercolesEntrada").trigger("change");
                                }
                                break;
                            case "jueves":
                                if($(this).is(":checked")){
                                    $("#juevesEntrada").val(valorInicio);
                                    $("#juevesSalida").val(valorFin);
                                    $("#juevesEntrada").trigger("change");
                                } else {
                                    $("#juevesEntrada").val('');
                                    $("#juevesSalida").val('');
                                    $("#juevesEntrada").trigger("change");
                                }
                                break;
                            case "viernes":
                                if($(this).is(":checked")){
                                    $("#viernesEntrada").val(valorInicio);
                                    $("#viernesSalida").val(valorFin);
                                    $("#viernesEntrada").trigger("change");
                                } else {
                                    $("#viernesEntrada").val('');
                                    $("#viernesSalida").val('');
                                    $("#viernesEntrada").trigger("change");
                                }
                                break;
                            case "sabado":
                                if($(this).is(":checked")){
                                    $("#sabadoEntrada").val(valorInicio);
                                    $("#sabadoSalida").val(valorFin);
                                    $("#sabadoEntrada").trigger("change");
                                } else {
                                    $("#sabadoEntrada").val('');
                                    $("#sabadoSalida").val('');
                                    $("#sabadoEntrada").trigger("change");
                                }
                                break;
                            case "domingo":
                                if($(this).is(":checked")){
                                    $("#domingoEntrada").val(valorInicio);
                                    $("#domingoSalida").val(valorFin);
                                    $("#domingoEntrada").trigger("change");
                                } else {
                                    $("#domingoEntrada").val('');
                                    $("#domingoSalida").val('');
                                    $("#domingoEntrada").trigger("change");
                                }
                                break;
                        }
                    }
                });
            }
        });
    }
});