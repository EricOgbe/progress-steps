const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
let width = 1;

next.addEventListener('click',() => {
    width += 30;
    prev.disabled = false
    progress.style.width = `${width}%`
if (width == 31){
    
    circles[1].classList.add('active')
}else if (width == 61){
    
    circles[1].classList.add('active')
    circles[2].classList.add('active')
}else if (width == 91){

    circles[1].classList.add('active')
    circles[2].classList.add('active')
    circles[3].classList.add('active')
    next.disabled = true;
 }
})

prev.addEventListener('click',() => {
    width -= 30;
    progress.style.width = `${width}%`
    next.disabled = false;
if (width == 61){
    circles[3].classList.remove('active')
}else if (width == 31){
    circles[2].classList.remove('active')
    circles[3].classList.remove('active')
}else if (width < 31){

    circles[1].classList.remove('active')
    circles[2].classList.remove('active')
    circles[3].classList.remove('active')
    prev.disabled = true;
 }
})

