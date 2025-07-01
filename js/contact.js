form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString()
  })
  .then(() => {
    form.reset();
    successMsg.classList.remove('hidden');
    successMsg.classList.add('visible');
  })
  .catch(error => alert(error));
});