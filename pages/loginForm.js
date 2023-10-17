const entradasFormularioLogin = document.querySelectorAll("[required]");


entradasFormularioLogin.forEach(campo =>{
    campo.addEventListener("blur", ()=> {
        ValidarCampo(campo);
        console.log(campo.validity); // teste pode apagar
    })

    campo.addEventListener("invalid", evento =>{
        evento.preventDefault();
        console.log(`O campo com de nome ${campo.name} não foi validado pelo sistema`);
    });
})

const VerificarErros = [
    'valueMissing',
    'toShort',
    'patternMismatch'
]

const mensagensErro = {
    Email:{
        valueMissing: "O campo de email não pode ficar vazio.",
        tooShort: "O campo de email possui pouco caracteres.",
        patternMismatch: "A informação inserida não correponde a um email válido."
    },
    Senha:{
        valueMissing: "O campo de senha não pode ficar vazio.",
        tooShort: "O campo de senha possui pouco caracteres.",
        patternMismatch: "A informação inserida não correponde a uma senha segura."
    }
}


function ValidarCampo(campo){
    let mensagem = "";
    VerificarErros.forEach( erro =>{
        if(campo.validity[erro]){
            window.alert(mensagensErro[campo.name][erro]);
        }
    } )
}