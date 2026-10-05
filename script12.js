const cursor = document.getElementById('cursor');
const dot = document.getElementById('dot');

document.addEventListener('mousemove', function(e){
  cursor.style.left = (e.clientX - 16) + 'px';
  cursor.style.top = (e.clientY - 16) + 'px';
  dot.style.left = (e.clientX - 2) + 'px';
  dot.style.top = (e.clientY - 2) + 'px';
});

let cards = document.querySelectorAll('.card, .big-button');
cards.forEach(function(el){
  el.addEventListener('mouseenter', function(){
    cursor.style.transform = 'scale(3)';
  });
  el.addEventListener('mouseleave', function(){
    cursor.style.transform = 'scale(1)';
  });
});

document.querySelector('.big-button').addEventListener('click', function(){
  let name = prompt('Your name?');
  if(name){
    alert('Wassup ' + name + ' — VOID is watching.');
  }
});