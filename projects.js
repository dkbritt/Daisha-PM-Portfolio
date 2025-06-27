const cards = document.querySelectorAll('.project-card');
const modal = document.querySelector('.project-modal');
const closeBtn = document.querySelector('.close-btn');

cards.forEach(card => {
  card.addEventListener('click', () => {
    modal.classList.remove('hidden');
    // Optional: Load specific project details dynamically
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});