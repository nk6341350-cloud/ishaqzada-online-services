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
  'عطرونه'
];

const catPics={
  'شمپو':'🧴',
  'تیل':'🫗',
  'درمل':'💊',
  'روغتیا':'🩺',
  'وزن':'⚖️',
  'ویښتان':'💇',
  'کریم':'🧴',
  'سیروم':'✨',
  'نور':'🛍️',
  'ساعتونه':'⌚',
  'عطرونه':'🌸'
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
address2:'تشریحات',
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
address2:'توضیحات',
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
address2:'Description',
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
  if(deferredPrompt){
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt=null;
  }else{
    toast(
      lang==='en'
      ?'Use Add to Home Screen in your browser menu.'
      :'د براوزر له مینو څخه Add to Home Screen وکاروئ.'
    );
  }
};

if('serviceWorker' in navigator){
  window.addEventListener(
    'load',
    ()=>navigator.serviceWorker.register('sw.js').catch(()=>{})
  );
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
        <span class="cat-photo">🛍️</span>
        <span>${t('all')}</span>
      </button>

      ${cats.map(c=>`
        <button class="cat-card" data-cat="${c}">
          <span class="cat-photo">${catPics[c]}</span>
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

    let active='';
    let q='';

    const draw=()=>{

      let list=rows.filter(p=>
        (!active||p.category===active)&&
        (!q||String(p.name).toLowerCase().includes(q))
      );

      document.querySelector('#productGrid').innerHTML=
        list.length
        ?list.map(productCard).join('')
        :`<div class="card empty">${t('noProducts')}</div>`;

      document.querySelectorAll('[data-order]').forEach(b=>{
        b.onclick=()=>orderModal(
          rows.find(x=>String(x.id)===b.dataset.order)
        );
      });
    };

    document.querySelectorAll('.cat-card').forEach(b=>{
      b.onclick=()=>{
        document.querySelectorAll('.cat-card')
          .forEach(x=>x.classList.remove('active'));

        b.classList.add('active');
        active=b.dataset.cat;
        draw();
      };
    });

    document.querySelector('#searchBox').oninput=e=>{
      q=e.target.value.trim().toLowerCase();
      draw();
    };

    draw();

  }catch(e){
    document.querySelector('#productGrid').innerHTML=
      `<div class="card empty">${esc(e.message)}</div>`;
  }
}
function productCard(p){
  const price=Number(p.price||0);
  const qty=Number(p.quantity||0);

  return `
    <div class="product-card">

      <div class="product-photo">
        ${
          p.photo_url
          ? `<img src="${esc(p.photo_url)}" alt="${esc(p.name)}">`
          : `<div class="no-photo">${catPics[p.category]||'🛍️'}</div>`
        }
      </div>

      <div class="product-info">

        <h3>${esc(p.name||'')}</h3>

        <div class="product-meta">
          <span>${esc(p.category||'')}</span>
        </div>

        <div class="product-price">
          ${price.toLocaleString('en-US')} AFN
        </div>

        ${
          p.description
          ? `<div class="product-description">${esc(p.description)}</div>`
          : p.address
            ? `<div class="product-description">${esc(p.address)}</div>`
            : ''
        }

        <div class="product-stock">
          ${t('stock')}: ${qty.toLocaleString('en-US')}
        </div>

        <button
          class="btn primary"
          data-order="${esc(p.id)}"
          ${qty<=0?'disabled':''}
        >
          ${t('orderNow')}
        </button>

      </div>

    </div>
  `;
}


function closeModal(){
  const modal=document.querySelector('#modal');
  if(modal){
    modal.classList.remove('show');
    modal.innerHTML='';
  }
}


function orderModal(p){

  if(!p) return;

  const modal=document.querySelector('#modal');

  modal.innerHTML=`
    <div class="modal-card">

      <button
        type="button"
        class="modal-close"
        id="modalClose"
      >×</button>

      <h2>${t('customerOrder')}</h2>

      <div class="order-product">

        ${
          p.photo_url
          ? `<img src="${esc(p.photo_url)}" alt="${esc(p.name)}">`
          : `<div class="no-photo">${catPics[p.category]||'🛍️'}</div>`
        }

        <div>
          <h3>${esc(p.name||'')}</h3>

          <strong>
            ${Number(p.price||0).toLocaleString('en-US')} AFN
          </strong>
        </div>

      </div>

      <form id="customerOrderForm" class="form">

        <div class="field">
          <label>${t('customerPhone')}</label>
          <input
            name="phone"
            type="tel"
            inputmode="tel"
            required
          >
        </div>

        <div class="field">
          <label>${t('qty')}</label>
          <input
            name="qty"
            type="number"
            inputmode="numeric"
            min="1"
            max="${Number(p.quantity||1)}"
            value="1"
            required
          >
        </div>

        <div class="field">
          <label>${t('address2')}</label>
          <textarea
            name="address"
            rows="4"
            placeholder="${t('address2')}"
          ></textarea>
        </div>

        <input
          type="hidden"
          name="latitude"
          id="orderLat"
        >

        <input
          type="hidden"
          name="longitude"
          id="orderLng"
        >

        <button
          type="button"
          class="btn secondary"
          id="getLocationBtn"
        >
          📍 ${t('getLocation')}
        </button>

        <div
          id="locationStatus"
          class="muted"
        ></div>

        <div class="order-total">
          ${t('total')}:
          <strong id="orderTotal">
            ${Number(p.price||0).toLocaleString('en-US')} AFN
          </strong>
        </div>

        <button
          type="submit"
          class="btn primary"
        >
          ${t('sendOrder')}
        </button>

      </form>

    </div>
  `;

  modal.classList.add('show');

  document.querySelector('#modalClose').onclick=closeModal;

  modal.onclick=e=>{
    if(e.target===modal) closeModal();
  };

  const form=document.querySelector('#customerOrderForm');
  const qtyInput=form.querySelector('[name="qty"]');

  qtyInput.oninput=()=>{
    let qty=Math.max(1,Number(qtyInput.value||1));

    document.querySelector('#orderTotal').textContent=
      `${(qty*Number(p.price||0)).toLocaleString('en-US')} AFN`;
  };


  document.querySelector('#getLocationBtn').onclick=()=>{

    const status=document.querySelector('#locationStatus');

    if(!navigator.geolocation){
      status.textContent=t('noLocation');
      return;
    }

    status.textContent='...';

    navigator.geolocation.getCurrentPosition(
      pos=>{
        document.querySelector('#orderLat').value=
          pos.coords.latitude;

        document.querySelector('#orderLng').value=
          pos.coords.longitude;

        status.textContent='✅';
      },
      ()=>{
        status.textContent=t('noLocation');
      },
      {
        enableHighAccuracy:true,
        timeout:10000
      }
    );
  };


  form.onsubmit=async e=>{

    e.preventDefault();

    try{

      const f=new FormData(form);

      const qty=Number(f.get('qty')||1);

      if(qty<1){
        return;
      }

      if(qty>Number(p.quantity||0)){
        toast(
          lang==='en'
          ?'Not enough stock'
          :'په ذخیره کې دومره جنس نشته'
        );
        return;
      }

      const phone=String(f.get('phone')||'').trim();
      const address=String(f.get('address')||'').trim();
      const latitude=String(f.get('latitude')||'').trim();
      const longitude=String(f.get('longitude')||'').trim();

      await rpc(
        'customer_add_order',
        {
          p_product_id:p.id,
          p_customer_phone:phone,
          p_quantity:qty,
          p_address:address,
          p_latitude:latitude||null,
          p_longitude:longitude||null
        }
      );

      /*
        مهم:
        مشتری باید د هماغه شاګرد WhatsApp ته ولاړ شي
        چې جنس یې پورته کړی دی.
      */

      const studentWhatsApp=
        p.student_whatsapp||
        p.whatsapp||
        p.owner_whatsapp||
        '';

      if(studentWhatsApp){

        let wa=String(studentWhatsApp)
          .replace(/\D/g,'');

        if(wa.startsWith('0')){
          wa='93'+wa.substring(1);
        }

        const total=
          qty*Number(p.price||0);

        let msg=
          `سلام، زه دغه جنس غواړم:\n\n`+
          `جنس: ${p.name||''}\n`+
          `تعداد: ${qty}\n`+
          `قیمت: ${Number(p.price||0)} AFN\n`+
          `ټول: ${total} AFN\n`+
          `شمېره: ${phone}`;

        if(address){
          msg+=`\nتشریحات: ${address}`;
        }

        if(latitude&&longitude){
          msg+=
            `\nلوکیشن: https://maps.google.com/?q=`+
            `${latitude},${longitude}`;
        }

        const waUrl=
          `https://wa.me/${wa}?text=${encodeURIComponent(msg)}`;

        closeModal();

        window.location.href=waUrl;

      }else{

        closeModal();

        toast(
          lang==='en'
          ?'Order saved successfully'
          :'فرمایش په بریالیتوب ثبت شو'
        );
      }

    }catch(x){
      toast(x.message);
    }
  };
}


function normalizeWhatsApp(value=''){

  let n=String(value).replace(/\D/g,'');

  if(n.startsWith('0093')){
    n=n.substring(2);
  }

  if(n.startsWith('0')){
    n='93'+n.substring(1);
  }

  return n;
}


function studentShopLink(studentId){

  const url=new URL(
    location.origin+location.pathname
  );

  url.searchParams.set('shop',studentId);

  url.hash='#shop';

  return url.toString();
}


async function copyText(txt){

  try{

    await navigator.clipboard.writeText(txt);

    toast(
      lang==='en'
      ?'Copied'
      :'کاپي شو'
    );

  }catch(e){

    const input=document.createElement('textarea');

    input.value=txt;

    document.body.appendChild(input);

    input.select();

    document.execCommand('copy');

    input.remove();

    toast(
      lang==='en'
      ?'Copied'
      :'کاپي شو'
    );
  }
}
async function studentPage(){

  if(!studentSession){
    return studentLoginPage();
  }

  document.querySelector('#view').innerHTML=`
    <section class="section">

      <div class="section-head">
        <div>
          <h2>${t('studentPanel')}</h2>
          <div class="muted">
            ${esc(studentSession.name||'')}
          </div>
        </div>

        <button
          class="btn secondary"
          id="studentLogout"
        >
          ${t('logout')}
        </button>
      </div>

      <div class="student-tabs">

        <button
          class="btn primary"
          data-student-tab="add"
        >
          ${t('addProduct')}
        </button>

        <button
          class="btn secondary"
          data-student-tab="products"
        >
          ${t('myProducts')}
        </button>

        <button
          class="btn secondary"
          data-student-tab="orders"
        >
          ${t('myOrders')}
        </button>

      </div>

      <div class="card shop-link-card">

        <strong>${t('uniqueShop')}</strong>

        <div class="shop-link-row">

          <input
            id="studentShopLink"
            value="${esc(studentShopLink(studentSession.id))}"
            readonly
          >

          <button
            class="btn primary"
            id="copyShopLink"
          >
            ${t('copy')}
          </button>

        </div>

      </div>

      <div id="studentTab"></div>

    </section>
  `;

  document.querySelector('#studentLogout').onclick=()=>{
    studentSession=null;
    localStorage.removeItem('studentSession');
    studentLoginPage();
  };

  document.querySelector('#copyShopLink').onclick=()=>{
    copyText(
      document.querySelector('#studentShopLink').value
    );
  };

  document.querySelectorAll('[data-student-tab]').forEach(b=>{
    b.onclick=()=>{

      document.querySelectorAll('[data-student-tab]')
        .forEach(x=>{
          x.classList.remove('primary');
          x.classList.add('secondary');
        });

      b.classList.remove('secondary');
      b.classList.add('primary');

      renderStudentTab(b.dataset.studentTab);
    };
  });

  renderStudentTab('add');
}


function studentLoginPage(){

  document.querySelector('#view').innerHTML=`
    <section class="section">

      <div class="auth-grid">

        <div class="card">

          <h2>${t('login')}</h2>

          <form id="studentLoginForm" class="form">

            <div class="field">
              <label>${t('phone')}</label>

              <input
                name="whatsapp"
                type="tel"
                inputmode="tel"
                required
              >
            </div>

            <div class="field">
              <label>${t('pin')}</label>

              <input
                name="pin"
                type="password"
                inputmode="numeric"
                required
              >
            </div>

            <button
              class="btn primary"
              type="submit"
            >
              ${t('login')}
            </button>

          </form>

        </div>

        <div class="card">

          <h2>${t('register')}</h2>

          <form id="studentRegisterForm" class="form">

            <div class="field">
              <label>${t('name')}</label>

              <input
                name="name"
                required
              >
            </div>

            <div class="field">
              <label>${t('whatsapp')}</label>

              <input
                name="whatsapp"
                type="tel"
                inputmode="tel"
                required
              >
            </div>

            <div class="field">
              <label>${t('photo')}</label>

              <input
                name="photo"
                type="file"
                accept="image/*"
              >
            </div>

            <div class="field">
              <label>${t('pin')}</label>

              <input
                name="pin"
                type="password"
                inputmode="numeric"
                required
              >
            </div>

            <button
              class="btn primary"
              type="submit"
            >
              ${t('submit')}
            </button>

          </form>

        </div>

      </div>

    </section>
  `;


  document.querySelector('#studentLoginForm').onsubmit=async e=>{

    e.preventDefault();

    try{

      let f=new FormData(e.target);

      let whatsapp=normalizeWhatsApp(
        f.get('whatsapp')
      );

      let pin=String(
        f.get('pin')||''
      ).trim();

      let result=await rpc(
        'student_login',
        {
          p_whatsapp:whatsapp,
          p_pin:pin
        }
      );

      let s=Array.isArray(result)
        ?result[0]
        :result;

      if(!s){
        throw new Error(
          lang==='en'
          ?'Wrong phone number or PIN'
          :'شمېره یا PIN غلط دی'
        );
      }

      if(
        s.approved===false ||
        s.status==='pending'
      ){
        toast(t('pending'));
        return;
      }

      studentSession=s;

      localStorage.setItem(
        'studentSession',
        JSON.stringify(studentSession)
      );

      studentPage();

    }catch(x){
      toast(x.message);
    }
  };


  document.querySelector('#studentRegisterForm').onsubmit=async e=>{

    e.preventDefault();

    try{

      let f=new FormData(e.target);

      let photo='';

      const photoFile=f.get('photo');

      if(photoFile&&photoFile.size){
        photo=await upload(
          photoFile,
          'students'
        );
      }

      let whatsapp=normalizeWhatsApp(
        f.get('whatsapp')
      );

      await rpc(
        'student_register',
        {
          p_name:String(
            f.get('name')||''
          ).trim(),

          p_whatsapp:whatsapp,

          p_pin:String(
            f.get('pin')||''
          ).trim(),

          p_photo_url:photo
        }
      );

      e.target.reset();

      toast(t('pending'));

    }catch(x){
      toast(x.message);
    }
  };
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

            <input
              name="name"
              required
            >

          </div>


          <div class="grid-2">

            <div class="field">

              <label>${t('qty')}</label>

              <input
                name="qty"
                type="number"
                inputmode="numeric"
                min="0"
                required
              >

            </div>


            <div class="field">

              <label>${t('price')}</label>

              <input
                name="price"
                type="number"
                inputmode="decimal"
                min="0"
                step="0.01"
                required
              >

            </div>

          </div>


          <div class="field">

            <label>${t('category')}</label>

            <select
              name="category"
              required
            >

              ${cats.map(c=>`
                <option value="${esc(c)}">
                  ${esc(c)}
                </option>
              `).join('')}

            </select>

          </div>


          <div class="field">

            <label>${t('address2')}</label>

            <textarea
              name="description"
              rows="4"
              placeholder="${t('address2')}"
            ></textarea>

          </div>


          <button
            type="submit"
            class="btn primary"
          >
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

            p_name:String(
              f.get('name')||''
            ).trim(),

            p_quantity:+f.get('qty'),

            p_price:+f.get('price'),

            p_category:String(
              f.get('category')||''
            ),

            p_province:'',

            p_address:String(
              f.get('description')||''
            ).trim(),

            p_photo_url:photo
          }
        );

        toast(t('save'));

        e.target.reset();

        renderStudentTab('products');

      }catch(x){
        toast(x.message);
      }
    };

    return;
  }


  if(tab==='products'){

    try{

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

              <div class="product-card">

                <div class="product-photo">

                  ${
                    p.photo_url
                    ?`
                      <img
                        src="${esc(p.photo_url)}"
                        alt="${esc(p.name)}"
                      >
                    `
                    :`
                      <div class="no-photo">
                        ${catPics[p.category]||'🛍️'}
                      </div>
                    `
                  }

                </div>


                <div class="product-info">

                  <h3>${esc(p.name||'')}</h3>

                  <div class="muted">
                    ${esc(p.category||'')}
                  </div>

                  <div class="product-price">
                    ${Number(p.price||0).toLocaleString('en-US')} AFN
                  </div>

                  <div>
                    ${t('stock')}:
                    ${Number(p.quantity||0).toLocaleString('en-US')}
                  </div>

                  ${
                    p.description||p.address
                    ?`
                      <div class="product-description">
                        ${esc(p.description||p.address)}
                      </div>
                    `
                    :''
                  }

                  <div class="product-actions">

                    <button
                      class="btn secondary"
                      data-edit-product="${esc(p.id)}"
                    >
                      ${t('edit')}
                    </button>

                    <button
                      class="btn danger"
                      data-delete-product="${esc(p.id)}"
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


      document.querySelectorAll(
        '[data-edit-product]'
      ).forEach(b=>{

        b.onclick=()=>{

          let p=rows.find(
            x=>String(x.id)===
            String(b.dataset.editProduct)
          );

          if(p){
            editStudentProduct(p);
          }
        };
      });


      document.querySelectorAll(
        '[data-delete-product]'
      ).forEach(b=>{

        b.onclick=async()=>{

          if(
            !confirm(
              lang==='en'
              ?'Delete this product?'
              :'دا جنس حذف شي؟'
            )
          ){
            return;
          }

          try{

            await rpc(
              'student_delete_product',
              {
                p_whatsapp:studentSession.whatsapp,
                p_pin:studentSession.pin,
                p_product_id:b.dataset.deleteProduct
              }
            );

            toast(t('delete'));

            renderStudentTab('products');

          }catch(x){
            toast(x.message);
          }
        };
      });

    }catch(x){

      box.innerHTML=`
        <div class="card empty">
          ${esc(x.message)}
        </div>
      `;
    }

    return;
  }
}
const renderStudentTabBase=renderStudentTab;

renderStudentTab=async function(tab){

  if(tab!=='orders'){
    return renderStudentTabBase(tab);
  }

  const box=document.querySelector('#studentTab');
  if(!box) return;

  try{

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
              <th>${t('customerPhone')}</th>
              <th>${t('address2')}</th>
              <th>${t('location')}</th>
              <th>${t('status')}</th>
            </tr>
          </thead>

          <tbody>

            ${(rows||[]).map(o=>`

              <tr>

                <td>${esc(o.order_no||'')}</td>

                <td>${esc(o.product_name||'')}</td>

                <td>
                  ${Number(o.quantity||0).toLocaleString('en-US')}
                </td>

                <td>
                  ${Number(o.total||0).toLocaleString('en-US')} AFN
                </td>

                <td>
                  ${esc(o.customer_phone||'')}
                </td>

                <td>
                  ${esc(o.address||'')}
                </td>

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
                    data-order-status="${esc(o.id)}"
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


    document.querySelectorAll(
      '[data-order-status]'
    ).forEach(select=>{

      select.onchange=async()=>{

        try{

          await rpc(
            'student_update_order_status',
            {
              p_whatsapp:studentSession.whatsapp,
              p_pin:studentSession.pin,
              p_order_id:select.dataset.orderStatus,
              p_status:select.value
            }
          );

          toast(t('save'));

        }catch(x){
          toast(x.message);
        }
      };
    });

  }catch(x){

    box.innerHTML=`
      <div class="card empty">
        ${esc(x.message)}
      </div>
    `;
  }
};


async function editStudentProduct(p){

  const box=document.querySelector('#studentTab');

  if(!box||!p) return;

  box.innerHTML=`
    <div class="card edit-card">

      <h2>
        ${t('edit')} · ${esc(p.name||'')}
      </h2>

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
            value="${esc(p.name||'')}"
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
              inputmode="numeric"
              value="${Number(p.quantity||0)}"
              required
            >

          </div>


          <div class="field">

            <label>${t('price')}</label>

            <input
              name="price"
              type="number"
              min="0"
              step="0.01"
              inputmode="decimal"
              value="${Number(p.price||0)}"
              required
            >

          </div>

        </div>


        <div class="field">

          <label>${t('category')}</label>

          <select
            name="category"
            required
          >

            ${cats.map(c=>`
              <option
                value="${esc(c)}"
                ${p.category===c?'selected':''}
              >
                ${esc(c)}
              </option>
            `).join('')}

          </select>

        </div>


        <div class="field">

          <label>${t('address2')}</label>

          <textarea
            name="description"
            rows="4"
          >${esc(p.description||p.address||'')}</textarea>

        </div>


        <div class="product-actions">

          <button
            type="submit"
            class="btn primary"
          >
            ${t('save')}
          </button>

          <button
            type="button"
            class="btn secondary"
            id="cancelEditProduct"
          >
            ✕
          </button>

        </div>

      </form>

    </div>
  `;


  document.querySelector('#cancelEditProduct').onclick=()=>{
    renderStudentTab('products');
  };


  document.querySelector('#editProductForm').onsubmit=async e=>{

    e.preventDefault();

    try{

      let f=new FormData(e.target);

      let photo='';

      let photoFile=f.get('photo');

      if(photoFile&&photoFile.size){

        photo=await upload(
          photoFile,
          'products'
        );
      }

      await rpc(
        'student_update_product',
        {
          p_whatsapp:studentSession.whatsapp,
          p_pin:studentSession.pin,

          p_product_id:p.id,

          p_name:String(
            f.get('name')||''
          ).trim(),

          p_quantity:+f.get('qty'),

          p_price:+f.get('price'),

          p_category:String(
            f.get('category')||''
          ),

          p_province:p.province||'',

          p_address:String(
            f.get('description')||''
          ).trim(),

          p_photo_url:photo
        }
      );

      toast(
        lang==='en'
        ?'Changes saved'
        :'اصلاحات خوندي شول'
      );

      renderStudentTab('products');

    }catch(x){
      toast(x.message);
    }
  };
}


function adminPage(){

  if(!adminPin){
    return adminLoginPage();
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
          class="btn danger"
          id="adminLogout"
        >
          ${t('logout')}
        </button>

      </div>


      <div class="student-tabs">

        <button
          class="btn primary"
          data-admin-tab="students"
        >
          ${t('students')}
        </button>

        <button
          class="btn secondary"
          data-admin-tab="orders"
        >
          ${t('orders')}
        </button>

        <button
          class="btn secondary"
          data-admin-tab="products"
        >
          ${t('products')}
        </button>

      </div>


      <div id="adminTab"></div>

    </section>
  `;


  document.querySelector('#adminLogout').onclick=()=>{

    adminPin='';

    localStorage.removeItem('adminPin');

    adminLoginPage();
  };


  document.querySelectorAll(
    '[data-admin-tab]'
  ).forEach(b=>{

    b.onclick=()=>{

      document.querySelectorAll(
        '[data-admin-tab]'
      ).forEach(x=>{

        x.classList.remove('primary');
        x.classList.add('secondary');
      });

      b.classList.remove('secondary');
      b.classList.add('primary');

      renderAdminTab(
        b.dataset.adminTab
      );
    };
  });


  renderAdminTab('students');
}


function adminLoginPage(){

  document.querySelector('#view').innerHTML=`
    <section class="section">

      <div
        class="card"
        style="max-width:520px;margin:auto"
      >

        <h2>${t('admin')}</h2>

        <form
          id="adminLoginForm"
          class="form"
        >

          <div class="field">

            <label>${t('adminPin')}</label>

            <input
              name="pin"
              type="password"
              inputmode="numeric"
              required
            >

          </div>

          <button
            type="submit"
            class="btn primary"
          >
            ${t('login')}
          </button>

        </form>

      </div>

    </section>
  `;


  document.querySelector('#adminLoginForm').onsubmit=async e=>{

    e.preventDefault();

    try{

      let pin=String(
        new FormData(e.target).get('pin')||''
      ).trim();

      let ok=await rpc(
        'admin_login',
        {
          p_pin:pin
        }
      );

      if(!ok){

        toast('PIN غلط دی');

        return;
      }

      adminPin=pin;

      localStorage.setItem(
        'adminPin',
        pin
      );

      adminPage();

    }catch(x){
      toast(x.message);
    }
  };
}
