const $ = function () {
    /* Block 1 */
    //select every "content" id and replace the text

    //select every "content" id
    const nodeList = document.querySelectorAll('.content');

    //sets innerText to text(content) for .content class elements
    const text = function(content) {
        for (i=0; i < nodeList.length; i++) {
            nodeList[i].innertext = content;
        }
    }

    //allows app.js to use text()
    return {
        text: text
    }
}