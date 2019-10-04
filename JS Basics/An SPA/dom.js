const $ = function (s) {
    
    //nL for nodeList
    const nL = document.querySelectorAll(s);
    
    text = (c) => {
        nL.forEach(e=>{
            e.innerText = c;
    })}

    html = (c) => {
        nL.forEach(e=>{
            e.innerHTML = c;
    })}

    addClass = (c) => {
        nL.forEach(e=>{
            e.classList.add(c)
    })}

    removeClass = (c) => {
        nL.forEach(e=>{
            e.classList.remove(c)
    })}

    toggleClass = (c) => {
        nL.forEach(e=>{
            e.classList.toggle(c)
    })}

    empty = () => {
        nL.forEach(e=>{
            e.innerHTML = '';
    })}

    append = (c) => {
        nL.forEach(e=>{
            e.innerHTML += c;
    })}

    prepend = (c) => {
        nL.forEach(e=>{
            e.innerHTML = c + e.innerHTML;
    })}

    val = (c) => {
        //I wonder about edge cases by reversing this
        //ie content === undefined vs falsey values
        if(c) {
            nL[0].value = c
        } else {
            return nL[0].value
        }
    }

    //a for action, as e (event) is in use
    on = (a, cb) => {
        nL.forEach(e=>{
            e.addEventListener(a, cb)
    })}

    show = () => {
        nL.forEach(e=>{
            e.style.display = '';
    })}

    hide = () => {
        nL.forEach(e=>{
            e.style.display = 'none';
    })}

    return {
        text: text,
        html: html,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        empty: empty,
        append: append,
        prepend: prepend,
        on: on,
        val: val,
        show: show,
        hide: hide
    }
}