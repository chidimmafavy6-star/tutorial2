var count = 0;
var items = [];
var countEl = document.getElementById('count');
var preview = document.getElementById('giftPreview');

var addButtons = document.querySelectorAll('.add');
for(var i = 0; i < addButtons.length; i++){
  addButtons[i].addEventListener('click', function(){
    var prod = this.closest('.prod');
    var name = prod.getAttribute('data-name');
    count = count + 1;
    countEl.innerText = count;
    items.push(name);
    var btn = this;
    btn.innerText = 'ADDED!';
    setTimeout(function(){
      btn.innerText = 'ADD TO BOX';
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
    var name = this.closest('.prod').getAttribute('data-name');
    document.getElementById('formSection').scrollIntoView({behavior: 'smooth'});
    preview.innerText = 'You viewed: ' + name + ' — we recommend it for gift!';
  });
}

var filters = document.querySelectorAll('.filter');
for(var k = 0; k < filters.length; k++){
  filters[k].addEventListener('click', function(){
    for(var m = 0; m < filters.length; m++){
      filters[m].classList.remove('active');
    }
    this.classList.add('active');
    var age = this.getAttribute('data-age');
    var prods = document.querySelectorAll('.prod');
    for(var n = 0; n < prods.length; n++){
      var pAge = prods[n].getAttribute('data-age');
      if(age === 'all' || pAge === age){
        prods[n].style.display = 'block';
      } else {
        prods[n].style.display = 'none';
      }
    }
  });
}

document.getElementById('goShop').addEventListener('click', function(){
  document.getElementById('products').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('goAge').addEventListener('click', function(){
  document.getElementById('ageBar').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('goGift').addEventListener('click', function(){
  document.getElementById('formSection').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('shopBtn').addEventListener('click', function(){
  document.getElementById('products').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('ageBtn').addEventListener('click', function(){
  document.getElementById('ageBar').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('waBtn').addEventListener('click', function(){
  window.open('https://wa.me/2348012345678', '_blank');
});

document.getElementById('cart').addEventListener('click', function(){
  if(count === 0){
    alert('Your toy box empty! Add toys');
    return;
  }
  document.getElementById('formSection').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('kidAge').addEventListener('change', function(){
  var age = this.value;
  preview.innerText = 'Perfect! For ' + age + ' we suggest Talking Teddy + RC Car combo';
});

document.getElementById('giftForm').addEventListener('submit', function(event){
  event.preventDefault();
  var name = document.getElementById('name').value;
  var kidAge = document.getElementById('kidAge').value;
  var budget = document.getElementById('budget').value;
  var phone = document.getElementById('phone').value;
  var address = document.getElementById('address').value;
  var cartItems = items.join(', ');
  var message = 'TOYBOX ORDER:%0AParent: ' + name + '%0AKid Age: ' + kidAge + '%0ABudget: ' + budget + '%0APhone: ' + phone + '%0AAddress: ' + address + '%0ACart: ' + cartItems;
  document.getElementById('formMsg').innerText = 'Nice one ' + name + '! Finding best gift...';
  preview.innerText = '🎉 Found! We picked 2 toys for ' + kidAge + ' within ' + budget;
  setTimeout(function(){
    window.open('https://wa.me/2348012345678?text=' + message, '_blank');
  }, 1000);
});