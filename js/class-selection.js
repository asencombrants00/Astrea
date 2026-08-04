const classData = {
  knight: { label: "Chevalier", image: "assets/class-knight.png" },
  hunter: { label: "Chasseur", image: "assets/class-hunter.png" },
  wizard: { label: "Sorcier", image: "assets/class-wizard.png" },
  sage: { label: "Sage", image: "assets/class-sage.png" }
};

const heroImage = document.getElementById("heroImage");
const selectionStatus = document.getElementById("selectionStatus");
const classButtons = [...document.querySelectorAll(".class-card")];
const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");

function selectClass(classId) {
  const selected = classData[classId] ?? classData.knight;

  heroImage.classList.remove("is-visible");

  window.requestAnimationFrame(() => {
    heroImage.src = selected.image;
    heroImage.dataset.class = classId;
    heroImage.alt = `${selected.label} sélectionné`;
    heroImage.classList.add("is-visible");
  });

  classButtons.forEach((button) => {
    const isSelected = button.dataset.class === classId;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  selectionStatus.textContent = `${selected.label} sélectionné`;
  localStorage.setItem("astrea.selectedClass", classId);
}

classButtons.forEach((button) => {
  button.addEventListener("click", () => selectClass(button.dataset.class));
});

nextButton.addEventListener("click", () => {
  window.location.href = "companion.html";
});

backButton.addEventListener("click", () => {
  if (window.history.length > 1) {
    window.history.back();
  }
});

Object.values(classData).forEach(({ image }) => {
  const preload = new Image();
  preload.src = image;
});

selectClass(localStorage.getItem("astrea.selectedClass") || "knight");
