$(document).ready(function(){
  /*
  $('#lunesEntrada').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
  $('#lunesEntrada').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
  */

  //NOMBRE PRODUCTO
  $("#nombreProducto").on("keyup", function() {
    var regex = /^[a-zA-Z0-9\s]{1,150}$/; // Expresión regular para caracteres alfanuméricos de 2 a 149 caracteres
    
    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value)) {
      this.value = this.value.replace(/[^a-zA-Z0-9\s]+/g, "").substring(0, 150);
      $('#nombreProducto').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
    else{
      $('#nombreProducto').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
  });



  //DISTRIBUIDOR
  $("#distribuidor").on("keyup", function() {
    var regex = /^[a-zA-Z0-9\s]{1,150}$/; // Expresión regular para caracteres alfanuméricos de 2 a 149 caracteres

    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value)) {
      this.value = this.value.replace(/[^a-zA-Z0-9\s]+/g, "").substring(0, 150);
      $('#distribuidor').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
    else{
      $('#distribuidor').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
  });



  //DESCRIPCION
  $("#descripcion").on("keyup", function() {
    var regex = /^[a-zA-Z0-9\s]{1,10}$/; // Expresión regular para caracteres alfanuméricos de 2 a 149 caracteres
    
    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value)) {
      this.value = this.value.replace(/[^a-zA-Z0-9\s]+/g, "").substring(0, 150);
      $('#descripcion').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
    else{
      $('#descripcion').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
  }); 



  //PRECIO DE COMPRA POR UNIDAD
  $('#precioCompra').on("input", function() {
    var regex = /^(?:[1-9]\d{0,5}|1000000)$/;
    var valor = $(this).val();

    if (regex.test(valor)) {
      console.log("dentro del rango");
      $('#precioCompra').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
      // El valor cumple con el rango deseado (1 a 1000000)
    } 
    else {
      console.log("fuera de rango");
      $('#precioCompra').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
      // El valor está fuera del rango deseado
      valor = valor.substring(0, valor.length - 1); // Eliminar el último carácter solo si es mayor a 1,000,000
      $(this).val(valor);
    }
  });



  //CANTIDAD DE PRODUCTOS MAYOREO
  $("#cantidadProductosMayoreo, .C_aumentoCantidad").on("keyup", function() {
    var cantidadEntrada = $(this).val();
    
    // Validación para verificar si el valor está dentro del rango permitido
    if (cantidadEntrada < 1 || cantidadEntrada > 1000000) {
      $(this).val(""); // Establece el valor del input como vacío
      $('#cantidadProductosMayoreo').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    } 
    else {
      $('#cantidadProductosMayoreo').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
  });
  


  $(".C_aumentoCantidad").on("click", function() {
    var cantidadEntrada = $('#cantidadProductosMayoreo').val();
    
    // Validación para verificar si el valor está dentro del rango permitido
    if (cantidadEntrada < 1 || cantidadEntrada > 1000000) {
      $('#cantidadProductosMayoreo').val(""); // Establece el valor del input como vacío
      $('#cantidadProductosMayoreo').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    } 
    else {
      $('#cantidadProductosMayoreo').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
  });
  
  

  //PRECIO DE PRODUCTO POR MAYOREO (UNIDAD)
  $('#precioProductoMayoreoUnidad').on("input", function() {
    var regex = /^(?:[1-9]\d{0,5}|1000000)$/;
    var valor = $(this).val();

    if (regex.test(valor)) {
      console.log("dentro del rango");
      $('#precioProductoMayoreoUnidad').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
      // El valor cumple con el rango deseado (1 a 1000000)
    } 
    else {
      console.log("fuera de rango");
      $('#precioProductoMayoreoUnidad').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
      // El valor está fuera del rango deseado
      valor = valor.substring(0, valor.length - 1); // Eliminar el último carácter solo si es mayor a 1,000,000
      $(this).val(valor);
    }
  });


  /*--------------------*/
  //Segundo Formulario //
  /*--------------------*/



  //UNIDADES MINIMAS DISPONIBLES PARA VENTA
  $("#inputUnidsMinVenta, .C_aumentoUnidades").on("keyup", function() {
    var cantidadEntrada = $(this).val();
    
    // Validación para verificar si el valor está dentro del rango permitido
    if (cantidadEntrada < 1 || cantidadEntrada > 1000000) {
      $(this).val(""); // Establece el valor del input como vacío
      $('#inputUnidsMinVenta').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    } 
    else {
      $('#inputUnidsMinVenta').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
  });



  $(".C_aumentoUnidades").on("click", function() {
    var cantidadEntrada = $('#inputUnidsMinVenta').val();
    
    // Validación para verificar si el valor está dentro del rango permitido
    if (cantidadEntrada < 1 || cantidadEntrada > 1000000) {
      $('#inputUnidsMinVenta').val(""); // Establece el valor del input como vacío
      $('#inputUnidsMinVenta').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    } 
    else {
      $('#inputUnidsMinVenta').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
  });



  //UNIDADES MINIMAS DISPONIBLES PARA USO INTERNO
  $("#inputUnidsMinUsoInter, .aumentoUnidadesMinimas").on("keyup", function() {
    var cantidadEntrada = $(this).val();
        
    // Validación para verificar si el valor está dentro del rango permitido
    if (cantidadEntrada < 1 || cantidadEntrada > 1000000) {
      $(this).val(""); // Establece el valor del input como vacío
      $('#inputUnidsMinUsoInter').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    } 
    else {
      $('#inputUnidsMinUsoInter').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
  });
  
  

  $(".aumentoUnidadesMinimas").on("click", function() {
    var cantidadEntrada = $('#inputUnidsMinUsoInter').val();
    
    // Validación para verificar si el valor está dentro del rango permitido
    if (cantidadEntrada < 1 || cantidadEntrada > 1000000) {
      $('#inputUnidsMinUsoInter').val(""); // Establece el valor del input como vacío
      $('#inputUnidsMinUsoInter').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    } 
    else {
      $('#inputUnidsMinUsoInter').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
  });



  //PRECIO DE VENTA POR UNIDAD/PUBLICO
  $('#precioVentaUnidad').on("input", function() {
    var regex = /^(?:[1-9]\d{0,5}|1000000)$/;
    var valor = $(this).val();

    if (regex.test(valor)) {
      console.log("dentro del rango");
      $('#precioVentaUnidad').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
      // El valor cumple con el rango deseado (1 a 1000000)
    } 
    else {
      console.log("fuera de rango");
      $('#precioVentaUnidad').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
      // El valor está fuera del rango deseado
      valor = valor.substring(0, valor.length - 1); // Eliminar el último carácter solo si es mayor a 1,000,000
      $(this).val(valor);
    }
  });



  //PRECIO DE VENTA POR UNIDAD/INTERNO
  $('#precioVentaUnidadInterno').on("input", function() {
    var regex = /^(?:[1-9]\d{0,5}|1000000)$/;
    var valor = $(this).val();

    if (regex.test(valor)) {
      console.log("dentro del rango");
      $('#precioVentaUnidadInterno').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
      // El valor cumple con el rango deseado (1 a 1000000)
    } 
    else {
      console.log("fuera de rango");
      $('#precioVentaUnidadInterno').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
      // El valor está fuera del rango deseado
      valor = valor.substring(0, valor.length - 1); // Eliminar el último carácter solo si es mayor a 1,000,000
      $(this).val(valor);
    }
  });



  /*---------------*/
  //FORMULARIO MODAL
  /*---------------*/



  //NOMBRE DISTRIBUIDOR
  $("#nombreDistribuidor").on("keyup", function() {
    var regex = /^[a-zA-Z0-9\s]{1,150}$/; // Expresión regular para caracteres alfanuméricos de 2 a 149 caracteres
    
    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value)) {
      $('#nombreDistribuidor').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
      this.value = this.value.replace(/[^a-zA-Z0-9\s]+/g, "").substring(0, 150);
    }
    else{
      $('#nombreDistribuidor').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
  });



  //DIRECCION DE DISTRIBUIDOR
  $("#direccionDistribuidor").on("keyup", function() {
    var regex = /^[a-zA-Z0-9\s,#.]{1,299}$/;
    
    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value)) {
      this.value = this.value.replace(/[^a-zA-Z0-9\s#]+/g, "").substring(0, 300);
      $('#direccionDistribuidor').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    } 
    else{
      $('#direccionDistribuidor').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
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
  
  

  //NUMERO TELEFÓNICO
  //Validación de Entrada de 10 digitos de NÚMERO DE TELÉFONO
  $("#telefonoDistribuidor").on("keyup", function() {
    var regex = /^[0-9]{10}$/; 

    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value) && this.value.length < 12) {
      this.value = this.value.replace(/[^\d]/g, "").substring(0, 10);
      $('#telefonoDistribuidor').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
    else{
      $('#telefonoDistribuidor').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
  });
  
  

  //CORREO ELECTRONICO DISTRIBUIDOR
  $("#correoDistribuidor").on("keyup", function() {
    var regex = /^[_A-Za-z0-9-+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/
    this.value = this.value.replace(/[^_A-Za-z0-9-+@.]+/g, "");

    if (regex.test(this.value)) {
      let partes = this.value.split("@");
      let nombre = partes[0];
      let dominio = partes[1];

      if (nombre.length <= 67 && dominio.length <= 177 && this.value.length <= 241) {
        this.value = this.value.substring(0, 241);
        $('#correoDistribuidor').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
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
      $('#correoDistribuidor').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
    }
  });


  
  //GIRO COMERCIAL
  $("#giroComercial").on("keyup", function() {
    var regex = /^[a-zA-Z0-9\s]{1,150}$/; // Expresión regular para caracteres alfanuméricos de 2 a 149 caracteres
    
    // Verifica si el valor del campo cumple con la expresión regular
    if (!regex.test(this.value)) {
      $('#giroComercial').removeClass("C_colorBaseBorder C_validacionCorrecta").addClass("C_validacionIncorrecta");
      this.value = this.value.replace(/[^a-zA-Z0-9\s]+/g, "").substring(0, 150);   
    }
    else{
      $('#giroComercial').removeClass("C_colorBaseBorder C_validacionIncorrecta").addClass("C_validacionCorrecta");
    }
  });
      
});