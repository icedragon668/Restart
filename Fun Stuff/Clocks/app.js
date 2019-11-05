const secHand = document.querySelector('.second');
const minHand = document.querySelector('.min');
const hrHand = document.querySelector('.hour');


setDate = function () {
    const now = new Date();

    const secs = now.getSeconds();
    const mins = now.getMinutes();
    const hrs = now.getHours();

    const secsDegs = (secs * 6) + 90;
    const minsDegs = (mins * 6) + (secs / 10) + 90;
    const hrsDegs = (hrs * 15) + (mins / 2) + 90;

 if (secs == 0) {
        (secHand.style.transform = `rotate(450deg)`)
        setTimeout(noneFun, 400)
        setTimeout(moveUnseen, 600)
        setTimeout(bezierFun, 800)
    }
    else {
        secHand.style.transform = `rotate(${secsDegs}deg)`;
    }

    minHand.style.transform = `rotate(${minsDegs}deg)`;
    hrHand.style.transform = `rotate(${hrsDegs}deg)`;
}

noneFun = () => {(secHand.style.transition ='none')}
moveUnseen = () => {(secHand.style.transform = `rotate(90deg)`)}
bezierFun = () => {(secHand.style.transition ='all 0.3s cubic-bezier(0.18, 2.55, 0, 0.9)')}

setInterval(setDate, 1000);

setDate();