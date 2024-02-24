$(document).ready(function() {
  const $input = $('#nombreProducto');
  const $suggestionsContainer = $('#suggestions-container');

  $input.on('input', function() {
    const inputValue = $input.val().toLowerCase();
    // Filtrar sugerencias que coincidan con la entrada del usuario
    const matchingSuggestions = sugerenciasProductos.filter(suggestion => suggestion.nombre.toLowerCase().includes(inputValue));
    // Mostrar las sugerencias coincidentes
    mostrarSugerencias(matchingSuggestions);
  });

  // Función para mostrar las sugerencias
  function mostrarSugerencias(suggestions) {
    // Limpiar el contenedor de sugerencias
    $suggestionsContainer.html('');
    
    // Mostrar el contenedor de sugerencias si hay coincidencias
    if (suggestions.length > 0) {
      $suggestionsContainer.css('display', 'block');
      // Agregar cada sugerencia al contenedor
      suggestions.forEach(suggestion => {
        const $suggestionElement = $('<div class="suggestion"></div>');
        // Agregar icono de búsqueda reciente si es reciente
        if (suggestion.tipo === "reciente") {
          $suggestionElement.append('<i class="fas fa-history"></i>');
        }
        // Agregar nombre
        $suggestionElement.append('<div>' + suggestion.nombre + '</div>');
        // Agregar miniatura de imagen
        if (suggestion.imagen) {
          $suggestionElement.append('<img class="thumbnail" src="' + suggestion.imagen + '" alt="Miniatura">');
        }
        // Agregar icono de búsqueda reciente si es reciente
        if (suggestion.tipo === "reciente") {
          $suggestionElement.append('<img src="../../../../static/icons/up-left.svg" alt="flecha">');
        }
        // Agregar manejador de clic para insertar el nombre de la sugerencia en el input
        $suggestionElement.on('click', function() {
          $input.val(suggestion.nombre);
          $suggestionsContainer.css('display', 'none');
        });

        $suggestionsContainer.append($suggestionElement);
      });
    } else {
      // Ocultar el contenedor si no hay coincidencias
      $suggestionsContainer.css('display', 'none');
    }
  }

  // Evento que se dispara al hacer clic en cualquier parte de la página
  $(document).on('click', function(event) {
    // Ocultar el contenedor de sugerencias si se hace clic fuera de él
    if (!$suggestionsContainer.is(event.target) && !($suggestionsContainer.has(event.target).length > 0) && !$input.is(event.target)) {
      $suggestionsContainer.css('display', 'none');
    }
  });

  

});
