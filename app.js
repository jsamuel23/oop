// document meetodid
// single element selector

sisu = document.querySelector('#title'); // id järgi
sisu = document.querySelector('.card-title'); // klassi järgi
sisu = document.querySelector('h5'); // elemendi järgi

// stiili muutmine

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'green';
document.querySelector('li:nth-child(2)').style.color = 'orange';

console.log(sisu);