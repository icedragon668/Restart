const $ = function () {
  // Block 1 //
  //select every "content" id and replace the text
  //select every "content" class
  const nodeList = document.querySelectorAll('.content');

    //sets innerText to text(content) for .content class elements
  const text = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerText = content;
    }
  };
  
  //Block 2//
  //add 2 <p> to each .content
  const html = function (c){
      for (i=0;i<nodeList.length;i++){
          nodeList[i].innerHTML = c;
      }
  }

    //allows use of text()
    return {
    text: text,
    html: html,
  };
}