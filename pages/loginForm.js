import IrPaginaAdministrador from "../scripts/IrPaginaAdministrador.js";

const entradasFormularioLogin = document.querySelectorAll("[required]");
const formularioLogin = document.querySelector("#formularioLogin");


entradasFormularioLogin.forEach(campo =>{
    campo.addEventListener("blur", ()=> {
        ValidarCampo(campo);        
    })

    campo.addEventListener("invalid", evento =>{
        evento.preventDefault();
        console.log(`O campo de nome ${campo.name} não foi validado pelo sistema`);
    });    
})

formularioLogin.addEventListener('submit', evento =>{
    evento.preventDefault();    
    
    EnviarInformacao(evento);
    IrPaginaAdministrador();
});

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

function EnviarInformacao(evento){
    const listaInformacoes = {
        "email": evento.target.elements["Email"].value,
        "senha": evento.target.elements["Senha"].value
    }
    
    localStorage.setItem("usuario", JSON.stringify(listaInformacoes)); // manda para o storange mas podia mandar para um banco de dados
}