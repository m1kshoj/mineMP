let bg1 = document.querySelector('.xAndPoints1');
let bg2 = document.querySelector('.xAndPoints2');
let bg3 = document.querySelector('.xAndPoints3');
let bg4 = document.querySelector('.xAndPoints4');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg1.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    bg2.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    bg3.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    bg4.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});