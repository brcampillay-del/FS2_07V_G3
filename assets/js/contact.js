document.addEventListener("DOMContentLoaded", function() {
const btnEnviar = document.getElementById("btnEnviarContacto");
const formContact = document.getElementById("formContactoNuevo");

if (btnEnviar && formContact) {
    btnEnviar.addEventListener("click", function() {

        const nombre = document.getElementById("nombreContacto").value.trim();
        const correo = document.getElementById("correoContacto").value.trim();
        const telefono = document.getElementById("telefonoContacto").value.trim();
        const tipoConsulta = document.getElementById("tipoConsulta").value;
        const productoInteres = document.getElementById("productoInteres").value;
        const cantidad = document.getElementById("cantidad").value.trim();
        const mensaje = document.getElementById("mensajeContacto").value.trim();
        const mensajeError = document.getElementById("errorContactoNuevo");

    mensajeError.className = "text-center mt-3 mb-0 fw-bold text-danger";
    mensajeError.style.color = "#ff4d4d";

    if (nombre === "" || correo === "" || telefono === "" || mensaje === "") {
        mensajeError.textContent = "Error: Por favor, completa los campos obligatorios.";
        return;
     }

    if (tipoConsulta === "") {
        mensajeError.textContent = "Error: Debes seleccionar un tipo de consulta.";
        return;
    }

    if (productoInteres === "") {
        mensajeError.textContent = "Error: Debes seleccionar un producto de interés.";
        return;
    }

    if (!correo.includes("@")) {
        mensajeError.textContent = "Error: El correo electrónico debe contener un '@'.";
        return;
    }

    if (cantidad !== "" && parseInt(cantidad) <= 0) {
        mensajeError.textContent = "Error: La cantidad debe ser mayor a 0.";
        return;
    }

    mensajeError.style.color = "#39FF14"; 
    mensajeError.textContent = "Consulta enviada con exito! Nos pondremos en contacto pronto.";
            
        formContact.reset();
        });
    }
});