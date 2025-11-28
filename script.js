document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.code === 'ArrowUp') { 
        event.preventDefault(); // Предотвращает прокрутку страницы
        if (isGameOver) {
            startGame(); // Запускает игру
        } else {
            jump(); // Выполняет прыжок
        }
    }
});