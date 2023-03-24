const menu = document.querySelectorAll('button');
const equipamento = document.querySelector('.infos h3');
const info = document.querySelector('.infos p');
const imagem = document.querySelector('.right .img img')

const infos = [
    {
        equipamento: 'Launch vehicle',
        info: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        imagem: '../assets/technology/image-launch-vehicle-portrait.jpg'
    },
    {
        equipamento: "Space capsule",
        info: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained",
        imagem: '../assets/technology/image-space-capsule-portrait.jpg'
    },
    {
        equipamento: "Spaceport",
        info: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        imagem: '../assets/technology/image-spaceport-portrait.jpg'
    }
]

function alterarInfo(numeroClicado, botao){
    menu.forEach(e=>{
        e.classList.remove('circle-active');
    })
    botao.classList.add('circle-active')

    equipamento.innerHTML = infos[numeroClicado].equipamento;
    info.innerHTML = infos[numeroClicado].info;
    imagem.src = infos[numeroClicado].imagem;
}


menu.forEach((e)=>{
    e.addEventListener('click', e=> alterarInfo(e.target.innerHTML -1, e.target));
});
