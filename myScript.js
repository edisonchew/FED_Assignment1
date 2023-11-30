//All these codes from line 1 to 33 is for the slide show
let slideIndex = 1;
showSlides(slideIndex);

// To control the changing of the slides
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

window.onload = function () {
    showSlides(slideIndex);
}


//These code will be for the entering of email
function validateEmail() {
  var emailInput = document.getElementById('emailInput');
  var email = emailInput.value;

  // Simple email validation using a regular expression
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
      alert('Email entered successfully: ' + email);
      // You can add additional actions here, e.g., sending the email
  } else {
      // Custom error message for invalid email format
      emailInput.setCustomValidity('Please enter a valid email');
      emailInput.reportValidity();
  }
}