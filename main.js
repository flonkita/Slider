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

let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

enableBurgerMenu();
