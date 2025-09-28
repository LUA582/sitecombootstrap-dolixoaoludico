document.addEventListener('DOMContentLoaded', function () {
    const btnDownload = document.getElementById('btnDownload');

    if (btnDownload) {
        btnDownload.addEventListener('click', function () {
            alert('🎉 Obrigado pelo interesse!\n\n Porém o guia "Do Lixo ao Lúdico" ainda não está dísponivel.\n\nFique atento as próximas atualizações!');
        });
    }

    // Rolagem suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Fecha menu móvel
    const navbarCollapse = document.querySelector('.navbar-collapse');
    document.querySelectorAll('.navbar-nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navbarCollapse).toggle();
            }
        });
    });
});
