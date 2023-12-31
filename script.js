const daysEl = document.querySelector("#days");
const hourEl = document.querySelector("#hours");
const minsEl = document.querySelector("#mins");
const secondsEl = document.querySelector("#seconds");

const newYears = `1 Jan ${new Date().getFullYear() + 1}`;

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = Math.floor((newYearsDate - currentDate) / 1000);
    
    const days = Math.floor(totalSeconds/3600/24);
    const hours =  Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


    daysEl.innerHTML = (days);
    hourEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);


}


function formatTime(time)
{
    if (time<10){
        return `0${time}`;
    }
    return time;
}

//initial call
countdown();

setInterval(countdown,1000);