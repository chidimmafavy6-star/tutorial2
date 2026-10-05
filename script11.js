let signupForm = document.querySelector('#signup form');

if(signupForm){
  signupForm.addEventListener('submit', function(e){
    e.preventDefault();

    let fullname = this.querySelector('input[name="fullname"]').value;
    let email = this.querySelector('input[name="email"]').value;
    let phone = this.querySelector('input[name="phone"]').value;
    let password = this.querySelector('input[name="password"]').value;
    let confirm = this.querySelector('input[name="confirm_password"]').value;

    // SEARCH BAR
let searchInput = document.getElementById('searchInput');
let searchBtn = document.getElementById('searchBtn');

function doSearch(){
  let value = searchInput.value.toLowerCase();

  let products = document.querySelectorAll('.product h4');
  let found = false;

  for(let i = 0; i < products.length; i++){
    let name = products[i].innerText.toLowerCase();
    let productBox = products[i].parentElement;

    if(name.includes(value)){
      productBox.style.display = "block";
      found = true;
    } else {
      productBox.style.display = "none";
    }
  }

  if(!found && value!== ""){
    alert("No chocolate found for: " + value);
  }


  window.location.href = "#best";
}

searchBtn.addEventListener('click', doSearch);


searchInput.addEventListener('keyup', function(e){
  if(e.key === "Enter"){
    doSearch();
  }
});
    if(fullname.length < 3){
      alert("❌ Full name must be 3 letters");
      return;
    }
    if(email.indexOf("@") === -1){
      alert("❌ Enter valid email");
      return;
    }
    if(phone.length < 11){
      alert("❌ Phone must be 11 digits like 09021228811");
      return;
    }
    if(password.length < 6){
      alert("❌ Password must be 6 chars");
      return;
    }
    if(password!== confirm){
      alert("❌ Passwords do not match");
      return;
    }

  
    localStorage.setItem("user_name", fullname);

    alert("✅ Welcome " + fullname + "! Account created. Your code: HAPPY10");
    this.reset();
    window.location.href = "#category";
  });
}


let orderForm = document.querySelector('#form form');

if(orderForm){
  orderForm.addEventListener('submit', function(e){
    e.preventDefault();

    let name = this.querySelector('input[name="order_name"]').value;
    let phone = this.querySelector('input[name="order_phone"]').value;
    let product = this.querySelector('select[name="product"]').value;
    let address = this.querySelector('textarea[name="address"]').value;

    if(name.length < 3){
      alert("❌ Enter full name");
      return;
    }
    if(phone.length < 11){
      alert("❌ Enter 11 digit phone");
      return;
    }
    if(product === ""){
      alert("❌ Choose product");
      return;
    }
    if(address.length < 10){
      alert("❌ Enter full Lagos address");
      return;
    }

   
    let msg = "NEW ORDER%0AName: " + name + "%0APhone: " + phone + "%0AProduct: " + product + "%0AAddress: " + address;
    let waLink = "https://wa.me/2349021228811?text=" + msg;

    alert("✅ Order received: " + product + "\nWe will call you in 30 mins!");

    let goWA = confirm("Send this order to WhatsApp now?");
    if(goWA){
      window.open(waLink, "_blank");
    }

    this.reset();
  });
}


let inputs = document.querySelectorAll('.input,.textarea');
for(let i = 0; i < inputs.length; i++){
  inputs[i].addEventListener('keyup', function(){
    if(this.value.length > 2){
      this.style.borderTopColor = "#2ecc71";
      this.style.borderRightColor = "#2ecc71";
      this.style.borderBottomColor = "#2ecc71";
      this.style.borderLeftColor = "#2ecc71";
    }
  });
}