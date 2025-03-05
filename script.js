document.addEventListener("DOMContentLoaded", function () {
    let lightbox = new SimpleLightbox('.gallery a', {
        captions: true,        // Включити підписи
        captionsData: "alt",   // Брати підписи з атрибута alt
        captionDelay: 250,     // Затримка відображення підпису
        enableKeyboard: true,  // Гортання клавішами
        close: true,           // Кнопка закриття
        showCounter: true      // Лічильник (2/9)
    });
});