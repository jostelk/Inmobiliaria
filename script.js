document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const propertiesGrid = document.getElementById('properties-grid');
    const propertyCards = document.querySelectorAll('.property-card');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obtener los valores de los filtros
        const tipoTransaccion = document.getElementById('tipo-transaccion').value;
        const tipoPropiedad = document.getElementById('tipo-propiedad').value;
        const precioMax = parseInt(document.getElementById('precio').value) || Infinity;

        // Filtrar las propiedades
        propertyCards.forEach(card => {
            const cardTransaccion = card.getAttribute('data-transaccion');
            const cardTipo = card.getAttribute('data-tipo');
            const cardPrecio = parseInt(card.getAttribute('data-precio'));

            if (
                cardTransaccion === tipoTransaccion &&
                cardTipo === tipoPropiedad &&
                cardPrecio <= precioMax
            ) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
