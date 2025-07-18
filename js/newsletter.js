document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('email');
  const successMsg = document.querySelector('.form-success');
  const errorMsg = document.querySelector('.form-error');



  // Verificar si los elementos existen antes de usarlos
  if (!form || !emailInput || !successMsg || !errorMsg) {
    console.error('Faltan elementos en el DOM');
    return;
  }


   //Verifica si ya estan guardados en LS
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!email) {
      errorMsg.style.display = 'block';
      successMsg.style.display = 'none';
      errorMsg.textContent = 'Por favor, ingresá un email válido.';
      return;
    }

    //  lista previa o crear nueva
    let emails = JSON.parse(localStorage.getItem('newsletterEmails')) || [];

    // verificar si el email ya fue guardado previamente
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
    successMsg.textContent = '¡Gracias por suscribirte a nuestro newsletter!';
     // Limpiar el campo de entrada para posibles us.
    emailInput.value = '';
  });
});
