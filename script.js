const images = document.querySelectorAll(".gallery-item");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("close");

// Відкриття модального вікна
images.forEach(img => {
    img.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
    });
});

// Закриття модального вікна
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

// Закриття модального вікна при натисканні Escape
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});