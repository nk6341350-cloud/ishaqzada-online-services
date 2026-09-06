
const DBKEY='ishaqzada_os_v1';
const cats=['شمپو','تیل','درمل','روغتیا','وزن','ویښتان','کریم','سیروم','نور'];
const tr={
 ps:{brand:'اسحاقزاده آنلاین خدمات',install:'نصب اپ',home:'کور',shop:'بازار',student:'شاګرد',admin:'اډمین',
 welcome:'ستاسو نړیوال آنلاین بازار',sub:'خوندي، اسانه او چټک آنلاین پلورنځی — له مستقیم WhatsApp اړیکې سره.',
 browse:'جنسونه وګورئ',join:'د شاګرد په توګه ثبت',cats:'کټګورۍ',all:'ټول',products:'محصولات',search:'لټون...',
 noProducts:'تر اوسه محصول نشته.',register:'نوی شاګرد ثبت',login:'شاګرد ننوتل',name:'نوم',whatsapp:'WhatsApp شمېره',
 photo:'عکس',pin:'PIN کوډ',submit:'ثبت',phone:'شمېره',pending:'ستاسو حساب د اډمین تایید ته منتظر دی.',
 studentPanel:'د شاګرد صفحه',addProduct:'جنس ثبت',myProducts:'زما جنسونه',myOrders:'فرمایشونه',reports:'راپور',
 productName:'د جنس نوم',qty:'تعداد',price:'قیمت (AFN)',province:'ولایت',address2:'ادرس',category:'کټګوري',save:'ثبت',
 adminPanel:'د اډمین صفحه',setupAdmin:'لومړی اډمین PIN جوړ کړئ',adminPin:'اډمین PIN',approve:'تایید',reject:'رد',students:'شاګردان',
 orders:'فرمایشونه',orderNow:'فرمایش وکړئ',customerOrder:'د مشتری فرمایش',customerPhone:'د مشتری شمېره',location:'اوسنی لوکیشن',
 getLocation:'لوکیشن واخله',total:'ټول قیمت',sendOrder:'فرمایش ثبت',stock:'پاتې',edit:'ایډیټ',delete:'حذف',logout:'وتل',
 address:'ادرس: د شهیدانو چوک، عمري تجارتي مارکیټ، کندهار، افغانستان',complaint:'د شکایت WhatsApp: 0700426319',
 newOrders:'نوي فرمایشونه',sales:'ټول خرڅلاو',uniqueShop:'زما د دوکان لینک',copy:'کاپي',status:'حالت',new:'نوی',ready:'تیار',sent:'لېږل شوی',delivered:'تسلیم شوی'},
 fa:{brand:'خدمات آنلاین اسحاق‌زاده',install:'نصب اپ',home:'خانه',shop:'بازار',student:'شاگرد',admin:'ادمین',
 welcome:'بازار آنلاین شما',sub:'فروشگاه آنلاین سریع و ساده با تماس مستقیم واتساپ.',browse:'مشاهده محصولات',join:'ثبت‌نام شاگرد',
 cats:'دسته‌بندی',all:'همه',products:'محصولات',search:'جستجو...',noProducts:'هنوز محصولی ثبت نشده.',register:'ثبت شاگرد جدید',login:'ورود شاگرد',
 name:'نام',whatsapp:'شماره واتساپ',photo:'عکس',pin:'PIN',submit:'ثبت',phone:'شماره',pending:'حساب شما در انتظار تأیید ادمین است.',
 studentPanel:'صفحه شاگرد',addProduct:'ثبت محصول',myProducts:'محصولات من',myOrders:'سفارش‌ها',reports:'گزارش',productName:'نام محصول',
 qty:'تعداد',price:'قیمت (AFN)',province:'ولایت',address2:'آدرس',category:'دسته‌بندی',save:'ثبت',adminPanel:'صفحه ادمین',
 setupAdmin:'ابتدا PIN ادمین را بسازید',adminPin:'PIN ادمین',approve:'تأیید',reject:'رد',students:'شاگردان',orders:'سفارش‌ها',
 orderNow:'سفارش',customerOrder:'سفارش مشتری',customerPhone:'شماره مشتری',location:'موقعیت فعلی',getLocation:'گرفتن موقعیت',
 total:'قیمت کل',sendOrder:'ثبت سفارش',stock:'باقی',edit:'ویرایش',delete:'حذف',logout:'خروج',address:'آدرس: چهارراه شهیدان، مارکیت تجارتی عمری، قندهار، افغانستان',
 complaint:'واتساپ شکایات: 0700426319',newOrders:'سفارش‌های جدید',sales:'فروش کل',uniqueShop:'لینک فروشگاه من',copy:'کپی',status:'حالت',new:'جدید',ready:'آماده',sent:'ارسال شده',delivered:'تحویل شده'},
 en:{brand:'Ishaqzada Online Services',install:'Install App',home:'Home',shop:'Shop',student:'Student',admin:'Admin',
 welcome:'Your Online Marketplace',sub:'Fast and simple shopping with direct WhatsApp contact.',browse:'Browse Products',join:'Student Registration',
 cats:'Categories',all:'All',products:'Products',search:'Search...',noProducts:'No products yet.',register:'New Student Registration',login:'Student Login',
 name:'Name',whatsapp:'WhatsApp Number',photo:'Photo',pin:'PIN',submit:'Register',phone:'Phone',pending:'Your account is waiting for admin approval.',
 studentPanel:'Student Dashboard',addProduct:'Add Product',myProducts:'My Products',myOrders:'Orders',reports:'Reports',productName:'Product Name',
 qty:'Quantity',price:'Price (AFN)',province:'Province',address2:'Address',category:'Category',save:'Save',adminPanel:'Admin Dashboard',
 setupAdmin:'Create admin PIN first',adminPin:'Admin PIN',approve:'Approve',reject:'Reject',students:'Students',orders:'Orders',orderNow:'Order Now',
 customerOrder:'Customer Order',customerPhone:'Customer Phone',location:'Current Location',getLocation:'Get Location',total:'Total',
 sendOrder:'Place Order',stock:'Stock',edit:'Edit',delete:'Delete',logout:'Logout',address:'Address: Shahidano Square, Omari Commercial Market, Kandahar, Afghanistan',
 complaint:'Complaints WhatsApp: 0700426319',newOrders:'New Orders',sales:'Total Sales',uniqueShop:'My Shop Link',copy:'Copy',status:'Status',
 new:'New',ready:'Ready',sent:'Sent',delivered:'Delivered'}
};
let lang=localStorage.getItem('lang')||'ps';
let deferredPrompt=null;
let session={student:null,admin:false};
function db(){let d=JSON.parse(localStorage.getItem(DBKEY)||'null');if(!d){d={adminPin:null,students:[],products:[],orders:[]};save(d)}return d}
function save(d){localStorage.setItem(DBKEY,JSON.stringify(d))}
function id(p='id'){return p+'_'+Date.now().toString(36)+Math.random().toString(36).slice(2,7)}
function t(k){return (tr[lang]&&tr[lang][k])||k}
function esc(s=''){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function toast(m){let e=document.querySelector('#toast');e.textContent=m;e.classList.add('show');setTimeout(()=>e.classList.remove('show'),2200)}
function fileToData(file){return new Promise((res,rej)=>{let r=new FileReader();r.onload=()=>res(r.result);r.onerror=rej;r.readAsDataURL(file)})}
function setLang(l){lang=l;localStorage.setItem('lang',l);document.documentElement.lang=l;document.documentElement.dir=l==='en'?'ltr':'rtl';document.querySelector('#langSelect').value=l;route();document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=t(e.dataset.i18n))}
document.querySelector('#langSelect').addEventListener('change',e=>setLang(e.target.value));
function openDrawer(v=true){document.querySelector('#drawer').classList.toggle('open',v);document.querySelector('#backdrop').classList.toggle('show',v)}
document.querySelector('#menuBtn').onclick=()=>openDrawer(true);document.querySelector('#closeDrawer').onclick=()=>openDrawer(false);document.querySelector('#backdrop').onclick=()=>openDrawer(false);
document.querySelectorAll('[data-route]').forEach(b=>b.onclick=()=>{location.hash=b.dataset.route;openDrawer(false)});
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e});
document.querySelector('#installBtn').onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null}else{toast(lang==='en'?'Use Add to Home Screen in your browser menu.':'د براوزر له مینو څخه Add to Home Screen وکاروئ.')}};
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
function home(){
 return `<section class="hero"><img class="hero-logo" src="logo.jpg"><h1>${t('brand')}</h1><p>${t('sub')}</p>
 <div class="actions"><button class="btn btn-primary" onclick="location.hash='shop'">${t('browse')}</button><button class="btn btn-soft" onclick="location.hash='student'">${t('join')}</button></div></section>
 <section class="section"><div class="grid">
 <div class="card feature"><div class="ico">🛍️</div><h3>${t('shop')}</h3><p class="muted">${t('cats')}</p></div>
 <div class="card feature"><div class="ico">💬</div><h3>WhatsApp</h3><p class="muted">هر محصول د خپل شاګرد WhatsApp لري.</p></div>
 <div class="card feature"><div class="ico">📱</div><h3>PWA</h3><p class="muted">په موبایل کې د اپ په شان نصب کېدونکی.</p></div>
 </div></section>`;
}
function shop(){
 const d=db(), q=new URLSearchParams(location.search), sid=q.get('shop');
 let products=d.products.filter(p=>p.active!==false && (!sid||p.studentId===sid));
 let owner=sid?d.students.find(s=>s.id===sid):null;
 return `<section class="section">
 ${owner?`<div class="card shop-owner"><img src="${owner.photo||'icon-192.png'}"><div><strong>${esc(owner.name)}</strong><div class="muted">${t('whatsapp')}: ${esc(owner.whatsapp)}</div></div></div>`:''}
 <div class="section-head"><div><h2>${t('products')}</h2><div class="muted">${t('brand')}</div></div><input id="searchBox" placeholder="${t('search')}" style="max-width:280px;padding:12px;border:1px solid #ddd;border-radius:12px"></div>
 <div class="category-row" id="catRow"><button class="chip active" data-cat="">${t('all')}</button>${cats.map(c=>`<button class="chip" data-cat="${c}">${c}</button>`).join('')}</div>
 <div class="product-grid" id="productGrid">${renderProducts(products)}</div></section>`;
}
function renderProducts(ps){
 const d=db(); if(!ps.length)return `<div class="card empty" style="grid-column:1/-1">${t('noProducts')}</div>`;
 return ps.map(p=>{let s=d.students.find(x=>x.id===p.studentId)||{};return `<article class="card product">
 <img src="${p.photo||'icon-512.png'}" alt=""><div class="product-body"><div class="badge">${esc(p.category)}</div><h3>${esc(p.name)}</h3>
 <div class="price">${Number(p.price).toLocaleString('en-US')} AFN</div><div class="stock">${t('stock')}: ${p.qty}</div>
 <p class="muted">${esc(p.province||'')}</p>
 <button class="btn btn-navy" style="width:100%;margin-bottom:8px" onclick="openOrder('${p.id}')">${t('orderNow')}</button>
 <a class="wa" href="https://wa.me/${String(s.whatsapp||'').replace(/\D/g,'')}" target="_blank">WhatsApp · ${esc(s.name||'')}</a></div></article>`}).join('');
}
function attachShop(){
 let d=db(), q=new URLSearchParams(location.search), sid=q.get('shop'); let all=d.products.filter(p=>p.active!==false&&(!sid||p.studentId===sid));let cat='';
 const search=document.querySelector('#searchBox'); if(!search)return;
 function f(){let term=search.value.toLowerCase();let ps=all.filter(p=>(!cat||p.category===cat)&&p.name.toLowerCase().includes(term));document.querySelector('#productGrid').innerHTML=renderProducts(ps)}
 search.oninput=f;document.querySelectorAll('#catRow .chip').forEach(b=>b.onclick=()=>{document.querySelectorAll('#catRow .chip').forEach(x=>x.classList.remove('active'));b.classList.add('active');cat=b.dataset.cat;f()})
}
function student(){
 if(session.student)return studentPanel();
 return `<section class="section"><div class="grid-2">
 <div class="card"><h2>${t('register')}</h2><form id="regForm" class="form">
 <div class="field"><label>${t('name')}</label><input name="name" required></div>
 <div class="field"><label>${t('whatsapp')}</label><input name="whatsapp" type="tel" required placeholder="9370..."></div>
 <div class="field"><label>${t('photo')}</label><input name="photo" type="file" accept="image/*" required></div>
 <div class="field"><label>${t('pin')}</label><input name="pin" type="password" inputmode="numeric" minlength="4" maxlength="8" required></div>
 <button class="btn btn-primary">${t('submit')}</button></form></div>
 <div class="card"><h2>${t('login')}</h2><form id="loginForm" class="form">
 <div class="field"><label>${t('phone')}</label><input name="phone" required></div>
 <div class="field"><label>${t('pin')}</label><input name="pin" type="password" required></div>
 <button class="btn btn-navy">${t('login')}</button></form></div></div></section>`;
}
function studentPanel(){
 const s=session.student,d=db(),ps=d.products.filter(p=>p.studentId===s.id),os=d.orders.filter(o=>o.studentId===s.id),sales=os.filter(o=>o.status==='delivered').reduce((a,o)=>a+o.total,0);
 return `<section class="section"><div class="section-head"><div><h2>${t('studentPanel')}</h2><div class="shop-owner"><img src="${s.photo||'icon-192.png'}"><strong>${esc(s.name)}</strong></div></div><button class="btn btn-danger" id="studentLogout">${t('logout')}</button></div>
 <div class="stat-grid"><div class="stat"><span>${t('myProducts')}</span><strong>${ps.length}</strong></div><div class="stat"><span>${t('myOrders')}</span><strong>${os.length}</strong></div><div class="stat"><span>${t('newOrders')}</span><strong>${os.filter(o=>o.status==='new').length}</strong></div><div class="stat"><span>${t('sales')}</span><strong>${sales.toLocaleString('en-US')} AFN</strong></div></div>
 <div class="card" style="margin-top:16px"><div class="section-head"><h3>${t('uniqueShop')}</h3><button class="btn btn-soft" id="copyShop">${t('copy')}</button></div><input id="shopLink" readonly value="${location.origin+location.pathname+'?shop='+s.id+'#shop'}" style="width:100%;padding:12px;border:1px solid #ddd;border-radius:12px"></div>
 <div class="tabs" style="margin-top:16px"><button class="active" data-stab="add">${t('addProduct')}</button><button data-stab="products">${t('myProducts')}</button><button data-stab="orders">${t('myOrders')}</button></div>
 <div id="studentTab"></div></section>`;
}
function addProductForm(editId=''){
 const d=db(),p=editId?d.products.find(x=>x.id===editId):null;
 return `<div class="card"><form id="productForm" class="form">
 <input type="hidden" name="id" value="${p?.id||''}">
 <div class="field"><label>${t('photo')}</label><input name="photo" type="file" accept="image/*" ${p?'':'required'}></div>${p?.photo?`<img class="preview-img" src="${p.photo}">`:''}
 <div class="field"><label>${t('productName')}</label><input name="name" required value="${esc(p?.name||'')}"></div>
 <div class="grid-2"><div class="field"><label>${t('qty')}</label><input name="qty" type="number" min="0" required value="${p?.qty??''}"></div><div class="field"><label>${t('price')}</label><input name="price" type="number" min="0" required value="${p?.price??''}"></div></div>
 <div class="field"><label>${t('category')}</label><select name="category">${cats.map(c=>`<option ${p?.category===c?'selected':''}>${c}</option>`).join('')}</select></div>
 <div class="field"><label>${t('province')}</label><input name="province" required value="${esc(p?.province||'')}"></div>
 <div class="field"><label>${t('address2')}</label><textarea name="address">${esc(p?.address||'')}</textarea></div>
 <button class="btn btn-primary">${t('save')}</button></form></div>`;
}
function renderStudentTab(tab='add'){
 const box=document.querySelector('#studentTab');if(!box||!session.student)return;let d=db(),s=session.student;
 if(tab==='add')box.innerHTML=addProductForm();
 if(tab==='products'){let ps=d.products.filter(p=>p.studentId===s.id);box.innerHTML=ps.length?`<div class="product-grid">${ps.map(p=>`<div class="card product"><img src="${p.photo}"><div class="product-body"><h3>${esc(p.name)}</h3><div class="price">${p.price} AFN</div><div>${t('stock')}: ${p.qty}</div><div class="actions" style="margin-top:10px"><button class="btn btn-soft" onclick="editProduct('${p.id}')">${t('edit')}</button><button class="btn btn-danger" onclick="deleteProduct('${p.id}')">${t('delete')}</button></div></div></div>`).join('')}</div>`:`<div class="card empty">${t('noProducts')}</div>`}
 if(tab==='orders'){let os=d.orders.filter(o=>o.studentId===s.id).sort((a,b)=>b.created-a.created);box.innerHTML=`<div class="card table-wrap"><table class="table"><thead><tr><th>#</th><th>${t('productName')}</th><th>${t('qty')}</th><th>${t('total')}</th><th>${t('province')}</th><th>${t('customerPhone')}</th><th>${t('status')}</th></tr></thead><tbody>${os.map(o=>`<tr><td>${esc(o.orderNo)}</td><td>${esc(o.productName)}</td><td>${o.qty}</td><td>${o.total} AFN</td><td>${esc(o.province)}</td><td>${esc(o.phone)}</td><td><select onchange="updateOrderStatus('${o.id}',this.value)">${['new','ready','sent','delivered'].map(x=>`<option value="${x}" ${o.status===x?'selected':''}>${t(x)}</option>`).join('')}</select></td></tr>`).join('')}</tbody></table></div>`}
 attachStudentTab();
}
function attachStudentTab(){
 let f=document.querySelector('#productForm');if(f)f.onsubmit=async e=>{e.preventDefault();let fd=new FormData(f),d=db(),pid=fd.get('id'),old=pid?d.products.find(x=>x.id===pid):null;let photo=old?.photo||'';let file=fd.get('photo');if(file&&file.size)photo=await fileToData(file);let p={id:pid||id('p'),studentId:session.student.id,photo,name:fd.get('name'),qty:+fd.get('qty'),price:+fd.get('price'),category:fd.get('category'),province:fd.get('province'),address:fd.get('address'),active:true,created:old?.created||Date.now()};if(old)Object.assign(old,p);else d.products.push(p);save(d);toast(t('save'));renderStudentTab('products')}
}
async function attachStudent(){
 let r=document.querySelector('#regForm');if(r)r.onsubmit=async e=>{e.preventDefault();let fd=new FormData(r),d=db();let wa=String(fd.get('whatsapp')).replace(/\s/g,'');if(d.students.some(s=>s.whatsapp===wa)){toast('دا شمېره مخکې ثبت ده');return}let photo=await fileToData(fd.get('photo'));d.students.push({id:id('s'),name:fd.get('name'),whatsapp:wa,photo,pin:fd.get('pin'),approved:false,created:Date.now()});save(d);r.reset();toast(t('pending'))}
 let l=document.querySelector('#loginForm');if(l)l.onsubmit=e=>{e.preventDefault();let fd=new FormData(l),s=db().students.find(x=>x.whatsapp===String(fd.get('phone')).replace(/\s/g,'')&&x.pin===fd.get('pin'));if(!s){toast('شمېره یا PIN غلط دی');return}if(!s.approved){toast(t('pending'));return}session.student=s;route()}
 if(session.student){document.querySelector('#studentLogout').onclick=()=>{session.student=null;route()};document.querySelector('#copyShop').onclick=()=>navigator.clipboard.writeText(document.querySelector('#shopLink').value).then(()=>toast(t('copy')));document.querySelectorAll('[data-stab]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-stab]').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderStudentTab(b.dataset.stab)});renderStudentTab('add')}
}
function editProduct(pid){document.querySelectorAll('[data-stab]').forEach(x=>x.classList.remove('active'));document.querySelector('#studentTab').innerHTML=addProductForm(pid);attachStudentTab()}
function deleteProduct(pid){let d=db();d.products=d.products.filter(p=>p.id!==pid);save(d);renderStudentTab('products')}
function updateOrderStatus(oid,status){let d=db(),o=d.orders.find(x=>x.id===oid);if(o){o.status=status;save(d);toast(t('save'))}}
function admin(){
 const d=db();
 if(!d.adminPin)return `<section class="section"><div class="card" style="max-width:520px;margin:auto"><h2>${t('setupAdmin')}</h2><form id="adminSetup" class="form"><div class="field"><label>${t('adminPin')}</label><input name="pin" type="password" minlength="4" required></div><button class="btn btn-primary">${t('save')}</button></form></div></section>`;
 if(!session.admin)return `<section class="section"><div class="card" style="max-width:520px;margin:auto"><h2>${t('admin')}</h2><form id="adminLogin" class="form"><div class="field"><label>${t('adminPin')}</label><input name="pin" type="password" required></div><button class="btn btn-navy">${t('login')}</button></form></div></section>`;
 let sales=d.orders.filter(o=>o.status==='delivered').reduce((a,o)=>a+o.total,0);
 return `<section class="section"><div class="section-head"><div><h2>${t('adminPanel')}</h2><div class="muted">${t('brand')}</div></div><button class="btn btn-danger" id="adminLogout">${t('logout')}</button></div>
 <div class="stat-grid"><div class="stat"><span>${t('students')}</span><strong>${d.students.length}</strong></div><div class="stat"><span>${t('products')}</span><strong>${d.products.length}</strong></div><div class="stat"><span>${t('newOrders')}</span><strong>${d.orders.filter(o=>o.status==='new').length}</strong></div><div class="stat"><span>${t('sales')}</span><strong>${sales.toLocaleString('en-US')} AFN</strong></div></div>
 <div class="tabs" style="margin-top:16px"><button class="active" data-atab="students">${t('students')}</button><button data-atab="orders">${t('orders')}</button><button data-atab="products">${t('products')}</button></div><div id="adminTab"></div></section>`;
}
function renderAdminTab(tab='students'){
 let d=db(),box=document.querySelector('#adminTab');if(!box)return;
 if(tab==='students')box.innerHTML=`<div class="card table-wrap"><table class="table"><thead><tr><th>${t('photo')}</th><th>${t('name')}</th><th>${t('whatsapp')}</th><th>${t('status')}</th><th></th></tr></thead><tbody>${d.students.map(s=>`<tr><td><img src="${s.photo}" style="width:44px;height:44px;border-radius:50%;object-fit:cover"></td><td>${esc(s.name)}</td><td>${esc(s.whatsapp)}</td><td><span class="badge ${s.approved?'ok':'wait'}">${s.approved?t('approve'):t('pending')}</span></td><td>${s.approved?`<button class="btn btn-danger" onclick="rejectStudent('${s.id}')">${t('reject')}</button>`:`<button class="btn btn-primary" onclick="approveStudent('${s.id}')">${t('approve')}</button>`}</td></tr>`).join('')}</tbody></table></div>`;
 if(tab==='orders')box.innerHTML=`<div class="card table-wrap"><table class="table"><thead><tr><th>#</th><th>${t('student')}</th><th>${t('productName')}</th><th>${t('qty')}</th><th>${t('total')}</th><th>${t('province')}</th><th>${t('address2')}</th><th>${t('location')}</th><th>${t('status')}</th></tr></thead><tbody>${d.orders.slice().sort((a,b)=>b.created-a.created).map(o=>{let s=d.students.find(x=>x.id===o.studentId)||{};return `<tr><td>${esc(o.orderNo)}</td><td>${esc(s.name||'')}</td><td>${esc(o.productName)}</td><td>${o.qty}</td><td>${o.total} AFN</td><td>${esc(o.province)}</td><td>${esc(o.address)}</td><td>${o.location?`<a target="_blank" href="https://maps.google.com/?q=${encodeURIComponent(o.location)}">Map</a>`:''}</td><td>${t(o.status)}</td></tr>`}).join('')}</tbody></table></div>`;
 if(tab==='products')box.innerHTML=`<div class="product-grid">${d.products.map(p=>`<div class="card product"><img src="${p.photo}"><div class="product-body"><h3>${esc(p.name)}</h3><div class="price">${p.price} AFN</div><div>${t('stock')}: ${p.qty}</div><button class="btn btn-danger" style="margin-top:10px" onclick="adminDeleteProduct('${p.id}')">${t('delete')}</button></div></div>`).join('')}</div>`;
}
function attachAdmin(){
 let s=document.querySelector('#adminSetup');if(s)s.onsubmit=e=>{e.preventDefault();let d=db();d.adminPin=new FormData(s).get('pin');save(d);session.admin=true;route()}
 let l=document.querySelector('#adminLogin');if(l)l.onsubmit=e=>{e.preventDefault();let p=new FormData(l).get('pin');if(p===db().adminPin){session.admin=true;route()}else toast('PIN غلط دی')}
 if(session.admin){document.querySelector('#adminLogout').onclick=()=>{session.admin=false;route()};document.querySelectorAll('[data-atab]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-atab]').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderAdminTab(b.dataset.atab)});renderAdminTab('students')}
}
function approveStudent(idv){let d=db(),s=d.students.find(x=>x.id===idv);if(s){s.approved=true;save(d);renderAdminTab('students')}}
function rejectStudent(idv){let d=db(),s=d.students.find(x=>x.id===idv);if(s){s.approved=false;save(d);renderAdminTab('students')}}
function adminDeleteProduct(pid){let d=db();d.products=d.products.filter(p=>p.id!==pid);save(d);renderAdminTab('products')}
function openOrder(pid){
 let d=db(),p=d.products.find(x=>x.id===pid);if(!p)return;document.querySelector('#view').innerHTML=`<section class="section"><div class="grid-2"><div class="card product"><img src="${p.photo}"><div class="product-body"><h2>${esc(p.name)}</h2><div class="price">${p.price} AFN</div><div>${t('stock')}: ${p.qty}</div></div></div>
 <div class="card"><h2>${t('customerOrder')}</h2><form id="orderForm" class="form"><input type="hidden" name="pid" value="${p.id}">
 <div class="field"><label>${t('productName')}</label><input value="${esc(p.name)}" readonly></div>
 <div class="field"><label>${t('qty')}</label><input id="orderQty" name="qty" type="number" min="1" max="${p.qty}" value="1" required></div>
 <div class="notice">${t('total')}: <strong id="orderTotal">${p.price} AFN</strong></div>
 <div class="field"><label>${t('customerPhone')}</label><input name="phone" type="tel" required></div>
 <div class="field"><label>${t('province')}</label><input name="province" required></div>
 <div class="field"><label>${t('address2')}</label><textarea name="address" required></textarea></div>
 <div class="field"><label>${t('location')}</label><div class="actions" style="justify-content:flex-start"><input id="locInput" name="location" readonly style="flex:1"><button type="button" id="getLoc" class="btn btn-soft">${t('getLocation')}</button></div></div>
 <button class="btn btn-primary">${t('sendOrder')}</button></form></div></div></section>`;
 let q=document.querySelector('#orderQty');q.oninput=()=>document.querySelector('#orderTotal').textContent=(Math.max(1,+q.value||1)*p.price).toLocaleString('en-US')+' AFN';
 document.querySelector('#getLoc').onclick=()=>navigator.geolocation?navigator.geolocation.getCurrentPosition(pos=>{document.querySelector('#locInput').value=pos.coords.latitude+','+pos.coords.longitude},()=>toast('لوکیشن اجازه نه لري')):toast('Geolocation not supported');
 document.querySelector('#orderForm').onsubmit=e=>{e.preventDefault();let fd=new FormData(e.target),d=db(),pp=d.products.find(x=>x.id===pid),qty=+fd.get('qty');if(!pp||qty<1||qty>pp.qty){toast('تعداد سم نه دی');return}let orderNo='ISQ-'+String(d.orders.length+1).padStart(5,'0');d.orders.push({id:id('o'),orderNo,studentId:pp.studentId,productId:pp.id,productName:pp.name,qty,total:qty*pp.price,phone:fd.get('phone'),province:fd.get('province'),address:fd.get('address'),location:fd.get('location'),status:'new',created:Date.now()});pp.qty-=qty;save(d);toast('فرمایش ثبت شو: '+orderNo);setTimeout(()=>location.hash='shop',900)}
}
function route(){
 document.documentElement.dir=lang==='en'?'ltr':'rtl';document.querySelector('#langSelect').value=lang;
 let r=(location.hash||'#home').slice(1),html=r==='home'?home():r==='shop'?shop():r==='student'?student():r==='admin'?admin():home();document.querySelector('#view').innerHTML=html;
 document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=t(e.dataset.i18n));
 if(r==='shop')attachShop();if(r==='student')attachStudent();if(r==='admin')attachAdmin();
}
window.addEventListener('hashchange',route);setLang(lang);
