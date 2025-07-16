document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('email');
  const successMsg = document.querySelector('.form-success');
  const errorMsg = document.querySelector('.form-error');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!email) {
      errorMsg.style.display = 'block';
      successMsg.style.display = 'none';
      errorMsg.textContent = 'Por favor, ingresá un email válido.';
      return;
    }

    // Obtener lista previa o crear nueva
    let emails = JSON.parse(localStorage.getItem('newsletterEmails')) || [];

    // Verificar si el email ya está guardado
    if (emails.includes(email)) {
      errorMsg.style.display = 'block';
      successMsg.style.display = 'none';
      errorMsg.textContent = 'Este email ya está suscripto.';
      return;
    }

    // Agregar nuevo email y guardar
    emails.push(email);
    localStorage.setItem('newsletterEmails', JSON.stringify(emails));

    // Mensajes y limpiar input
    successMsg.style.display = 'block';
    errorMsg.style.display = 'none';
    emailInput.value = '';
  });
});
