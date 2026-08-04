
const PET_DATA={
  // Tuned so companions sit/stand on the carpet at similar perceived scale.
  tiger:{label:'Tigre glacial',image:'assets/pet-tiger.png',height:'86%',left:'50%',bottom:'-2.8%'},
  gelapuf:{label:'Gélapuf',image:'assets/pet-gelapuf.png',height:'83%',left:'50%',bottom:'-2.8%'},
  deer:{label:'Biche étoilée',image:'assets/pet-deer.png',height:'88%',left:'50.2%',bottom:'-2.8%'}
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
  sprite.style.height=data.height;
  sprite.style.width='auto';
  sprite.style.left=data.left;
  sprite.style.bottom=data.bottom;
  status.textContent=`Compagnon sélectionné : ${data.label}`;
  buttons.forEach(btn=>btn.classList.toggle('is-selected',btn.dataset.pet===id));
  localStorage.setItem('astrea.selectedPet',id);
}
buttons.forEach(btn=>btn.addEventListener('click',()=>applyPet(btn.dataset.pet)));
backBtn.addEventListener('click',()=>window.location.href='index.html');
nextBtn.addEventListener('click',()=>{
  const classMap={knight:'Chevalier',hunter:'Chasseur',wizard:'Sorcier',sage:'Sage'};
  const cls=localStorage.getItem('astrea.selectedClass')||'knight';
  const pet=localStorage.getItem('astrea.selectedPet')||'tiger';
  alert(`Choix validé : ${classMap[cls]} + ${PET_DATA[pet].label}`);
});
['pet-tiger.png','pet-gelapuf.png','pet-deer.png'].forEach(n=>{const i=new Image();i.src='assets/'+n;});
applyPet(localStorage.getItem('astrea.selectedPet')||'tiger');
