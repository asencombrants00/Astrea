
const classData = {
  knight: { label: 'Chevalier', image: 'assets/class-knight.png', mask: false },
  hunter: { label: 'Chasseur', image: 'assets/class-hunter.png', mask: true },
  wizard: { label: 'Sorcier', image: 'assets/class-wizard.png', mask: true },
  sage: { label: 'Sage', image: 'assets/class-sage.png', mask: true }
};
const heroImage = document.getElementById('heroImage');
const stageMask = document.getElementById('stageMask');
const chip = document.getElementById('selectionChip');
const buttons = [...document.querySelectorAll('.class-card')];
const nextButton = document.getElementById('nextButton');
const backButton = document.getElementById('backButton');

function setSelectedClass(id) {
  const data = classData[id] || classData.knight;
  localStorage.setItem('astrea.selectedClass', id);
  chip.textContent = `Classe sélectionnée : ${data.label}`;
  buttons.forEach(btn => btn.classList.toggle('is-selected', btn.dataset.class === id));

  if (id === 'knight') {
    heroImage.className = 'hero-image hero-image--hidden';
    heroImage.removeAttribute('src');
    heroImage.removeAttribute('data-class');
    stageMask.classList.remove('is-visible');
    return;
  }

  heroImage.src = data.image;
  heroImage.alt = `${data.label} sélectionné`;
  heroImage.dataset.class = id;
  heroImage.className = 'hero-image is-visible';
  stageMask.classList.toggle('is-visible', Boolean(data.mask));
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => setSelectedClass(btn.dataset.class));
});

nextButton.addEventListener('click', () => {
  const current = localStorage.getItem('astrea.selectedClass') || 'knight';
  localStorage.setItem('astrea.selectedClass', current);
  window.location.href = 'companion.html';
});

backButton.addEventListener('click', () => {
  window.location.href = 'index.html';
});

['class-hunter.png','class-wizard.png','class-sage.png'].forEach(name => { const img = new Image(); img.src = `assets/${name}`; });
setSelectedClass(localStorage.getItem('astrea.selectedClass') || 'knight');
