let activeSlideNumber = 1;
let arrowRight = document.querySelector('#arrow-right');
let arrowLeft = document.querySelector('#arrow-left');


let hideActiveSlide = () => {
    document.querySelector('.active').classList.remove('active');
};
let showSlide = (slideNumber) => {
    hideActiveSlide();
    document.querySelector('#slide'+slideNumber).classList.add('active');
}
let showNextSlide = () => {
    if(activeSlideNumber === 3) {
        activeSlideNumber = 1;
    } else {
        activeSlideNumber = activeSlideNumber + 1;
    }
    showSlide(activeSlideNumber);
};

let showPreviousSlide = () => {
    if(activeSlideNumber === 1) {
        activeSlideNumber = 3;
    } else {
        activeSlideNumber = activeSlideNumber - 1;
    }
    showSlide(activeSlideNumber);
}
for(let i = 1; i <= 3; i++){
    let ShowSlideI = () => {
        activeSlideNumber = i;
        showSlide(i); 
    }
    document.querySelector('#dot'+i).addEventListener('click', ShowSlideI);
}

arrowRight.addEventListener('click', showNextSlide);
arrowLeft.addEventListener('click', showPreviousSlide);

