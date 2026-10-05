function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('nav a').forEach(a=>a.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.getElementById('link-'+id).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}


function toast(t){let e=document.getElementById('toast');e.innerText=t;e.style.display='block';setTimeout(()=>e.style.display='none',2500);}

function getData(){
 const s=document.getElementById('subject').value;
 const n=document.getElementById('name').value||"Customer";
 const p=document.getElementById('phone').value||"No phone";
 const m=document.getElementById('message').value;
 if(!m){toast("Please write a message");return null;}
 return {s,n,p,m};
}

function send(){
 const d=getData(); if(!d) return;
 const text=`Hi Brew & Bloom! ☕%0A%0ASubject: ${d.s}%0AName: ${d.n}%0APhone: ${d.p}%0AMessage: ${d.m}`;
 window.open(`https://wa.me/2348000000000?text=${text}`,"_blank");
 toast("Opening WhatsApp...");
}

function sendEmail(){
 const d=getData(); if(!d) return;
 window.location.href=`mailto:hello@brewandbloom.com?subject=${d.s} - ${d.n}&body=Name: ${d.n}%0APhone: ${d.p}%0A%0A${d.m}`;
}


function addTestimonial(){
  const name=document.getElementById('tName').value||"Anonymous";
  const text=document.getElementById('tText').value;
  const stars=document.getElementById('tStars').value.split(' ')[0];
  if(!text){ toast("Please write something"); return; }
  const grid=document.getElementById('testimonialGrid');
  const div=document.createElement('div');
  div.className='card'; div.style.textAlign='left';
  div.innerHTML=`<div style="color:#c98a5b">${stars}</div><p style="font-size:13px;margin:10px 0;line-height:1.5">"${text}"</p><div style="display:flex;gap:8px;align-items:center;margin-top:10px"><img src="https://i.pravatar.cc/40?u=${Date.now()}" style="width:32px;height:32px;border-radius:50%"><div><b style="font-size:11px">${name}</b><br><small style="font-size:10px;color:#888">Verified Customer</small></div></div>`;
  grid.prepend(div);
  toast("Testimonial added! Thanks 💛");
  document.getElementById('tText').value=""; document.getElementById('tName').value="";
}
// Auto-highlight testimonials
let ti=0; setInterval(()=>{
  document.querySelectorAll('#testimonialGrid.card').forEach(c=>c.style.borderColor="#efe6dc");
  const cards=document.querySelectorAll('#testimonialGrid.card');
  if(cards[ti]) cards[ti].style.borderColor="#c98a5b";
  ti=(ti+1)%cards.length;
},2000);

let cart=[];
function addToCart(name,price){
  cart.push({name,price}); updateCart(); toast(name+" added ✓");
}
function updateCart(){
  const c=document.getElementById('cart'), list=document.getElementById('cartList'), total=document.getElementById('cartTotal');
  if(cart.length>0) c.classList.add('show');
  list.innerHTML=cart.map((i,idx)=>`<div style="display:flex;justify-content:space-between;font-size:13px;margin:6px 0">${i.name} - ₦${i.price.toLocaleString()} <span onclick="removeItem(${idx})" style="cursor:pointer;color:red">x</span></div>`).join('');
  total.innerText="₦"+cart.reduce((s,i)=>s+i.price,0).toLocaleString();
}
function removeItem(i){ cart.splice(i,1); updateCart(); if(cart.length==0) document.getElementById('cart').classList.remove('show'); }
function checkout(){
  const msg=cart.map(i=>i.name).join(', ');
  window.open(`https://wa.me/2348000000000?text=Hi Brew & Bloom! I want to order: ${msg} Total: ${document.getElementById('cartTotal').innerText}`,"_blank");
}
function sendMsg(){
  const n=document.getElementById('cName').value||"Customer", m=document.getElementById('cMsg').value||"Hello";
  window.open(`https://wa.me/2348000000000?text=Hi, I'm ${n}: ${m}`,"_blank");
}
function filterMenu(cat){
  document.querySelectorAll('.card').forEach(c=>{ c.style.display=(cat==='all'||c.dataset.cat===cat)?'block':'none'; });
}
function toast(t){ let e=document.getElementById('toast'); e.innerText=t; e.style.display='block'; setTimeout(()=>e.style.display='none',2000); }
