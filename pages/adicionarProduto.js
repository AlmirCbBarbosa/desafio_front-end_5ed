const entradasFormularioAdicionarProduto = document.querySelectorAll("[required][entrada-adicionarProdutos]");

entradasFormularioAdicionarProduto.forEach( campo =>{
    campo.addEventListener("blur", ()=>{
       validarCampo(campo, verificarErros, mensagensErro);
       
    });
});

const verificarErros ={ // erros a serem verificados por cada campo
    Imagem:[
        "valueMissing",
        "tooShort"

    ],
    Categoria:[
        "valueMissing",
        "tooShort"
    ],
    Nome:[
        "valueMissing",
        "tooShort"
        
    ],
    Preco:[
        "valueMissing"
    ],
    Descricao:[
        "valueMissing",
        "tooShort",
        "tooLong"
    ]
};



const mensagensErro ={
    Imagem:{
        valueMissing:"O campo url não pode ficar vazia!" ,
        tooShort:"O campo de url deve ter no mínimo 5 caracteres!"

    },
    Categoria:{
        valueMissing:"O campo Categoria não pode ficar vazio!",
        tooShort: "O campo Categoria deve ter no mínimo 2 caracteres!"
    },
    Nome:{
        valueMissing:"O campo de Nome não pode ficar vazio!",        
        tooShort: "O campo de Nome deve ter no mínimo 2 caracteres!"        
    },
    Preco:{
        valueMissing:"O campo Preço não pode ficar vazio!"
    },
    Descricao:{
        valueMissing:"O campo Descrição não pode ficar vazio!",
        tooShort:"O campo Descrição deve ter no mínimo 10 caracteres"
    }
};

function validarCampo(campo, erros, mensagemDeErro){    
    campo.nextElementSibling.innerText = "";
    erros[campo.name].forEach(erro =>{
        if(campo.validity[erro]){
            campo.nextElementSibling.innerText = mensagemDeErro[campo.name][erro];
        };
    });   
};