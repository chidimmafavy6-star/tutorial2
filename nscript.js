
let selected="";
function pick(el,t){
     document.querySelectorAll('.grid.card').forEach(c=>c.classList.remove('active')); 
     el.classList.add('active');
      selected=t; toast(t+" selected");
       openBook();
     }
function openBook(){
     document.getElementById('chosen').innerText=selected||"Choose service";
      document.getElementById('bookModal').classList.add('show');
     }
function closeBook(){
     document.getElementById('bookModal').classList.remove('show');
     }
function book(){
     const n=document.getElementById('name').value||"Client";
      const d=document.getElementById('date').value||"ASAP";
       const tm=document.getElementById('time').value;
        window.open(`https://wa.me/12125550147?text=Hi%20Lumiere!%20Name:%20${n}%20Service:%20${selected}%20Date:%20${d}%20Time:%20${tm}`,"_blank"); 
        closeBook();
         toast("Opening WhatsApp...");
         }
function zoom(s){
     document.getElementById('bigImg').src=s; 
     document.getElementById('imgModal').classList.add('show');
     }
function go(id){
     document.getElementById(id).scrollIntoView({behavior:'smooth'}); 
    }
function toast(t){ 
    let e=document.getElementById('toast');
     e.innerText=t; e.style.display='block';
      setTimeout(()=>e.style.display='none',2500);
     }
function addReview(){
 const name=document.getElementById('rName').value||"Anonymous";
  const text=document.getElementById('rText').value;
   const stars=document.getElementById('rStars').value.split(' ')[0];
 if(!text){ toast("Write a review first"); return; }
 const g=document.getElementById('reviewGrid');
  const div=document.createElement('div');
   div.className='review-card';
 div.innerHTML=`<div class="stars">${stars}</div><p style="font-size:12px;margin:8px 0">"${text}"</p><b style="font-size:11px">${name} • Verified</b>`;
 g.prepend(div); toast("Review posted! 💖"); document.getElementById('rText').value=""; document.getElementById('rName').value="";
}
document.getElementById('date').valueAsDate=new Date();
