const menuToggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');

menuToggle.addEventListener('click', () => {
    // Alterna a classe 'active' no ícone (para a animação X)
    menuToggle.classList.toggle('active');
    
    // Alterna a classe 'active' na lista de navegação (para mostrar/esconder o menu)
    navList.classList.toggle('active');
});

// Opcional: Fechar o menu ao clicar em um link
navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navList.classList.remove('active');
    });
});