function showInfo(message) {
    alert(message);
}

window.addEventListener('load', () => {
    const music = document.getElementById('background-music');
    if (music) {
        music.play().catch(error => {
            console.log('Autoplay prevented:', error);
        });
    }
});
