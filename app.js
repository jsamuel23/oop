// document meetodid
// node omadused ja meetodid

let nimekiri = document.querySelectorAll('ul.collection');
let nimekirjaElement = document.querySelectorAll('li.collection-item');


console.log(nimekirjaElement);
console.log(nimekiri);

nimekiri = document.querySelector('ul.collection');
console.log(nimekiri);

sisu = nimekiri.childNodes;
sisu = nimekiri.childNodes[0];
sisu = nimekiri.childNodes[0].nodeName;
sisu = nimekiri.childNodes[1].nodeType;

/*
erinevad node tüübid
1 - element
2 - atribuut
3 - tekst
8 - kommentaar
9 - dokument ise
10 - doctype
*/
sisu = nimekiri.children;
sisu = nimekiri.children[1];
nimekiri.children[1].textContent = 'õpi rohkem JS';
sisu = nimekiri.children[2].children[0].id = 'katse';
console.log(nimekiri.children[2].children[0]);
console.log(sisu);

sisu = nimekiri.firstChild; // node type
sisu = nimekiri.firstElementChild; // value


sisu = nimekiri.lasttChild; // node type
sisu = nimekiri.lastElementChild; // value

sisu = nimekiri.childElementCount;

nimekirjaElement = document.querySelector('li.collection-item');
sisu = nimekirjaElement.parentNode;
sisu = nimekirjaElement.parentElement; 
sisu = nimekirjaElement.parentElement.parentElement;

sisu = nimekirjaElement.nextSibling; // node type
sisu = nimekirjaElement.nextElementSibling; // node value
sisu = nimekirjaElement.previousSibling;

console.log(sisu);