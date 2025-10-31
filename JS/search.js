
    document.addEventListener("DOMContentLoaded", () => {
        // ===============================================
        // Lógica da Barra de Pesquisa (Redirecionamento)
        // ===============================================
        const searchButton = document.querySelector('.search-bar button');
        const searchInput = document.querySelector('.search-bar input');

        const performSearch = () => {
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `produtos.html?q=${encodeURIComponent(query)}`;
            } else {
                 window.location.href = `produtos.html`;
            }
        };
        
        if (searchButton && searchInput) {
            searchButton.addEventListener('click', performSearch);
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
        };
    });
        