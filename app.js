// document meetodid
// single element selector

sisu = document.getElementById('title'); // hmtl sisu
id = document.getElementById('title').id; // id sisu
klass = document.getElementById('title').className;

// sisu.style.background ='#333';
document.getElementById('title').style.background = '#333';
sisu.style.color = '#fff';
sisu.style.padding = '5px';
// sisu.style.display = 'none';

// sisu muutmine
sisu.textContent = 'Minu ülesandend';
sisu.innerText = 'Just minu ülesanne';
sisu.innerHTML = '<span style="color:green">Vabad ülesanded</span>';

console.log(sisu);