import IrPaginaLogin from './scripts/IrPaginaLogin.js';

const HomeBotaoLogin = document.querySelector('#botaoLogin');

HomeBotaoLogin.addEventListener('click', evento =>{
    evento.preventDefault();
    IrPaginaLogin();
})

