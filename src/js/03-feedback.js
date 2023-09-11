import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', dataInput);
formEl.addEventListener('submit', resetForm);

const L_Key = 'feedback-form-state';

const savedData = localStorage.getItem(L_Key);
const { email, message } = JSON.parse(savedData || '{}');

formEl.elements.email.value = email || '';
formEl.elements.message.value = message || '';
console.log(JSON.parse(savedData));
function dataInput(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  localStorage.setItem(L_Key, JSON.stringify({ email, message }));
}

function resetForm(event) {
  event.preventDefault();
  localStorage.removeItem(L_Key);
  formEl.reset();
}
