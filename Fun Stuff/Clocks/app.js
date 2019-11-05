const secHand = document.querySelector('.second');
const minHand = document.querySelector('.min');
const hrHand = document.querySelector('.hour');


setDate = function () {
    const now = new Date();

    const mili = now.getMilliseconds()
    const secs = now.getSeconds();
    const mins = now.getMinutes();
    const hrs = now.getHours();

    const secsDegs = (secs *6) + 90;
    const minsDegs = (mins * 6) + (secs/10) + 90;
    const hrsDegs = (hrs *15) + (mins/2) + 90;

    switch (secs){
        case 59: 
            secHand.style.background = `green`
            secHand.style.transform = `rotate(${secsDegs}deg)`
            break
        case 0: 
            secHand.style.transform = `rotate(450deg)`
            secHand.style.transition = 'none'
            secHand.style.transform = `rotate(${secsDegs}deg)`
            secHand.style.transition = 'all 0.3s cubic-bezier(0.18, 2.55, 0, 0.9)'
            break
        case 1:
            secHand.style.background = `red`
            secHand.style.transform = `rotate(${secsDegs}deg)`
            break
        default:
            secHand.style.transform = `rotate(${secsDegs}deg)`;
}

    minHand.style.transform = `rotate(${minsDegs}deg)`;
    hrHand.style.transform = `rotate(${hrsDegs}deg)`;
}

setInterval(setDate, 1000);

setDate();