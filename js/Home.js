
function totop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.getElementById('font_click').addEventListener('click', totop);

window.addEventListener('load', function () {
    var audio = document.getElementById('audio');
    audio.play();
});