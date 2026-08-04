
const PET_DATA={
  // screen-space calibration: centered on the carpet, feet grounded
  tiger:{label:'Tigre glacial',image:'assets/pet-tiger.png',left:'27.25%',bottom:'21.6%',height:'30.6%'},
  gelapuf:{label:'Gélapuf',image:'assets/pet-gelapuf.png',left:'27.25%',bottom:'21.6%',height:'30.0%'},
  deer:{label:'Biche étoilée',image:'assets/pet-deer.png',left:'27.25%',bottom:'21.6%',height:'41.0%'}
};
const sprite=document.getElementById('petSprite');
const status=document.getElementById('petStatus');
const buttons=[...document.querySelectorAll('.pet-btn')];
const nextBtn=document.getElementById('petNext');
const backBtn=document.getElementById('petBack');
function applyPet(id){
  const data=PET_DATA[id]||PET_DATA.tiger;
  sprite.src=data.image;
  sprite.alt=data.label;
  sprite.style.left=data.left;
  sprite.style.bottom=data.bottom;
  sprite.style.height=data.height;
  sprite.style.width='auto';
  status.textContent=`Compagnon sélectionné : ${data.label}`;
  buttons.forEach(btn=>btn.classList.toggle('is-selected', btn.dataset.pet===id));
  localStorage.setItem('astrea.selectedPet', id);
}
buttons.forEach(btn=>btn.addEventListener('click',()=>applyPet(btn.dataset.pet)));
backBtn.addEventListener('click',()=>window.location.href='index.html');
nextBtn.addEventListener('click',()=>{
  const classMap={knight:'Chevalier',hunter:'Chasseur',wizard:'Sorcier',sage:'Sage'};
  const cls=localStorage.getItem('astrea.selectedClass')||'knight';
  const pet=localStorage.getItem('astrea.selectedPet')||'tiger';
  alert(`Choix validé : ${classMap[cls]} + ${PET_DATA[pet].label}`);
});
['pet-tiger.png','pet-gelapuf.png','pet-deer.png'].forEach(n=>{ const i=new Image(); i.src='assets/'+n; });
applyPet(localStorage.getItem('astrea.selectedPet')||'tiger');
