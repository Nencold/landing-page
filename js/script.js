
//Активация меню бургера при нажатии
document.querySelector('.header__burger').onclick = function () {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
}

// добавляем иконки кнопкам 
function btnImages (){
    let img = document.createElement('img');
    let imgArrow = document.createElement('img');
    img.setAttribute('src', './images/icon/play-circle.svg');
    imgArrow.setAttribute('src', './images/icon/arrow.svg');
    document.querySelector('.btn-play').prepend(img);
    document.querySelector('.btn-read-more').append(imgArrow);
}
btnImages();

//показать/скрыть текст
document.querySelector('.btn-read-more').onclick = function(){
    document.querySelector('.our-services__text').classList.toggle('active');
    document.querySelector('.btn-read-more').classList.toggle('active');

}


//заполняем our services menu
let menuBlockContent = [
    {
        id: 'soc-media',
        bg: '#377DFF',
        src: './images/services menu/soc-media.svg',
        text: 'Social Media Management'
    },
    {
        id: 'engine',
        bg: '#FF2D2D',
        src: './images/services menu/engine.svg',
        text: 'Search Engine Optimization'
    },
    {
        id: 'design',
        bg: '#7CE761',
        src: './images/services menu/design.svg',
        text: 'Design'
    },
    {
        id: 'ads',
        bg: '#FFA800',
        src: './images/services menu/ads.svg',
        text: 'Ads'
    },
    
]
function ourServicesMenu(){
let menuBlock = document.querySelectorAll('.menu__block');
for(let i = 0; i < menuBlock.length; i++){
    let div = document.createElement('div');
    div.classList.add('menu__block-img');
    let img = document.createElement('img');
    let h4 = document.createElement('h4');
    
        for(let l = 0; l < menuBlockContent.length; l++){
            if(menuBlock[i].dataset.id == menuBlockContent[l].id){
                div.style.background = menuBlockContent[l].bg;
                img.setAttribute('src', menuBlockContent[l].src);
                h4.textContent = menuBlockContent[l].text;
            }
        }

    div.prepend(img);
    menuBlock[i].prepend(div);
    menuBlock[i].append(h4);
}
}
ourServicesMenu();

//при нажатии на блок с комментарием показываем скрытый тексе
let testimonialBlocks = document.querySelectorAll('.testimonial__block');
for(let i = 0; i < testimonialBlocks.length; i++){
    testimonialBlocks[i].addEventListener('click', (e) => {
        e.target.closest('.testimonial__block').childNodes[3].classList.toggle('active');  
    })
}

//смена фона по нажатию
//меняем кнопки
function lightOrDarkBtns (){
    let btns1 = Array.from(document.querySelectorAll('.button1')).map(function(item){
        item.classList.toggle('dark');
    });

    let btns2 = Array.from(document.querySelectorAll('.button2')).map(function (item){
        item.classList.toggle('dark');
    })
    let btn3 = Array.from(document.querySelectorAll('.btn-read-more')).map(function (item){
        item.classList.toggle('dark');
        item.childNodes[1].removeAttribute('src');
        if(item.classList.contains('dark')){
            item.childNodes[1].setAttribute('src', './images/icon/arrow-dark.svg');
        } else{
            item.childNodes[1].setAttribute('src', './images/icon/arrow.svg');
        }
    })
    let btns4 = Array.from(document.querySelectorAll('.btn-play')).map(function (item){
        item.childNodes[0].removeAttribute('src');
        if(item.classList.contains('dark')){
            item.childNodes[0].setAttribute('src', './images/icon/play-circle-dark.svg');
        } else{
            item.childNodes[0].setAttribute('src', './images/icon/play-circle.svg');
        }
    })
}


function lightOrDarkContent(){
    document.querySelector('.header').classList.toggle('dark');
    let headerLogo = document.querySelector('.header__img a img');
    headerLogo.classList.toggle('dark');
    headerLogo.removeAttribute('src');
    if(headerLogo.classList.contains('dark')){
        headerLogo.setAttribute('src', './images/logo/Group-dark.svg')
    } else {
        headerLogo.setAttribute('src', './images/logo/Group.svg')
    }
}


function lightOrDark () {
    document.querySelector('body').classList.toggle('dark');
    lightOrDarkBtns();
    lightOrDarkContent();
}

document.querySelector('#background-switcher').addEventListener('click', lightOrDark);
