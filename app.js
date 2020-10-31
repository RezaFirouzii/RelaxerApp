const container = document.querySelector('.container');
const text = document.getElementById('text');

const totalTime = 10000;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breatheAnimation();

function breatheAnimation() {
    text.innerHTML = 'Breathe!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold!';
        setTimeout(() => {
            text.innerText = 'Breathe out!';
            container.className = 'container shrink';
        }, holdTime);
    }, breathTime);
}

setInterval(breatheAnimation, totalTime);