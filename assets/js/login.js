document.addEventListener("DOMContentLoaded", function() {
    const formLogin = document.getElementById("formLogin");

    if(formLogin){
        formLogin.addEventListener("submit", function(e) {
        e.preventDefault(); 

        const correo = document.getElementById("correoLogin").value.trim();
        const password = document.getElementById("passwordLogin").value.trim();
        const errorP = document.getElementById("errorLogin");

        errorP.className = "text-danger text-center mt-3 fw-bold";
        errorP.style.color = "";

        if(correo === ""){
            errorP.textContent = "Error: Debe ingresar un correo.";
            return;
        }
        if(password === ""){
            errorP.textContent = "Error: Debe ingresar una contraseña.";
            return;
        }

        if(correo === "admin@duocuc.cl" && password === "admin123"){
            errorP.style.color = "#39FF14";
            errorP.textContent = "Acceso de administrador concedido! Redirigiendo al panel...";
                
            setTimeout(function() {
                window.location.href = "admin_products_list.html";
            }, 800);
            return; 
        }

            
        const esCorreoValido = correo.includes("@") && (correo.endsWith(".com") || correo.endsWith(".cl"));
            
        if (!esCorreoValido) {
            errorP.textContent = "Error: Debe seleccionar un correo válido.";
            return;
        }


        errorP.style.color = "#39FF14"; 
        errorP.textContent = "Sesión iniciada con éxito! Bienvenido a Level-Up Gamer.";

        formLogin.reset();
        });
    }
});