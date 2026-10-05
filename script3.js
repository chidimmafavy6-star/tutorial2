// PRODUCTS DATA
const products = [
  {id:1, name:"Luxury Perfume", price:8500, img:"https://images.unsplash.com/photo-1541643600914-78b084683601?w=400"},
  {id:2, name:"Designer Bag", price:15000, img:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400"},
  {id:3, name:"Pink Heels", price:12000, img:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400"},
];

let cart = JSON.parse(localStorage.getItem('diva_cart')) || [];

// LOAD PRODUCTS
const productList = document.getElementById('product-list');
products.forEach(p => {
  productList.innerHTML += `
    <div class="card">
      <img src="${p.img}">
      <h4>${p.name}</h4>
      <p>₦${p.price.toLocaleString()}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>`;
});

// SHOW PAGES
function showSection(id){
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if(id==='cart') renderCart();
}

// ADD TO CART FUNCTION
function addToCart(id){
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem('diva_cart', JSON.stringify(cart));
  updateCartCount();
  alert(product.name + " added to cart!");
}

// UPDATE CART COUNT
function updateCartCount(){
  document.getElementById('cart-count').innerText = cart.length;
}

// RENDER CART
function renderCart(){
  const itemsDiv = document.getElementById('cart-items');
  const totalDiv = document.getElementById('cart-total');
  if(cart.length === 0){
    itemsDiv.innerHTML = "<p style='text-align:center;color:#888'>Cart is empty</p>";
    totalDiv.innerText = "";
    return;
  }
  let total = 0;
  let html = "";
  cart.forEach((item, index) => {
    total += item.price;
    html += `<div><span>${item.name}</span><span>₦${item.price.toLocaleString()} <b onclick="removeItem(${index})" style="color:red;cursor:pointer;margin-left:10px">x</b></span></div>`;
  });
  itemsDiv.innerHTML = html;
  totalDiv.innerText = "Total: ₦" + total.toLocaleString();
}

function removeItem(index){
  cart.splice(index,1);
  localStorage.setItem('diva_cart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

function checkout(){
  if(cart.length === 0) return alert("Cart empty!");
  alert("Order Successful! Total: ₦" + cart.reduce((a,b)=>a+b.price,0).toLocaleString());
  cart = [];
  localStorage.removeItem('diva_cart');
  updateCartCount();
  showSection('home');
}

// LOGIN FUNCTION
function login(){
  const email = document.getElementById('login-email').value;
  const pass = document.getElementById('login-pass').value;
  const msg = document.getElementById('login-msg');
  
  if(email === "" || pass === ""){
    msg.style.color="red";
    msg.innerText="Please fill all fields!";
    return;
  }
  // Simple check from localStorage
  const savedUser = JSON.parse(localStorage.getItem('diva_user'));
  if(savedUser && savedUser.email === email && savedUser.pass === pass){
    msg.style.color="green";
    msg.innerText="Login successful! Welcome " + savedUser.name;
    setTimeout(()=> showSection('home'), 1000);
  } else {
    msg.style.color="red";
    msg.innerText="Invalid email or password!";
  }
}

// SIGNUP FUNCTION
function signup(){
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const pass = document.getElementById('signup-pass').value;
  const msg = document.getElementById('signup-msg');

  if(name==="" || email==="" || pass===""){
    msg.style.color="red";
    msg.innerText="Please fill all fields!";
    return;
  }
  const user = {name, email, pass};
  localStorage.setItem('diva_user', JSON.stringify(user));
  msg.style.color="green";
  msg.innerText="Account created! Now login.";
  setTimeout(()=> showSection('login'), 1000);
}

// Initial count
updateCartCount();