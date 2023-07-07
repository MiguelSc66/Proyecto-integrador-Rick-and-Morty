
// // Función auxiliar para validar el formato del email utilizando una expresión regular
// function isValidEmail(email) {
//   // Expresión regular para validar el email
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

// // Función auxiliar para validar la contraseña
// function isValidPassword(password) {
//   // Validar que la contraseña tenga al menos un número y una longitud entre 6 y 10 caracteres
//   const passwordRegex = /^(?=.*\d).{6,10}$/;
//   return passwordRegex.test(password);
// }


export function validate(input) {
    let error = {};
    const regeexEmail = /\S+@\S+\.\S+/;
    const regexPassword = new RegExp("[0-9]");

    if(!regeexEmail.test(input.email)) {
        error.email = "Debes ingresar un email valido!"
    }
    if(!input.email) {
        error.email = "Debes ingresar un email valido"
    }
    if(input.email.length > 35) {
        error.email = 'Tu email debe ser menor a 35 caractéres'
    }
    if (!regexPassword.test(input.password)) {
        error.password = "Password debe tener al menos un numero"
    }
    if(input.password.length < 6 || input.password.length > 10) {
        error.password = "Contraseña entre 6 y 10 caracteres!!"
    }
    return error;
//   // Validación del email
//   if (!userData.email) {
//     errors.email = "El email no puede estar vacío";
//   } else if (!isValidEmail(userData.email)) {
//     errors.email = "El email no es válido";
//   } else if (userData.email.length > 35) {
//     errors.email = "El email no puede tener más de 35 caracteres";
//   }

//   // Validación de la contraseña
//   if (!userData.password) {
//     errors.password = "La contraseña no puede estar vacía";
//   } else if (!isValidPassword(userData.password)) {
//     errors.password = "La contraseña no cumple los requisitos";
//   }

//   return errors;
}

