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
    const hrsDegs = (hrs * 30) + (mins / 2) + 90;

 if (secs == 0) {
        (secHand.style.transform = `rotate(450deg)`)
        setTimeout(()=>{secHand.style.transition ='none'}, 400)
        setTimeout(()=>{secHand.style.transform = `rotate(90deg)`}, 600)
        setTimeout(()=>{secHand.style.transition ='all 0.3s cubic-bezier(0.18, 2.55, 0, 0.9)'}, 800)
    }
    else {
        secHand.style.transform = `rotate(${secsDegs}deg)`;
    }

    if (mins == 0 && secs == 0) {
        (minHand.style.transform = `rotate(450deg)`)
        setTimeout(()=>{minHand.style.transition ='none'}, 400)
        setTimeout(()=>{minHand.style.transform = `rotate(90deg)`}, 600)
        setTimeout(()=>{minHand.style.transition ='all 0.3s cubic-bezier(0.18, 2.55, 0, 0.9)'}, 800)
    }
    else {
        minHand.style.transform = `rotate(${minsDegs}deg)`;
    }

     if (hrs == 0 && secs == 0 && mins == 0) {
        (hrHand.style.transform = `rotate(450deg)`)
        setTimeout(()=>{hrHand.style.transition ='none'}, 400)
        setTimeout(()=>{hrHand.style.transform = `rotate(90deg)`}, 600)
        setTimeout(()=>{hrHand.style.transition ='all 0.3s cubic-bezier(0.18, 2.55, 0, 0.9)'}, 800)
    }
    else {
        hrHand.style.transform = `rotate(${hrsDegs}deg)`;
    }
}

setInterval(setDate, 1000);

setDate();