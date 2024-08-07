document.addEventListener('DOMContentLoaded', function() {
    const productoSelect = document.getElementById('producto');
    const extrasCheckboxes = document.querySelectorAll('input[name="extras"]');
    const plazosSelect = document.getElementById('plazos');
    const totalElement = document.getElementById('total');
    const plazoTotalElement = document.getElementById('plazoTotal');

    function updateTotal() {
        let total = 0;

        // Obtener el precio del producto seleccionado
        const selectedOption = productoSelect.options[productoSelect.selectedIndex];
        total += parseFloat(selectedOption.getAttribute('data-precio')) || 0;

        // Obtener el precio de los extras seleccionados
        extrasCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseFloat(checkbox.getAttribute('data-precio')) || 0;
            }
        });

        // Obtener el número de plazos
        const plazos = parseInt(plazosSelect.value);

        // Calcular el total por plazo
        const totalPorPlazo = total / plazos;

        // Actualizar los totales en el HTML
        totalElement.textContent = total.toFixed(2);
        plazoTotalElement.textContent = totalPorPlazo.toFixed(2);
    }

    // Escuchar cambios en el formulario
    productoSelect.addEventListener('change', updateTotal);
    extrasCheckboxes.forEach(extra => extra.addEventListener('change', updateTotal));
    plazosSelect.addEventListener('change', updateTotal);
    
    // Calcular total al cargar la página
    updateTotal();
});