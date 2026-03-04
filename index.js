const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    } else {
        toggleBtn.innerHTML = `<i class="fa-regular fa-moon"></i>`;
    }
});

const track = document.querySelector('.gallery-track');
const leftBtn = document.querySelector('.gallery-btn.left');
const rightBtn = document.querySelector('.gallery-btn.right');

leftBtn.addEventListener('click', () => {
    track.scrollBy({ left: -300, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
    track.scrollBy({ left: 300, behavior: 'smooth' });
});

const modal = document.querySelector('.img-modal');
const modalImg = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close-modal');
const images = document.querySelectorAll('.gallery-track img');

images.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

modal.addEventListener('click', (e) => {
    if (e.target !== modalImg) {
        modal.style.display = "none";
    }
});
