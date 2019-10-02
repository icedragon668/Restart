const $ = function (s) {
    // Block 1 //
    //select every "content" id and replace the text
    //select every "content" class
    const nodeList = document.querySelectorAll(s);

    //sets innerText to text(content) for .content class elements
    const text = function (content) {
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].innerText = content;
        }
    };

    //Block 2//
    //add 2 <p> to each .content
    //begin using "c" for content
    const html = function (c) {
        for (i = 0; i < nodeList.length; i++) {
            nodeList[i].innerHTML = c;
        }
    }
    //Block 3//
    //add many functions

    //addClass: adds a class to .content
    const addClass = function (c) {
        for (i = 0; i < nodeList.length; i++) {
            nodeList[i].classList.add(c)
        }
    }
    //removeClass: removes a class from .content
    const removeClass = function (c) {
        for (i = 0; i < nodeList.length; i++) {
            nodeList[i].classList.remove(c)
        }
    }
    //toggleClass: add/remove a class from .content
    const toggleClass = function (c) {
        for (i = 0; i < nodeList.length; i++) {
            nodeList[i].classList.toggle(c)
        }
    }
    //empty: empties .content's innerHTML
    const empty = function () {
        for (i = 0; i < nodeList.length; i++) {
            nodeList[i].innerHTML = '';
        }
    }
    //append: adds to .content (add, NOT replace)
    const append = function (c) {
        for (i = 0; i < nodeList.length; i++) {
            nodeList[i].innerHTML += c;
        }
    }
    //prepend: adds to the begining of .content
    const prepend = function (c) {
        for (i = 0; i < nodeList.length; i++) {
            nodeList[i].innerHTML = c+nodeList[i].innerHTML;
        }
    }

    //if val(), then returns a value, if val(c), sets value to c
    const val = function (c) {
        if(c===undefined){
            return nodeList[0].value
        } else {
            nodeList[0].value = c
        }
    }
    //on: takes a string and function: the string represents an event, the function an callback
    //using "e" for event, and "cb" for callback
    const on = function (e, cb) {
        for (i = 0; i < nodeList.length; i++) {
            nodeList[i].addEventListener(e, cb);
        }
    }

    //allows use of functions
    return {
        text: text,
        html: html,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        empty: empty,
        append: append,
        prepend: prepend,
        val: val,
        on: on
    };
}