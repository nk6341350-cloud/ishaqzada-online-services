const cfg=window.ISHAQZADA_CONFIG||{};
const sb=(cfg.SUPABASE_URL&&cfg.SUPABASE_URL.startsWith('http')&&cfg.SUPABASE_ANON_KEY&&!cfg.SUPABASE_ANON_KEY.startsWith('PASTE'))
  ? supabase.createClient(cfg.SUPABASE_URL,cfg.SUPABASE_ANON_KEY):null;

const cats=[
  'شمپو',
  'تیل',
  'درمل',
  'روغتیا',
  'وزن',
  'ویښتان',
  'کریم',
  'سیروم',
  'نور',
  'ساعتونه',
  'عطرونه',
  'معجون',
  'کپسول',
  'شمپو او تیل',
  'کپسول او تیل'
];

const catPics={
  'شمپو':'cat-shampoo.jpg',
  'تیل':'cat-oil.jpg',
  'درمل':'cat-medicine.jpg',
  'روغتیا':'cat-health.jpg',
  'وزن':'cat-weight.jpg',
  'ویښتان':'cat-hair.jpg',
  'کریم':'cat-cream.jpg',
  'سیروم':'cat-serum.jpg',
  'نور':'cat-other.jpg',
  'ساعتونه':'cat-watch.jpg',
  'عطرونه':'cat-perfume.jpg',
  'معجون':'cat-majoon.jpg',
  'کپسول':'cat-capsule.jpg',
  'شمپو او تیل':'cat-shampoo-oil.jpg',
  'کپسول او تیل':'cat-capsule-oil.jpg'
};

const tr={
ps:{
brand:'اسحاقزاده آنلاین خدمات',
install:'نصب اپ',
home:'کور',
shop:'بازار',
student:'شاګرد',
admin:'اډمین',
products:'محصولات',
all:'ټول',
search:'لټون...',
noProducts:'تر اوسه محصول نشته.',
register:'نوی شاګرد ثبت',
login:'شاګرد ننوتل',
name:'نوم',
whatsapp:'WhatsApp شمېره',
photo:'عکس',
pin:'PIN کوډ',
submit:'ثبت',
phone:'شمېره',
pending:'ستاسو حساب د اډمین تایید ته منتظر دی.',
studentPanel:'د شاګرد صفحه',
addProduct:'جنس ثبت',
myProducts:'زما جنسونه',
myOrders:'فرمایشونه',
productName:'د جنس نوم',
qty:'تعداد',
price:'قیمت (AFN)',
province:'ولایت',
address2:'ادرس',
category:'کټګوري',
save:'ثبت',
adminPanel:'د اډمین صفحه',
adminPin:'اډمین PIN',
approve:'تایید',
reject:'رد',
students:'شاګردان',
orders:'فرمایشونه',
orderNow:'فرمایش وکړئ',
customerOrder:'د مشتری فرمایش',
customerPhone:'د مشتری شمېره',
location:'اوسنی لوکیشن',
getLocation:'لوکیشن واخله',
total:'ټول قیمت',
sendOrder:'فرمایش ثبت',
stock:'پاتې',
edit:'ایډیټ',
delete:'حذف',
logout:'وتل',
address:'ادرس: د شهیدانو چوک، عمري تجارتي مارکیټ، کندهار، افغانستان',
newOrders:'نوي فرمایشونه',
sales:'ټول خرڅلاو',
uniqueShop:'زما د دوکان لینک',
copy:'کاپي',
status:'حالت',
new:'نوی',
ready:'تیار',
sent:'لېږل شوی',
delivered:'تسلیم شوی',
rejected:'رد شوی',
trackOrder:'د فرمایش حالت',
complaint:'د شکایت شمېره',
openMap:'لوکیشن خلاص کړه',
noLocation:'لوکیشن نشته'
},
fa:{
brand:'خدمات آنلاین اسحاق‌زاده',
install:'نصب اپ',
shop:'بازار',
student:'شاگرد',
admin:'ادمین',
products:'محصولات',
all:'همه',
search:'جستجو...',
noProducts:'هنوز محصولی ثبت نشده.',
register:'ثبت شاگرد جدید',
login:'ورود شاگرد',
name:'نام',
whatsapp:'شماره واتساپ',
photo:'عکس',
pin:'PIN',
submit:'ثبت',
phone:'شماره',
pending:'حساب شما در انتظار تأیید ادمین است.',
studentPanel:'صفحه شاگرد',
addProduct:'ثبت محصول',
myProducts:'محصولات من',
myOrders:'سفارش‌ها',
productName:'نام محصول',
qty:'تعداد',
price:'قیمت (AFN)',
province:'ولایت',
address2:'آدرس',
category:'دسته‌بندی',
save:'ثبت',
adminPanel:'صفحه ادمین',
adminPin:'PIN ادمین',
approve:'تأیید',
reject:'رد',
students:'شاگردان',
orders:'سفارش‌ها',
orderNow:'سفارش',
customerOrder:'سفارش مشتری',
customerPhone:'شماره مشتری',
location:'موقعیت فعلی',
getLocation:'گرفتن موقعیت',
total:'قیمت کل',
sendOrder:'ثبت سفارش',
stock:'باقی',
edit:'ویرایش',
delete:'حذف',
logout:'خروج',
address:'آدرس: چهارراه شهیدان، مارکیت تجارتی عمری، قندهار، افغانستان',
uniqueShop:'لینک فروشگاه من',
copy:'کپی',
status:'حالت',
new:'جدید',
ready:'آماده',
sent:'ارسال شده',
delivered:'تحویل شده',
rejected:'رد شده',
trackOrder:'وضعیت سفارش',
complaint:'شماره شکایت',
openMap:'باز کردن موقعیت',
noLocation:'موقعیت ثبت نشده'
},
en:{
brand:'Ishaqzada Online Services',
install:'Install App',
shop:'Shop',
student:'Student',
admin:'Admin',
products:'Products',
all:'All',
search:'Search...',
noProducts:'No products yet.',
register:'New Student Registration',
login:'Student Login',
name:'Name',
whatsapp:'WhatsApp Number',
photo:'Photo',
pin:'PIN',
submit:'Register',
phone:'Phone',
pending:'Your account is waiting for admin approval.',
studentPanel:'Student Dashboard',
addProduct:'Add Product',
myProducts:'My Products',
myOrders:'Orders',
productName:'Product Name',
qty:'Quantity',
price:'Price (AFN)',
province:'Province',
address2:'Address',
category:'Category',
save:'Save',
adminPanel:'Admin Dashboard',
adminPin:'Admin PIN',
approve:'Approve',
reject:'Reject',
students:'Students',
orders:'Orders',
orderNow:'Order Now',
customerOrder:'Customer Order',
customerPhone:'Customer Phone',
location:'Current Location',
getLocation:'Get Location',
total:'Total',
sendOrder:'Place Order',
stock:'Stock',
edit:'Edit',
delete:'Delete',
logout:'Logout',
address:'Address: Shahidano Square, Omari Commercial Market, Kandahar, Afghanistan',
uniqueShop:'My Shop Link',
copy:'Copy',
status:'Status',
new:'New',
ready:'Ready',
sent:'Sent',
delivered:'Delivered',
rejected:'Rejected',
trackOrder:'Order Status',
complaint:'Complaint Number',
openMap:'Open Location',
noLocation:'No location'
}
};

let lang=localStorage.getItem('lang')||'ps';
let deferredPrompt=null;
let studentSession=JSON.parse(localStorage.getItem('studentSession')||'null');
let adminPin=localStorage.getItem('adminPin')||'';

function t(k){
  return tr[lang]?.[k]||k;
}

function esc(s=''){
  return String(s??'').replace(
    /[&<>"']/g,
    m=>({
      '&':'&amp;',
      '<':'&lt;',
      '>':'&gt;',
      '"':'&quot;',
      "'":'&#39;'
    }[m])
  );
}

function toast(m){
  let e=document.querySelector('#toast');
  e.textContent=m;
  e.classList.add('show');
  setTimeout(()=>e.classList.remove('show'),2500);
}

function apiReady(){
  if(!sb){
    toast('لومړی config.js کې Supabase URL او Key واچوئ');
    return false;
  }
  return true;
}

async function rpc(fn,args={}){
  if(!apiReady()) throw new Error('Supabase not configured');
  let {data,error}=await sb.rpc(fn,args);
  if(error) throw error;
  return data;
}

async function upload(file,prefix='img'){
  if(!file||!file.size) return '';

  let ext=(file.name.split('.').pop()||'jpg')
    .replace(/[^a-z0-9]/gi,'');

  let path=
    `${prefix}/${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}.${ext}`;

  let {error}=await sb.storage
    .from('ishaqzada-images')
    .upload(path,file,{upsert:false});

  if(error) throw error;

  return sb.storage
    .from('ishaqzada-images')
    .getPublicUrl(path)
    .data.publicUrl;
}

function setLang(l){
  lang=l;
  localStorage.setItem('lang',l);
  document.documentElement.lang=l;
  document.documentElement.dir=l==='en'?'ltr':'rtl';

  let select=document.querySelector('#langSelect');
  if(select) select.value=l;

  route();
}

document.querySelector('#langSelect').onchange=e=>setLang(e.target.value);

function openDrawer(v=true){
  document.querySelector('#drawer').classList.toggle('open',v);
  document.querySelector('#backdrop').classList.toggle('show',v);
}

document.querySelector('#menuBtn').onclick=()=>openDrawer(true);
document.querySelector('#closeDrawer').onclick=()=>openDrawer(false);
document.querySelector('#backdrop').onclick=()=>openDrawer(false);

document.querySelectorAll('[data-route]').forEach(b=>{
  b.onclick=()=>{
    location.hash=b.dataset.route;
    openDrawer(false);
  };
});

window.addEventListener('beforeinstallprompt',e=>{
  e.preventDefault();
  deferredPrompt=e;
});

document.querySelector('#installBtn').onclick=async()=>{
  if(window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone===true){
    toast(lang==='en'?'App is already installed':'اپلیکشن لا له مخکې نصب دی');
    return;
  }
  if(deferredPrompt){
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt=null;
    return;
  }
  const isiOS=/iphone|ipad|ipod/i.test(navigator.userAgent);
  if(isiOS){
    alert(lang==='en'
      ?'To put the app on your Home Screen: open this site in Safari, tap Share, then tap Add to Home Screen.'
      :'د اپلیکشن د سکرین پر مخ نصبولو لپاره: دا سایټ په Safari کې خلاص کړه، د Share تڼۍ ووهه، بیا Add to Home Screen ووهه.');
  }else{
    toast(lang==='en'
      ?'Open the browser menu and choose Install app or Add to Home screen.'
      :'د براوزر مینو خلاص کړه او Install app یا Add to Home screen ووهه.');
  }
};

if('serviceWorker' in navigator){
  window.addEventListener(
    'load',
    ()=>navigator.serviceWorker.register('sw.js').catch(()=>{})
  );
}

function whatsappNumber(value=''){
  let n=String(value||'').replace(/\D/g,'');
  if(n.startsWith('0093')) n=n.slice(2);
  if(n.startsWith('93')) return n;
  if(n.startsWith('0')) return '93'+n.slice(1);
  if(n.length===9) return '93'+n;
  return n;
}

async function shop(){

  document.querySelector('#view').innerHTML=`
  <section class="section">

    <div class="section-head">
      <div>
        <h2>${t('products')}</h2>
        <div class="muted">${t('brand')}</div>
      </div>

      <input
        id="searchBox"
        placeholder="${t('search')}"
        style="
          max-width:280px;
          padding:12px;
          border:1px solid #ddd;
          border-radius:12px
        "
      >
    </div>

    <div class="category-gallery" id="catRow">

      <button class="cat-card active" data-cat="">
        <span class="cat-photo"><img src="cat-other.jpg" alt="${t('all')}"></span>
        <span>${t('all')}</span>
      </button>

      ${cats.map(c=>`
        <button class="cat-card" data-cat="${c}">
          <span class="cat-photo"><img src="${catPics[c]}" alt="${c}"></span>
          <span>${c}</span>
        </button>
      `).join('')}

    </div>

    <div class="product-grid" id="productGrid">
      <div class="card empty">...</div>
    </div>

  </section>
  `;

  try{

    let sid=
      new URLSearchParams(location.search)
      .get('shop')||null;

    let rows=await rpc(
      'public_products',
      {p_student_id:sid}
    );

    let all=rows||[];
    let cat='';

    const box=document.querySelector('#productGrid');
    const search=document.querySelector('#searchBox');

    const draw=()=>{

      let q=(search.value||'').toLowerCase();

      let ps=all.filter(p=>
        (!cat||p.category===cat)&&
        p.name.toLowerCase().includes(q)
      );

      box.innerHTML=ps.length
      ?ps.map(p=>`

        <article class="card product">

          <img
            src="${p.photo_url||'icon-512.png'}"
            alt="${esc(p.name)}"
          >

          <div class="product-body">

            <div class="badge">
              ${esc(p.category)}
            </div>

            <h3>${esc(p.name)}</h3>

            <div class="price">
              ${Number(p.price).toLocaleString('en-US')} AFN
            </div>

            <div class="stock">
              ${t('stock')}: ${p.quantity}
            </div>

            <p class="muted">
              ${esc(p.province)}
            </p>

            <button
              class="btn btn-navy"
              style="width:100%;margin-bottom:8px"
              onclick="openOrder('${p.id}')"
            >
              ${t('orderNow')}
            </button>

            <a
              class="wa"
              href="https://wa.me/${whatsappNumber(p.student_whatsapp||'')}?text=${encodeURIComponent(
                `سلام، زه د «${p.name||''}» په اړه نور معلومات غواړم.
قیمت: ${Number(p.price||0).toLocaleString('en-US')} AFN
مهرباني وکړئ د دې جنس په اړه نور معلومات راکړئ.`
              )}"
              target="_blank"
            >
              WhatsApp · ${esc(p.student_name)}
            </a>

          </div>

        </article>

      `).join('')
      :`
        <div
          class="card empty"
          style="grid-column:1/-1"
        >
          ${t('noProducts')}
        </div>
      `;
    };

    draw();

    search.oninput=draw;

    document
      .querySelectorAll('#catRow .cat-card')
      .forEach(b=>{

        b.onclick=()=>{

          document
            .querySelectorAll('#catRow .cat-card')
            .forEach(x=>x.classList.remove('active'));

          b.classList.add('active');

          cat=b.dataset.cat;

          draw();
        };

      });

  }catch(e){
    toast(e.message);
  }
}

function student(){

  if(studentSession){
    return studentPanel();
  }

  document.querySelector('#view').innerHTML=`
  <section class="section">

    <div class="grid-2">

      <div class="card">

        <h2>${t('register')}</h2>

        <form id="regForm" class="form">

          <div class="field">
            <label>${t('name')}</label>
            <input name="name" required>
          </div>

          <div class="field">
            <label>${t('whatsapp')}</label>
            <input name="whatsapp" required>
          </div>

          <div class="field">
            <label>${t('photo')}</label>
            <input
              name="photo"
              type="file"
              accept="image/*"
              required
            >
          </div>

          <div class="field">
            <label>${t('pin')}</label>
            <input
              name="pin"
              type="password"
              minlength="4"
              required
            >
          </div>

          <button class="btn btn-primary">
            ${t('submit')}
          </button>

          <div
            id="regSuccess"
            class="success-box hidden"
          >
            ✅ ته ثبت شوې. ستا تایید به اډمین کوي؛
            له تایید وروسته به جنس پورته کولای شې.
          </div>

        </form>

      </div>

      <div class="card">

        <h2>${t('login')}</h2>

        <form id="loginForm" class="form">

          <div class="field">
            <label>${t('phone')}</label>
            <input name="phone" required>
          </div>

          <div class="field">
            <label>${t('pin')}</label>
            <input
              name="pin"
              type="password"
              required
            >
          </div>

          <button class="btn btn-navy">
            ${t('login')}
          </button>

        </form>

      </div>

    </div>

  </section>
  `;

  document.querySelector('#regForm').onsubmit=async e=>{

    e.preventDefault();

    try{

      let fd=new FormData(e.target);

      let photo=await upload(
        fd.get('photo'),
        'students'
      );

      await rpc(
        'student_register',
        {
          p_name:fd.get('name'),
          p_whatsapp:fd.get('whatsapp'),
          p_photo_url:photo,
          p_pin:fd.get('pin')
        }
      );

      e.target.reset();

      document
        .querySelector('#regSuccess')
        .classList.remove('hidden');

      toast(
        'ته ثبت شوې؛ ستا تایید به اډمین کوي، بیا به جنس پورته کولای شې.'
      );

    }catch(x){
      toast(x.message);
    }
  };

  document.querySelector('#loginForm').onsubmit=async e=>{

    e.preventDefault();

    try{

      let fd=new FormData(e.target);

      let rows=await rpc(
        'student_login',
        {
          p_whatsapp:fd.get('phone'),
          p_pin:fd.get('pin')
        }
      );

      let s=rows?.[0];

      if(!s){
        toast('شمېره یا PIN غلط دی');
        return;
      }

      if(!s.approved){
        toast(t('pending'));
        return;
      }

      studentSession={
        ...s,
        pin:fd.get('pin')
      };

      localStorage.setItem(
        'studentSession',
        JSON.stringify(studentSession)
      );

      student();

    }catch(x){
      toast(x.message);
    }
  };
}

function studentPanel(){

  document.querySelector('#view').innerHTML=`
  <section class="section">

    <div class="section-head">

      <div>
        <h2>${t('studentPanel')}</h2>

        <div class="shop-owner">
          <img
            src="${studentSession.photo_url||'icon-192.png'}"
          >
          <strong>
            ${esc(studentSession.name)}
          </strong>
        </div>
      </div>

      <button
        class="btn btn-danger"
        id="studentLogout"
      >
        ${t('logout')}
      </button>

    </div>

    <div class="card">

      <div class="section-head">
        <h3>${t('uniqueShop')}</h3>
        <button
          class="btn btn-soft"
          id="copyShop"
        >
          ${t('copy')}
        </button>
      </div>

      <input
        id="shopLink"
        readonly
        style="
          width:100%;
          padding:12px;
          border:1px solid #ddd;
          border-radius:12px
        "
        value="${
          location.origin+
          location.pathname+
          '?shop='+
          studentSession.id+
          '#shop'
        }"
      >

    </div>

    <div
      class="tabs"
      style="margin-top:16px"
    >

      <button
        class="active"
        data-stab="add"
      >
        ${t('addProduct')}
      </button>

      <button data-stab="products">
        ${t('myProducts')}
      </button>

      <button data-stab="orders">
        ${t('myOrders')}
      </button>

    </div>

    <div id="studentTab"></div>

  </section>
  `;

  document.querySelector('#studentLogout').onclick=()=>{
    studentSession=null;
    localStorage.removeItem('studentSession');
    student();
  };

  document.querySelector('#copyShop').onclick=()=>{
    navigator.clipboard
      .writeText(
        document.querySelector('#shopLink').value
      )
      .then(()=>toast(t('copy')));
  };

  document.querySelectorAll('[data-stab]').forEach(b=>{

    b.onclick=()=>{

      document
        .querySelectorAll('[data-stab]')
        .forEach(x=>x.classList.remove('active'));

      b.classList.add('active');

      renderStudentTab(b.dataset.stab);
    };

  });

  renderStudentTab('add');
}

async function renderStudentTab(tab){

  let box=document.querySelector('#studentTab');

  if(!box) return;

  if(tab==='add'){

    box.innerHTML=`
    <div class="card">

      <form
        id="productForm"
        class="form"
      >

        <div class="field">
          <label>${t('photo')}</label>
          <input
            name="photo"
            type="file"
            accept="image/*"
            required
          >
        </div>

        <div class="field">
          <label>${t('productName')}</label>
          <input name="name" required>
        </div>

        <div class="grid-2">

          <div class="field">
            <label>${t('qty')}</label>
            <input
              name="qty"
              type="number"
              min="0"
              required
            >
          </div>

          <div class="field">
            <label>${t('price')}</label>
            <input
              name="price"
              type="number"
              min="0"
              required
            >
          </div>

        </div>

        <div class="field">

          <label>${t('category')}</label>

          <select name="category">
            ${cats.map(c=>`
              <option>${c}</option>
            `).join('')}
          </select>

        </div>

        <div class="field">
          <label>تشریحات</label>
          <textarea name="address"></textarea>
        </div>

        <button class="btn btn-primary">
          ${t('save')}
        </button>

      </form>

    </div>
    `;

    document.querySelector('#productForm').onsubmit=async e=>{

      e.preventDefault();

      try{

        let f=new FormData(e.target);

        let photo=await upload(
          f.get('photo'),
          'products'
        );

        await rpc(
          'student_add_product',
          {
            p_whatsapp:studentSession.whatsapp,
            p_pin:studentSession.pin,
            p_name:f.get('name'),
            p_quantity:+f.get('qty'),
            p_price:+f.get('price'),
            p_category:f.get('category'),
            p_province:'',
            p_address:f.get('address'),
            p_photo_url:photo
          }
        );

        toast(t('save'));

        renderStudentTab('products');

      }catch(x){
        toast(x.message);
      }
    };

    return;
  }

  try{

    if(tab==='products'){

      let rows=await rpc(
        'student_products',
        {
          p_whatsapp:studentSession.whatsapp,
          p_pin:studentSession.pin
        }
      );

      box.innerHTML=rows?.length
      ?`
        <div class="product-grid">

          ${rows.map(p=>`

            <div class="card product">

              <img
                src="${p.photo_url||'icon-512.png'}"
              >

              <div class="product-body">

                <h3>${esc(p.name)}</h3>

                <div class="price">
                  ${p.price} AFN
                </div>

                <div>
                  ${t('stock')}: ${p.quantity}
                </div>

                <div class="card-actions">

                  <button
                    class="btn btn-soft"
                    onclick='studentEditProduct(${JSON.stringify(p)})'
                  >
                    ${t('edit')}
                  </button>

                  <button
                    class="btn btn-danger"
                    onclick="studentDeleteProduct('${p.id}')"
                  >
                    ${t('delete')}
                  </button>

                </div>

              </div>

            </div>

          `).join('')}

        </div>
      `
      :`
        <div class="card empty">
          ${t('noProducts')}
        </div>
      `;
    }

    if(tab==='orders'){

      let rows=await rpc(
        'student_orders',
        {
          p_whatsapp:studentSession.whatsapp,
          p_pin:studentSession.pin
        }
      );

      box.innerHTML=`
      <div class="card table-wrap">

        <table class="table">

          <thead>
            <tr>
              <th>#</th>
              <th>${t('productName')}</th>
              <th>${t('qty')}</th>
              <th>${t('total')}</th>
              <th>${t('province')}</th>
              <th>${t('address2')}</th>
              <th>${t('customerPhone')}</th>
              <th>${t('location')}</th>
              <th>${t('status')}</th>
            </tr>
          </thead>

          <tbody>

            ${(rows||[]).map(o=>`

              <tr>

                <td>${esc(o.order_no)}</td>

                <td>${esc(o.product_name)}</td>

                <td>${o.quantity}</td>

                <td>${o.total} AFN</td>

                <td>${esc(o.province)}</td>

                <td>${esc(o.address||'')}</td>

                <td>${esc(o.customer_phone)}</td>

                <td>

                  ${
                    o.location
                    ?`
                      <a
                        class="map-btn"
                        target="_blank"
                        rel="noopener"
                        href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.location)}"
                      >
                        📍 ${t('openMap')}
                      </a>
                    `
                    :`
                      <span class="muted">
                        ${t('noLocation')}
                      </span>
                    `
                  }

                </td>

                <td>

                  <select
                    onchange="studentOrderStatus('${o.id}',this.value)"
                  >

                    ${
                      [
                        'new',
                        'ready',
                        'sent',
                        'delivered',
                        'rejected'
                      ]
                      .map(s=>`
                        <option
                          value="${s}"
                          ${o.status===s?'selected':''}
                        >
                          ${t(s)}
                        </option>
                      `)
                      .join('')
                    }

                  </select>

                </td>

              </tr>

            `).join('')}

          </tbody>

        </table>

      </div>
      `;
    }

  }catch(x){
    toast(x.message);
  }
}

async function studentEditProduct(p){

  const box=document.querySelector('#studentTab');

  if(!box) return;

  box.innerHTML=`
  <div class="card edit-card">

    <h3>
      ${t('edit')} · ${esc(p.name)}
    </h3>

    <form
      id="editProductForm"
      class="form"
    >

      <div class="field">
        <label>${t('photo')}</label>
        <input
          name="photo"
          type="file"
          accept="image/*"
        >
      </div>

      <div class="field">
        <label>${t('productName')}</label>
        <input
          name="name"
          value="${esc(p.name)}"
          required
        >
      </div>

      <div class="grid-2">

        <div class="field">
          <label>${t('qty')}</label>
          <input
            name="qty"
            type="number"
            min="0"
            value="${p.quantity}"
            required
          >
        </div>

        <div class="field">
          <label>${t('price')}</label>
          <input
            name="price"
            type="number"
            min="0"
            value="${p.price}"
            required
          >
        </div>

      </div>

      <div class="field">

        <label>${t('category')}</label>

        <select name="category">

          ${cats.map(c=>`
            <option
              ${p.category===c?'selected':''}
            >
              ${c}
            </option>
          `).join('')}

        </select>

      </div>

      <div class="field">
        <label>تشریحات</label>
        <textarea name="address">${esc(p.address||'')}</textarea>
      </div>

      <div class="card-actions">

        <button class="btn btn-primary">
          ${t('save')}
        </button>

        <button
          type="button"
          class="btn btn-soft"
          onclick="renderStudentTab('products')"
        >
          ✕
        </button>

      </div>

    </form>

  </div>
  `;

  document.querySelector('#editProductForm').onsubmit=async e=>{

    e.preventDefault();

    try{

      let f=new FormData(e.target);

      let photo=
        f.get('photo')?.size
        ?await upload(f.get('photo'),'products')
        :'';

      await rpc(
        'student_update_product',
        {
          p_whatsapp:studentSession.whatsapp,
          p_pin:studentSession.pin,
          p_product_id:p.id,
          p_name:f.get('name'),
          p_quantity:+f.get('qty'),
          p_price:+f.get('price'),
          p_category:f.get('category'),
          p_province:p.province||'',
          p_address:f.get('address'),
          p_photo_url:photo
        }
      );

      toast('اصلاحات خوندي شول');

      renderStudentTab('products');

    }catch(x){
      toast(x.message);
    }
  };
}

async function studentDeleteProduct(id){

  try{

    await rpc(
      'student_delete_product',
      {
        p_whatsapp:studentSession.whatsapp,
        p_pin:studentSession.pin,
        p_product_id:id
      }
    );

    renderStudentTab('products');

  }catch(x){
    toast(x.message);
  }
}

async function studentOrderStatus(id,status){

  try{

    await rpc(
      'student_update_order_status',
      {
        p_whatsapp:studentSession.whatsapp,
        p_pin:studentSession.pin,
        p_order_id:id,
        p_status:status
      }
    );

    toast(t('save'));

  }catch(x){
    toast(x.message);
  }
}

function admin(){

  if(!adminPin){

    document.querySelector('#view').innerHTML=`
    <section class="section">

      <div
        class="card"
        style="max-width:520px;margin:auto"
      >

        <h2>${t('admin')}</h2>

        <form
          id="adminLogin"
          class="form"
        >

          <div class="field">
            <label>${t('adminPin')}</label>
            <input
              name="pin"
              type="password"
              required
            >
          </div>

          <button class="btn btn-navy">
            ${t('login')}
          </button>

        </form>

      </div>

    </section>
    `;

    document.querySelector('#adminLogin').onsubmit=async e=>{

      e.preventDefault();

      try{

        let p=new FormData(e.target).get('pin');

        let ok=await rpc(
          'admin_login',
          {p_pin:p}
        );

        if(ok){

          adminPin=p;

          localStorage.setItem(
            'adminPin',
            p
          );

          admin();

        }else{

          toast('PIN غلط دی');
        }

      }catch(x){
        toast(x.message);
      }
    };

    return;
  }

  document.querySelector('#view').innerHTML=`
  <section class="section">

    <div class="section-head">

      <div>
        <h2>${t('adminPanel')}</h2>
        <div class="muted">
          ${t('brand')}
        </div>
      </div>

      <button
        class="btn btn-danger"
        id="adminLogout"
      >
        ${t('logout')}
      </button>

    </div>

    <div class="tabs">

      <button
        class="active"
        data-atab="students"
      >
        ${t('students')}
      </button>

      <button data-atab="orders">
        ${t('orders')}
      </button>

      <button data-atab="products">
        ${t('products')}
      </button>

    </div>

    <div id="adminTab"></div>

  </section>
  `;

  document.querySelector('#adminLogout').onclick=()=>{

    adminPin='';

    localStorage.removeItem('adminPin');

    admin();
  };

  document.querySelectorAll('[data-atab]').forEach(b=>{

    b.onclick=()=>{

      document
        .querySelectorAll('[data-atab]')
        .forEach(x=>x.classList.remove('active'));

      b.classList.add('active');

      renderAdminTab(b.dataset.atab);
    };

  });

  renderAdminTab('students');
}

async function renderAdminTab(tab){

  let box=document.querySelector('#adminTab');

  if(!box) return;

  try{

    if(tab==='students'){

      let rows=await rpc(
        'admin_students',
        {p_pin:adminPin}
      );

      box.innerHTML=`
      <div class="card table-wrap">

        <table class="table">

          <thead>
            <tr>
              <th>${t('photo')}</th>
              <th>${t('name')}</th>
              <th>${t('whatsapp')}</th>
              <th>${t('status')}</th>
              <th></th>
            </tr>
          </thead>

          <tbody>

            ${(rows||[]).map(s=>`

              <tr>

                <td>
                  <img
                    src="${s.photo_url||'icon-192.png'}"
                    style="
                      width:44px;
                      height:44px;
                      border-radius:50%;
                      object-fit:cover
                    "
                  >
                </td>

                <td>${esc(s.name)}</td>

                <td>${esc(s.whatsapp)}</td>

                <td>
                  ${
                    s.approved
                    ?t('approve')
                    :t('pending')
                  }
                </td>

                <td>

                  <button
                    class="btn ${
                      s.approved
                      ?'btn-danger'
                      :'btn-primary'
                    }"
                    onclick="adminApprove('${s.id}',${!s.approved})"
                  >
                    ${
                      s.approved
                      ?t('reject')
                      :t('approve')
                    }
                  </button>

                </td>

              </tr>

            `).join('')}

          </tbody>

        </table>

      </div>
      `;
    }

    if(tab==='orders'){

      let rows=await rpc(
        'admin_orders',
        {p_pin:adminPin}
      );

      box.innerHTML=`
      <div class="card table-wrap">

        <table class="table">

          <thead>
            <tr>
              <th>#</th>
              <th>${t('productName')}</th>
              <th>${t('qty')}</th>
              <th>${t('total')}</th>
              <th>${t('province')}</th>
              <th>${t('address2')}</th>
              <th>${t('location')}</th>
              <th>${t('status')}</th>
            </tr>
          </thead>

          <tbody>

            ${(rows||[]).map(o=>`

              <tr>

                <td>${esc(o.order_no)}</td>

                <td>${esc(o.product_name)}</td>

                <td>${o.quantity}</td>

                <td>${o.total} AFN</td>

                <td>${esc(o.province)}</td>

                <td>${esc(o.address)}</td>

                <td>
                  ${
                    o.location
                    ?`
                      <a
                        target="_blank"
                        href="https://maps.google.com/?q=${encodeURIComponent(o.location)}"
                      >
                        Map
                      </a>
                    `
                    :''
                  }
                </td>

                <td>
                  ${t(o.status)}
                </td>

              </tr>

            `).join('')}

          </tbody>

        </table>

      </div>
      `;
    }

    if(tab==='products'){

      let rows=await rpc(
        'admin_products',
        {p_pin:adminPin}
      );

      box.innerHTML=`
      <div class="product-grid">

        ${(rows||[]).map(p=>`

          <div class="card product">

            <img
              src="${p.photo_url||'icon-512.png'}"
            >

            <div class="product-body">

              <h3>${esc(p.name)}</h3>

              <div class="muted">
                ${esc(p.student_name)}
              </div>

              <div class="price">
                ${p.price} AFN
              </div>

              <div>
                ${t('stock')}: ${p.quantity}
              </div>

              <button
                class="btn btn-danger"
                style="margin-top:10px"
                onclick="adminDelete('${p.id}')"
              >
                ${t('delete')}
              </button>

            </div>

          </div>

        `).join('')}

      </div>
      `;
    }

  }catch(x){
    toast(x.message);
  }
}

async function adminApprove(id,approved){

  try{

    await rpc(
      'admin_approve_student',
      {
        p_pin:adminPin,
        p_student_id:id,
        p_approved:approved
      }
    );

    renderAdminTab('students');

  }catch(x){
    toast(x.message);
  }
}

async function adminDelete(id){

  try{

    await rpc(
      'admin_delete_product',
      {
        p_pin:adminPin,
        p_product_id:id
      }
    );

    renderAdminTab('products');

  }catch(x){
    toast(x.message);
  }
}

async function openOrder(pid){

  try{

    let rows=await rpc(
      'public_products',
      {p_student_id:null}
    );

    let p=(rows||[]).find(x=>x.id===pid);

    if(!p) return;

    document.querySelector('#view').innerHTML=`
    <section class="section">

      <div class="grid-2">

        <div class="card product">

          <img
            src="${p.photo_url||'icon-512.png'}"
          >

          <div class="product-body">

            <h2>${esc(p.name)}</h2>

            <div class="price">
              ${p.price} AFN
            </div>

            <div>
              ${t('stock')}: ${p.quantity}
            </div>

          </div>

        </div>

        <div class="card">

          <h2>${t('customerOrder')}</h2>

          <form
            id="orderForm"
            class="form"
          >

            <div class="field">
              <label>${t('productName')}</label>
              <input
                value="${esc(p.name)}"
                readonly
              >
            </div>

            <div class="field">
              <label>${t('qty')}</label>
              <input
                id="orderQty"
                name="qty"
                type="number"
                min="1"
                max="${p.quantity}"
                value="1"
                required
              >
            </div>

            <div class="notice">
              ${t('total')}:
              <strong id="orderTotal">
                ${p.price} AFN
              </strong>
            </div>

            <div class="field">
              <label>${t('customerPhone')}</label>
              <input
                name="phone"
                required
              >
            </div>

            <div class="field">
              <label>${t('address2')}</label>
              <textarea
                name="address"
                required
              ></textarea>
            </div>

            <div class="field">

              <label>${t('location')}</label>

              <div
                class="actions"
                style="justify-content:flex-start"
              >

                <input
                  id="locInput"
                  name="location"
                  readonly
                  style="flex:1"
                >

                <button
                  type="button"
                  id="getLoc"
                  class="btn btn-soft"
                >
                  ${t('getLocation')}
                </button>

              </div>

            </div>

            <button class="btn btn-primary">
              ${t('sendOrder')}
            </button>

          </form>

        </div>

      </div>

    </section>
    `;

    let q=document.querySelector('#orderQty');

    q.oninput=()=>{

      document.querySelector('#orderTotal').textContent=
        (
          Math.max(1,+q.value||1)*
          Number(p.price)
        )
        .toLocaleString('en-US')
        +' AFN';
    };

    document.querySelector('#getLoc').onclick=()=>{

      navigator.geolocation&&
      navigator.geolocation.getCurrentPosition(

        pos=>{

          document.querySelector('#locInput').value=
            `${pos.coords.latitude},${pos.coords.longitude}`;

        },

        ()=>toast('لوکیشن اجازه نه لري')

      );
    };

    document.querySelector('#orderForm').onsubmit=async e=>{

      e.preventDefault();

      try{

        let f=new FormData(e.target);

        let ono=await rpc(
          'place_order',
          {
            p_product_id:p.id,
            p_quantity:+f.get('qty'),
            p_customer_phone:f.get('phone'),
            p_province:'',
            p_address:f.get('address'),
            p_location:f.get('location')
          }
        );

        localStorage.setItem(
          'lastOrderNo',
          ono
        );

        toast(
          'فرمایش ثبت شو: '+ono
        );

        setTimeout(
          ()=>location.hash='track',
          700
        );

      }catch(x){
        toast(x.message);
      }
    };

  }catch(x){
    toast(x.message);
  }
}

async function route(){

  document.documentElement.dir=
    lang==='en'
    ?'ltr'
    :'rtl';

  let select=document.querySelector('#langSelect');

  if(select){
    select.value=lang;
  }

  let r=(location.hash||'#shop').slice(1);

  if(r==='home'){
    location.hash='shop';
    return;
  }

  if(r==='shop'){
    await shop();
  }

  else if(r==='student'){
    student();
  }

  else if(r==='admin'){
    admin();
  }

  else if(r==='track'){
    await trackOrder();
  }

  else{
    location.hash='shop';
    return;
  }

  document
    .querySelectorAll('[data-i18n]')
    .forEach(e=>{
      e.textContent=t(e.dataset.i18n);
    });
}

window.addEventListener(
  'hashchange',
  route
);

setLang(lang);

async function trackOrder(){

  const ono=
    localStorage.getItem('lastOrderNo')||'';

  document.querySelector('#view').innerHTML=`
  <section class="section">

    <div class="track-shell">

      <div class="track-icon">
        📦
      </div>

      <h2>${t('trackOrder')}</h2>

      <p class="muted">
        ${
          ono
          ?esc(ono)
          :'فرمایش نمبر نشته'
        }
      </p>

      <div
        id="trackStatus"
        class="status-hero"
      >
        ...
      </div>

      <button
        class="btn btn-soft"
        onclick="location.hash='shop'"
      >
        ${t('shop')}
      </button>

    </div>

  </section>
  `;

  if(!ono) return;

  const refresh=async()=>{

    try{

      let x=await rpc(
        'public_order_status',
        {p_order_no:ono}
      );

      let o=
        Array.isArray(x)
        ?x[0]
        :x;

      if(!o) return;

      let el=
        document.querySelector('#trackStatus');

      if(el){

        el.innerHTML=`
          <span class="status-dot"></span>

          <strong>
            ${t(o.status)}
          </strong>

          <small>
            ${esc(o.product_name)}
            ·
            ${Number(o.total).toLocaleString('en-US')}
            AFN
          </small>
        `;
      }

    }catch(e){}
  };

  await refresh();

  setTimeout(refresh,3000);
  setTimeout(refresh,7000);
}
