const form = document.querySelector('form');
const successMsg = document.querySelector('.form-success');

form?.addEventListener('submit', e => {
  e.preventDefault();
  form.reset();
  successMsg.classList.remove('hidden');
  successMsg.classList.add('visible');
});