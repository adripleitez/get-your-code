function register(){
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let password1 = document.getElementById('password1')
    let name = document.getElementById('name')

    console.log(email.value,password.value,password1.value,name.value)

    if (email.value != "" && name.value  !="" && password.value !=""){

        if(password.value == password1.value){

          firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
          .then(() => {
            firebase.auth().currentUser.updateProfile({displayName: name.value});
          }).then(()=>{
            firebase.auth().currentUser.sendEmailVerification()
          }).then(()=>{
            alert("Se ha enviado un enlace de verificacion a su correo")
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage);
          });
    
        }else{
          alert("Las contraseñas no coinciden")
        }

    }else{
      alert("Se deben completar todos los campos")
        firebase.auth().onAuthStateChanged((user)=>{
        console.log(user.displayName,user.email,user.emailVerified);
      })
      
    }

}

