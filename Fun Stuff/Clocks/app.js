const secHand = document.querySelector('.second');
const minHand = document.querySelector('.min');
const hrHand = document.querySelector('.hour');

setDate = function () {
    const now = new Date();

    const secs = now.getSeconds();
    const mins = now.getMinutes();
    const hrs = now.getHours();

    const secsDegs = (secs *6) + 90;
    const minsDegs = (mins * 6) + (secs/10) + 90;
    const hrsDegs = (hrs *15) + (mins/2) + 90;

    secHand.style.transform = `rotate(${secsDegs}deg)`;
    minHand.style.transform = `rotate(${minsDegs}deg)`;
    hrHand.style.transform = `rotate(${hrsDegs}deg)`;
}

setInterval(setDate, 1000);

setDate();