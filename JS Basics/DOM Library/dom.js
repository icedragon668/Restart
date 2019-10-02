// Block 1 //
//select every "content" id and replace the text
const $ = function () {
  //select every "content" class
  const nodeList = document.querySelectorAll('.content');

    //sets innerText to text(content) for .content class elements
    const text = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerText = content;
    }
  };
  
    //allows use of text()
    return {
    text: text,
  };
}