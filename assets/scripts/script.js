function showSlides(slideshowId) {
  let slideIndex = 0;
  let slides = document
    .getElementById(slideshowId)
    .getElementsByClassName("slide");

  function displaySlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(displaySlides, 3000);
  }

  displaySlides();
}

document.addEventListener("DOMContentLoaded", function () {
  showSlides("slideshow1");
  showSlides("slideshow2");
});
