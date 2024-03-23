// scriptResultados.js (en la página "resultados.html")
document.addEventListener("DOMContentLoaded", function() {
    //Se ejecuta el método de carga de los resultados
    cargarResultados();
    const botonBorrar = document.getElementById("botonBorrar");

    botonBorrar.addEventListener("click", function(event) {
        event.preventDefault();
        //Limpia el local storage
        localStorage.clear();
        //Ejecuta la carga de los resultados de nuevo
        cargarResultados();
    });
});

//Método para cargar los resultados
function cargarResultados(){
    const tablaResultados = document.getElementById("tablaResultados");
      // Obtener los envíos almacenados en el almacenamiento local
    const envios = JSON.parse(localStorage.getItem("envios")) || [];
    //Elimina las filas de la tabla
    tablaResultados.innerHTML = "";
     // Recorrer los envíos y agregar filas a la tabla
     envios.forEach((envio) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${envio.id}</td>
            <td>${envio.nombre}</td>
            <td>${envio.apellidos}</td>
            <td>${envio.telefono}</td>
            <td>${envio.correo}</td>
            <td>${envio.edad}</td>
            <td>${envio.fechaNacimiento}</td>
        `;
        tablaResultados.appendChild(fila);
    });
}
