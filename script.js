function menuTogle(){
    let menuArea = document.getElementById('menu');
     
    if (menuArea.classList.contains('menu-oppened')){
        menuArea.classList.remove('menu-oppened')
    } else {
        menuArea.classList.add('menu-oppened')
    }
}
/*Slide-show*/


let current = 0;
let totalSlides = document.querySelectorAll('.slide').length;
document.querySelector('.sliders').style.width = `calc(366px * ${totalSlides})`
console.log(totalSlides)
let a = function goNext(){
    current++
    if(current > (totalSlides - 1)){
        current=0;
    }
    slideMachine();
}
function slideMachine(){
    let newMargin = (current * 366 );
    document.querySelector('.sliders').style.marginLeft = `-${newMargin}px`
}
setInterval(a,4000);

