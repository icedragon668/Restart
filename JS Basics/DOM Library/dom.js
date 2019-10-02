///*
const $ = function () {
    // Block 1 //
    //select every "content" id and replace the text

    //select every "content" id
    const nodeList = document.querySelectorAll('.content');

    //sets innerText to text(content) for .content class elements
    const text = function(content) {
        for (i=0; i < nodeList.length; i++) {
            nodeList[i].innertext = content;
        }
    };

    //???
    const html = 'you';
    const on = 'guys';

    //allows app.js to use text()
    return {
        text: text,
        html: html,
        on: on
    };
}
//*/
/*
const $ = function () {
    const nodeList = document.querySelectorAll('.content');
  
    const text = function(content){
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].innerText = content;
      }
    };
    
    const html = 'you';
    const on = 'guys';
  
    return {
      text: text,
      html: html,
      on: on
    };
  }
  */