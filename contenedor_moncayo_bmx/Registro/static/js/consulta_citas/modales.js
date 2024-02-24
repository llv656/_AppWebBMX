//?Ventana Modal Validación
document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {

        var motivoEliminarCl = $('#motivoEliminarCl');
        var btnGuardarDatos = $('#btnGuardarDatos');
        var btnCancelarDatos = $('#btnCancelarDatos');
        var btnTrash = $('#action_userdelete_id'); //Referencia al icono de trash
        var dataTable = $('#tblConsulta').DataTable();

        // Deshabilita el botón al inicio
        btnGuardarDatos.prop('disabled', true);
        btnTrash.prop('disabled', true); // Deshabilita el botón con el icono trash

        // Agregar un evento de cambio de seleccion en el dataTable
        dataTable.on('select deselect', function () {
            // Obtiene la cantidad de filas seleccionadas
            var filasSeleccionadas = dataTable.rows('.selected').count();

            // Habilita/deshabilita el botón de trash según si hay filas seleccionadas o no
            btnTrash.prop('disabled', filasSeleccionadas === 0);

            // Actualiza la información del usuario a eliminar
            actualizarInfoUsuario();
        });

        // Agregar un evento clic a las filas del tbody
        $('#tblConsulta tbody').on('click', 'tr', function () {
            let fila = $(this);

            //Cambia la seleccion de la fila
            // fila.toggleClass('selected');

            // Actualiza la informacion del usuario a eliminar
            actualizarInfoUsuario();
        });

        // Agrega un evento de entrada al área de descripción
        motivoEliminarCl.on('input', function () {
            // Habilita/deshabilita el botón según la entrada y otras condiciones
            btnGuardarDatos.prop('disabled', motivoEliminarCl.val().trim() === '');
        });

        // Agrega eventos de cambio al área de descripción para dispositivos móviles y tabletas
        motivoEliminarCl.on('change', function () {
            // Habilita/deshabilita el botón según la entrada y otras condiciones
            btnGuardarDatos.prop('disabled', motivoEliminarCl.val().trim() === '');
        });

        // Agrega un evento de clic al botón "Aceptar"
        btnGuardarDatos.on('click', function () {
            console.log('Datos Ingresados Manual');
            // Verifica que haya un motivo ingresado
            if (motivoEliminarCl.val().trim() !== '') {

                // Obtiene la fila seleccionada en el DataTable
                console.log(dataTable.rows('.selected').data());
                console.log();
                // Obtiene la fila seleccionada en el dataTable
                var filasSeleccionadas = dataTable.rows('.selected').data();

                // Itera sobre las filas seleccionadas
                filasSeleccionadas.each(function (index, rowData) {
                    console.log('Fila Completa: ', rowData);
                    // Accede a los valores específicos de cada fila y muestra en el console.log
                    console.log('Valor de la columna 1:', rowData[1]);
                    console.log('Valor de la columna 2:', rowData[2]);
                    // Agrega más líneas según la cantidad de columnas y los valores que necesitas
                });
                console.log('Se Eliminaron ' + filasSeleccionadas.length + ' Registros');

                if (filasSeleccionadas.length > 0) {

                    // Realiza aquí la lógica para eliminar el usuario en el DataTable

                    filasSeleccionadas.each(function (index, rowData) {
                        var rowIndex = dataTable.row(dataTable.row($(rowData).index())).index();
                        dataTable.row(rowIndex).remove(); //Borras
                    });

                    // Dibuja la tabla nuevamente despues de eliminar Filas
                    dataTable.draw();

                    // Cierra la ventana modal
                    $('#motivoEliminar').modal('hide');

                    //Borra el contenido del área de descripción
                    motivoEliminarCl.val('');

                    // Deshabilita el botón "Aceptar" después de cerrar el modal
                    btnGuardarDatos.prop('disabled', true);

                    // Deshabilita el botón de trash después de cerrar el modal
                    btnTrash.prop('disabled', true);
                    // Deshabilita el botón de trash al cancelar
                    // btnTrash.prop('disabled', true);

                    // Actualiza la información del usuario a eliminar
                    actualizarInfoUsuario();
                }
            } else {
                // Muestra un mensaje de error o realiza alguna acción adicional
                alert('Por favor, ingresa un motivo antes de continuar.');
            }
        });

        // Agrega un evento al cerrar la modal para borrar el contenido del área de descripción
        $('#motivoEliminar').on('hidden.bs.modal', function () {
            motivoEliminarCl.val('');
        });

        //Agrega un evento de clic al botón "Cancelar"
        btnCancelarDatos.on('click', function () {
            // Cierra la ventana modal
            $('#motivoEliminar').modal('hide');

            // Borra el contenido del área de descripción
            motivoEliminarCl.val('');

            // Deshabilita el botón Aceptar al cancelar
            btnGuardarDatos.prop('disabled', true);

            // Actualiza la informacion del usuario a eliminar
            actualizarInfoUsuario();
        });

        // Agrega un evento al abrir la modal para deshabilitar el botón si la descripción está vacía
        $('#motivoEliminar').on('show.bs.modal', function () {
            btnGuardarDatos.prop('disabled', motivoEliminarCl.val().trim() === '');
        });

        // Agrega un evento de cambio al elemento radio "Seleccionar toda la columna"
        $('#selectAllRadio').on('change', function () {

            // Agrega un log para verificar si se esta ejecutando el evento
            // console.log('Cambio en Seleccionar toda la Columna');

            if ($(this).is(':checked')) {
                // Agrega un log para verificar si se está ejecutando
                // console.log('Seleccionar toda la Columna está marcado');
                // Habilita el botón Trash cuando se selecciona toda la columna
                btnTrash.prop('disabled', false);
            } else {
                // Agrega un log para verificar si se está ejecutando
                // console.log('Seleccionar toda la Columna no está marcado');

                // Deshabilita el botón Trash cuando no se selecciona toda la columna
                btnTrash.prop('disabled', true);
            }
        });

        // Agrega un evento al abrir la modal para actualizar la información del usuario seleccionado
        $('#motivoEliminar').on('show.bs.modal', function () {
            // Actualiza la información del usuario a eliminar
            actualizarInfoUsuario();
        });

        // Función para actualizar la información del usuario a eliminar
        function actualizarInfoUsuario() {
            let filasSeleccionadas = dataTable.rows('.selected').data();

            if (filasSeleccionadas.length === 1) {
                // Asegúrate de tener el índice correcto (5) para el tipo de cliente
                let tipoClienteSeleccionado = obtenerTipoClienteSeleccionado(filasSeleccionadas[0][5]);

                // Muestra la información del usuario a eliminar
                let infoUsuario = 'Se va a eliminar al Cliente: ' + filasSeleccionadas[0][2] + ', con el tipo Cliente: ' + tipoClienteSeleccionado;
                $('#infoUsuarioEliminar').text(infoUsuario);
            } else if (filasSeleccionadas.length > 1) {
                // Muestra el mensaje de múltiples usuarios seleccionados
                $('#infoUsuarioEliminar').text('Se eliminarán: ' + filasSeleccionadas.length + ' clientes seleccionados.');
            } else {
                // Si no hay filas seleccionadas, limpia la información
                $('#infoUsuarioEliminar').text('');
            }
        }
        //Obtener datos de la API
        function obtenerTipoClienteSeleccionado(selectHtml) {
            // Crear un elemento temporal para obtener el valor seleccionado
            let tempElement = document.createElement('div');
            tempElement.innerHTML = selectHtml;
            return tempElement.firstChild.value;
        }

    });

    $(document).ready(function () {
        $('#icono_impresion').on('click', function () {
            console.log('Icono clickeado');
            $('#miModalTicket').modal('show');
        })
    });
});

