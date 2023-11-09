const entradasFormularioFaleConosoco = document.querySelectorAll("[entrada-faleConosco]");
const alertaErroFomularioFaleConosco = document.querySelectorAll(".rodape__mensagemDeErro");
const formularioFaleConosco = document.querySelector("#formularioFaleConosco");



entradasFormularioFaleConosoco.forEach(campo =>{
    campo.addEventListener("blur", ()=>{        
        ValidarFormularioFaleConosco(campo, faleConoscoVerificarErros, faleConoscoMensagemErro,alertaErroFomularioFaleConosco);
    })

    campo.addEventListener("invalid", evento =>{
        evento.preventDefault();
        console.log(`O campo ${campo.name} não foi validado pelo sistema!`);
    })
});

formularioFaleConosco.addEventListener("submit", evento =>{
    evento.preventDefault();
    console.log("enviado");
    EnviarInformacaoFaleConosco(evento);
});

const faleConoscoMensagemErro = { // contem as mensagens de erros
    Nome:{
        valueMissing: "O campo de nome não pode ficar vazio!",
        tooShort: "O campo de nome deve ter no mínimo 2 caracteres!",
        tooLong: "O campo de nome não pode ter mais que 40 caracteres!"
    },
    Mensagem:{
        valueMissing: "O campo de mensagem não pode ficar vazio!",
        tooShort: "O campo de nome deve ter no mínimo 20 caracteres!",
        tooLong: "O campo de nome não pode ter mais que 140 caracteres!"
    }

}


const faleConoscoVerificarErros = {//contem os erros a serem verificados em cada campo
    Nome:[
        "valueMissing",
        "tooShort",
        "tooLong"
    ],
    Mensagem:[
        "valueMissing",
        "tooShort",
        "tooLong"
    ]
}



function ValidarFormularioFaleConosco(campo, erros, mensagensErros, saidaErros){
    let index;

    if(campo.name == "Nome"){
        index = 0;
    }
    else if(campo.name == "Mensagem"){
        index = 1;
    }

    saidaErros[index].innerText ="";

    erros[campo.name].forEach(erro =>{        
        if(campo.validity[erro])
        {
            saidaErros[index].innerText = mensagensErros[campo.name][erro] ;                      
        }        
    });
}

function EnviarInformacaoFaleConosco(evento){
    const informacoes ={
        "Nome": evento.target.elements["Nome"].value,
        "Mensagem": evento.target.elements["Mensagem"].value
    }
    localStorage.setItem("FaleConosco", JSON.stringify(informacoes));
    window.alert("Informações enviadas com sucesso!");
}



