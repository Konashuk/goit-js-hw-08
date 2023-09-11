import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', dataInput);
formEl.addEventListener('submit', resetForm);

const L_KeyEm = 'feedback-form-email';
const L_KeyMes = 'feedback-form-message';

const savedEmail = localStorage.getItem(L_KeyEm);
const savedMessage = localStorage.getItem(L_KeyMes);

function dataInput(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  localStorage.setItem(L_KeyMes, message);
  localStorage.setItem(L_KeyEm, email);
}

formEl.elements.email.value = savedEmail || '';
formEl.elements.message.value = savedMessage || '';

function resetForm(event) {
  event.preventDefault();
  localStorage.removeItem(L_KeyEm, L_KeyMes);
  formEl.reset();
}
