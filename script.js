const form = document.querySelector('#requestForm');
const statusEl = document.querySelector('#formStatus');
const needSelect = document.querySelector('#need');
const requestSection = document.querySelector('#request');
const nameField = document.querySelector('#name');

function scrollToRequest(selectedNeed) {
  if (selectedNeed && needSelect) {
    needSelect.value = selectedNeed;
  }
  requestSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(() => nameField?.focus({ preventScroll: true }), 520);
}

document.querySelectorAll('[data-scroll-to-form]').forEach((button) => {
  button.addEventListener('click', () => scrollToRequest(''));
});

document.querySelectorAll('[data-card-need]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToRequest(link.getAttribute('data-card-need'));
  });
});

function getFieldValue(id) {
  return document.querySelector(`#${id}`)?.value.trim() || '';
}

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = getFieldValue('name');
  const email = getFieldValue('email');
  const phone = getFieldValue('phone');
  const need = getFieldValue('need');
  const urgency = getFieldValue('urgency');
  const question = getFieldValue('question');

  if (!name || !email || !need) {
    statusEl.textContent = 'Please add your name, email, and most important need before sending.';
    statusEl.style.color = '#8f551c';
    form.reportValidity();
    return;
  }

  const subject = encodeURIComponent('The Street Solution — Next-Step Review Request');
  const body = encodeURIComponent(
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone || 'Not provided'}\n` +
    `Most important need: ${need}\n` +
    `Urgency: ${urgency || 'Not selected'}\n` +
    `One question: ${question || 'Not provided'}\n\n` +
    `Sent from TheStreetSolution.com/start`
  );

  statusEl.textContent = 'Opening your email app with the request details filled in.';
  statusEl.style.color = '#2d4b2d';
  window.location.href = `mailto:ron@TheStreetSolution.com?subject=${subject}&body=${body}`;
});
