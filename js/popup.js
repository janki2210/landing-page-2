const btnopenvideo = document.querySelectorAll('.island-video-content')
const islandpopup = document.getElementById('popup')

function popup(){
    islandpopup.classList.add('show-popup')
}
btnopenvideo.forEach(b => b.addEventListener('click',popup))


const btnclosevideo = document.getElementById('popup-close')
btnclosevideo.addEventListener('click', ()=>{
    islandpopup.classList.remove('show-popup')
});