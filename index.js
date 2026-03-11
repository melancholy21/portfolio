const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    } else {
        toggleBtn.innerHTML = `<i class="fa-regular fa-moon"></i>`;
    }
});

const track = document.querySelector('.gallery__track');
const leftBtn = document.querySelector('.gallery__btn.left');
const rightBtn = document.querySelector('.gallery__btn.right');

leftBtn.addEventListener('click', () => {
    track.scrollBy({ left: -300, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
    track.scrollBy({ left: 300, behavior: 'smooth' });
});

const modal = document.querySelector('.img__modal');
const modalImg = document.querySelector('.modal__content');
const closeModal = document.querySelector('.close__modal');
const images = document.querySelectorAll('.gallery__track img');

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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });
}, {
    threshold: 0.2
});

const hiddenElements = document.querySelectorAll(".fade-in");

hiddenElements.forEach((el) => observer.observe(el));
