const iconPlay = document.querySelector('.icon-play')
const popupVideo = document.querySelector('.popup-video')
const closeBtn = document.querySelectorAll('.close-btn')
const bodyBox = document.body
const headerBox = document.querySelector('.header')

const nextBtn = document.querySelector('.next-btn')
const sliderPromo = document.querySelector('.slider-promo')
const sliderPromoTitle = document.querySelector('.slider-promo-title')
const sliderPromoText = document.querySelector('.slider-promo-text')

const currentPadding = window.innerWidth - document.documentElement.clientWidth

let countSlider = 1
const sliderInfo = {
    "1" : {title: 'Озеро Синевир', sub : "Краєвиди навколо водного дзеркала напрочуд величні та мальовничі. Стрімкі схили вкриті ялинами, вік яких сягає 140-160 років."},
    "2" : {title: "Шацькі озера", sub: "У межиріччі Прип’яті та Західного Бугу є 30 водосховищ, які називаються Шацькими озерами."},
    "3" : {title: "Дністровський каньйон", sub : "Дивовижну місцевість з яскравими та пишними ландшафтами утворює річка Дністер між гирлами річок Золота Липа та Збруч."}
}

// Show/Hide video in popup

iconPlay.addEventListener('click', () => {
    showVideo(true)
})

closeBtn.forEach(item => {
    item.addEventListener('click', (event) => {
        if(event.target.matches('.close-btn')) {
            showVideo(false)
        }
    })
})

function showVideo(values) {
    popupVideo.classList.toggle('open', values)
    bodyBox.style.paddingRight = values ? currentPadding + 'px' : '0px'
    bodyBox.style.overflow = values ? 'hidden' : ''
}

// ------------------------------------------------


// Header blur

window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY
    
    if(currentScroll > headerBox.offsetHeight) {
        headerBox.classList.add('line-blur')
    }else {
        headerBox.classList.add('line-blur')
    }
})

// ------------------------------------------------

// Slider animation

nextBtn.addEventListener('click', () => {

    if(countSlider == 3) {
        countSlider = 1
    }else {
        countSlider++
    }

    sliderPromoTitle.textContent = sliderInfo[countSlider].title
    sliderPromoText.textContent = sliderInfo[countSlider].sub


    sliderPromo.style.background = `url('../../assets/image/slider-img-${countSlider}.jpg')`
})