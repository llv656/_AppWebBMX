// Función para obtener el numero del mes
function obtenerNumeroMes(mesNombre) {
    const nombresMeses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    return nombresMeses.indexOf(mesNombre.toLowerCase()) + 1;
}

// Función para obtener el nombre del mes
function obtenerNombreMes(mes) {
    var nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return nombresMeses[mes];
}

// Vistas Header
$(document).ready(function () {

    // Declarar calendar fuera de la función para que sea accesible en todo el ámbito
    let calendar;

    const fechaElemento = document.getElementById("fecha-actual");

    function inicializarFullCalendar() {
        const calendarEl = document.getElementById('calendarSemanal');
        calendar = new FullCalendar.Calendar(calendarEl, {
            // Configuración del calendario, según tus necesidades
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            locale: 'es'
        });

        // Renderizar el calendario
        calendar.render();
        // Actualizar la fecha inicial para la vista semanal
        actualizarFechaSemanal();
    }

    function actualizarFecha() {
        const seleccion = $("#opcionesVista").val();
        const fechaActual = seleccion === "semanal" ? calendar.getDate() : new Date();

        if (seleccion === "diaria") {
            fechaElemento.textContent = obtenerFechaDiariaFormateada(fechaActual);
        } else if (seleccion === "semanal") {
            fechaElemento.textContent = obtenerFechaSemanalFormateada(fechaActual);
        } else if (seleccion === "mensual") {
            fechaElemento.textContent = obtenerMesYAnioActual(fechaActual);
        } else if (seleccion === "anual") {
            fechaElemento.textContent = fechaActual.getFullYear().toString();
        }
    }

    function obtenerFechaDiariaFormateada(fecha) {
        const dia = fecha.getDate();
        const mes = fecha.toLocaleString('es-ES', { month: 'long' });
        const anio = fecha.getFullYear();
        return `${dia}-${mes}-${anio}`;
    }

    function obtenerFechaSemanalFormateada(fecha) {
        const semana = obtenerSemanaDelMes(fecha);
        const mes = obtenerNombreMes(fecha.getMonth());
        const anio = fecha.getFullYear();
        return `Semana ${semana},${mes},${anio}`;
    }

    function obtenerMesYAnioActual(fecha) {
        const mes = obtenerNombreMes(fecha.getMonth());
        const anio = fecha.getFullYear();
        return `${mes} ${anio}`;
    }

    function avanzarDiaDiario() {
        const fechaActual = obtenerFechaDesdeTexto(fechaElemento.textContent);
        fechaActual.setDate(fechaActual.getDate() + 1);
        fechaElemento.textContent = obtenerFechaFormateada(fechaActual);
    }

    function retrocederDiaDiario() {
        const fechaActual = obtenerFechaDesdeTexto(fechaElemento.textContent);
        fechaActual.setDate(fechaActual.getDate() - 1);
        fechaElemento.textContent = obtenerFechaFormateada(fechaActual);
    }

    function obtenerFechaFormateada(fecha) {
        const dia = fecha.getDate();
        const mes = fecha.toLocaleString('es-ES', { month: 'long' });
        const anio = fecha.getFullYear();
        return `${dia}-${mes}-${anio}`;
    }

    function obtenerFechaDesdeTexto(textoFecha) {
        const partesFecha = textoFecha.split("-");
        if (partesFecha.length !== 3) {
            // Manejar el caso de que la cadena de fecha no esté en el formato esperado
            return null; // O lanzar un error, dependiendo de tus necesidades
        }
        const dia = parseInt(partesFecha[0], 10);
        const mesNombre = partesFecha[1];
        const anio = parseInt(partesFecha[2], 10);

        const fecha = new Date(anio, obtenerNumeroMes(mesNombre) - 1, dia);
        return fecha;
    }

    function actualizarFechaSemanal() {
        if (calendar) {
            const fechaActual = calendar.getDate();
            const semana = obtenerSemanaDelMes(fechaActual);
            const mes = obtenerNombreMes(fechaActual.getMonth());
            const anio = fechaActual.getFullYear();
            $("#fecha-actual").text("Semana " + semana + ", " + mes + ", " + anio);
        }

    }

    function obtenerSemanaDelMes(fecha) {
        const primerDiaMes = new Date(fecha.getFullYear(), fecha.getMonth(), 1);
        const diferencia = fecha.getDate() + primerDiaMes.getDay() - 1;
        return Math.ceil(diferencia / 7);
    }
    //Interacción con las vistas del header de la página principal
    $("#opcionesVista").on("change", function () {
        const seleccion = $(this).val();

        // Ocultar todos los contenedores
        $(".contenedorTbl").hide();

        if (seleccion === "diaria") {
            $("#contenedorTabla").show();
            $("#contenedorTblVS").hide();
            actualizarFecha();
            $("#nextDay").off("click").on("click", avanzarDiaDiario);
            $("#prevDay").off("click").on("click", retrocederDiaDiario);
        } else if (seleccion === "semanal") {
            $("#contenedorTabla").hide();
            $("#contenedorTblVS").show();
            actualizarFechaSemanal();
            // Inicializar FullCalendar y renderizar después de mostrar los contenedores
            inicializarFullCalendar();
            calendar.changeView('timeGridWeek'); // Cambiar la vista a semana
            $("#nextDay").off("click").on("click", avanzarSemanaSemanal);
            $("#prevDay").off("click").on("click", retrocederSemanaSemanal);
        } else if (seleccion === "mensual") {
            $("#contenedorTabla").hide();
            $("#contenedorTblVS").hide();
            $("#contenedorTblVM").show();
            actualizarFecha();
        } else if (seleccion === "anual") {
            $("#contenedorTabla").hide();
            $("#contenedorTblVS").hide();
            $("#contenedorTblVM").hide();
            $("#contenedorTblVA").show();
            actualizarFecha();
        }

        // Siempre asegurarse de que los botones de avance y retroceso estén asociados
        if (seleccion === "diaria") {
            $("#nextDay").off("click").on("click", avanzarDiaDiario);
            $("#prevDay").off("click").on("click", retrocederDiaDiario);
        }
    });

    // Establecer el valor predeterminado en "diaria" al cargar la página
    $("#opcionesVista").val("diaria");

    function avanzarSemanaSemanal() {
        if (calendar) {
            const fechaActual = calendar.getDate();
            const nuevaFecha = new Date(fechaActual);
            // Avanzar una semana
            nuevaFecha.setDate(nuevaFecha.getDate() + 7);
            calendar.gotoDate(nuevaFecha);
            actualizarFechaSemanal(nuevaFecha);
        }
    }

    function retrocederSemanaSemanal() {
        if (calendar) {
            const fechaActual = calendar.getDate();
            const nuevaFecha = new Date(fechaActual);
            // Retroceder una semana
            nuevaFecha.setDate(nuevaFecha.getDate() - 7);
            calendar.gotoDate(nuevaFecha);
            actualizarFechaSemanal(nuevaFecha);
        }
    }

    actualizarFecha();
});
