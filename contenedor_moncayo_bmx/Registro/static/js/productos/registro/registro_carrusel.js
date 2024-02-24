let currentFileCount= 0;
var maxFiles = 5; // Máximo de imágenes permitidas
var limitReached = false;// Variable de bandera para controlar si se ha alcanzado el límite

$(document).ready(function(){ //Este código se ejecuta cuando el DOM esta completamente cargado
    if(currentFileCount < 4){
        $('#rightArrow').hide();
        $('#leftArrow').hide();
    }
    else{
        console.log("else");
        $('#rightArrow').show();
        $('#leftArrow').show();
    }

    const carousel = $(".carousel"); // Seleccionar el elemento Carrusel en el DOM
    const firstImg = carousel.find("img").eq(0); // Seleccionar la primera imagen dentro del carrusel
    const arrowIcons = $(".wrapper i"); // Seleccionar todos los iconos de flechas dentro de elementos del carrusel
    const images = carousel.find("img");
        
    // Declaración de variables para rastreo de interacción del usuario
    let isDragStart = false;
    let isDragging = false;
    let prevPageX;
    let prevScrollLeft;
    let positionDiff;
        
    const firstImgWidth = 90;
    const scrollWidth = carousel[0].scrollWidth - carousel[0].clientWidth; // Calculando el rango de desplazamiento horizontal del carrusel
        
    // Definición de la función showHideIcons
    // Función para mostrar u ocultar las flechas de navegación
    const showHideIcons = () => {
        // Muestra ambas flechas inicialmente
        arrowIcons.eq(0).show();
        arrowIcons.eq(1).show();
        
        // Calcula el número máximo de imágenes que caben en el ancho visible del carrusel
         const maxVisibleImages = Math.floor(carousel.width() / firstImgWidth);
        
        // Calcula el número total de imágenes del carrusel
        const totalImages = carousel.find("img").length;
        
        // Oculta la flecha izquierda si el carrusel está en la posición más a la izquierda
        if (carousel.scrollLeft() === 0) {
            arrowIcons.eq(0).hide();
        } else {
            arrowIcons.eq(0).show();
        }
        
        // Calcula el número total de imágenes a la derecha del carrusel
        const imagesToRight = Math.ceil((totalImages - maxVisibleImages) * firstImgWidth - carousel.scrollLeft());
        
        // Oculta la flecha derecha si no hay más imágenes a la derecha
        if (imagesToRight <= 0) {
            arrowIcons.eq(1).hide();
        } else {
            arrowIcons.eq(1).show();
        }
    };
    


    // Itera sobre todos los iconos en el array arrowIcons
    arrowIcons.each(function (index, icon) {
        // Esta función se ejecuta cuando se hace clic en una de las flechas del carrusel
        // Comprueba si se hizo clic en la flecha izquierda
        $(icon).on("click", function () {
            if (icon.id === "leftArrow") {
                // Si se hizo clic en la flecha izquierda, desplaza el carrusel hacia la izquierda
                carousel.scrollLeft(carousel.scrollLeft() - firstImgWidth);
            } 
            else {
                // Si se hizo clic en la flecha derecha, desplaza el carrusel hacia la derecha
                carousel.scrollLeft(carousel.scrollLeft() + firstImgWidth);
            }
            
            // Llama a la función showHideIcons después de un breve retraso (60 milisegundos)
            // para actualizar la visibilidad de las flechas según la nueva posición del carrusel
            setTimeout(showHideIcons, 60);
        });
    });
        
    

    // Función que controla la animación de desplazamiento automático del carrusel
    const autoSlide = () => {
        // Verifica si el carrusel ya ha alcanzado su posición más a la derecha
        if (carousel.scrollLeft() === scrollWidth) {
             return; // Si es que lo está, no realiza la animación
        }
        
        // Establece el tamaño de desplazamiento en cada paso de la animación
        const step = firstImgWidth;
        
        // Calcula el destino de desplazamiento
        const destination = carousel.scrollLeft() + step;
        
        // Limita el destino para no exceder el ancho de desplazamiento máximo (scrollWidth)
        const maxDestination = Math.min(destination, scrollWidth);
        
        // Configura la duración de la animación y la frecuencia de cuadros por segundo
        const animationDuration = 500;
        const frameRate = 60;
        
        // Calcula el número de cuadros de la animación
        const frames = animationDuration / (1000 / frameRate);
        
        // Calcula la distancia que debe desplazarse en cada cuadro
        const distance = maxDestination - carousel.scrollLeft();
        const stepSize = distance / frames;
        
        // Define la función que realiza la animación
        function animate() {
            // Si el carrusel no ha alcanzado el destino
            if (carousel.scrollLeft() < maxDestination) {
                // Realiza un desplazamiento parcial en cada cuadro
                carousel.scrollLeft($carousel.scrollLeft() + stepSize);
                // Solicita el siguiente cuadro de animación
                requestAnimationFrame(animate);
            }
        }
        
        // Inicia la animación
        animate();
    };
        
    

    // Función para el inicio del arrastre
    const dragStart = (e) => {
        // Indica que se ha iniciado el arrastre
        isDragStart = true;
        
        // Registra la posición inicial del puntero o toque
        prevPageX = e.pageX || e.originalEvent.touches[0].pageX;
        
        // Registra la posición de desplazmiento horizontal actual del carrusel
        prevScrollLeft = carousel.scrollLeft();
    };
        
    

    // Función para el arrastre continuo
    const dragging = (e) => {
        // Si el arrastre no ha comenzado, no hace nada
        if (!isDragStart) {
            return;
        }
        
        e.preventDefault(); // Evita comportamientos predeterminados como el desplazamiento de la página
        isDragging = true; // Indica que se está arrastrando
        carousel.addClass("dragging"); // Agrega una clase de CSS para indicar que el carrusel está siendo arrastrado
        positionDiff = (e.pageX || e.originalEvent.touches[0].pageX) - prevPageX; // Calcula la diferencia de posición desde el inicio del arrastre
        carousel.scrollLeft(prevScrollLeft - positionDiff); // Actualiza el desplazamiento horizontal del carrusel en función de posición
        showHideIcons(); // Llama a la función showHideIcons para actualizar la visibilidad de las flechas de navegación
    };
        
    

    // Función para el final del arrastre
    const dragStop = () => {
        // Indica que el arrastre ha terminado
        isDragStart = false;
        carousel.removeClass("dragging"); // Elimina la clase CSS que indica que el carrusel está siendo arrastrado
        
        if (!isDragging) {
            // Si no se estaba arrastrando, no hace nada más y regresa
            return;
        }
        
        // Indica la animación de desplazamiento automático del carrusel
        isDragging = false;
        autoSlide();
    };


        
    // Se agregan event listeners para la interacción del usuario con el carrusel
    // Inicia el arrastre con el mouse o toque
    carousel.on("mousedown", dragStart);
    carousel.on("touchstart", dragStart);
        
    // Realiza el arrastre o desplazamiento mientras se mueve el mouse o se toca la pantalla
    carousel.on("mousemove", dragging);
    carousel.on("touchmove", dragging);
        
    // Detiene el arrastre al soltar el mouse, salir del carrusel o levantar el dedo de la pantalla
    carousel.on("mouseup", dragStop);
    carousel.on("mouseleave", dragStop);
    carousel.on("touchend", dragStop);
        

    // Función para agregar NUEVA IMAGEN
    const imagenNuevaPng = $('#imagenNuevaPng');
    const fileInput = $('#fileInput');
    const imageContainer = $('.carousel');
    
    // Cuando se hace click en la imagen existente (imagenNuevaPng), se activa el inputFile (fileInput)
    imagenNuevaPng.on('click', function () {
        fileInput.click();
    });
    
    //Función para delimitar el máximo de fotografías que se ingresarán    
    var numeroNodosHijos = imageContainer.children().length;
    currentFileCount = numeroNodosHijos - 2; // Contador de imágenes actuales
    
    // Cuando se seleccionan archivos en el input de archivo (fileInput)
    fileInput.on('change', function () {
        var files = this.files;
        var filesToAdd = Math.min(maxFiles - currentFileCount, files.length);
    
        // Contador de nodos
        var numeroNodosHijos = imageContainer.children().length;
        currentFileCount = numeroNodosHijos - 2;
    
        // Verifica si se supera el límite permitido
        if (currentFileCount + files.length > maxFiles) {
            alert('Has excedido el límite de imágenes permitidas (' + maxFiles + '), intenta de nuevo.');
            return;
        }
        
        for (var i = 0; i < filesToAdd; i++) {
            if (limitReached) {
                break; // Sale del bucle si se alcanza el límite
            }

            var file = files[i];
            var reader = new FileReader();
    
            reader.onload = function (e) {
                var newImage = $('<img>');
                newImage.attr('src', e.target.result);
                newImage.addClass('C_nuevaImagenCargada modal-trigger deleteBrush');
                newImage.attr('alt', 'Nueva imagen');
                newImage.attr('draggable', false);
                newImage.attr('onclick', 'openModal(this)');
                newImage.css('width', '90px');
                newImage.css('height', '56px');
                newImage.css('border-radius', '10%');
    
                imageContainer.append(newImage);
                currentFileCount++;
    
                if (currentFileCount >= maxFiles) {
                    fileInput.prop('disabled', true);
                    limitReached = true; // Marca la bandera como verdadera
                }

                if(currentFileCount < 4){
                    console.log("if");
                    $('#rightArrow').hide();
                    $('#leftArrow').hide();
                }
                else{
                    console.log("else");
                    $('#rightArrow').show();
                    $('#leftArrow').show();
                }

            };

            reader.readAsDataURL(file);
        }
        this.value = '';
    });

    

    // Eliminar imágenes de carrusel, mediante el botón #btnBrush
    $('#btnBrush').on('click', function () {
        // Obtener el carrusel y todas las imágenes dentro de él
        var carousel = $('.carousel');
        var images = carousel.find('img');
    
        // Elimina todas las imágenes con la clase deleteBrush excepto imagenNuevaPng
        images.each(function (index, image) {
            var image = $(image);
            if (image.hasClass('deleteBrush') && image.attr('id') !== 'imagenNuevaPng') {
                image.remove();
            }
        });
    
            
        // Restablecer el contador de archivos
        var numeroNodosHijos = imageContainer.children().length;
        currentFileCount = numeroNodosHijos - 2;

        if(currentFileCount < 4){
            console.log("if");
            $('#rightArrow').hide();
            $('#leftArrow').hide();
        }
        else{
            console.log("else");
            $('#rightArrow').show();
            $('#leftArrow').show();
        }
    
        // Restaurar la imagen predeterminada con el ID = #imagenNuevaPng
        $('#imagenNuevaPng').attr('src', '../../../static/img/addImagen.png');
    
        // Habilitar nuevamente el input File
        $('#fileInput').prop('disabled', false);
    
        // Restablecer la variable limitReached
        limitReached = false;
    });

});


//Funciones para Modal de imagenes de carrusel
let currentImage = null;

function openModal(image) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    currentImage = image; //Almacena la imagen actual en una variable global
    modal.style.display = 'block';
    modalContent.src = image.src;
}


    
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}



function deleteImg() {
    if(currentImage){
        const imageContainer = currentImage.parentElement;
        imageContainer.removeChild(currentImage); //Elimina la imagen actual
        closeModal(); //Cierra el modal
        currentImage = null; //Restablece la variable global
        currentFileCount--;

        if(currentFileCount < maxFiles){
            $('#fileInput').prop('disabled', false);
        }

        limitReached = false; // Marca la bandera como verdadera
    }
    if(currentFileCount < 4){
        console.log("if");
        $('#rightArrow').hide();
        $('#leftArrow').hide();
    }
    else{
        console.log("else");
        $('#rightArrow').show();
        $('#leftArrow').show();
    }
}



window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    
    if (event.target === modal) {
        closeModal();
    }
});





