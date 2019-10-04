const $ = function (s) {
    
    const nL = document.querySelectorAll(s);
    
    text = (c) => {
        nL.forEach(e=>{
            e.innerText = c;
    })}

    html = (c) => {
        nL.forEach(e=>{
            e.innerHTML = c;
    })}

    return {
        text: text,
    }
}