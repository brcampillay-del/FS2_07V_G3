 document.addEventListener("DOMContentLoaded", function() {

 const formulario = document.getElementById("formRegistro");
 if(formulario){
    formulario.addEventListener("submit", function(e){
    e.preventDefault();
        const nombre= document.getElementById("nombre").value.trim();
        const password= document.getElementById("password").value.trim();
        const correo= document.getElementById("correo").value.trim();
        const edadStr= document.getElementById("edad").value.trim();
        const edad = parseInt(edadStr);
        const mensajeSistema = document.getElementById("errorRegistro");

        mensajeSistema.className= "mt-3 text-center fw-bold";
        mensajeSistema.style.color = "";
        
        if (nombre === "" || password === "" || correo === "" || edadStr === ""){
                mensajeSistema.textContent = "Error: Debes ingresar tu nombre, password, correo y edad";
                mensajeSistema.classList.add("text-danger");
                return;
            }
        if (password.length < 6){
            mensajeSistema.textContent ="Error: La contraseña debe tener al menos 6 caracteres";
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
        
       if (correo.includes("@duocuc.cl")) {
             mensajeSistema.textContent = "Formulario correcto. ¡Tienes 20% de descuento!";
                mensajeSistema.style.color = "#39FF14";
        }
        else
        {
        mensajeSistema.textContent = "Registro exitoso! Conseguiste 400 coins de la tienda";
        mensajeSistema.style.color = "#39FF14"; 

        formulario.reset();}




    });
 }
 
});