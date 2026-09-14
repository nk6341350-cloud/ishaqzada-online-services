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
brand:'اسحاقزاده انلاین سټور',
install:'نصب اپ',
home:'کور',
shop:'بازار',
admin:'اډمین',
products:'محصولات',
all:'ټول',
search:'لټون...',
noProducts:'تر اوسه محصول نشته.',
name:'نوم',
whatsapp:'WhatsApp شمېره',
photo:'عکس',
pin:'PIN کوډ',
submit:'ثبت',
phone:'شمېره',
addProduct:'جنس ثبت',
productName:'د جنس نوم',
qty:'تعداد',
price:'قیمت (AFN)',
province:'ولایت',
address2:'ادرس',
category:'کټګوري',
save:'ثبت',
adminPanel:'د اډمین صفحه',
adminPin:'اډمین PIN',
stock:'پاتې',
edit:'ایډیټ',
delete:'حذف',
logout:'وتل',
address:'ادرس: د شهیدانو چوک، عمري تجارتي مارکیټ، کندهار، افغانستان',
copy:'کاپي',
complaint:'د شکایت شمېره',
noLocation:'لوکیشن نشته'
},
fa:{
brand:'فروشگاه آنلاین اسحاق‌زاده',
install:'نصب اپ',
shop:'بازار',
admin:'ادمین',
products:'محصولات',
all:'همه',
search:'جستجو...',
noProducts:'هنوز محصولی ثبت نشده.',
name:'نام',
whatsapp:'شماره واتساپ',
photo:'عکس',
pin:'PIN',
submit:'ثبت',
phone:'شماره',
addProduct:'ثبت محصول',
productName:'نام محصول',
qty:'تعداد',
price:'قیمت (AFN)',
province:'ولایت',
address2:'آدرس',
category:'دسته‌بندی',
save:'ثبت',
adminPanel:'صفحه ادمین',
adminPin:'PIN ادمین',
stock:'باقی',
edit:'ویرایش',
delete:'حذف',
logout:'خروج',
address:'آدرس: چهارراه شهیدان، مارکیت تجارتی عمری، قندهار، افغانستان',
copy:'کپی',
complaint:'شماره شکایت',
noLocation:'موقعیت ثبت نشده'
},
en:{
brand:'Ishaqzada Online Store',
install:'Install App',
shop:'Shop',
admin:'Admin',
products:'Products',
all:'All',
search:'Search...',
noProducts:'No products yet.',
name:'Name',
whatsapp:'WhatsApp Number',
photo:'Photo',
pin:'PIN',
submit:'Register',
phone:'Phone',
addProduct:'Add Product',
productName:'Product Name',
qty:'Quantity',
price:'Price (AFN)',
province:'Province',
address2:'Address',
category:'Category',
save:'Save',
adminPanel:'Admin Dashboard',
adminPin:'Admin PIN',
stock:'Stock',
edit:'Edit',
delete:'Delete',
logout:'Logout',
address:'Address: Shahidano Square, Omari Commercial Market, Kandahar, Afghanistan',
copy:'Copy',
complaint:'Complaint Number',
noLocation:'No location'
}
};

let lang=localStorage.getItem('lang')||'ps';
let deferredPrompt=null;
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
let rows=await rpc(
      'public_products',
      {p_student_id:null}
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
            <div class="free-delivery-notice">
              <strong>🚚 ${lang==="en"?"Free Delivery":lang==="fa"?"ارسال رایگان":"وړیا ډلیوري"}</strong>
              <div>${lang==="en"
                ?"Delivery to your province, home, office, or shop is completely free. Your order will reach you within 24 hours."
                :lang==="fa"
                ?"ارسال تا ولایت، خانه، دفتر یا دکان شما کاملاً رایگان است. سفارش شما تا ۲۴ ساعت به شما می‌رسد."
                :"ستاسو تر ولایت، کور، دفتر یا دوکان پورې ډلیوري بالکل وړیا ده. ستاسو فرمایش به تر ۲۴ ساعتونو پورې در ورسېږي."}</div>
            </div>


            <div class="stock">
              ${t('stock')}: ${p.quantity}
            </div>

            <p class="muted">
              ${esc(p.province)}
            </p>
<button
              class="btn btn-soft"
              style="width:100%"
              onclick='copyProduct(${JSON.stringify(p)})'
            >
              📋 ${lang==="en"?"Copy full product":lang==="fa"?"کپی کامل محصول":"مکمل جنس کاپي کړه"}
            </button>

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


async function copyProduct(p){
  const lines=[
    `${lang==="en"?"Product":lang==="fa"?"محصول":"جنس"}: ${p.name||""}`,
    `${lang==="en"?"Price":lang==="fa"?"قیمت":"قیمت"}: ${Number(p.price||0).toLocaleString("en-US")} AFN`,
    `${lang==="en"?"Category":lang==="fa"?"دسته‌بندی":"کټګوري"}: ${p.category||""}`,
    `${lang==="en"?"Stock":lang==="fa"?"باقی":"پاتې"}: ${p.quantity??""}`
  ];
  const description=p.address||p.description||p.province||"";
  if(description){
    lines.push(`${lang==="en"?"Description":lang==="fa"?"توضیحات":"تشریحات"}: ${description}`);
  }
  if(p.photo_url){
    lines.push(`${lang==="en"?"Photo":lang==="fa"?"عکس":"عکس"}: ${p.photo_url}`);
  }
  const value=lines.join("\n");
  try{
    await navigator.clipboard.writeText(value);
    toast(lang==="en"?"Product copied":lang==="fa"?"محصول کامل کپی شد":"جنس کاپي شو");
  }catch(e){
    const ta=document.createElement("textarea");
    ta.value=value; document.body.appendChild(ta); ta.select();
    document.execCommand("copy"); ta.remove();
    toast(lang==="en"?"Product copied":lang==="fa"?"محصول کامل کپی شد":"جنس کاپي شو");
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
        data-atab="products"
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

  renderAdminTab('products');
}

async function renderAdminTab(tab){

  let box=document.querySelector('#adminTab');

  if(!box) return;

  try{

    if(tab==='products'){

      let rows=await rpc(
        'admin_products',
        {p_pin:adminPin}
      );

      box.innerHTML=`
      <div class="card" style="margin-bottom:16px">
        <h3>${lang==="en"?"Add Product":lang==="fa"?"ثبت محصول جدید":"نوی جنس ثبت"}</h3>
        <form id="adminProductForm" class="form">
          <div class="field"><label>${t('photo')}</label><input name="photo" type="file" accept="image/*" required></div>
          <div class="field"><label>${t('productName')}</label><input name="name" required></div>
          <div class="grid-2">
            <div class="field"><label>${t('price')}</label><input name="price" type="number" min="0" required></div>
          </div>
          <div class="field"><label>${t('category')}</label><select name="category">${cats.map(c=>`<option>${c}</option>`).join('')}</select></div>
          <div class="field"><label>${lang==="en"?"Description":lang==="fa"?"توضیحات":"تشریحات"}</label><textarea name="address"></textarea></div>
          <button class="btn btn-primary">${t('save')}</button>
        </form>
      </div>
      <div class="product-grid">

        ${(rows||[]).map(p=>`

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

      const adminProductForm=document.querySelector('#adminProductForm');
      if(adminProductForm){
        adminProductForm.onsubmit=async e=>{
          e.preventDefault();
          try{
            const f=new FormData(e.target);
            const photo=await upload(f.get('photo'),'products');
            await rpc('admin_add_product',{
              p_pin:adminPin,
              p_name:f.get('name'),
              p_quantity:1,
              p_price:+f.get('price'),
              p_category:f.get('category'),
              p_province:'',
              p_address:f.get('address'),
              p_photo_url:photo
            });
            toast(lang==="en"?"Product saved":lang==="fa"?"محصول ثبت شد":"جنس ثبت شو");
            renderAdminTab('products');
          }catch(x){
            toast(x.message);
          }
        };
      }
    }

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



function ishAIReply(q=''){
  const x=String(q||'').trim().toLowerCase();
  if(!x) return 'مهرباني وکړئ خپله پوښتنه ولیکئ.';
  if(/نصب|install|هوم|home screen/.test(x)){
    return 'په Android کې د «نصب اپ» تڼۍ ووهئ. په iPhone کې Safari خلاص کړئ، Share ووهئ او Add to Home Screen انتخاب کړئ.';
  }
  if(/کاپي|copy|جنس/.test(x)){
    return 'د خوښ شوي جنس لاندې «جنس کاپي کړه» تڼۍ ووهئ. د جنس نوم، قیمت، کټګوري، تشریحات او د عکس لینک کاپي کېږي؛ بیا یې دوکاندار ته په WhatsApp یا بل اپ کې ولېږئ.';
  }
  if(/قیمت|price/.test(x)){
    return 'د هر جنس قیمت د جنس په کارت کې په AFN ښودل کېږي.';
  }
  if(/اډمین|admin/.test(x)){
    return 'نوي جنسونه یوازې اډمین ثبتوي. مشتریان یوازې جنسونه ګوري او معلومات کاپي کوي.';
  }
  if(/واټساپ|whatsapp|دوکاندار|سفارش|ارډر|آرډر/.test(x)){
    return 'د آرډر لپاره د جنس معلومات د «جنس کاپي کړه» له لارې کاپي کړئ او خپل دوکاندار ته یې په WhatsApp یا بل پیغام کې ولېږئ.';
  }
  if(/کټګوري|category|لټون|search/.test(x)){
    return 'له پورته کټګوریو څخه خپله برخه وټاکئ، یا د لټون په خانه کې د جنس نوم ولیکئ.';
  }
  return 'زه د اسحاقزاده انلاین سټور د استعمال په اړه مرسته کوم. د نصب، جنس کاپي، قیمت، کټګورۍ، لټون او آرډر په اړه پوښتنه وکړئ.';
}

function mountIshaqzadaAI(){
  if(document.querySelector('#ishAIButton')) return;

  const btn=document.createElement('button');
  btn.id='ishAIButton';
  btn.type='button';
  btn.textContent='🤖 AI';
  btn.setAttribute('aria-label','AI help');
  btn.style.cssText='position:fixed;left:16px;bottom:18px;z-index:9999;border:0;border-radius:999px;padding:14px 16px;background:#0b2348;color:#fff;font-weight:800;font-size:16px;box-shadow:0 8px 24px rgba(0,0,0,.25)';
  document.body.appendChild(btn);

  const panel=document.createElement('div');
  panel.id='ishAIPanel';
  panel.style.cssText='display:none;position:fixed;left:14px;right:14px;bottom:84px;z-index:9999;background:#fff;border:1px solid #d9e2ef;border-radius:18px;padding:14px;box-shadow:0 14px 40px rgba(0,0,0,.25);max-width:520px;margin:auto';
  panel.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px">
      <strong style="font-size:18px">🤖 د اسحاقزاده AI مرسته</strong>
      <button id="ishAIClose" type="button" style="border:0;background:#eef3f9;border-radius:10px;padding:6px 10px;font-size:18px">×</button>
    </div>
    <div style="font-size:14px;color:#667085;margin-bottom:10px">د اسحاقزاده انلاین سټور په اړه خپله پوښتنه ولیکئ.</div>
    <div id="ishAIAnswer" style="background:#f6f8fb;border-radius:12px;padding:10px;min-height:48px;margin-bottom:10px">سلام! څنګه مرسته درسره وکړم؟</div>
    <div style="display:flex;gap:8px">
      <input id="ishAIInput" placeholder="پوښتنه ولیکئ..." style="flex:1;padding:12px;border:1px solid #d9e2ef;border-radius:12px">
      <button id="ishAISend" type="button" class="btn btn-navy">ولېږه</button>
    </div>`;
  document.body.appendChild(panel);

  btn.onclick=()=>panel.style.display=panel.style.display==='none'?'block':'none';
  panel.querySelector('#ishAIClose').onclick=()=>panel.style.display='none';
  const ask=()=>{
    const input=panel.querySelector('#ishAIInput');
    panel.querySelector('#ishAIAnswer').textContent=ishAIReply(input.value);
    input.value='';
  };
  panel.querySelector('#ishAISend').onclick=ask;
  panel.querySelector('#ishAIInput').addEventListener('keydown',e=>{if(e.key==='Enter') ask();});
}

window.addEventListener('load',mountIshaqzadaAI);

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

  else if(r==='admin'){
    admin();
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

