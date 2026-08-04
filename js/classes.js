
const CLASS_DATA={
  knight:{label:'Chevalier',image:'assets/class-knight.png',height:'95%',left:'50%',bottom:'-1%'},
  hunter:{label:'Chasseur',image:'assets/class-hunter.png',height:'95%',left:'50%',bottom:'-1%'},
  wizard:{label:'Sorcier',image:'assets/class-wizard.png',height:'98%',left:'50%',bottom:'-1%'},
  sage:{label:'Sage',image:'assets/class-sage.png',height:'97%',left:'50%',bottom:'-1%'}
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
  sprite.style.height=data.height;
  sprite.style.width='auto';
  sprite.style.left=data.left;
  sprite.style.bottom=data.bottom;
  status.textContent=`Classe sélectionnée : ${data.label}`;
  buttons.forEach(btn=>btn.classList.toggle('is-selected',btn.dataset.class===id));
  localStorage.setItem('astrea.selectedClass',id);
}
buttons.forEach(btn=>btn.addEventListener('click',()=>applyClass(btn.dataset.class)));
nextBtn.addEventListener('click',()=>window.location.href='companion.html');
backBtn.addEventListener('click',()=>window.location.href='index.html');
['class-knight.png','class-hunter.png','class-wizard.png','class-sage.png'].forEach(n=>{const i=new Image();i.src='assets/'+n;});
applyClass(localStorage.getItem('astrea.selectedClass')||'knight');
