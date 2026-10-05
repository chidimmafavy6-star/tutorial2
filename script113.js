var cursor = document.getElementById('cursor');
var count = 0;
var items = [];
var selectedSize = 'M';
var countEl = document.getElementById('count');

document.addEventListener('mousemove', function(event){
  var x = event.clientX;
  var y = event.clientY;
  cursor.style.left = (x - 10) + 'px';
  cursor.style.top = (y - 10) + 'px';
});

var addButtons = document.querySelectorAll('.add');
for(var i = 0; i < addButtons.length; i++){
  addButtons[i].addEventListener('click', function(){
    var prod = this.closest('.prod');
    var name = prod.getAttribute('data-name');
    count = count + 1;
    countEl.innerText = count;
    items.push(name);
    var btn = this;
    btn.innerText = 'ADDED';
    setTimeout(function(){
      btn.innerText = 'ADD';
    }, 1000);
    var cart = document.getElementById('cart');
    cart.classList.add('shake');
    setTimeout(function(){
      cart.classList.remove('shake');
    }, 400);
  });
}

var viewButtons = document.querySelectorAll('.view-btn');
for(var j = 0; j < viewButtons.length; j++){
  viewButtons[j].addEventListener('click', function(){
    var section = document.getElementById('formSection');
    section.scrollIntoView({behavior: 'smooth'});
  });
}

var sizeSpans = document.querySelectorAll('.sp');
for(var k = 0; k < sizeSpans.length; k++){
  sizeSpans[k].addEventListener('click', function(){
    for(var m = 0; m < sizeSpans.length; m++){
      sizeSpans[m].classList.remove('active');
    }
    this.classList.add('active');
    selectedSize = this.getAttribute('data-s');
  });
}

document.getElementById('goShop').addEventListener('click', function(){
  document.getElementById('products').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('goForm').addEventListener('click', function(){
  document.getElementById('formSection').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('shopBtn').addEventListener('click', function(){
  document.getElementById('products').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('lookBtn').addEventListener('click', function(){
  document.getElementById('products').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('waBtn').addEventListener('click', function(){
  window.open('https://wa.me/2348012345678', '_blank');
});

document.getElementById('callBtn').addEventListener('click', function(){
  window.open('tel:+2348012345678', '_blank');
});

document.getElementById('cart').addEventListener('click', function(){
  if(count === 0){
    alert('Cart empty');
    return;
  }
  document.getElementById('formSection').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('orderForm').addEventListener('submit', function(event){
  event.preventDefault();
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var address = document.getElementById('address').value;
  var item = document.getElementById('itemSelect').value;
  var qty = document.getElementById('qty').value;
  var cartItems = items.join(', ');
  var message = 'DRIP LAGOS NEW ORDER:%0AName: ' + name + '%0APhone: ' + phone + '%0AAddress: ' + address + '%0AItem: ' + item + '%0ASize: ' + selectedSize + '%0AQty: ' + qty + '%0ACart: ' + cartItems + '%0ATotal Count: ' + count;
  document.getElementById('formMsg').innerText = 'Redirecting to WhatsApp...';
  setTimeout(function(){
    window.open('https://wa.me/2348012345678?text=' + message, '_blank');
  }, 800);
});