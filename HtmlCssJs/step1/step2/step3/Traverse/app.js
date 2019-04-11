let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelectorAll('li.collection-item');

val = list;
val = listItem;

//get child nodes
val = list.childNodes[0].nodeType;

//get children element nodes
val = list.children;
val = list.children[3];


console.log(val);