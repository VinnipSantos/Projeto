const SUPABASE_URL = 'https://yvhwqjupqozszhpsabkt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2aHdxanVwcW96c3pocHNhYmt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwNzgxNjEsImV4cCI6MjA0NDY1NDE2MX0.QassK-SjVg1qG8wfyDgYBSJ1-mWfAN9d3xzccu9928w';

// Crie a instância do cliente Supabase
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Use a instância do cliente Supabase
        const { data, error } = await _supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;

        alert('Login bem-sucedido!');
        // Redirecionar para a página principal ou mostrar conteúdo protegido
        window.location.href = 'forms.html'; // Alterar para a página de produtos ou principal
    } catch (error) {
        console.error('Erro ao fazer login:', error.message);
        alert('Erro ao fazer login: ' + error.message);
    }
});

document.getElementById('signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Use a instância do cliente Supabase
        const { data, error } = await _supabase.auth.signUp({ email, password });
        if (error) throw error;

        alert('Cadastro realizado com sucesso!');
        // Redirecionar para a página de login ou fazer login automaticamente
        window.location.href = 'forms.html'; // Alterar para a página de login ou principal
    } catch (error) {
        console.error('Erro ao fazer cadastro:', error.message);
        alert('Erro ao fazer cadastro: ' + error.message);
    }
});


