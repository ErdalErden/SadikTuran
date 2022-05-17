let val;

//val = window.document;
//val = document.all
//val = document.all.length;
//val = document.all[11];
//val = document.head;
//val = document.body;
//val = document.anchors;
//val = document.URL;
//val = document.domain;
//val = document.images;
//val = document.title;
//val = document.forms;
//val = document.forms[0];
//val = document.forms[0].id;
//val = document.forms[0].method;
//val = document.scripts;
//val = document.scripts[2];

// Selecting Elements
// document.getelementById metodu

//val = document.getElementById('header');
//val = document.getElementById('header').id;
//val = document.getElementById('header').className;

//val = document.getElementById('header');
//val.style.color = 'red';
//val.style.fontSize = '45px';
//val = document.getElementById('header').innerText = 'My Todo App';

// document.querySelector metodu
val = document.querySelector('#header');
val = document.querySelector('.card-header');
val = document.querySelector('h1');
val = document.querySelector('li').style.color = 'red';
val = document.querySelector('li:last-child').style.color = 'blue';
val = document.querySelector('li:nth-child(2').style.backgroundColor = 'yellow';
val = document.querySelector('li:nth-child(3)').textContent = "New item";
val = document.querySelector('li').className = 'list-group-item lis-group-item-primary';




console.log(val);