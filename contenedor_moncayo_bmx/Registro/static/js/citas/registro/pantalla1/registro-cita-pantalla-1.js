$(document).ready(function () {

    console.log("carga el documento pantalla 1");

    $('#boton-de-busqueda-de-cita').prop("disabled", true)

    //Icono de brocha para para limpiar campos del primer formulario
    $('#elemento-icono-brocha-1').on("click", function () {

        contadorPersonas = 1; //Reiniciar contador de número de clientes
        actualizarContador(); //Reiniciar contador de número de clientes
        $('#numero-personas').val('');
        $('#fecha-clientes').val('');
        $('#hora-clientes').val('');
        $("#boton-de-busqueda-de-cita").prop("disabled", true);
    });

    var contadorPersonas = 1;
    function actualizarContador() {
        $('#numero-personas').text(contadorPersonas);
    }

    // Utilizar delegación de eventos para elementos añadidos dinámicamente
    $('.resta').on('click', function () {
        if (contadorPersonas > 1) {
            contadorPersonas--;
            actualizarContador();
        }
    });

    $('.suma').on('click', function () {
        if (contadorPersonas < 5) {
            contadorPersonas++;
            actualizarContador();
        } else {
            alert("El número máximo de clientes son 5");
        }
    });

    //HORA
    //Configuración de formato a 12 hras
    let hora = new Date();

    //Formato en 12 horas para México
    let hora12Mexico = hora.toLocaleTimeString('es-MX', { hour: 'numeric', minute: 'numeric', hour12: true });
    //HORA

    //FECHA
    /*Establecer limite de fecha de selección, no se permite fechas posteriores a la actual, se permiten fechas posteriores 
    de hasta máximo 2 meses*/

    //Se obtiene fecha actual
    var fechaActual = new Date().toISOString().split('T')[0];

    //Establecer la fecha minima permitida (actual)
    $('#fecha-clientes').attr('min', fechaActual);

    //Calcular la fecha máxima permitida (actual + 2 meses)
    var maximo2Meses = new Date();
    maximo2Meses.setMonth(maximo2Meses.getMonth() + 2);
    var fechaMaxima = maximo2Meses.toISOString().split('T')[0];

    //Establecer la fecha máxima permitida
    $('#fecha-clientes').attr('max', fechaMaxima);

    //Validar la fecha seleccionada al cambiar
    $('#fecha-clientes').on('change', function () {
        var fechaSeleccionada = $(this).val();

        //Validar si la fecha seleccionada es anterior a la fecha actual
        if (fechaSeleccionada < fechaActual) {
            alert('No puedes seleccionar fechas anteriores, intenta de nuevo');
            $(this).val('');
        }
    });



    //Validación de botón de buscar cita de pantalla 1
    $(':input').on('input', function () {
        fechaBusqueda = $('#fecha-clientes').val();
        horaBusqueda = $('#hora-clientes').val();


        if (fechaBusqueda !== '' && horaBusqueda !== '') {
            $("#boton-de-busqueda-de-cita").prop("disabled", false);
        }
        else {
            $("#boton-de-busqueda-de-cita").prop("disabled", true);
        }
    });


   


});