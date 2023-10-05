const loginEmail = document.querySelector('#formularioDeLogin__entradaEmail');
const enviarLogin = document.querySelector('#enviarLogin')
//--------testes-------//
enviarLogin.addEventListener('click', evento=>{
    evento.preventDefault();

    console.log(loginEmail.validity);
    console.log(loginEmail.validity.tooShort);
    console.log(loginEmail.validity.tooLong);

    if(loginEmail.validity.tooShort){
        console.log("tem menos de 5 caracteres");
    } 
    else if(loginEmail.validity.tooLong){
        console.log("ha mais caracteres do que o permitido");
    }

    
})

