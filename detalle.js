// Datos de las propiedades (puedes cargar estos datos de un archivo JSON si lo prefieres)
const propiedades = {
    1: {
        nombre: "Casa en la Playa",
        precio: "$500,000 USD",
        ubicacion: "Playa del Sol, Costa del Mar",
        descripcion: "Hermosa casa en primera línea de playa con 4 habitaciones, 3 baños, piscina privada, y acceso directo a la playa.",
        imagen: "images/property1.jpg"
    },
    2: {
        nombre: "Apartamento en el Centro",
        precio: "$350,000 USD",
        ubicacion: "Centro de la Ciudad",
        descripcion: "Moderno apartamento en el corazón de la ciudad con 2 habitaciones, 1 baño, y excelentes vistas a la plaza principal.",
        imagen: "images/property2.jpg"
    },
    3: {
        nombre: "Villa de Lujo",
        precio: "$1,200,000 USD",
        ubicacion: "Colinas de Oro, Montaña Serena",
        descripcion: "Exclusiva villa de lujo con 5 habitaciones, 6 baños, piscina infinita, y una vista impresionante de las montañas.",
        imagen: "images/property3.jpg"
    }
};

// Obtener el ID de la propiedad desde la URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Verificar si la propiedad existe
if (propiedades[id]) {
    const propiedad = propiedades[id];
    document.getElementById('nombre-propiedad').textContent = propiedad.nombre;
    document.getElementById('precio-propiedad').textContent = propiedad.precio;
    document.getElementById('ubicacion-propiedad').textContent = propiedad.ubicacion;
    document.getElementById('descripcion-propiedad').textContent = propiedad.descripcion;
    document.getElementById('imagen-propiedad').src = propiedad.imagen;
} else {
    document.getElementById('detalle-propiedad').innerHTML = "<p>Propiedad no encontrada</p>";
}
