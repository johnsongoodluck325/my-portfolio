document.addEventListener("DOMContentLoaded", function () {

  const darkBtn = document.getElementById("darkModeToggle");

  if (darkBtn) {

    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
    }

    darkBtn.addEventListener("click", function () {

      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
      } else {
        localStorage.setItem("darkMode", "disabled");
      }

    });

  }


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

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (!email.match(emailPattern)) {
        error.textContent = "Please enter a valid email address.";
        return;
      }

      error.style.color = "green";
      error.textContent = "Message sent successfully!";

      form.reset();

    });

  }


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