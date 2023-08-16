document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.container');
    
    containers.forEach(container => {
        const icon = container.querySelector('.icon');
        const answer = container.querySelector('.answer');
        
        container.addEventListener('click', () => {
            if(icon.classList.contains('active')) {
                icon.classList.remove('active');
                answer.style.maxHeight = null;
            } else {
                icon.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } 
        });
    });
});
// In script.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleDarkTheme = () => {
        const body = document.body;
        body.classList.toggle('dark-theme');
    };

    const themeToggleButton = document.querySelector('.dark-theme-toggle-button');
    themeToggleButton.addEventListener('click', toggleDarkTheme);
});

