const entradasFormularioLogin = document.querySelectorAll("[required]");

console.log(entradasFormularioLogin[1].value.length);

entradasFormularioLogin.forEach(campo =>{
    campo.addEventListener("blur", ()=> {
        ValidarCampo(campo);
    })

    campo.addEventListener("invalid", evento =>{
        evento.preventDefault();
        console.log(`O campo com de nome ${campo.name} não foi validado pelo sistema`);
    });
})


function ValidarCampo(campo){
    if(campo.name == "Email" && campo.value.length >= 7){
        console.log("vamos validar a entrada de Email");//apagar e criar função para validar email
    }

    if(campo.name == "Senha" && campo.value.length >= 8){
        console.log("vamos validar a entrada de Senha"); // apagar e criar para validar senha
    }
}