const btnPlayAndPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const progressBar = document.getElementById('progressBar');
const playIcon = document.getElementById('play');
const btnStart = document.getElementById('skip-start');
const btnEnd = document.getElementById('skip-end');
const capituloText = document.getElementById('capitulo-text');

const Capitulos = 10;
let capituloAtual = 1;

let isPLay = false;
let canOver = false;

function switchPlay () {
    isPLay = !isPLay;

    if(isPLay) {
        audioCapitulo.play();
    } else {
        audioCapitulo.pause();
    }

    clickChangePlayClass(canOver);
}

btnPlayAndPause.addEventListener('click', switchPlay);

function updateProgressBar() {
    const percentage = (audioCapitulo.currentTime / audioCapitulo.duration) * 100;
    progressBar.value = percentage;

    //currentTimeDisplay.textContent = formatTime(audioCapitulo.currentTime);
    //totalTimeDisplay.textContent = formatTime(audioCapitulo.duration);
}

audioCapitulo.addEventListener('timeupdate', updateProgressBar);

function changeClass(elementId, lastClass, newClass) {
    var element = document.getElementById(elementId);

    element.classList.add(newClass);
    element.classList.remove(lastClass);
}

function changePlayClass(isOver) {
    if(isOver)
    {
        canOver = true;
        clickChangePlayClass(isOver);
    } else {
        canOver = false;
        clickChangePlayClass(isOver);
    }
}

function clickChangePlayClass(over) {
    console.log(over);
    if(over)
    {
        if(isPLay)
        {
            playIcon.classList.add('bi-pause-circle-fill');

            if(playIcon.classList.contains('bi-pause-circle')) { playIcon.classList.remove('bi-pause-circle'); }
            if(playIcon.classList.contains('bi-play-circle')){ playIcon.classList.remove('bi-play-circle'); }
            if(playIcon.classList.contains('bi-play-circle-fill')) { playIcon.classList.remove('bi-play-circle-fill'); }
        } else {
            playIcon.classList.add('bi-play-circle-fill');

            if(playIcon.classList.contains('bi-play-circle')){ playIcon.classList.remove('bi-play-circle'); }
            if(playIcon.classList.contains('bi-pause-circle')){ playIcon.classList.remove('bi-pause-circle'); }
            if(playIcon.classList.contains('bi-pause-circle-fill')) { playIcon.classList.remove('bi-pause-circle-fill'); }
        }
    } else {
        if(isPLay)
        {
            playIcon.classList.add('bi-pause-circle');

            if(playIcon.classList.contains('bi-play-circle')){ playIcon.classList.remove('bi-play-circle'); }
            if(playIcon.classList.contains('bi-play-circle-fill')) { playIcon.classList.remove('bi-play-circle-fill'); }
            if(playIcon.classList.contains('bi-pause-circle-fill')){ playIcon.classList.remove('bi-pause-circle-fill'); }
        } else {
            playIcon.classList.add('bi-play-circle');

            if(playIcon.classList.contains('bi-pause-circle')){ playIcon.classList.remove('bi-pause-circle'); }
            if(playIcon.classList.contains('bi-pause-circle-fill')) { playIcon.classList.remove('bi-pause-circle-fill'); }
            if(playIcon.classList.contains('bi-play-circle-fill')) { playIcon.classList.remove('bi-play-circle-fill'); }
        }
    }
}

function swithFaixa(forward) {
    if(forward) {
        if(capituloAtual === Capitulos) {
            capituloAtual = 1;
        } else {
            capituloAtual = capituloAtual + 1;
        }
    } else {
        if(capituloAtual > 1) {
            capituloAtual = capituloAtual - 1;
        }
    }

    if(capituloAtual === 0) {
        capituloAtual = 1;
    }

    capituloText.innerText = "Capitulo " + capituloAtual;
    audioCapitulo.pause(); 
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    audioCapitulo.play();
}

btnStart.addEventListener('click', () => swithFaixa(false));
btnEnd.addEventListener('click', () => swithFaixa(true));