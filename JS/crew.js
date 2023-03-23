const botoes = document.querySelectorAll('button')
const cargo = document.getElementById('cargo');
const nome = document.getElementById('nome');
const texto = document.getElementById('texto');
const imagem = document.querySelector('#img');
const infos = {
    um: {
        cargo: 'Flight Engineer',
        nome: 'Anousheh Ansari',
        texto: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
    },
    dois: {
        cargo: 'Pilot',
        nome: 'Victor Glover',
        texto: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
    },
    tres: {
        cargo: 'Commander',
        nome: 'Douglas Hurley',
        texto: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
    },
    quatro: {
        cargo: 'Mission Specialist',
        nome: 'Mark Shuttleworth',
        texto: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
    }
}

function alterarInfos(slideClicado){

    botoes.forEach((e)=>{
        e.classList.remove('slide-active')
    })
    slideClicado.classList.add('slide-active')

    if(slideClicado.id == 'um') slideUm(cargo, nome, texto, imagem)
    if(slideClicado.id == 'dois') slideDois(cargo, nome, texto, imagem)
    if(slideClicado.id == 'tres') slideTres(cargo, nome, texto, imagem)
    if(slideClicado.id == 'quatro') slideQuatro(cargo, nome, texto, imagem)
}

function slideUm(cargo, nome, texto, imagem){
    botoes.forEach((e)=>{
        e.classList.remove('slide-active')
    })
    document.getElementById('um').classList.add('slide-active');

    cargo.innerHTML = infos.um.cargo;
    nome.innerHTML = infos.um.nome;
    texto.innerHTML = infos.um.texto;
    imagem.src = '../assets/crew/image-anousheh-ansari.png';
    
    setTimeout(() => {
        slideDois(cargo, nome, texto, imagem)
    }, 6000);
}

function slideDois(cargo, nome, texto, imagem){
    botoes.forEach((e)=>{
        e.classList.remove('slide-active')
    })
    document.getElementById('dois').classList.add('slide-active');

    cargo.innerHTML = infos.dois.cargo;
    nome.innerHTML = infos.dois.nome;
    texto.innerHTML = infos.dois.texto;
    imagem.src = '../assets/crew/image-victor-glover.png';

    setTimeout(() => {
        slideTres(cargo, nome, texto, imagem)
    }, 6000);
}
function slideTres(cargo, nome, texto, imagem){
    botoes.forEach((e)=>{
        e.classList.remove('slide-active')
    })
    document.getElementById('tres').classList.add('slide-active');

    cargo.innerHTML = infos.tres.cargo;
    nome.innerHTML = infos.tres.nome;
    texto.innerHTML = infos.tres.texto;
    imagem.src = '../assets/crew/image-douglas-hurley.png';

    setTimeout(() => {
        slideQuatro(cargo, nome, texto, imagem)
    }, 6000);
}
function slideQuatro(cargo, nome, texto, imagem){
    botoes.forEach((e)=>{
        e.classList.remove('slide-active')
    })
    document.getElementById('quatro').classList.add('slide-active');

    cargo.innerHTML = infos.quatro.cargo;
    nome.innerHTML = infos.quatro.nome;
    texto.innerHTML = infos.quatro.texto;
    imagem.src = '../assets/crew/image-mark-shuttleworth.png';

    setTimeout(() => {
        slideUm(cargo, nome, texto, imagem)
    }, 6000);
}


botoes.forEach((e)=>{
    e.addEventListener("click", e=> alterarInfos(e.target))
})
slideUm(cargo, nome, texto, imagem);
