document.addEventListener('DOMContentLoaded', function() {
    const hamMenu = document.querySelector('.menu-hamburger');
    const offCanvas = document.querySelector('.offcanvas');
    if (hamMenu) {
        hamMenu.addEventListener('click', () => {
            offCanvas.classList.toggle('active')
        });
        }
    if (hamMenu) {
        window.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' || event.key === '27') {
                offCanvas.classList.remove('active')
            }
        })
    }
});
