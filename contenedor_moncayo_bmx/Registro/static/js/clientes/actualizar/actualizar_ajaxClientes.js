$(document).ready(function() {

    //Recupera los datos del formulario 
    $('#nomCliente').change(function() {
        var nombreCliente = $(this).val();
        if (nombreCliente !== "") {
            // Hacer la solicitud AJAX al servidor para obtener datos
            $.ajax({
                url: '/obtener-datos-cliente/' + nombreCliente + '/', 
                method: 'GET',
                success: function(data) {
                    // Actualizar los campos del formulario con los datos recibidos
                    $('#menuTipoUsuario').val(data.menuTipoUsuario);
                    $('#apellido_paterno').val(data.apellido_paterno);
                    $('#apellido_materno').val(data.apellido_materno);
                    $('#fecha_nac').val(data.fecha_nacimiento);
                    $('#dir_client').val(data.direccion);
                    $('#numero_telefonico').val(data.telefono);
                    $('#correo_electr').val(data.correo_electronico);
                    $('#facebook').val(data.facebook);
                    $('#instagram').val(data.instagram);
                },
                error: function(error) {
                    console.error(error);
                }
            });
        }
    });
      
  

});