$(document).ready(function() {
  
  /*----------------------------------------------------------------------------------------------------------------------*/
  //PRIMER FORMULARIO PRIMER FORMULARIO PRIMER FORMULARIO PRIMER FORMULARIO PRIMER FORMULARIO PRIMER FORMULARIO 
  /*----------------------------------------------------------------------------------------------------------------------*/

  //NOMBRE PRODUCTO
  $("#nombreProducto").on("keyup", function() {
    var regex = /^[a-zA-Z0-9\s]{1,150}$/; // Expresión regular para caracteres alfanuméricos de 2 a 149 caracteres
    
    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value)) {
      this.value = this.value.replace(/[^a-zA-Z0-9\s]+/g, "").substring(0, 150);
    }
  });



  //DISTRIBUIDOR
  $("#distribuidor").on("keyup", function() {
    var regex = /^[a-zA-Z0-9\s]{1,150}$/; // Expresión regular para caracteres alfanuméricos de 2 a 149 caracteres
    
    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value)) {
      this.value = this.value.replace(/[^a-zA-Z0-9\s]+/g, "").substring(0, 150);
    }
  });



  //DESCRIPCION
  $("#descripcion").on("keyup", function() {
    var regex = /^[a-zA-Z0-9\s]{1,10}$/; // Expresión regular para caracteres alfanuméricos de 2 a 149 caracteres
    
    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value)) {
        this.value = this.value.replace(/[^a-zA-Z0-9\s]+/g, "").substring(0, 150);
    }
  }); 



  //PRECIO DE COMPRA POR UNIDAD
  $('#precioCompra').on("input", function() {
    var regex = /^(?:[1-9]\d{0,5}|1000000)$/;
    var valor = $(this).val();

    if (regex.test(valor)) {
      console.log("dentro del rango");
      // El valor cumple con el rango deseado (1 a 1000000)
    } 
    else {
      console.log("fuera de rango");
      // El valor está fuera del rango deseado
      valor = valor.substring(0, valor.length - 1); // Eliminar el último carácter solo si es mayor a 1,000,000
      $(this).val(valor);
    }
  });



  //CANTIDAD DE PRODUCTOS MAYOREO
  $("#cantidadProductosMayoreo").on("keyup", function() {
    var cantidadEntrada = $(this).val();

    // Validación para verificar si el valor está dentro del rango permitido
    if (cantidadEntrada < 1 || cantidadEntrada > 1000000) {
      $(this).val(""); // Establece el valor del input como vacío
    }
  });



  //PRECIO DE PRODUCTO POR MAYOREO (UNIDAD)
  $('#precioProductoMayoreoUnidad').on("input", function() {
    var regex = /^(?:[1-9]\d{0,5}|1000000)$/;
    var valor = $(this).val();

    if (regex.test(valor)) {
      console.log("dentro del rango");
      // El valor cumple con el rango deseado (1 a 1000000)
    } 
    else {
      console.log("fuera de rango");
      // El valor está fuera del rango deseado
      valor = valor.substring(0, valor.length - 1); // Eliminar el último carácter solo si es mayor a 1,000,000
      $(this).val(valor);
    }
  });



  /*---------------------------------------------------------------------------------------------------------------------- */
  //SEGUNDO FORMULARIO SEGUNDO FORMULARIO SEGUNDO FORMULARIO SEGUNDO FORMULARIO SEGUNDO FORMULARIO SEGUNDO FORMULARIO 
  /*---------------------------------------------------------------------------------------------------------------------- */



  //UNIDADES MINIMAS DISPONIBLES PARA VENTA
  $("#inputUnidsMinVenta").on("keyup", function() {
    var unidadMinVenta = $(this).val();

    // Validación para verificar si el valor está dentro del rango permitido
    if (unidadMinVenta < 1 || unidadMinVenta > 1000000) {
        $(this).val(""); // Establece el valor del input como vacío
    }
  });



  //UNIDADES MINIMAS DISPONIBLES PARA USO INTERNO
  $("#inputUnidsMinUsoInter").on("keyup", function() {
    var unidadMinUsoInterno = $(this).val();

    // Validación para verificar si el valor está dentro del rango permitido
    if (unidadMinUsoInterno < 1 || unidadMinUsoInterno > 1000000) {
      $(this).val(""); // Establece el valor del input como vacío
    }
  });



  //PRECIO DE VENTA POR UNIDAD - PUBLICO
  $('#precioVentaUnidad').on("input", function() {
    var regex = /^(?:[1-9]\d{0,5}|1000000)$/;
    var valor = $(this).val();

    if (regex.test(valor)) {
      console.log("dentro del rango");
      // El valor cumple con el rango deseado (1 a 1000000)
    } 
    else {
      console.log("fuera de rango");
      // El valor está fuera del rango deseado
      valor = valor.substring(0, valor.length - 1); // Eliminar el último carácter solo si es mayor a 1,000,000
      $(this).val(valor);
    }
  });



  //PRECIO DE VENTA POR UNIDAD - INTERNO
  $('#precioVentaUnidadInterno').on("input", function() {
    var regex = /^(?:[1-9]\d{0,5}|1000000)$/;
    var valor = $(this).val();

    if (regex.test(valor)) {
      console.log("dentro del rango");
      // El valor cumple con el rango deseado (1 a 1000000)
    } 
    else {
      console.log("fuera de rango");
      // El valor está fuera del rango deseado
      valor = valor.substring(0, valor.length - 1); // Eliminar el último carácter solo si es mayor a 1,000,000
      $(this).val(valor);
    }
  });



  /*--------------------------------------------------------------------------------------------------------------------*/
  //VALIDACIONES MODAL VALIDACIONES MODAL VALIDACIONES MODAL VALIDACIONES MODAL VALIDACIONES MODAL VALIDACIONES MODAL
  /*--------------------------------------------------------------------------------------------------------------------*/



  //NOMBRE DISTRIBUIDOR
  $("#nombreDistribuidor").on("keyup", function() {
    var regex = /^[a-zA-Z0-9\s]{1,150}$/; // Expresión regular para caracteres alfanuméricos de 2 a 149 caracteres
    
    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value)) {
        this.value = this.value.replace(/[^a-zA-Z0-9\s]+/g, "").substring(0, 150);
    }
  });



  //DIRECCION DE DISTRIBUIDOR
  $("#direccionDistribuidor").on("keyup", function() {
    console.log("entra");
    var regex = /^[a-zA-Z0-9\s]{0,299}#?[a-zA-Z0-9\s]{0,299}$/;

    // Verifica si el valor del campo cumple con la expresión regular
    if (regex.test(this.value)) {
        this.value = this.value.replace(/[^a-zA-Z0-9\s#]+/g, "").substring(0, 300);
    }

    // Elimina caracteres "#" adicionales
    var numHashTags = (this.value.match(/#/g) || []).length;
    if (numHashTags > 1) {
        this.value = this.value.replace(/#/g, '');
    }

    // Elimina el primer carácter si es un espacio
    if (this.value.charAt(0) === ' ') {
        this.value = this.value.slice(1);
    }
  });



  //NÚMERO TELEFÓNICO
  $("#telefonoDistribuidor").on("keyup", function() {
    var regex = /^[0-9]{10}$/; 

    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value) && this.value.length < 12) {
      this.value = this.value.replace(/[^\d]/g, "").substring(0, 10);
    }
  });



  //VALIDACION NUMEROS TELEFONICOS ADICIONALES 
  //TELEFONO
  $(document).on("keyup", ".NumAdicional", function() {
    var regex = /^[0-9]{10}$/;

    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value)) {
      this.value = this.value.replace(/[^\d]/g, "").substring(0, 10);
    }
  });



  $("#telefonoDistribuidor").on("change", function() {
    var regex = /^[0-9]{10}$/; 
    // Verifica si el valor del campo cumple con la expresión regular
    if (regex.test(this.value)) {
      $(this).attr("maxlength", "12");
      this.value = this.value.substring(0,3) + '-' + this.value.substring(3,6) + '-' + this.value.substring(6,10);
    }
  });



  //CORREO ELECTRONICO
  $("#correoDistribuidor").on("keyup", function() {
    var regex = /^[_A-Za-z0-9-+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/
    this.value = this.value.replace(/[^_A-Za-z0-9-+@.]+/g, "");

    if (regex.test(this.value)) {
      let partes = this.value.split("@");
      let nombre = partes[0];
      let dominio = partes[1];

      if (nombre.length <= 67 && dominio.length <= 177 && this.value.length <= 241) {
        this.value = this.value.substring(0, 241);
        console.log("correo valido alv");
        return true;
      } 
      else {
        this.value = this.value.substring(0, 241);
        console.log("No mames, esta mal el correo bro, vuelve a intentar");
        return false;
      }
    } 
    else {
      console.log("No es válido");
    }
  });



  //GIRO COMERCIAL
  $("#giroComercial").on("keyup", function() {
    var regex = /^[a-zA-Z0-9\s]{1,150}$/; // Expresión regular para caracteres alfanuméricos de 2 a 149 caracteres
    
    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value)) {
      this.value = this.value.replace(/[^a-zA-Z0-9\s]+/g, "").substring(0, 150);
    }
  });



  /*-------------------------------------------------------------------------------------------------------------------------------------------------*/
  //VALIDACIÓN DE BOTON REGISTRAR VALIDACIÓN DE BOTON REGISTRAR VALIDACIÓN DE BOTON REGISTRAR VALIDACIÓN DE BOTON REGISTRAR VALIDACIÓN DE BOTON REGISTRAR 
  /*-------------------------------------------------------------------------------------------------------------------------------------------------*/



  $(':input, #btn-mas').on("input blur click", function() {
    var nomProd = $('#nombreProducto').val(); //OBLIGATORIO- 1er Formulario
    var precio = $('#precioCompra').val(); //OBLIGATORIO 1er Formulario
    var registroProductos = datosCP(nomProd, precio);
    var unidadesMinimasVenta = $('#inputUnidsMinVenta').val(); //OBLIGATORIO
    var unidadesMinimasInternas = $('#inputUnidsMinUsoInter').val(); //OBLIGATORIO
    var precioVentaPublico = $('#precioVentaUnidad').val(); //OBLIGATORIO
    var precioVentaInterno = $('#precioVentaUnidadInterno').val(); //OBLIGATORIO
    var ventaProductos = datosVP(unidadesMinimasVenta, unidadesMinimasInternas, precioVentaPublico, precioVentaInterno);
    
    //Condición para activar el boton con los dos formularios de registro
    if (registroProductos && ventaProductos) {
      $("#btn-reg").prop("disabled", false);
    } 
    else {
      $("#btn-reg").prop("disabled", true);
    }
  });



  //Función para validar el FORMULARIO de PRODUCTO
  function datosCP(nomProd,precio) {
    var nombreProducto = /^[a-zA-Z0-9\s]{1,150}$/; 
    var regexPrecio = /^(?:[1-9]\d{0,5}|1000000)$/;
  
    if (nombreProducto.test(nomProd) && regexPrecio.test(precio)) {
      return true;
    } 
    else {
      return false;
    }
  }



  //Función para validar el formulario de Venta Productos
  function datosVP(unidadesMinimasVenta, unidadesMinimasInternas, precioVentaPublico, precioVentaInterno) {
    var regexPrecioVenta = /^(?:[1-9]\d{0,5}|1000000)$/;

    if (unidadesMinimasVenta !== '' && unidadesMinimasInternas !== '' && regexPrecioVenta.test(precioVentaPublico) && regexPrecioVenta.test(precioVentaInterno)) {
      return true;
    } else {
      return false;
    }
  }


  /*-----------------------------------------------------------------------------------------------------------------------------*/
  //VALIDACION DE BOTON GUARDAR DE MODAL
  /*-----------------------------------------------------------------------------------------------------------------------------*/
  
  
  
  $(':input, #btnGuardarDistribuidor').on("input blur click", function() {
    var regexNombreDistribuidor = /^[a-zA-Z0-9\s]{1,150}$/; // Expresión regular para caracteres alfanuméricos de 2 a 149 caracteres
    var nombreDis = $('#nombreDistribuidor').val();

    //Condición para activar el boton con los dos formularios de registro
    if (regexNombreDistribuidor.test(nombreDis)) {
      $("#btnGuardarDistribuidor").prop("disabled", false);
    } 
    else {
      $("#btnGuardarDistribuidor").prop("disabled", true);
    }
  });

}); //Fin de FUNCIONES ANÓNIMAS




