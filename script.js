const btnPlayAndPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const progressBar = document.getElementById('progressBar');

const Capitulos = 10;
let isPLay = false;

function switchPlay () {
    isPLay = !isPLay;

    if(isPLay) {
        audioCapitulo.play();
    } else {
        audioCapitulo.pause();
    }
}

btnPlayAndPause.addEventListener('click', switchPlay);

function updateProgressBar() {
    const percentage = (audioCapitulo.currentTime / audioCapitulo.duration) * 100;
    progressBar.value = percentage;

    currentTimeDisplay.textContent = formatTime(audioCapitulo.currentTime);
    totalTimeDisplay.textContent = formatTime(audioCapitulo.duration);
}

audioCapitulo.addEventListener('timeupdate', updateProgressBar);

function changeClass(elementId, lastClass, newClass) {
    var element = document.getElementById(elementId);

        element.classList.add(newClass);
        element.classList.remove(lastClass);
}