
var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 50,
        shadowScale: 0.94,
    },
});

let cuboSwiper = document.querySelector('.cuboSwiper');
cuboSwiper.style.top = '-100%';
cuboSwiper.style.position = 'absolute';

let xpSound = document.createElement('audio');
xpSound.src = "media/xpMinecraft.mp3";
xpSound.setAttribute("preload", "auto");
xpSound.setAttribute("controls", "none");
xpSound.style.display = 'none';
document.body.appendChild(xpSound);



const deleteCube = ()=>{
    xpSound.play();
    let cube = document.querySelector('.cubeCofre');
    let telon = document.querySelector('#telon');
    telon.style.visibility = "visible";
    const banner = document.querySelector('.banner');
    for(let i=0; i<=400; i++){
        let blocks = document.createElement('div');
        blocks.classList.add('blocks');
        blocks.style.animationDelay = `${i*0.02}s`;
        banner.append(blocks);
    }

    setTimeout(() => {
        xpSound.remove();
        let load = document.createElement('div');
        load.classList.add('page');
        load.innerHTML = `
                                <span>Loading</span>
                                <div class="progress-bar">
                                    <div class="progress"></div>
                                </div>
                            `;
        document.body.append(load);
    }, 3500);
    
    setTimeout(() => {
        cube.remove();
        let container = document.querySelector('.containerHeart');
        container.style.visibility = "visible";
        let blocks = document.getElementsByClassName('blocks');
        for(let i=0; i<=400; i++){
            blocks[i].style.animation = `effectReverse ${Math.floor(Math.random() * 4)}s ease-in forwards`;
        }
        
        setTimeout(() => {
            let telon = document.getElementById('telon');
            telon.remove();
        }, 4000);
        let mine = document.querySelector('#mine');
        mine.volume = 0.6;
    }, 9000);
    setTimeout(() => {
        
        let load = document.querySelector('.page');
        load.remove();
        let banner = document.querySelector('.banner');
        banner.style.zIndex = 1000;

        let swiper = document.querySelector('.cuboSwiper');
        swiper.style.opacity = 1;
        swiper.style.zIndex = 50;
        swiper.style.removeProperty('position');
        swiper.style.removeProperty('top');
    }, 8500);
}
let catKiss = document.querySelector('#catKiss');
let mine = document.querySelector('#mine');
const catKissPlay = (e)=>{
    e.muted = false;
}
const catKissMuted = (e)=>{
    if(e!=null){
        e.muted = true;
    }else{
        catKiss.muted = true;
    }
}
const mineMuted = (e)=>{
    if(e!=null){
        e.muted = true;
    }else{
        mine.muted = true;
    }
}
const minePlay = (e)=>{
    e.muted = false;
}