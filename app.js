// document meetodid
// multiply element selector
let sisu = document.getElementsByClassName('collection-item');
console.log(sisu);
console.log(sisu[0]);
sisu[0].style.color = 'orange';
sisu[2].textContent = 'Õpi arvutivõrgud';

//querySelector +klassi nime järgi
let nimekirjaElemendid = document.querySelector('ul').getElementsByClassName('collection-item');

//elemendi nime järgi
nimekirjaElemendid = document.getElementsByTagName('li');

// teisendame HTMLcollection massiiviks (array)
nimekirjaElemendid = Array.from(nimekirjaElemendid);
nimekirjaElemendid.reverse();

// massiivi läbimine tsükliga
for(let i = 0; i < 3; i++){
console.log(nimekirjaElemendid[i].className);
}

 // forEach
 nimekirjaElemendid.forEach(function(element){
     console.log(element);
     element.style.background = '#add';
 });

 let nimekiriPaaritu = document.querySelectorAll('li:nth-child(odd)');
 console.log(nimekiriPaaritu);

 let nimekiriPaaris = document.querySelectorAll('li:nth-child(even)');
 console.log(nimekiriPaaris);
 