function enableBurgerMenu() {
  const trigger = document.querySelector(".burger");
  const navigation = document.querySelector("#header-nav");

  if (null === trigger || null === navigation) {
    return;
  }

  trigger.addEventListener("click", () => {
    if (window.innerWidth < 720) {
      navigation.classList.toggle("open");
    }
  });
}
enableBurgerMenu();

document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'inactive');
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.add('inactive');
            }
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    showSlide(slideIndex);
});