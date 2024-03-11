javascript:(function() {
    // Crear un array con todos los elementos img en la página
    var imgElements = document.querySelectorAll('img');

    // Obtener la cantidad de elementos img
    var imgCount = imgElements.length;

    // Mostrar la cantidad en una alerta
    alert('Número de elementos img en la página: ' + imgCount);
})();