document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        const percentage = item.getAttribute('data-percentage');
        const skillProgress = item.querySelector('.skill-progress');
        
        // Establece el ancho de la barra según el porcentaje
        skillProgress.style.width = percentage + '%';
    });
});
