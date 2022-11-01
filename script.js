const circleButton = document.querySelectorAll('.circle-switch');
const galleryCard = document.getElementById('gallery-card');


circleButton.forEach(elem => elem.addEventListener('click', () => {
    
    circleButton.forEach(elem => elem.classList.remove('circle-active'));
    
    if(!elem.classList.contains('circle-active')) {
        elem.classList.add('circle-active');
    }
    if(circleButton[0].classList.contains('circle-active')) {
        galleryCard.style.backgroundImage = "url(photos/photo1.jpg)";
        console.log(window.innerWidth)
    }
    else if(circleButton[1].classList.contains('circle-active')) {
        galleryCard.style.backgroundImage = "url(photos/photo2.jpg)";
    }
    else if(circleButton[2].classList.contains('circle-active')) {
        galleryCard.style.backgroundImage = "url(photos/photo3.jpg)";
    }
    else if(circleButton[3].classList.contains('circle-active')) {
        galleryCard.style.backgroundImage = "url(photos/photo4.jpg)";
    }
    else if(circleButton[4].classList.contains('circle-active')) {
        galleryCard.style.backgroundImage = "url(photos/photo5.jpg)";
    }
    if(circleButton[1].classList.contains('circle-active') & window.innerWidth<700) {
        galleryCard.style.backgroundSize = '100% 60%';
    }else if(circleButton[2].classList.contains('circle-active') & window.innerWidth<700) {
        galleryCard.style.backgroundSize = '100% 80%';
    }
    else {
        galleryCard.style.backgroundSize = '';
    }

}));



const uncover = document.getElementById('uncover');
const cover = document.getElementById('buttons-cover');

uncover.addEventListener('click', () => {
    uncover.style.display = 'none';
    cover.style.display = 'none';
})

const ham = document.getElementById('ham-container');
const navList = document.getElementById('nav-list');
const listItem = document.querySelectorAll('.list-item');

listItem.forEach(elem => elem.addEventListener('click', () =>{
    navList.classList.remove('display-fix')
    ham.classList.remove('open')
    body.style.overflowY = 'initial'
}))


const line = document.getElementById('gallery');
const span = document.getElementById('animation-span');
const title = document.getElementById('home-title');

window.onscroll = function () {animReset()};

function animReset() {

    if(window.pageYOffset > line.offsetTop) {
        span.style.animationFillMode = 'initial';
        span.style.animationName = 'none';
        title.style.animationFillMode = 'initial';
        title.style.animationName = 'none';
    }
    if(window.pageYOffset < line.offsetTop){
        span.style.animationName = '';
        span.style.animationFillMode = 'forwards';
        title.style.animationName = '';
        title.style.animationFillMode = 'forwards';
    }

    
}



ham.addEventListener('click', () => {

    if(!ham.classList.contains('open')) {
        ham.classList.add('open')
        navList.classList.add('display-fix')
        body.style.overflowY = 'hidden';
    }
    else if(ham.classList.contains('open')) {
        navList.classList.remove('display-fix')
        ham.classList.remove('open')
        body.style.overflowY = 'initial'
    }
})