$(document).ready(function () {
    var contadorBotones1 = 0;
    var botonesACrear1 = 10;
    var numeroContenedores = 2;



    $('#boton-de-busqueda-de-cita').on("click", function () {
        // Recuperar información de numero de personas antes de que se borre el contenido del contenedor
        var recuperarNumero = $('#numero-personas').text();
        var contadorPersonas = recuperarNumero;
        // Recuperar fecha antes de que se borre el contenido
        var fechaPrimeraPagina = $('#fecha-clientes').val();
        // Vaciar contenido de la página
        $('#contenedor').empty();

        /* Agregando una función anónima nos permite ejecutar una función después de que cargue una página */
        $('#contenedor').load("/registro-cita-pantalla-2/", function () {
            $('#numero-personas-pantalla-2').text(recuperarNumero);
            //Recuperar numero de personas en la nueva variable
            $('#numero-personas-pantalla-2').text(recuperarNumero);
            //Recuperar fecha en la nueva variable
            $('#fecha-clientes-pantalla-2').val(fechaPrimeraPagina);

            for (j = 0; j < numeroContenedores; j++) {
                var nombreBarbero = "Ruben";
                var imagenPerfil = "../../../static/img/servicios.jpg";

                // Crear elementos HTML con jQuery
                var divDatosBarberos = $('<div>').attr('id', 'datos-de-barberos-' + (j + 1)).addClass('claseBarberos');

                var divInformacionBarbero = $('<div>').attr('id', 'informacion-barbero-nombre-foto');

                var divNombreBarbero = $('<div>').attr('id', 'elemento-nombre-barbero').append($('<h1>').text(nombreBarbero));

                var divFotoPerfil = $('<div>').attr('id', 'elemento-foto-perfil')
                    .append($('<div>').addClass('C_imagenPerfil-circular')
                        .append($('<img>').attr('id', 'imagen-perfil-barbero' + (j + 1)).attr('src', imagenPerfil).attr('alt', 'Fotografia Barbero')));

                var divIconosMaxMin = $('<div>').attr('id', 'elemento-icono-maximizar-minimizar-' + (j + 1)).addClass('claseElemento-maximizar-minimizar')
                    .append($('<img>').attr('id', 'icono-maximizar-pantalla-2-' + (j + 1)).addClass('iconos-max-min-pantalla-2 maximizar ').attr('src', '../../../static/icons/down-arrow.svg').attr('alt', 'maximizar horarios'))
                    .append($('<img>').attr('id', 'icono-minimizar-pantalla-2-' + (j + 1)).addClass('iconos-max-min-pantalla-2 minimizar').attr('src', '../../../static/icons/left-arrow.svg').attr('alt', 'minimizar horario'));

                var divHorariosBarberos = $('<div>').attr('id', 'horarios-barberos-' + (j + 1)).addClass('claseHorariosBarberos');

                // Añadir elementos al DOM
                divInformacionBarbero.append(divNombreBarbero, divFotoPerfil, divIconosMaxMin);
                divDatosBarberos.append(divInformacionBarbero, divHorariosBarberos);

                // Encontrar y agregar a "elemento1-informacion-barbero"
                $('#elemento1-informacion-barbero').append(divDatosBarberos);



                // Crear botones de hora
                for (var i = 0; i < botonesACrear1; i++) {
                    var botonHorario1 = $('<button class="btn btn-success botonesHorarios C_estiloBotonesHorarios" id="btnHraBarbr1-' + contadorBotones1 + '">' +
                        '12:12 A.M' +
                        '</button>');

                    // Se agregan los botones creados en el contenedor seleccionado
                    divHorariosBarberos.append(botonHorario1);
                    contadorBotones1++;

                    // COLORES DE BOTÓN SELECCIONADO
                    // Asignar el evento de cambio de color al botón creado
                    botonHorario1.on("click", function () {
                        $(this).toggleClass('selected'); // Cambiar el color del botón al ser clickeado
                        $(this).blur(); // Quitar el foco al botón después de seleccionar
                    });
                }
            }

            // Iconos de Maximizar y Minimizar
            // Ocultar información de horarios
            $('.iconos-max-min-pantalla-2').off("click").on("click", function () {
                console.log("click minimizar");
                var iconosMaximixarMinimizar = $(this).siblings(':hidden');
                iconosMaximixarMinimizar.toggle();
                $(this).toggle();
                var encabezadoComponenteBarbero = $(this).parent().parent();
                console.log(encabezadoComponenteBarbero);

                var componenteHorariosBarberos = $(encabezadoComponenteBarbero).siblings('.claseHorariosBarberos');
                console.log(componenteHorariosBarberos);
                componenteHorariosBarberos.toggle();

            });


            function actualizarContador() {
                $('#numero-personas-pantalla-2').text(contadorPersonas);
            }

            $('.resta').on('click', function () {
                console.log("click resta")
                console.log(contadorPersonas);
                if (contadorPersonas > 1) {
                    contadorPersonas--;
                    actualizarContador();
                }
            });

            $('.suma').on('click', function () {
                console.log("click suma");
                if (contadorPersonas < 5) {
                    contadorPersonas++;
                    actualizarContador();
                } else {
                    alert("El número máximo de clientes son 5");
                }
            });

            //Se obtiene fecha actual
            var fechaActual = new Date().toISOString().split('T')[0];

            //Establecer la fecha minima permitida (actual)
            $('#fecha-clientes-pantalla-2').attr('min', fechaActual);

            //Calcular la fecha máxima permitida (actual + 2 meses)
            var maximo2Meses = new Date();
            maximo2Meses.setMonth(maximo2Meses.getMonth() + 2);
            var fechaMaxima = maximo2Meses.toISOString().split('T')[0];

            //Establecer la fecha máxima permitida
            $('#fecha-clientes-pantalla-2').attr('max', fechaMaxima);

            //Validar la fecha seleccionada al cambiar
            $('#fecha-clientes-pantalla-2').on('change', function () {
                var fechaSeleccionada = $(this).val();

                //Validar si la fecha seleccionada es anterior a la fecha actual
                if (fechaSeleccionada < fechaActual) {
                    alert('No puedes seleccionar fechas anteriores, intenta de nuevo');
                    $(this).val('');
                }
            });





        });
    });









});