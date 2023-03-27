const botoes = document.querySelectorAll('button');
const cargo = document.getElementById('cargo');
const nome = document.getElementById('nome');
const texto = document.getElementById('texto');
const imagem = document.querySelector('#img');

const astronautas = [
    {
        id: 'um',
        cargo: 'Flight Engineer',
        nome: 'Anousheh Ansari',
        texto:
            'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
        imagem: '../assets/crew/image-anousheh-ansari.png',
    },
    {
        id: 'dois',
        cargo: 'Pilot',
        nome: 'Victor Glover',
        texto:
            'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
        imagem: '../assets/crew/image-victor-glover.png',
    },
    {
        id: 'tres',
        cargo: 'Commander',
        nome: 'Douglas Hurley',
        texto:
            'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        imagem: '../assets/crew/image-douglas-hurley.png',
    },
    {
        id: 'quatro',
        cargo: 'Mission Specialist',
        nome: 'Mark Shuttleworth',
        texto:
            'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        imagem: '../assets/crew/image-mark-shuttleworth.png',
    },
];

let currentIndex = 0;
let timeoutId;

function mostrarAstronauta(index) {
    const astronauta = astronautas[index];
    cargo.innerHTML = astronauta.cargo;
    nome.innerHTML = astronauta.nome;
    texto.innerHTML = astronauta.texto;
    imagem.src = astronauta.imagem;
    botoes[currentIndex].classList.remove('slide-active');
    botoes[index].classList.add('slide-active');
    currentIndex = index;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        mostrarProximoAstronauta();
    }, 6000);
}

function mostrarProximoAstronauta() {
    const proximoIndex = (currentIndex + 1) % astronautas.length;
    mostrarAstronauta(proximoIndex);
}

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        mostrarAstronauta(index);
    });
});

mostrarAstronauta(currentIndex);

