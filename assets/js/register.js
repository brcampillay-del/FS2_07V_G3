 document.addEventListener("DOMContentLoaded", function() {

 const formulario = document.getElementById("formRegistro");
 if(formulario){
    formulario.addEventListener("submit", function(e){
    e.preventDefault();
        const nombre= document.getElementById("nombre").value.trim();
        const rut= document.getElementById("rut").value.trim();
        const correo= document.getElementById("correo").value.trim();
        const edadStr= document.getElementById("edad").value.trim();
        const edad = parseInt(edadStr);
        const mensajeSistema = document.getElementById("errorRegistro");

        mensajeSistema.className= "mt-3 text-center fw-bold";
        mensajeSistema.style.color = "";
        
        if (nombre === "" || rut === "" || correo === "" || edadStr === ""){
                mensajeSistema.textContent = "Error: Debes ingresar tu nombre, RUT, correo y edad";
                mensajeSistema.classList.add("text-danger");
                return;
            }

        if (!correo.includes("@")){
                mensajeSistema.textContent = "Error: Debes ingresar un correo valido (debe contener @)";
                mensajeSistema.classList.add("text-danger");
                return;
            }

        if (isNaN(edad) || edad<18){
                mensajeSistema.textContent = "Acceso denegado: Debes ser mayor de 18 años";
                mensajeSistema.classList.add("text-danger");
                return;
            }
        
        mensajeSistema.textContent = "Registro exitoso! Conseguiste 400 coins de la tienda";
        mensajeSistema.style.color = "#39FF14"; 

        formulario.reset();




    });
 }
 
});