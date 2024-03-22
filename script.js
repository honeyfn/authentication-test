document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("Usuario autenticado:", user);
            // Aquí puedes redirigir a otra página o mostrar un mensaje de éxito
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error al autenticar:", errorMessage);
            // Aquí puedes mostrar un mensaje de error al usuario
        });
});
