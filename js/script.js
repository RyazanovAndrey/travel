const iconPlay = document.querySelector('.icon-play')
const popupVideo = document.querySelector('.popup-video')
const closeBtn = document.querySelectorAll('.close-btn')

iconPlay.addEventListener('click', () => {
    popupVideo.classList.add('open')
})

closeBtn.forEach(item => {
    item.addEventListener('click', (event) => {
        if(event.target.matches('.close-btn')) {
            popupVideo.classList.remove('open')
        }
    })
})