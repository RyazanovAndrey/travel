const iconPlay = document.querySelector('.icon-play')
const popupVideo = document.querySelector('.popup-video')
const closeBtn = document.querySelectorAll('.close-btn')
const bodyBox = document.body
const headerBox = document.querySelector('.header')

const currentPadding = window.innerWidth - document.documentElement.clientWidth

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

