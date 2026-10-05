function show(id){
 document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
 document.querySelectorAll('nav a').forEach(a=>a.classList.remove('active'));
 document.getElementById(id).classList.add('active');
 document.getElementById('l-'+id).classList.add('active');
 window.scrollTo({top:0,behavior:'smooth'});
}
let cart=[];
function add(name,price){
 let f=cart.find(i=>i.name===name);
 if(f) f.qty++; else cart.push({name,price,qty:1});
 upd(); toast(name+" added ✓");
}
function changeQty(idx,delta){
 cart[idx].qty+=delta;
 if(cart[idx].qty<=0) cart.splice(idx,1);
 upd();
}
function upd(){
 document.getElementById('cartCount').innerText=cart.reduce((s,i)=>s+i.qty,0);
 const l=document.getElementById('cList'), t=document.getElementById('cTotal'), c=document.getElementById('cart');
 if(cart.length) c.classList.add('show');
 l.innerHTML=cart.map((i,idx)=>`
  <div style="display:flex;justify-content:space-between;align-items:center;font-size:12px;margin:8px 0;border-bottom:1px solid #f0e6dc;padding-bottom:6px">
   <div><b>${i.name}</b><br>₦${i.price.toLocaleString()} x ${i.qty} = ₦${(i.price*i.qty).toLocaleString()}</div>
   <div class="qty"><button class="btn-sm" onclick="changeQty(${idx},-1)">−</button><b>${i.qty}</b><button class="btn-sm" onclick="changeQty(${idx},1)">+</button></div>
  </div>`).join('')||"<small style='color:#888'>Cart empty</small>";
 t.innerText="₦"+cart.reduce((s,i)=>s+i.price*i.qty,0).toLocaleString();
 if(!cart.length) c.classList.remove('show');
}
function toggleCart(){document.getElementById('cart').classList.toggle('show');}
function checkout(){
 if(!cart.length){toast("Cart empty");return;}
 const msg=cart.map(i=>`${i.qty}x ${i.name}`).join(', ');
 window.open(`https://wa.me/2348000000000?text=Hi! Order: ${msg} Total: ${document.getElementById('cTotal').innerText}`,"_blank");
}
function openLB(s){document.getElementById('lbImg').src=s;document.getElementById('lightbox').classList.add('show');}
function addT(){
 const name=document.getElementById('tName').value||"Anon", text=document.getElementById('tText').value;
 if(!text){toast("Write something");return;}
 const g=document.getElementById('tGrid'), d=document.createElement('div');
 d.className='card'; d.innerHTML=`<div style="color:var(--accent)">★★★★★</div><p style="font-size:13px;margin:8px 0">"${text}"</p><b style="font-size:11px">${name}</b>`;
 g.prepend(d); toast("Posted! 💛"); document.getElementById('tText').value="";
}
function sendC(){
 const n=document.getElementById('cName').value||"Customer", m=document.getElementById('cMsg').value;
 if(!m){toast("Write message");return;}
 window.open(`https://wa.me/2348000000000?text=I'm ${n}: ${m}`,"_blank");
}
function toast(t){let e=document.getElementById('toast');e.innerText=t;e.style.display='block';setTimeout(()=>e.style.display='none',2200);}
// HERO SLIDER
let hIdx=0; setInterval(()=>{
 const imgs=document.querySelectorAll('#heroWrap img');
 imgs[hIdx].classList.remove('active');
 hIdx=(hIdx+1)%imgs.length;
 imgs[hIdx].classList.add('active');
},3000);
