const secHand = document.querySelector('.second');
const minHand = document.querySelector('.min');
const hrHand = document.querySelector('.hour');

setDate = function () {
    const now = new Date();

    const secs = now.getSeconds();
    const mins = now.getMinutes();
    const hrs = now.getHours();

    const secsDeg = (secs *6) + 90;
    const minsDegs = (mins * 6) + (secs/10) + 90;
    const hrsDegs = (hours *15) + (mins/2) + 90;

}

setInterval(setDate, 1000);

setDate();