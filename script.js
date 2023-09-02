let navlinks = document.querySelectorAll('header ul li');

navlinks.forEach(nav => {
    nav.addEventListener('click',function(){
        navlinks.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        document.getElementById('click').checked = false;
    });
});


// project cards scrolling code here =================================

const projectSlider = document.querySelector(".skills-project-wrapper");

let pressed = false;
let startX = 0;

projectSlider.addEventListener('mousedown', function (e) {
    pressed = true;
    startX = e.clientX;
})

projectSlider.addEventListener('mouseleave', function (e) {
    pressed = false;
})

projectSlider.addEventListener('mousemove', function (e) {
    if(!pressed){
        return;
    }
    this.scrollLeft += startX - e.clientX;
})

window.addEventListener('mouseup', function (e) {
    pressed = false;
})
