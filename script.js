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
    document.getElementById("submit-btn").value = "Please Wait";
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    alert("Thank you! your massege sent successfully." )})
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

//===================  Download Links  ==========================

function visit(num){
    switch(num){
        case 1 : 
            window.open("https://github.com/rohansapkal7/portfolio","_blank");
        case 2 : 
            window.open("https://drive.google.com/drive/folders/1SrczT3QxMtuuGC2CuaZDpb0wZ0Kc977U?usp=drive_link","_blank");
        case 3 : 
            window.open("https://drive.google.com/drive/folders/1T5JU57e4UDy2xa991abOfdUTsp5DHvCA?usp=drive_link","_blank");
        case 4 : 
            window.open("https://drive.google.com/drive/folders/1T5NK2Z3T_F1VNW8WHQFmj9Br_wiSa0go?usp=drive_link","_blank");
    }
}
