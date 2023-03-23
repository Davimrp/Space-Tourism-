const menu = document.querySelectorAll('.menu');
const planetaImg = document.querySelector('.left img');

function atualizarConteudo(planeta, clicado) {
    const nomePlaneta = document.getElementById('nomePlaneta');
    const descricaoPlaneta = document.getElementById('descricaoPlaneta');
    const avgDistance = document.querySelector('.avg-distance span');
    const estTravelTime = document.querySelector('.est-travel span');

    nomePlaneta.innerHTML = planeta.nome;
    descricaoPlaneta.innerHTML = planeta.descricao;
    avgDistance.innerHTML = planeta.distanciaMedia;
    estTravelTime.innerHTML = planeta.tempoViagem;
    planetaImg.src = planeta.img

    menu.forEach(e=> e.classList.remove('menu-active'));
    clicado.classList.add('menu-active');
}

function inicializarMenu() {
    const planetas = {
        europa: {
            nome: 'Europa',
            descricao: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
            distanciaMedia: '628 mil. km',
            tempoViagem: '3 years',
            img: '../../assets/destination/image-europa.png'
        },
        titan: {
            nome: 'Titan',
            descricao: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
            distanciaMedia: '1.4 bilhão km',
            tempoViagem: '7 years',
            img: '../../assets/destination/image-titan.png'
        },
        mars: {
            nome: 'Mars',
            descricao: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
            distanciaMedia: '78.3 milhões km',
            tempoViagem: '9 months',
            img: '../../assets/destination/image-mars.png'
        },
        moon: {
            nome: 'Moon',
            descricao: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
            distanciaMedia: '384,400 km',
            tempoViagem: '3 days',
            img: '../../assets/destination/image-moon.png'
        },
    };

    menu.forEach((itemMenu) => {
        const nomePlaneta = itemMenu.innerText.toLowerCase();
        const planeta = planetas[nomePlaneta];

        itemMenu.addEventListener('click', () => {
            atualizarConteudo(planeta, itemMenu);
        });
    });

}

inicializarMenu();
