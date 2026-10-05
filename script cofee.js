var count = 0;
var items = [];
var countEl = document.getElementById('count');

var cardButtons = document.querySelectorAll('.card-btn');
for(var i = 0; i < cardButtons.length; i++){
  cardButtons[i].addEventListener('click', function(){
    var drink = this.getAttribute('data-drink');
    count = count + 1;
    countEl.innerText = count;
    items.push(drink);
    var btn = this;
    btn.innerText = 'ADDED';
    setTimeout(function(){
      btn.innerText = 'ADD +';
    }, 1000);
  });
}

var galleryButtons = document.querySelectorAll('.g-btn');
for(var j = 0; j < galleryButtons.length; j++){
  galleryButtons[j].addEventListener('click', function(){
    var text = this.closest('.g-item').querySelector('p').innerText;
    alert('Opening gallery: ' + text);
  });
}

var likeButtons = document.querySelectorAll('.test-btn');
for(var k = 0; k < likeButtons.length; k++){
  likeButtons[k].addEventListener('click', function(){
    this.innerText = 'LIKED ❤️';
  });
}

document.getElementById('goHome').addEventListener('click', function(){
  document.getElementById('home').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('goAbout').addEventListener('click', function(){
  document.getElementById('about').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('goMenu').addEventListener('click', function(){
  document.getElementById('menu').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('goGallery').addEventListener('click', function(){
  document.getElementById('gallery').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('goTest').addEventListener('click', function(){
  document.getElementById('testimonials').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('goContact').addEventListener('click', function(){
  document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('orderNav').addEventListener('click', function(){
  document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('orderHome').addEventListener('click', function(){
  document.getElementById('menu').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('contactHome').addEventListener('click', function(){
  document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('storyBtn').addEventListener('click', function(){
  alert('Full story: Started at Unilag kiosk, now roasting 50kg weekly in Yaba');
});

document.getElementById('visitBtn').addEventListener('click', function(){
  window.open('https://maps.google.com/?q=12+Herbert+Macaulay+Yaba+Lagos', '_blank');
});

document.getElementById('waBtn').addEventListener('click', function(){
  window.open('https://wa.me/2348012345678', '_blank');
});

document.getElementById('callBtn').addEventListener('click', function(){
  window.open('tel:+2348012345678', '_blank');
});

document.getElementById('mapBtn').addEventListener('click', function(){
  window.open('https://maps.google.com/?q=12+Herbert+Macaulay+Yaba+Lagos', '_blank');
});

document.getElementById('cart').addEventListener('click', function(){
  if(count === 0){
    alert('Cart empty, add coffee');
    return;
  }
  document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('postTest').addEventListener('click', function(){
  var name = document.getElementById('testName').value;
  var text = document.getElementById('testText').value;
  if(name === '' || text === ''){
    alert('Enter name and testimony');
    return;
  }
  var grid = document.querySelector('.test-grid');
  var newDiv = document.createElement('div');
  newDiv.className = 'test';
  newDiv.innerHTML = '<div class="stars">★★★★★</div><p>"' + text + '"</p><b>— ' + name + '</b>';
  grid.appendChild(newDiv);
  document.getElementById('testName').value = '';
  document.getElementById('testText').value = '';
  document.getElementById('testMsg').innerText = 'Thanks ' + name + '! Added';
});

document.getElementById('contactForm').addEventListener('submit', function(event){
  event.preventDefault();
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var drink = document.getElementById('drink').value;
  var qty = document.getElementById('qty').value;
  var address = document.getElementById('address').value;
  var note = document.getElementById('note').value;
  var cartItems = items.join(', ');
  var message = 'BREW LAGOS ORDER:%0AName: ' + name + '%0APhone: ' + phone + '%0ADrink: ' + drink + '%0AQty: ' + qty + '%0AAddress: ' + address + '%0ANote: ' + note + '%0ACart: ' + cartItems;
  document.getElementById('formMsg').innerText = 'Order received ' + name + '! Opening WhatsApp...';
  setTimeout(function(){
    window.open('https://wa.me/2348012345678?text=' + message, '_blank');
  }, 800);
});

function renderCart(){
  let cart=getCart();let container=document.getElementById('cartItems');
  let totalItems=document.getElementById('totalItems');
  let totalPrice=document.getElementById('totalPrice');
  if(cart.length===0){
    container.innerHTML="<p style='text-align:center;color:#888;margin:40px 0'>Cart empty</p>";
    totalItems.innerText=0;totalPrice.innerText=0;updateNav();return;
  }
  let html="";let qty=0;let price=0;
  for(let i=0;i<cart.length;i++){
    let itemTotal=cart[i].price*cart[i].qty;qty+=cart[i].qty;price+=itemTotal;
    html+=`<div class="cart-item"><div><b>${cart[i].name}</b><br><span>₦${cart[i].price} x ${cart[i].qty} = ₦${itemTotal}</span></div><div class="qty"><button class="q-btn minus" onclick="dec(${i})">-</button><span class="q-num">${cart[i].qty}</span><button class="q-btn" onclick="inc(${i})">+</button><button class="remove" onclick="rem(${i})">Remove</button></div></div>`;
  }
  container.innerHTML=html;totalItems.innerText=qty;totalPrice.innerText=price.toLocaleString();updateNav();
}
function inc(i){let c=getCart();c[i].qty++;saveCart(c);renderCart()}
function dec(i){let c=getCart();c[i].qty--;if(c[i].qty<=0){c.splice(i,1)}saveCart(c);renderCart()}
function rem(i){let c=getCart();c.splice(i,1);saveCart(c);renderCart()}
function clearCart(){localStorage.removeItem('yfm_cart');renderCart()}
function checkout(){
  let c=getCart();let name=document.getElementById('cName').value;
  let phone=document.getElementById('cPhone').value;let addr=document.getElementById('cAddr').value;
  if(c.length===0){alert("Cart empty");return}
  if(name.length<3||phone.length<11||addr.length<8){alert("Fill all fields");return}
  let total=0;let list="";for(let i=0;i<c.length;i++){total+=c[i].price*c[i].qty;list+=c[i].name+" x"+c[i].qty+" = ₦"+(c[i].price*c[i].qty)+"%0A"}
  let msg=`NEW ORDER - YOUR FAVORITE COFFEE MART%0AName: ${name}%0APhone: ${phone}%0AAddress: ${addr}%0A%0A${list}%0ATotal: ₦${total}`;
  window.open("https://wa.me/2348165859227?text="+msg,"_blank");
  localStorage.removeItem('yfm_cart');renderCart();closeCart();
}
