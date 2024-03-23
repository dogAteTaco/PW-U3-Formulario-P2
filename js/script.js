document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");
    const mensajeEnvio = document.getElementById("mensajeEnvio");
 

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
 

        // Obtener los valores de los campos
        const id = formulario.id.value;
        const nombre = formulario.nombre.value;
        const apellidos = formulario.apellidos.value;
        const telefono = formulario.telefono.value;
        const correo = formulario.correo.value;
        const edad = formulario.edad.value;
        const fechaNacimiento = formulario.fechaNacimiento.value;
		mensajeEnvio.style.visibility = "hidden";

		// Reinicia los estados de validez para no mostrar mensaje de error si no se volvio a validad el campo
		document.getElementById("id").className = "form-control";
		document.getElementById("nombre").className = "form-control";
		document.getElementById("apellidos").className = "form-control";
		document.getElementById("telefono").className = "form-control";
		document.getElementById("correo").className = "form-control";
		document.getElementById("edad").className = "form-control";
		document.getElementById("fechaNacimiento").className = "form-control";


        // Validar ID (5 dígitos exactos)
        if (!/^\d{5}$/.test(id)) {
			document.getElementById("id").className = "form-control is-invalid";
            return;
        }
		else{
			document.getElementById("id").className = "form-control is-valid";
		}
 

        // Validar nombre (no puede estar vacío)
        if (nombre.trim() === "" ) {
            document.getElementById("nombre").className = "form-control is-invalid";
            return;
        }
		else{
			document.getElementById("nombre").className = "form-control is-valid";
		}

		// Validar apellidos (no puede estar vacío)
        if (apellidos.trim() === "") {
            document.getElementById("apellidos").className = "form-control is-invalid";
            return;
        }
		else{
			document.getElementById("apellidos").className = "form-control is-valid";
		}
 
		//(686)123-4567
        // Validar teléfono (###)###-####
        if (!/^\(\d{3}\)\d{3}-\d{4}$/.test(telefono)) {
            
            document.getElementById("telefono").className = "form-control is-invalid";
            return;
        }
		else{
			document.getElementById("telefono").className = "form-control is-valid";
		}
 

        // Validar correo electrónico
        if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(correo)) {
            document.getElementById("correo").className = "form-control is-invalid";
            return;
        }
		else{
			document.getElementById("correo").className = "form-control is-valid";
		}
 

        // Validar edad (número positivo)
        const edadNum = parseInt(edad);
        if (isNaN(edadNum) || edadNum <= 0) {
            document.getElementById("edad").className = "form-control is-invalid";
            return;
        }
		else{
			document.getElementById("edad").className = "form-control is-valid";
		}
 

        // Validar fecha de nacimiento (AAAA-MM-DD)
        if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaNacimiento)) {
            document.getElementById("fechaNacimiento").className = "form-control is-invalid";
            return;
        }
		else{
			document.getElementById("fechaNacimiento").className = "form-control is-valid";
		}
 

        // Si todas las validaciones pasaron, puedes enviar el formulario o realizar otras acciones aquí
        mensajeEnvio.textContent = "Formulario enviado con éxito.";
		mensajeEnvio.style.visibility = "visible";

        // Crear un objeto con los datos del envío
        const envio = {
            id,
            nombre,
            apellidos,
            telefono,
            correo,
            edad,
            fechaNacimiento
        };
        // Obtener o inicializar un arreglo de envíos (puedes usar el almacenamiento local para mantener los envíos)
        const envios = JSON.parse(localStorage.getItem("envios")) || [];
        // Agregar el nuevo envío al arreglo
        envios.push(envio);
        // Guardar el arreglo actualizado en el almacenamiento local
        localStorage.setItem("envios", JSON.stringify(envios));
        // Redireccionar a la página de resultados
        window.location.href = "resultados.html";
    });
});