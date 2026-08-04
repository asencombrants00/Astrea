
const CLASS_DATA={
  // screen-space calibration: centered on the carpet, feet grounded
  knight:{label:'Chevalier',image:'assets/class-knight.png',left:'27.25%',bottom:'25.4%',height:'48.7%'},
  hunter:{label:'Chasseur',image:'assets/class-hunter.png',left:'27.25%',bottom:'25.4%',height:'48.3%'},
  wizard:{label:'Sorcier',image:'assets/class-wizard.png',left:'27.25%',bottom:'25.4%',height:'49.2%'},
  sage:{label:'Sage',image:'assets/class-sage.png',left:'27.25%',bottom:'25.4%',height:'48.8%'}
};
const sprite=document.getElementById('classSprite');
const status=document.getElementById('classStatus');
const buttons=[...document.querySelectorAll('.class-btn')];
const nextBtn=document.getElementById('classNext');
const backBtn=document.getElementById('classBack');
function applyClass(id){
  const data=CLASS_DATA[id]||CLASS_DATA.knight;
  sprite.src=data.image;
  sprite.alt=data.label;
  sprite.style.left=data.left;
  sprite.style.bottom=data.bottom;
  sprite.style.height=data.height;
  sprite.style.width='auto';
  status.textContent=`Classe sélectionnée : ${data.label}`;
  buttons.forEach(btn=>btn.classList.toggle('is-selected', btn.dataset.class===id));
  localStorage.setItem('astrea.selectedClass', id);
}
buttons.forEach(btn=>btn.addEventListener('click',()=>applyClass(btn.dataset.class)));
nextBtn.addEventListener('click',()=>window.location.href='companion.html');
backBtn.addEventListener('click',()=>window.location.href='index.html');
['class-knight.png','class-hunter.png','class-wizard.png','class-sage.png'].forEach(n=>{ const i=new Image(); i.src='assets/'+n; });
applyClass(localStorage.getItem('astrea.selectedClass')||'knight');
