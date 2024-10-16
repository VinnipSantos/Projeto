const form = document.getElementById('invite-form');
const statusMessage = document.getElementById('status-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const attendance = document.getElementById('attendance').value;

    statusMessage.textContent = `Convite enviado para ${name} (${email}). Confirmação: ${attendance === 'yes' ? 'Confirmado' : 'Não confirmado'}.`;
    statusMessage.style.color = '#28a745';

    form.reset(); 
});