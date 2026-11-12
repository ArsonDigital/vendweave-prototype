
const products=[
{id:1,name:'Hand-thrown stoneware mug',maker:'Stone & Stem Pottery',category:'Home & Living',place:'Staunton, VA',price:'$32',note:'Wheel-thrown in small batches',image:'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=85',tag:'MAKER FAVORITE',event:true,story:'Everyday pottery with a little character. Each mug is shaped, glazed, and finished by hand in the Shenandoah Valley.'},
{id:2,name:'Botanical brass earrings',maker:'Wild Fern Adornments',category:'Jewelry',place:'Harrisonburg, VA',price:'$38',note:'Inspired by wild places',image:'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=85',tag:'SMALL BATCH',event:true,story:'Wearable pieces inspired by leaves, seed pods, and the changing seasons. Designed and assembled by an independent maker.'},
{id:3,name:'Mountain meadow art print',maker:'Little Mountain Press',category:'Art & Prints',place:'Lexington, VA',price:'$24',note:'Printed by the artist',image:'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=85',tag:'ARTIST MADE',event:false,story:'A quiet celebration of the Blue Ridge landscape, printed in small editions by the artist.'},
{id:4,name:'Botanical bath collection',maker:'Hearth & Herb',category:'Bath & Body',place:'Waynesboro, VA',price:'$29',note:'Thoughtfully made goods',image:'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=800&q=85',tag:'SMALL BATCH',event:true,story:'A gentle collection of botanical bath treats made in small batches with a love for simple rituals.'},
{id:5,name:'Handwoven market tote',maker:'Thread & Timber',category:'Clothing',place:'Staunton, VA',price:'$46',note:'Woven one at a time',image:'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=85',tag:'HANDWOVEN',event:false,story:'A practical, sturdy carryall woven with texture and everyday use in mind.'},
{id:6,name:'Wildflower honey sampler',maker:'Hollow Creek Apiary',category:'Food & Pantry',place:'Harrisonburg, VA',price:'$18',note:'A taste of the valley',image:'https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=800&q=85',tag:'LOCAL FAVORITE',event:true,story:'A tasting set of local honey varieties that reflect the changing blooms of the valley.'},
{id:7,name:'Speckled serving bowl',maker:'Stone & Stem Pottery',category:'Home & Living',place:'Staunton, VA',price:'$54',note:'Made for gathering',image:'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=800&q=85',tag:'HANDMADE',event:true,story:'A generous serving bowl made to bring people together around the table.'},
{id:8,name:'Pressed flower pendant',maker:'Wild Fern Adornments',category:'Jewelry',place:'Harrisonburg, VA',price:'$42',note:'A tiny piece of nature',image:'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=85',tag:'ONE OF A KIND',event:false,story:'A delicate pendant preserving the shapes and colors of botanicals in a wearable keepsake.'}];

const makers=[
{name:'Stone & Stem Pottery',place:'Staunton, VA',kind:'POTTERY · HOME & LIVING',bio:'Functional pottery, shaped slowly and made to be lived with.',image:'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=700&q=85',products:2,events:2},
{name:'Wild Fern Adornments',place:'Harrisonburg, VA',kind:'JEWELRY · ACCESSORIES',bio:'Botanical details and wearable pieces inspired by wild places.',image:'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=85',products:2,events:1},
{name:'Little Mountain Press',place:'Lexington, VA',kind:'ART · PRINTS',bio:'Art prints celebrating familiar landscapes and small wonders.',image:'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=700&q=85',products:1,events:2}];

const events=[
{name:'Shenandoah Makers Market',date:'May 24',place:'Gypsy Hill Park · Staunton, Virginia',makers:18,description:'A gathering of independent makers, artists, and small-batch producers. Explore participating vendors and preview their work before you visit.'}];

let activeCategory='All',searchTerm='',saved=new Set(),followed=new Set();

const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];

function renderProducts(){
let list=products.filter(p=>
(activeCategory==='All'||p.category===activeCategory)&&
(!searchTerm||[p.name,p.maker,p.category,p.place,p.story].join(' ').toLowerCase().includes(searchTerm))&&
($('#location').value==='all'||p.place===$('#location').value)&&
($('#availability').value==='all'||p.event));

const sort=$('#sort').value;

if(sort==='name')list.sort((a,b)=>a.name.localeCompare(b.name));
if(sort==='maker')list.sort((a,b)=>a.maker.localeCompare(b.maker));

$('#products').innerHTML=list.map(p=>`
<article class="product">
<div class="product-image">
<img src="${p.image}" alt="${p.name}">
<button class="heart ${saved.has(p.id)?'saved':''}" data-save="${p.id}" aria-label="${saved.has(p.id)?'Remove from':'Save to'} collection">${saved.has(p.id)?'♥':'♡'}</button>
${p.tag?`<span class="tag">${p.tag}</span>`:''}
</div>
<div class="product-meta">
<span>${p.category.toUpperCase()}</span>
<span>${p.place.toUpperCase()}</span>
</div>
<h3>${p.name}</h3>
<p class="maker-name">by ${p.maker}</p>
<div class="product-bottom">
<small>${p.note}</small>
<button class="detail-link" data-product="${p.id}">Discover ↗</button>
</div>
</article>`).join('');

$('#resultCount').textContent=`Showing ${list.length} ${list.length===1?'find':'finds'}`;
$('#noResults').hidden=list.length>0;
$('#showAll').hidden=list.length<=4;

$$('[data-save]').forEach(b=>b.onclick=()=>toggleSave(Number(b.dataset.save)));
$$('[data-product]').forEach(b=>b.onclick=()=>openProduct(Number(b.dataset.product)));
}

function renderMakers(){
let list=makers.filter(m=>!searchTerm||[m.name,m.place,m.bio,m.kind].join(' ').toLowerCase().includes(searchTerm));

$('#makerGrid').innerHTML=list.map((m,i)=>`
<article class="maker-card">
<img src="${m.image}" alt="${m.name}">
<div>
<small>${m.kind} · ${m.place.toUpperCase()}</small>
<h3>${m.name}</h3>
<p>${m.bio}</p>
<button class="follow-btn ${followed.has(m.name)?'following':''}" data-follow="${i}">${followed.has(m.name)?'✓ Following':'＋ Follow maker'}</button>
<button class="detail-link" data-maker="${i}">View profile ↗</button>
</div>
</article>`).join('');

$$('[data-follow]').forEach(b=>b.onclick=()=>{
const name=makers[Number(b.dataset.follow)].name;
followed.has(name)?followed.delete(name):followed.add(name);
renderMakers();
});

$$('[data-maker]').forEach(b=>b.onclick=()=>openMaker(Number(b.dataset.maker)));
}

function updateSaved(){
$('#savedCount').textContent=saved.size;

let list=products.filter(p=>saved.has(p.id));

$('#savedPreview').innerHTML=list.length?
list.map(p=>`
<img class="saved-thumb" src="${p.image}" alt="">
<span><strong>${p.name}</strong><small>${p.maker}</small></span>
<button class="detail-link" data-product="${p.id}">View ↗</button>`).join(''):
`<span class="empty-heart">♡</span>
<strong>Your collection is waiting.</strong>
<small>Tap the heart on any find to save it here.</small>`;

$$('#savedPreview [data-product]').forEach(b=>b.onclick=()=>openProduct(Number(b.dataset.product)));
}

function toggleSave(id){
saved.has(id)?saved.delete(id):saved.add(id);
renderProducts();
updateSaved();
}

function dialog(html){
$('#dialogContent').innerHTML=html;
$('#overlay').hidden=false;
document.body.style.overflow='hidden';
}

function closeDialog(){
$('#overlay').hidden=true;
document.body.style.overflow='';
}

$('#closeDialog').onclick=closeDialog;

$('#overlay').onclick=e=>{
if(e.target===$('#overlay'))closeDialog();
};

document.addEventListener('keydown',e=>{
if(e.key==='Escape')closeDialog();
});

function openProduct(id){
const p=products.find(x=>x.id===id);

dialog(`
<div class="dialog-meta">${p.category.toUpperCase()} · ${p.place.toUpperCase()}</div>
<h2>${p.name}</h2>
<img class="dialog-hero" src="${p.image}" alt="${p.name}">
<p><b>Made by ${p.maker}</b> · ${p.price}</p>
<p>${p.story}</p>
<p>${p.event?'This maker is expected at the featured Shenandoah Makers Market sample event.':'Follow this maker to hear about upcoming market appearances.'}</p>

<div class="dialog-actions">
<button id="detailSave">${saved.has(id)?'♥ Saved to my collection':'♡ Save this find'}</button>
<button class="secondary" id="makerFromProduct">Meet the maker ↗</button>
<button class="secondary" id="shareProduct">Copy product link</button>
</div>

<div class="comments">
<b>Community notes</b>
<p>“Love discovering the story behind handmade work.” <small>— Sample shopper</small></p>
<div class="comment-box">
<input id="commentInput" placeholder="Add a thought…">
<button id="commentAdd">Post comment</button>
</div>
<div id="commentList"></div>
</div>`);

$('#detailSave').onclick=()=>{
toggleSave(id);
openProduct(id);
};

$('#makerFromProduct').onclick=()=>openMaker(makers.findIndex(m=>m.name===p.maker));

$('#shareProduct').onclick=()=>{
navigator.clipboard?.writeText(location.href.split('#')[0]+'#discover');
$('#shareProduct').textContent='Link copied (demo)';
};

$('#commentAdd').onclick=()=>{
let v=$('#commentInput').value.trim();

if(v){
$('#commentList').innerHTML+=`<p>“${escapeHTML(v)}” <small>— Guest shopper (local demo)</small></p>`;
$('#commentInput').value='';
}
};
}

function openMaker(i){
const m=makers[i];
if(!m)return;

const items=products.filter(p=>p.maker===m.name);

dialog(`
<div class="dialog-meta">${m.kind} · ${m.place.toUpperCase()}</div>
<h2>${m.name}</h2>
<img class="dialog-hero" src="${m.image}" alt="${m.name}">
<p>${m.bio}</p>

<div class="profile-stats">
<span><b>${m.products}</b>Featured products</span>
<span><b>${m.events}</b>Event appearances</span>
<span><b>${followed.has(m.name)?'Following':'+'}</b>Community connection</span>
</div>

<h3>Maker's featured finds</h3>

${items.map(p=>`
<p>✦ ${p.name}
<button class="detail-link" data-product="${p.id}">View find ↗</button>
</p>`).join('')}

<div class="dialog-actions">
<button id="makerFollow">${followed.has(m.name)?'✓ Following':'＋ Follow this maker'}</button>
<button class="secondary" id="makerEvents">Find at an event ↗</button>
</div>`);

$('#makerFollow').onclick=()=>{
followed.has(m.name)?followed.delete(m.name):followed.add(m.name);
openMaker(i);
renderMakers();
};

$('#makerEvents').onclick=()=>openEvent(0);

$$('#dialogContent [data-product]').forEach(b=>b.onclick=()=>openProduct(Number(b.dataset.product)));
}

function openEvent(i){
const e=events[i];

dialog(`
<div class="dialog-meta">FEATURED GATHERING · SAMPLE EVENT</div>
<h2>${e.name}</h2>
<img class="dialog-hero" src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1000&q=80" alt="Outdoor event">

<p><b>${e.date}</b> · ${e.place}</p>
<p>${e.description}</p>
<p><b>${e.makers} participating makers</b> · Sample event data</p>

<h3>Preview the booth map</h3>
<p>Choose a booth to see an example vendor location. This is a conceptual map, not an actual event layout.</p>

<div class="booth-map">
${Array.from({length:12},(_,n)=>`<button data-booth="${n+1}">B${String(n+1).padStart(2,'0')}</button>`).join('')}
<button class="path">MAIN<br>PATH</button>
<button class="path">INFO</button>
<button class="path">FOOD</button>
</div>

<p id="boothInfo">Select a booth to preview its maker.</p>

<div class="dialog-actions">
<button id="eventSave">Save this event</button>
</div>`);

$$('[data-booth]').forEach(b=>b.onclick=()=>{
$('#boothInfo').textContent=`Booth ${b.dataset.booth}: ${makers[(Number(b.dataset.booth)-1)%makers.length].name} · sample assignment`;
});

$('#eventSave').onclick=()=>{
$('#eventSave').textContent='✓ Event saved (demo)';
};
}

function escapeHTML(s){
return s.replace(/[&<>"']/g,c=>({
'&':'&amp;',
'<':'&lt;',
'>':'&gt;',
'"':'&quot;',
"'":'&#39;'
}[c]));
}

$$('.category').forEach(b=>b.onclick=()=>{
$$('.category').forEach(x=>x.classList.remove('active'));
b.classList.add('active');
activeCategory=b.dataset.cat;
renderProducts();
document.querySelector('#discover').scrollIntoView({behavior:'smooth'});
});

function runSearch(){
searchTerm=$('#search').value.trim().toLowerCase();
renderProducts();
renderMakers();
$('#discover').scrollIntoView({behavior:'smooth'});
}

$('#searchGo').onclick=runSearch;

$('#search').addEventListener('keydown',e=>{
if(e.key==='Enter')runSearch();
});

$('#sort').onchange=renderProducts;
$('#location').onchange=renderProducts;
$('#availability').onchange=renderProducts;

$('#clearFilters').onclick=()=>{
$('#search').value='';
$('#location').value='all';
$('#availability').value='all';
searchTerm='';
activeCategory='All';

$$('.category').forEach(x=>x.classList.toggle('active',x.dataset.cat==='All'));

renderProducts();
renderMakers();
};

$('#showAll').onclick=()=>{
$('#search').value='';
$('#location').value='all';
$('#availability').value='all';
searchTerm='';
activeCategory='All';

$$('.category').forEach(x=>x.classList.toggle('active',x.dataset.cat==='All'));

renderProducts();
};

$('#allEvents').onclick=()=>openEvent(0);

$('#allMakers').onclick=()=>{
searchTerm='';
$('#search').value='';
renderMakers();
$('#makers').scrollIntoView({behavior:'smooth'});
};

$('#profileButton').onclick=()=>dialog(`
<div class="eyebrow">YOUR SHOPPER SPACE</div>
<h2>Your discovery profile</h2>
<p>This preview shows how a shopper account could bring favorite finds, followed makers, and saved events together.</p>

<div class="profile-stats">
<span><b>${saved.size}</b>Saved finds</span>
<span><b>${followed.size}</b>Followed makers</span>
<span><b>1</b>Featured event</span>
</div>

<p>Favorites and follows in this demo are stored only in the current page session. A future version would use a secure account and database.</p>

<div class="dialog-actions">
<button id="profileSaved">View my collection</button>
<button class="secondary" id="profileFollowed">View makers</button>
</div>`);

$('#profileButton').addEventListener('click',()=>{});

$('#joinButton').onclick=()=>$('#profileButton').click();

$('#mobileMenu').onclick=()=>{
document.querySelector('.header nav').classList.toggle('open');
};

$('#profileButton').addEventListener('click',()=>{
setTimeout(()=>{
if($('#profileSaved'))
$('#profileSaved').onclick=()=>{
closeDialog();
$('#saved').scrollIntoView({behavior:'smooth'});
};

if($('#profileFollowed'))
$('#profileFollowed').onclick=()=>{
closeDialog();
$('#makers').scrollIntoView({behavior:'smooth'});
};
},0);
});

renderProducts();
renderMakers();
updateSaved();
