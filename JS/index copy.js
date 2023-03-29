

const botaoMenu = document.querySelector('.fa-bars');
const menuMobile = document.querySelector('.menu-mobile-active');
const botaoSairMenu = document.getElementById('sair-menu')


function abrirMenu(){
    menuMobile.style.display = 'flex'
    document.querySelector('main').style.display = 'none';
    botaoMenu.style.opacity = '0';
}
botaoMenu.addEventListener('click', abrirMenu)


function fecharMenu(){
    menuMobile.style.display = 'none'
    document.querySelector('main').style.display = 'flex';
    botaoMenu.style.opacity = '1';
}
botaoSairMenu.addEventListener('click', fecharMenu)