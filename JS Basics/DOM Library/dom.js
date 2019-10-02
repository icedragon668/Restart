const $ = function () {
    // Block 1 //
    //select every "content" id and replace the text
    //select every "content" class
    const nodeList = document.querySelectorAll('.content');

    //sets innerText to text(content) for .content class elements
    const text = function (content) {
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].innerText = content;
        }
    };

    //Block 2//
    //add 2 <p> to each .content
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
    /*
        prepend: adds to the begining of .content
        val: takes optional string, or gets the value of an input
          ??? phrasing
        on: takes a string and function: the string represents an event, the function an callback
      */

    //allows use of text()
    return {
        text: text,
        html: html,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        empty: empty,
        append: append,
    };
}