const startTime = () => {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let clock = document.querySelector('.clock');

    const checkTime = (i) => {
        if(i < 10) {
            i = '0' + i;
        }
        return i;
    }

    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    clock.innerHTML = `<h1>${hours} : ${minutes} : ${seconds}</h1>`

    let t = setTimeout(startTime, 500);
}

// Change Color
let changeColor = document.querySelector('#change-color');
let body = document.querySelector('body');
let clock = document.querySelector('.clock');

const change = () => {
    body.classList.toggle('dark-bg');
    clock.classList.toggle('light-bg');
    changeColor.classList.toggle('change-light');
}