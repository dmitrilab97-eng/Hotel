// Автоматичний слайдер
document.querySelectorAll('.slider').forEach(slider => {
    let slides = slider.querySelectorAll('.slide');
    let index = 0;

    setInterval(() => {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }, 3000);
});

// Кнопка бронювання
function bookRoom(roomName) {
    alert("Ви обрали номер: " + roomName);
}

function bookRoom(roomName) {
    alert("Ви обрали номер: " + roomName + 
          "\nНаш менеджер зв'яжеться з вами найближчим часом.");

    console.log("Бронювання номера:", roomName);
}
