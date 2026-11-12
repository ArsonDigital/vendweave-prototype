const $=(s,root=document)=>root.querySelector(s), $$=(s,root=document)=>[...root.querySelectorAll(s)];
const modal=$('#modal'), modalTitle=$('#modalTitle'), modalBody=$('#modalBody');

function showModal(title,html){
  modalTitle.textContent=title;
  modalBody.innerHTML=html;
  modal.hidden=false;
  document.body.style.overflow='hidden'
}

function closeModal(){
  modal.hidden=true;
  document.body.style.overflow=''
}

$('.modal-close').addEventListener('click',closeModal);
$('.modal-done').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{
  if(e.target===modal)closeModal()
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape')closeModal()
});

$$('[data-view]').forEach(btn=>btn.addEventListener('click',()=>{
  const view=btn.dataset.view;
  const content={
    join:['Find your place in the Guild',`<p>This is a concept preview of VendWeave membership. In the full platform, shoppers, vendors, and organizers would choose the experience that fits them.</p><div class="dashboard-preview"><strong>How would you like to take part?</strong><ul class="demo-list"><li>I'm here to discover independent makers and events.</li><li>I create or sell independent products.</li><li>I organize markets, festivals, or pop-up events.</li></ul></div><p><b>Demo note:</b> Account registration is not connected in this prototype.</p>`],
    dashboard:['Member sign-in preview',`<p>A future member area would bring saved finds, followed makers, upcoming events, and account settings together.</p><div class="dashboard-preview"><strong>Your discovery dashboard</strong><div class="dashboard-stats"><span><b>08</b>Saved finds</span><span><b>03</b>Followed makers</span><span><b>02</b>Events nearby</span></div></div><p>These are illustrative sample figures, not live account data.</p>`],
    vendor:['Vendor workspace preview',`<p>A vendor's home base for presenting their work and connecting it to events and shoppers.</p><div class="dashboard-preview"><strong>Stone & Stem Pottery</strong><div class="dashboard-stats"><span><b>12</b>Products</span><span><b>3</b>Events</span><span><b>146</b>Profile visits</span></div></div><ul class="demo-list"><li>Manage product gallery</li><li>Update vendor story and profile</li><li>Review event participation</li><li>Explore featured placement</li></ul>`],
    premium:['Guild Plus · Premium concept',`<p>Premium membership is a proposed business model, not an active subscription or price offer.</p><ul class="demo-list"><li>Enhanced vendor and event profiles</li><li>Featured discovery placement</li><li>Expanded promotional tools</li><li>Organizer event-management features</li><li>Basic performance insights</li></ul><p>Final features, pricing, and eligibility would be validated with vendors and organizers.</p>`]
  };
  showModal(content[view][0],content[view][1])
}));

$$('.heart').forEach(b=>b.addEventListener('click',()=>{
  b.classList.toggle('saved');
  b.textContent=b.classList.contains('saved')?'♥':'♡';
  b.setAttribute('aria-pressed',b.classList.contains('saved'))
}));

function filterProducts(){
  const term=$('#searchInput').value.trim().toLowerCase(),cat=$('#categoryFilter').value;
  let count=0;
  $$('.product-card').forEach(card=>{
    const ok=(cat==='all'||card.dataset.category===cat)&&(!term||(card.dataset.name+' '+card.textContent).toLowerCase().includes(term));
    card.hidden=!ok;
    if(ok)count++
  });
  $('#emptyState').hidden=count!==0
}

$('#searchButton').addEventListener('click',filterProducts);
$('#searchInput').addEventListener('keydown',e=>{
  if(e.key==='Enter')filterProducts()
});
$('#categoryFilter').addEventListener('change',filterProducts);

$$('.chip').forEach(chip=>chip.addEventListener('click',()=>{
  $$('.chip').forEach(c=>c.classList.remove('active'));
  chip.classList.add('active');
  $('#categoryFilter').value=chip.dataset.filter;
  filterProducts()
}));

$$('[data-product]').forEach(b=>b.addEventListener('click',()=>{
  showModal(b.dataset.product,`<p>This is an example product detail view. In the full VendWeave experience, shoppers could explore the maker's story, browse related products, save the item, and find upcoming events where the maker will appear.</p><div class="dashboard-preview"><strong>Maker connection</strong><p>View maker profile · Follow maker · Find at an event</p></div><p>Sample product content for demonstration only.</p>`)
}));

$$('[data-vendor]').forEach(b=>b.addEventListener('click',()=>{
  showModal(b.dataset.vendor,`<p>A maker profile would combine a brand story, product gallery, location, social links, shopper engagement, and upcoming event appearances.</p><div class="dashboard-preview"><strong>Maker profile sections</strong><ul class="demo-list"><li>About the maker</li><li>Featured products</li><li>Upcoming markets and events</li><li>Community likes and comments</li></ul></div>`)
}));

$$('[data-event]').forEach(b=>b.addEventListener('click',()=>{
  showModal(b.dataset.event,`<p><b>Sample event listing · May 24</b><br>Gypsy Hill Park · Staunton, Virginia</p><p>Explore participating vendors, preview products, save the event, and use a future interactive map to find booths on event day.</p><p>This event is fictional sample content; dates and details are not a real event announcement.</p>`)
}));

$('#allEvents').addEventListener('click',e=>{
  e.preventDefault();
  showModal('Event discovery preview',`<p>The full event directory would support location, date, category, and vendor-based discovery.</p><ul class="demo-list"><li>Search upcoming markets and festivals</li><li>Explore event details and participating vendors</li><li>Preview booth maps and featured makers</li><li>Save events to a personal list</li></ul>`)
});

$('.menu-toggle').addEventListener('click',()=>{
  const nav=$('.main-nav'),open=nav.classList.toggle('open');
  $('.menu-toggle').setAttribute('aria-expanded',open)
});

$$('.main-nav a').forEach(a=>a.addEventListener('click',()=>{
  $('.main-nav').classList.remove('open')
}));