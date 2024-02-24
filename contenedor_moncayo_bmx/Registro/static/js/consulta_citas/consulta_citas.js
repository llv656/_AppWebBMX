// DECLARACION DE VARIABLES 
$(document).ready(function () {

    var table = $('#tblConsulta').DataTable({
        scrollY: "90%", //establece la altura maxima de la tabla
        scrollX: false,
        "scrollCollapse": true, //Permite que el encabezado y pie de la pagina se colapsen
        lengthChange: false,
        paging: false,
        info: false,
        columnDefs: [
            // Ajustar el Ancho del Thead 
            { "width": "2%", "targets": 0 },  // Ajusta el ancho de la first columna al 6%
            { "width": "1%", "targets": 1 },  // Ajusta el ancho de la second columna al 5%
            { "width": "18%", "targets": 2 },  // Ajusta el ancho de la third columna al 15%
            { "width": "18%", "targets": 3 },  // Ajusta el ancho de la fourth columna al 20%
            { "width": "15%", "targets": 4 },  // Ajusta el ancho de la fifth columna al 15%
            { "width": "15%", "targets": 5 },  // Ajusta el ancho de la sixth columna al 15%
            { "width": "18%", "targets": 7, className: "ocultar-contenido" },
            {
                targets: [0, 6, 7], //indice de la columna del boton radio -
                searchable: false,
                orderable: false,
            },
            { responsivePriority: 4, targets: 5 },
            { responsivePriority: 3, targets: 3 },
            { responsivePriority: 2, targets: 2 },
            { responsivePriority: 1, targets: 0 }, /*Entre mas bajo sea el numero, mas prioridad va a tener */
            //?config adicional promotion
            {
                targets: 7,
                render: function (data, type, row, meta) {
                    const spacingClass = 'spacing';
                    return `
                        <div class="renderizado-promocion">
                            <span class="${spacingClass}">${data}</span>
                                <div class="contenedorFondoBack">
                                    <div class="contenedor-flex-fondo-1">
                                        <div class="contenedor-flex-fondo">
                                            <div class="contenedor-flex">
                                                <div class="costo-original">Costo Original</div>
                                                <div class="costo"><input type="text" value="$200" readonly id="costoOriginal"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="contenedor-flex-fondo-1">
                                        <div class="contenedor-flex-fondo">
                                            <div class="contenedor-flex">
                                                <div class="costo-original">Descuento</div>
                                                <div class="costo"><input type="text" value="$100" readonly id="costoDescuento"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="contenedor-flex-fondo-1">
                                        <div class="contenedor-flex-fondo">
                                            <div class="contenedor-flex">
                                                <div class="costo-original">Costo Final</div>
                                                <div class="costo"><input type="text" value="$300" readonly id="costoFinal"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="contenedor-flex-fondo-1">
                                        <div class="contenedor-flex-fondo">
                                            <div class="contenedor-flex">
                                                <div class="costo">El cliente con su compra acumulo: </div>
                                                <div class="costo">El cliente disponia previo a esta cita: </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="contenedor-flex-fondo-1">
                                        <div class="contenedor-flex-fondo">
                                            <div class="contenedor-flex">
                                                <div class="costo"><input type="text" value="1000 puntos" readonly id="puntosAcumulados"></div>
                                                <div class="costo"><input type="text" value="10000 puntos" readonly id="puntosAcumulados"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="contenedor-flex-fondo-1">
                                        <div class="contenedor-flex-fondo">
                                            <div class="contenedor-flex">
                                                <div class="costo-original-ticket">
                                                    <div id="icono_impresion" class="icon-receipt-container icono-ticket" data-bs-toggle="modal" data-bs-target="#miModalTicket">
                                                        <i class="fa-solid fa-receipt"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    `;
                }
            }
            
        ],
        select: {
            style: 'multi', // Permite seleccion Multiple
            selector: 'td:first-child input[type="radio"]' //selector de botones en la primera columna
        },
        responsive: true,
        lengthMenu: [5, 10, 25, 50, 100],
        "pageLength": 10,
        "language": {
            // "info": "Registros Mostrados: _START_ / _TOTAL_ ",
            // "infoEmpty": "No se encontraron registros",
            // "infoFiltered": "(filtrados de un total de _MAX_ registros)",
            "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
        }
    });

    $(document).ready(function () {
        var tabla = $('#tblConsulta').DataTable();

        // Actualiza el contador de registros mostrados al cargar la página
        $('#contadorRegistros').text(tabla.rows().count());

        // Actualiza el contador de registros cuando se realice una búsqueda o filtrado
        tabla.on('search', function () {
            $('#contadorRegistros').text(tabla.rows({ filter: 'applied' }).count());
        });
    });

    // manejo de clic en los botones de tipo radio en el tbody
    $('#tblConsulta tbody').on('click', '.seleccionFila', function () {
        var fila = $(this).closest('tr');
        var isSelected = fila.hasClass('selected'); //Comprobrar  si la fila esta seleccionado

        //Alternar la seleccion de la fila y el estado del boton radio
        if (isSelected) {
            fila.removeClass('selected');
            $(this).prop('checked', false);
        } else {
            fila.addClass('selected');
            $(this).prop('checked', true);
        }
    });

    // Manejo de clic en el boton o icono para mostrar detalles !eliminar
    $('#tblConsulta tbody').on('click', '.show-details', function () {
        var data = table.row($(this).closest('tr')).data(); // Obtén los datos de la fila
        var additionalRow = $(this).closest('tr').next('.additional-info');

        if (data) {
            if (additionalRow.length === 0) {
                // Si la fila adicional no existe, créala y muestra la información 
                additionalRow = $('<tr class="additional-info">');
                additionalRow.append('<td colspan="8">'); // Ajusta el colspan a 8 para incluir todas las columnas

                // Agrega más detalles si es necesario
                additionalRow.find('td').html(
                    '<p>Descripción: ' + data[7] + '</p>'
                    // Agrega más detalles aquí si es necesario
                );

                $(this).closest('tr').after(additionalRow);
            } else {
                // Si la fila adicional existe, quítala para ocultar la información
                additionalRow.remove();
            }
        }
    });

    //! Manejo de la ventana modal
    var modal = document.getElementById('modalSeleccion');
    var radio = document.getElementById('mostrarModal');
    var isModalVisible = false;
    var hideModalTimeout;

    radio.addEventListener('mouseover', function () {
        modal.style.display = 'block';
        isModalVisible = true;
        clearTimeout(hideModalTimeout);
    });

    modal.addEventListener('mouseover', function () {
        isModalVisible = true;
        clearTimeout(hideModalTimeout);
    });

    radio.addEventListener('mouseout', function () {
        if (isModalVisible) {
            // Ocultar el modal después de un breve retraso (500 ms)
            hideModalTimeout = setTimeout(function () {
                modal.style.display = 'none';
                isModalVisible = false;
            }, 1300);
        }
    });

    modal.addEventListener('mouseout', function () {
        if (isModalVisible) {
            // Ocultar el modal después de un breve retraso (500 ms)
            hideModalTimeout = setTimeout(function () {
                modal.style.display = 'none';
                isModalVisible = false;
            }, 1300);
        }
    });

    // Deseleccionar el radio del thead
    document.querySelector('.thead-radio').addEventListener('click', function () {
        this.checked = false;
    });

    //Modal al seleccionar un elemento de tipo radio (selectAll)
    var seleccionRadioBtn = false;
    // Agrega la lógica del radio "selectAllRadio"
    $('#selectAllRadio').click(function () {
        var radioButtons = document.querySelectorAll('tbody input[type="radio"]');
        $(this).prop('checked', !seleccionRadioBtn);
        // Variable para rastrear el estado actual de la opción
        seleccionRadioBtn = $(this).prop('checked');
        if (seleccionRadioBtn) {
            this.dataset.state = 'checked';
        } else {
            this.dataset.state = 'unchecked';

        }
        var optionState = this.dataset.state || 'unchecked';
        console.log(optionState);

        radioButtons.forEach(function (radio) {
            if (optionState === 'checked') {
                radio.click();
                // Recupera el elemento padre del DOM del radio button desmarcado
                // console.log(radio);
                var padreRadio = radio.parentNode;
                padreRadio.click();
            } else {
                if (radio.checked) {
                    radio.click();
                    // Recupera el elemento padre del DOM del radio button desmarcado
                    // console.log(radio);
                    var padreRadio = radio.parentNode;
                    padreRadio.click();
                    // console.log(padreRadio);
                }
            }

        });


        modal.style.display = 'none';
        isModalVisible = false;
    });

    // Elimina la lógica del radio "deselectAllRadio"
    // Selecciona el radio "deselectAllRadio"
    var deseleccionRadioBtn = false;
    $('#deselectAllRadio').click(function () {
        // console.log(!$(this).prop('checked'));
        $(this).prop('checked', !deseleccionRadioBtn);
        var radioButtons = document.querySelectorAll('tbody input[type="radio"]');
        // Desmarca todos los botones de radio en "selectAllRadio"
        radioButtons.forEach(function (radio) {
            if (radio.checked) {
                radio.click();
                // Recupera el elemento padre del DOM del radio button desmarcado
                // console.log(radio);
                var padreRadio = radio.parentNode;
                padreRadio.click();
                // console.log(padreRadio);
            }
        });
        deseleccionRadioBtn = $(this).prop('checked');

        modal.style.display = 'none';
        isModalVisible = false;
    });


    // Al cargar la página, deselecciona todos los botones de radio en el cuerpo de la tabla
    var radioButtons = document.querySelectorAll('tbody input[type="radio"]');
    radioButtons.forEach(function (radio) {
        radio.checked = false;
    });
    //         //! Fin Ventana Modal

    // Manejo del clic en el encabezado "Tipo Select"
    $('.show-select').click(function () {
        // Alterna la clase "show-more" en los elementos ocultos
        $('.hidden').toggleClass('show-more');
    });
});

// Calendar ContenedorConfig
$(document).ready(function () {
    const calendarioContainer = document.getElementById("calendario");
    const mesAnioElemento = document.getElementById("mesAnio");
    const diasSemanaElemento = document.getElementById("diasSemana");
    const prevMesBtn = document.getElementById("prevMes");
    const nextMesBtn = document.getElementById("nextMes");

    let fechaActual = new Date();
    let mesActual = fechaActual.getMonth();
    let anioActual = fechaActual.getFullYear();

    function actualizarCalendario() {
        mesAnioElemento.textContent = `${obtenerNombreMes(mesActual)} ${anioActual}`;
        calendarioContainer.innerHTML = ""; // Limpiar el contenido existente
        diasSemanaElemento.innerHTML = ""; // Limpiar los días de la semana

        const nombresDias = ["D", "L", "M", "M", "J", "V", "S"];

        // Crear elementos para los nombres de los días de la semana
        for (const nombreDia of nombresDias) {
            const diaSemanaElemento = document.createElement("div");
            diaSemanaElemento.classList.add("dia", "nombreDia");
            diaSemanaElemento.textContent = nombreDia;
            diasSemanaElemento.appendChild(diaSemanaElemento);
        }

        const primerDiaDelMes = new Date(anioActual, mesActual, 1).getDay();
        const diasEnMes = new Date(anioActual, mesActual + 1, 0).getDate();

        const diasDelMesAnterior = new Date(anioActual, mesActual, 0).getDate();

        // Agregar los días del mes anterior
        for (let i = primerDiaDelMes - 1; i >= 0; i--) {
            const diaElemento = document.createElement("div");
            diaElemento.classList.add("dia", "diaOtroMesAnterior");
            diaElemento.textContent = diasDelMesAnterior - i;
            calendarioContainer.appendChild(diaElemento);
        }

        // Agregar los días del mes actual
        for (let dia = 1; dia <= diasEnMes; dia++) {
            const diaElemento = document.createElement("div");
            diaElemento.classList.add("dia");
            // diaElemento.textContent = dia; documento original

            if (dia === fechaActual.getDate()) {
                diaElemento.classList.add("diaActual");
            }
            // if (dia === fechaActual.getDate() && mesActual === fechaActual.getMonth() && anioActual === fechaActual.getFullYear()) {
            //     diaElemento.classList.add("diaActual"); documento original
            // }

            diaElemento.textContent = dia;
            calendarioContainer.appendChild(diaElemento);
        }

        // Calcular cuántos días del mes siguiente se necesitan para completar la última fila
        const diasDelMesSiguiente = 7 - (calendarioContainer.children.length % 7);

        // Agregar los días del mes siguiente
        for (let dia = 1; dia <= diasDelMesSiguiente; dia++) {
            const diaElemento = document.createElement("div");
            diaElemento.classList.add("dia", "diaOtroMesSiguiente");
            diaElemento.textContent = dia;
            calendarioContainer.appendChild(diaElemento);
        }
    }

    function obtenerNombreMes(mes) {
        const nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        return nombresMeses[mes];
    }

    // Event listeners para las flechas de navegación
    prevMesBtn.addEventListener("click", function () {
        mesActual--;
        if (mesActual < 0) {
            mesActual = 11;
            anioActual--;
        }
        actualizarCalendario();
    });

    nextMesBtn.addEventListener("click", function () {
        mesActual++;
        if (mesActual > 11) {
            mesActual = 0;
            anioActual++;
        }
        fechaActual.setMonth(mesActual); //Actualizar la fecha actual al nuevo mes
        actualizarCalendario();
    });

    // Mostrar el calendario inicial
    actualizarCalendario();
});

//MostrarClientesELiminados contenedorConfig
$(document).ready(function () {
    // Añade el evento de clic "elementClientesMostrarCE"
    $('#elementClientesMostrarCE').on('click', function () {
        // Alterna la clase 'clicked' en todo el div
        $(this).toggleClass('clicked');

        if ($(this).hasClass('clicked')) {
            $(this).css('background-color', 'rgba(0, 255, 0, .1)');
        } else {
            // Puedes cambiar el color de fondo a su valor original o quitarlo
            $(this).css('background-color', '');
        }
    });
});

//Filtrar datos DataTable Busqueda

//? Validar Filtros Busqueda Avanzada & Basica
// BUSQUEDA NORMAL 
document.addEventListener('DOMContentLoaded', function () {
    // Lógica para limpiar los campos
    $('#busqueda_nombre_cliente').val('');
    $('#nombreContacto').val('');
    $('#busqueda_fechaNacimientodd').val('');
    $('#busqueda_fechaNacimientomm').val('');
    $('#busqueda_fechaNacimientoaa').val('');

    $(document).ready(function () {
        // Inicializar DataTable con tu tabla
        let dataTable = $('#tblConsulta').DataTable();

        // Evento de cambio en el input de nombre y validación
        $('#busqueda_nombre_cliente').on('input', function () {
            // Obtener el valor del input
            let inputValue = this.value;

            // Limpiar el valor permitiendo solo letras y espacios, limitando la longitud a 30 caracteres
            inputValue = inputValue.replace(/[^a-zA-ZñÑ\s]/g, '').substring(0, 30);

            // Actualizar el valor del input
            this.value = inputValue;

            // Aplicar filtro en la columna correspondiente y redibujar la tabla
            //     dataTable.columns(2).search(inputValue).draw();
        });

        // Evento de cambio en el select de contacto y validación
        $('#nombreContacto').on('input', function () {
            // Obtener el valor del input
            let inputValue = this.value;

            // Limitar la longitud a 10 caracteres
            if (inputValue.length > 10) {
                inputValue = inputValue.substring(0, 10);
            }
            // Actualizar el valor del input
            this.value = inputValue;
        });

        // Evento de cambio en el input de día y validación
        $('#busqueda_fechaNacimientodd').on('input', function () {
            // Obtener el valor del input
            let inputValue = this.value;

            // Validar si el valor es un número válido (1-31) o asterisco
            if (!isValidDay(inputValue)) {
                // Si no es válido, eliminar el último carácter
                inputValue = inputValue.slice(0, -1);
            }

            // Actualizar el valor del input
            this.value = inputValue;
        });
        // Función para validar el día
        function isValidDay(day) {
            // Puedes personalizar la lógica de validación aquí
            return day === '*' || (parseInt(day) >= 1 && parseInt(day) <= 31); //Utilizamos parseInt(day) para convertir el valor a un número antes de comparar.
        }
        // Evento de cambio en el input del mes y validación
        $('#busqueda_fechaNacimientomm').on('input', function () {
            //obtener el valor del input
            let inputValue = this.value;
            //validar si el valor es un número válido de (1-12) o asterisco
            if (!isValidMonth(inputValue)) {
                //Si no es válido, eliminar el último carácter
                inputValue = inputValue.slice(0, -1);
            }
            //Actualizar el valor del input
            this.value = inputValue;
        });
        // Función para validar el mes
        function isValidMonth(month) {
            // Puedes personalizar la lógica de validación aquí
            return month === '*' || (parseInt(month) >= 1 && parseInt(month) <= 12);
        }
        // Evento de cambio en el input de año y validación
        $('#busqueda_fechaNacimientoaa').on('input', function () {
            // Obtener el valor del input
            let inputValue = this.value;

            // Validar si el valor es un número válido o asterisco
            if (!isValidYear(inputValue)) {
                // Si no es válido, eliminar el último carácter
                inputValue = inputValue.slice(0, -1);
            }

            //Limitar la longitud a 4 digitos
            inputValue = inputValue.slice(0, 4);

            // Actualizar el valor del input
            this.value = inputValue;
        });
        // Función para validar el año
        function isValidYear(year) {
            // Puedes personalizar la lógica de validación aquí
            return year === '*' || (!isNaN(parseInt(year)) && year.length <= 4);
        }

        // Ocultar el formulario al cargar la página
        $('.contenedorFiltrarBS').hide();

        // Establecer la clase inicial del icono como 'fa-sort-down'
        $('#ocultarFIltroForm').addClass('fa-sort-down');

        // Toggle de visibilidad del formulario al hacer clic en el icono
        $('#ocultarFiltroForm').click(function () {
            $('.contenedorFiltrarBS').toggle();
            // Alternar la clase del icono para cambiar la dirección de la flecha
            $(this).toggleClass('fa-sort-up fa-sort-down');
        });
    });
});

$(document).ready(function () {

    let ascendente = true;
    // Ocultar el formulario al cargar la página
    $('.contenedorFiltrarBSAV').hide();
    $('.contenedorFiltrarBS').hide();

    $('#legend_basic_filter_id').click(function () {
        // Alternar visibilidad del contenido del formulario
        $('.contenedorFiltrarBS').toggle();

        // Alternar la clase del icono para cambiar la dirección de la flecha
        $('#sort_basic_filter_id').toggleClass('fa-sort-down fa-sort-up');
    });
    $('#legend_advanced_filter_id').click(function () {
        // Alternar visibilidad del contenido del formulario
        $('.contenedorFiltrarBSAV').toggle();

        // Alternar la clase del icono para cambiar la dirección de la flecha
        $('#sort_advanced_filter_id').toggleClass('fa-sort-down fa-sort-up');
    });

    $('#label_name_form_filter_basic_id').on('click', function () {
        // Alterna la clase en el span dentro del div
        $(this).find('span i').toggleClass('fa-arrow-up-a-z fa-arrow-down-z-a');
        // Cambia el estado actual del orden
        ascendente = !ascendente;
    });
});
//! fin filtros busqueda

// Filtra Busqueda NOrmal

// llenar el selector de pagina 


// Interacción con la API 

// $(document).ready(function () {
//     let var_global_filtroTipoCliente = null;

//     //Declarar Objeto
//     let objetoQueryParams = {
//         page_size: 10,
//         page_number: 1,
//         order: 'asc',
//         nombre_completo: '',
//         fecha_nacimiento: '',
//         direccion: '',
//         correo: '',
//         numero_celular: '',
//         id_tipo_cliente: null,
//         id_servicio: null,
//         id_barber: null,
//         id_producto: null,
//         visitas_max: null,
//         visitas_min: null,
//         fecha_registro_min: '',
//         fecha_registro_max: ''
//     };

//     build_client_table(objetoQueryParams);

//     // Maneja el cambio de página cuando se selecciona un valor en el select
//     $('#pageSelect').on('change', function () {
//         var selectedPage = parseInt($(this).val());
//         objetoQueryParams.page_number = selectedPage;
//         build_client_table(objetoQueryParams);

//     });

//     // Maneja el evento de clic en el botón "Anterior"
//     $('.prev').on('click', function () {
//         var currentPage = parseInt($('#pageSelect').val()); //Se obtiene el valor actual de la página desde el elemento HTML
//         objetoQueryParams.page_number = Math.max(1, currentPage - 1); //Actualizar el new valor calculate/page menor que 1
//         build_client_table(objetoQueryParams);
//     });

//     // Maneja el evento de clic en el botón "Siguiente"
//     $('.next').on('click', function () {
//         var currentPage = parseInt($('#pageSelect').val());
//         // build_client_table(Math.min(totalPages, currentPage + 1), '');
//         objetoQueryParams.page_number = Math.min(totalPages, currentPage + 1); //Actualizar el new valor calculate/page menor que 1
//         build_client_table(objetoQueryParams);
//     });

//     //Busqueda Nombre_Cliente
//     $("#busqueda_nombre_cliente").on("input keyup", function () {
//         let nombreCliente = $(this).val();
//         // Actualiza el nombre completo en el objeto
//         objetoQueryParams.nombre_completo = nombreCliente;
//         // build_client_table('', $(this).val());
//         build_client_table(objetoQueryParams);
//     });

//     //Busqueda contacto
//     $("#busqueda_contacto").on("input keyup", function () {

//         build_client_table('', $(this).val());
//     });

//     //Busqueda FechaNacimiento
//     $('#busqueda_fechaNacimientodd, #busqueda_fechaNacimientomm, #busqueda_fechaNacimientoaa').on('input keyup', function () {
//         let dia = $('#busqueda_fechaNacimientodd').val() || '*';
//         let mes = $('#busqueda_fechaNacimientomm').val() || '*';
//         let anio = $('#busqueda_fechaNacimientoaa').val() || '*';

//         // Construir la fecha de nacimiento en el formato dd/mm/aaaa
//         var fechaNacimiento = dia + '-' + mes + '-' + anio;
//         // Actualizar el valor del objetoQueryParams con la fecha de nacimiento
//         objetoQueryParams.fecha_nacimiento = fechaNacimiento;
//         console.log('Fecha de Nacimiento actualizada:', objetoQueryParams.fecha_nacimiento);
//         // Llamar a la función para reconstruir la tabla con los nuevos parámetros
//         build_client_table(objetoQueryParams);
//     });

//     //Busqueda tipoCliente
//     $("#select_tipoCliente").on("change", function () {
//         var_global_filtroTipoCliente = $("#select_tipoCliente option:selected").text();

//         // Obtener el valor seleccionado del select
//         let tipoClienteSeleccionadoOpt = $(this).val();

//         // Actualizar el objetoQueryParams con el tipo de cliente seleccionado
//         objetoQueryParams.id_tipo_cliente = tipoClienteSeleccionadoOpt;

//         // Llamar a la función para reconstruir la tabla con los nuevos parámetros
//         build_client_table(objetoQueryParams);
//     });

//     //Busqueda direccionCliente
//     $("#busqueda_direccion_cliente").on("input keyup", function () {

//         build_client_table('', $(this).val());
//     });

//     //Busqueda servicioFavorito
//     $("#busqueda_servicio_favorito").on("input keyup", function () {

//         build_client_table('', $(this).val());
//     });

//     //Busqueda servicioFavorito
//     $("#busqueda_barbero_favorito").on("input keyup", function () {

//         build_client_table('', $(this).val());
//     });

//     //Busqueda servicioFavorito
//     $("#busqueda_producto_favorito").on("input keyup", function () {

//         build_client_table('', $(this).val());
//     });



//     // Función para generar las opciones de página
//     function generatePageOptions(totalPages) {
//         // Obten una referencia al select
//         var pageSelect = $('#pageSelect');

//         // Limpia las opciones existentes
//         pageSelect.empty();

//         // Genera dinámicamente las opciones de página
//         for (var i = 1; i <= totalPages; i++) {
//             var option = $('<option>', {
//                 value: i,
//                 text: i
//             });
//             pageSelect.append(option);
//         }
//     }

//     function build_client_table(params) {

//         // console.log('Datos del objeto impresos:', params);
//         // Ejemplo: Reflejar los datos del objeto en la tabla
//         $('#nombreClienteTabla').text(params.nombre_completo);


//         // Encabezados de autenticación
//         var headers = {
//             "Content-Type": "application/json",
//             "X_WEB_APP_ID": "8e501348-2907-4a58-9faa-f1bf1e77f3a4",
//             "X_WEB_APP_KEY": "k/+H32/hx5jUTZ+jfiUgYHvioUNtVOepxpQ9ReSsX/A=$$$eca1eb011f61e4e29097f09a90907979"
//         };

//         // Array de URLs para las peticiones
//         var requests = [
//             {
//                 url: 'http://192.168.1.80:8082/BMX/gestionclientes/clientes?'
//                     + 'page_size=' + '10'
//                     + '&page_number=' + params.page_number
//                     + '&nombre_completo=' + params.nombre_completo
//                     + '&fecha_nacimiento=' + params.fecha_nacimiento
//                     + '&direccion=' + params.direccion //Aqui existe un error
//                     + '&correo=' + params.correo
//                     + '&numero_celular=' + params.numero_celular
//                     + '&id_tipo_cliente=' + params.id_tipo_cliente
//                     + '&id_servicio=' + params.id_servicio
//                     + '&id_barber=' + params.id_barber
//                     + '&id_producto=' + params.id_producto
//                     + '&visitas_max=' + params.visitas_max
//                     + '&visitas_min=' + params.visitas_min
//                     + '&fecha_registro_min=' + params.fecha_registro_min
//                     + '&fecha_registro_max=' + params.fecha_registro_max
//                 , id: 'getClients'
//             },
//             { url: 'http://192.168.1.80:8082/BMX/gestionclientes/catalogo/tipos_cliente/', id: 'getClientTypes' }
//         ];

//         console.log(requests[0]);

//         // Array de promesas
//         var promises = [];

//         // Objeto para almacenar las respuestas por identificador
//         var responses = {};
//         // Crear las solicitudes AJAX
//         $.each(requests, function (index, request) {
//             var promise = $.ajax({
//                 url: request.url,
//                 type: 'GET',
//                 headers: headers
//             });

//             promises.push(promise);
//         });

//         // Ejecutar todas las solicitudes concurrentemente
//         $.when.apply($, promises).done(function () {
//             // Argumentos de la función done() corresponden a las respuestas de cada solicitud
//             $.each(arguments, function (index, response) {
//                 var request = requests[index];
//                 responses[request.id] = response[0];
//                 //console.log('Respuesta de ' + request.id + ':', response[0]);
//             });

//             // Utilizar las respuestas almacenadas
//             // Por ejemplo, acceder a una respuesta específica por identificador
//             var almacen_clientes = responses['getClients'];
//             var almacen_tipos_cliente = responses['getClientTypes'];

//             // Llamar a la función para construir y mostrar el campo tipo_cliente en el formulario
//             var tipoClienteSelectHtml = construirSelectTipoCliente(var_global_filtroTipoCliente === null ? '' : var_global_filtroTipoCliente, almacen_tipos_cliente.result);
//             $('#select_tipoCliente').html(tipoClienteSelectHtml);

//             // console.log('Respuesta de getClients:', almacen_clientes.result);
//             // console.log('Respuesta de getClientTypes:', almacen_tipos_cliente.result);

//             // Después de actualizar el select, construir la tabla
//             agregar_contenito_tabla_clientes(almacen_clientes, almacen_tipos_cliente);

//         }).fail(function (xhr, status, error) {
//             // Manejar errores
//             console.log('Error:', error);
//         });

//     }


//     // function agregar_contenito_tabla_clientes(response_clientes, response_tipos_cliente) {
//     //     $.each(response_clientes.result.items, function (index, object) {

//     //         var option_select;

//     //         $("#cuerpo_tabla").append(
//     //             "<tr>" +
//     //             "<th id=\"seleccionador\" scope=\"col\"><input class=\"form-check-input\" type=\"radio\" name=\"radioNoLabel\" id=\"radioNoLabel1\" value=\"\" aria-label=\"...\"></th>" +
//     //             "<td>" + index + "</td>" +
//     //             "<td>" + object.nombre_completo + "</td>" +
//     //             "<td><select id=\"contacto" + index + "\"></select></td>" +
//     //             "<td>" + object.fecha_nacimiento + "</td>" +
//     //             "<td><select id=\"tipo_cliente" + index + "\"></select></td>" +
//     //             "</tr>"
//     //         );

//     //         //Se agregan los options al select y se selecciona el tipo cliente correspondiente
//     //         $.each(response_tipos_cliente.result, function (index_tipo_cliente, object_tipo_cliente) {
//     //             $("#tipo_cliente" + index).append(
//     //                 "<option value=" + object_tipo_cliente.tipo_cliente + ">" + object_tipo_cliente.tipo_cliente + "</option>"
//     //             );
//     //             if (object.tipo_cliente === object_tipo_cliente.tipo_cliente) {
//     //                 option_select = object.tipo_cliente;
//     //             }

//     //         });
//     //         $("#tipo_cliente" + index).val(option_select);

//     //         if (object.contacto.correo != '') {
//     //             $("#contacto" + index).append(
//     //                 "<option value=\"correo\">" + object.contacto.correo + "</option>"
//     //             );
//     //         }
//     //         if (object.contacto.facebook != '') {
//     //             $("#contacto" + index).append(
//     //                 "<option value=\"facebook\">" + object.contacto.facebook + "</option>"
//     //             );
//     //         }
//     //         if (object.contacto.instagram != '') {
//     //             $("#contacto" + index).append(
//     //                 "<option value=\"instagram\">" + object.contacto.instagram + "</option>"
//     //             );
//     //         }
//     //         if (object.contacto.numero_celular != '') {
//     //             $("#contacto" + index).append(
//     //                 "<option value=\"numero_celular\">" + object.contacto.numero_celular + "</option>"
//     //             );
//     //         }

//     //     });
//     // }
//     // Esta función agrega las filas al DataTable con los datos de la API

//     function agregar_contenito_tabla_clientes(response_clientes, response_tipos_cliente) {
//         // Obtener la referencia al DataTable
//         var tablaClientes = $('#tblConsulta').DataTable();

//         // Limpiar el DataTable antes de agregar nuevas filas
//         tablaClientes.clear().draw();

//         // Aplicar el filtro por id_tipo_cliente si está presente


//         $.each(response_clientes.result.items, function (index, object) {
//             var option_select;

//             // Agregar una nueva fila al DataTable
//             tablaClientes.row.add([
//                 "<input type=\"radio\" class=\"seleccionFila\" name=\"opcionSeleccion" + (index + 1) + "\">",
//                 index + 1, // Sumar 1 para que el índice empiece desde 1
//                 object.nombre_completo,
//                 construirSelectContacto(object.contacto), // Utilizar una función para construir el select
//                 object.fecha_nacimiento,
//                 construirSelectTipoCliente(object.tipo_cliente, response_tipos_cliente.result),
//                 "Excelente Servicio", // Descripción (placeholder)
//                 "Vicente Palafox" // Barbero Favorito (placeholder)
//             ]).draw(false); // Volver a dibujar la tabla sin recargar los datos
//         });

//         totalPages = response_clientes.result.total_pages;
//         actualPage = response_clientes.result.actual_page;

//         // Genera las opciones de página basadas en el total de páginas
//         generatePageOptions(totalPages);

//         // Actualiza el texto en la interfaz para mostrar el total de páginas
//         $('#span_total_pages_component_pager').text(totalPages);

//         // Actualiza el contador de registros mostrados
//         $('#contadorRegistros').text(response_clientes.result.items.length + "/" + response_clientes.result.total_items);

//         $('#pageSelect').val(actualPage);
//     }

//     // Función para construir el select de contacto
//     function construirSelectContacto(contacto) {
//         var selectHtml = "<select>";

//         if (contacto.correo !== '') {
//             selectHtml += "<option value=\"correo\">" + contacto.correo + "</option>";
//         }
//         if (contacto.instagram !== '') {
//             selectHtml += "<option value=\"instagram\">" + contacto.instagram + "</option>";
//         }
//         if (contacto.facebook !== '') {
//             selectHtml += "<option value=\"facebook\">" + contacto.facebook + "</option>";
//         }

//         selectHtml += "</select>";

//         return selectHtml;
//     }

//     // Función para construir el select de tipo de cliente
//     function construirSelectTipoCliente(tipoCliente, tiposCliente) {
//         var selectHtml = "<select>";

//         // Agregar la opción predeterminada
//         selectHtml += '<option value="" disabled selected hidden>Selecciona una Opción</option>';

//         // Agregar una opción adicional si tipoCliente tiene un valor
//         if (tipoCliente !== null && tipoCliente !== '') {
//             selectHtml += '<option value="" data-deseleccionar>Todas las opciones</option>';
//         }

//         $.each(tiposCliente, function (index, objectTipoCliente) {
//             var isSelected = (tipoCliente === objectTipoCliente.tipo_cliente) ? 'selected' : '';
//             selectHtml += "<option value=" + objectTipoCliente.id_tipo_cliente + " " + isSelected + ">" + objectTipoCliente.tipo_cliente + "</option>";
//         });

//         selectHtml += "</select>";

//         return selectHtml;
//     }

//     // Agregar evento click al icono de eliminar
//     $('#span_icon_filter_id').on('click', function () {
//         // Seleccionar todos los input dentro del formulario y borrar su contenido
//         $('.formulario input').val('');


//         // Agregar transición y cambiar color a rojo durante 1 segundo
//         $('.filtrarCli i').css('transition', 'color 1s');
//         $('.filtrarCli i').css('color', 'red');

//         // Establecer un temporizador para revertir el color después de 1 segundo
//         setTimeout(function () {
//             $('.filtrarCli i').css('color', '');
//             $('.filtrarCli i').css('transition', '');
//         }, 1000);

//         objetoQueryParams.page_size = 10;
//         objetoQueryParams.page_number = 1;
//         objetoQueryParams.order = 'asc';
//         objetoQueryParams.nombre_completo = '';
//         objetoQueryParams.fecha_nacimiento = '';
//         objetoQueryParams.direccion = '';
//         objetoQueryParams.correo = '';
//         objetoQueryParams.numero_celular = '';
//         objetoQueryParams.id_tipo_cliente = null;
//         objetoQueryParams.id_servicio = null;
//         objetoQueryParams.id_barber = null;
//         objetoQueryParams.id_producto = null;
//         objetoQueryParams.visitas_max = null;
//         objetoQueryParams.visitas_min = null;
//         objetoQueryParams.fecha_registro_min = '';
//         objetoQueryParams.fecha_registro_max = '';

//         // call a la función para restore los datos origin en la tabla
//         build_client_table(objetoQueryParams);

//     });


// });