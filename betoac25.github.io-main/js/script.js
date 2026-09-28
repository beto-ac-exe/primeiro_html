let darkMode = false;
const darkBtn = document.getElementById('btn-dark-mode');
 
darkBtn?.addEventListener('click', () => {
    darkMode = !darkMode;
 
    document.body.style.backgroundColor = darkMode ? '#1a1a1a' : '';
    document.body.style.color           = darkMode ? '#e0e0e0' : '';
 
    document.querySelectorAll('.titulo, #lista, #noticias').forEach(el => {
        el.style.backgroundColor = darkMode ? '#4a1010' : '';
    });
 
    document.querySelectorAll('.texto').forEach(el => {
        el.style.backgroundColor = darkMode ? '#2a2a2a' : '';
        el.style.color           = darkMode ? '#e0e0e0' : '';
    });
 
    darkBtn.textContent = darkMode ? '☀️ Modo Claro' : '🌙 Modo Noturno';
});
 

let fontSize = 16;
 
document.getElementById('btn-increase-font')?.addEventListener('click', () => {
    if (fontSize < 26) fontSize += 2;
    document.body.style.fontSize = fontSize + 'px';
});
 
document.getElementById('btn-decrease-font')?.addEventListener('click', () => {
    if (fontSize > 12) fontSize -= 2;
    document.body.style.fontSize = fontSize + 'px';
});
 
document.getElementById('btn-reset-font')?.addEventListener('click', () => {
    fontSize = 16;
    document.body.style.fontSize = '16px';
});
 

document.getElementById('form-contato')?.addEventListener('submit', function(e) {
    e.preventDefault();
 
    const nome     = document.getElementById('campo-nome').value.trim();
    const email    = document.getElementById('campo-email').value.trim();
    const mensagem = document.getElementById('campo-mensagem').value.trim();
 
    if (!nome || !email || !mensagem) {
        alert('Preencha todos os campos!');
        return;
    }
 
    alert('Mensagem enviada com sucesso!');
    this.reset();
});