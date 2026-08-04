
const petData = {
  tiger: { label: 'Tigre glacial', image: 'assets/pet-tiger.png', mask: true },
  gelapuf: { label: 'Gélapuf', image: 'assets/pet-gelapuf.png', mask: true },
  deer: { label: 'Biche étoilée', image: 'assets/pet-deer.png', mask: false }
};
const petImage = document.getElementById('petImage');
const petStageMask = document.getElementById('petStageMask');
const chip = document.getElementById('petSelectionChip');
const buttons = [...document.querySelectorAll('.pet-card')];
const nextButton = document.getElementById('companionNextButton');
const backButton = document.getElementById('companionBackButton');

function setSelectedPet(id) {
  const data = petData[id] || petData.deer;
  localStorage.setItem('astrea.selectedPet', id);
  chip.textContent = `Compagnon sélectionné : ${data.label}`;
  buttons.forEach(btn => btn.classList.toggle('is-selected', btn.dataset.pet === id));

  if (id === 'deer') {
    petImage.className = 'hero-image hero-image--hidden';
    petImage.removeAttribute('src');
    petImage.removeAttribute('data-pet');
    petStageMask.classList.remove('is-visible');
    return;
  }
  petImage.src = data.image;
  petImage.alt = `${data.label} sélectionné`;
  petImage.dataset.pet = id;
  petImage.className = 'hero-image is-visible';
  petStageMask.classList.toggle('is-visible', Boolean(data.mask));
}
buttons.forEach(btn => btn.addEventListener('click', () => setSelectedPet(btn.dataset.pet)));
backButton.addEventListener('click', () => { window.location.href = 'index.html'; });
nextButton.addEventListener('click', () => {
  const chosenClass = localStorage.getItem('astrea.selectedClass') || 'knight';
  const chosenPet = localStorage.getItem('astrea.selectedPet') || 'deer';
  const heroNames = {knight:'Chevalier', hunter:'Chasseur', wizard:'Sorcier', sage:'Sage'};
  const petNames = {tiger:'Tigre glacial', gelapuf:'Gélapuf', deer:'Biche étoilée'};
  alert(`Choix validé : ${heroNames[chosenClass]} + ${petNames[chosenPet]}`);
});
['pet-tiger.png','pet-gelapuf.png'].forEach(name => { const img = new Image(); img.src = `assets/${name}`; });
setSelectedPet(localStorage.getItem('astrea.selectedPet') || 'deer');
