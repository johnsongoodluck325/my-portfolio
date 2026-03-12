document.addEventListener("DOMContentLoaded", function () {

  /* PROJECT SHOW / HIDE BUTTON */

  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach(function(button) {

    button.addEventListener("click", function() {

      const details = button.nextElementSibling;

      if (!details) return;

      details.classList.toggle("visible");

      if (details.classList.contains("visible")) {
        button.textContent = "Hide Details";
      } else {
        button.textContent = "Show Details";
      }

    });

  });


  /* CONTACT FORM VALIDATION */

  const form = document.getElementById("contactForm");
  const error = document.getElementById("error");

  if (form) {

    form.addEventListener("submit", function(event) {

      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      error.style.color = "red";
      error.textContent = "";

      if (name === "" || email === "" || message === "") {

        error.textContent = "Please fill out all fields.";
        return;

      }

      error.style.color = "green";
      error.textContent = "Message sent successfully!";

      form.reset();

    });

  }


  /* TYPED.JS ANIMATION */

  const typingElement = document.getElementById("typing");

  if (typingElement) {

    new Typed("#typing", {
      strings: [
        "Web Development Student",
        "Learning JavaScript",
        "Building Interactive Websites"
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true
    });

  }

});