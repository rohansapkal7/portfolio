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

// ============================== HTML to GSheet =================================

const scriptURL = 'https://script.google.com/macros/s/AKfycbySAtK6YK-CGEhsNycXTvPTrTxey9ic04hpZazpZBcH50FX84Rfzuzv2x93R5xyu38x/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your massege sent successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
