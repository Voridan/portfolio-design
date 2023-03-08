const burgerMenu = document.querySelector('.menu-header__burger')
burgerMenu.addEventListener("click", e => {
    burgerMenu.classList.toggle('active')
    document.querySelector('.menu-header__body').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
});

function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}
ibg();

//DA
const parentOriginal = document.querySelector('.introduction-main__container');
const parent = document.querySelector('.header__container');
const item = document.querySelector('.introduction-main__image');

window.addEventListener('resize', e => {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewportWidth <= 500) {
        if (!item.classList.contains('done')) {
            parent.insertBefore(item, parent.children[2]);
            item.classList.add('done');
            item.classList.remove('ibg');
        }
    } else {
        if (item.classList.contains('done')) {
            parentOriginal.append(item);
            item.classList.remove('done');
            item.classList.add('ibg');
        }
    }
});