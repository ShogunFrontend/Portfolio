// Function to handle the hamburger menu click
function toggleHamburgerMenu() {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const hamburgerWords = document.querySelector(".hamburger-words");

  // Toggle active class on hamburger menu
  hamburgerMenu.classList.toggle("active");

  // Show/hide hamburger words based on hamburger menu active state
  hamburgerWords.style.display = hamburgerMenu.classList.contains("active")
    ? "flex"
    : "none";
}

// Hamburger menu click event
document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    toggleHamburgerMenu(); // Call the toggle function to toggle the hamburger menu
  });

// Smooth scrolling for navigation links
document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const target = event.currentTarget.getAttribute("href");
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      // Close the hamburger menu after clicking a word on small screens
      if (window.innerWidth <= 768) {
        toggleHamburgerMenu();
      }
    }
  });
});

// Function to update the active indicator
function updateIndicator() {
  // Get the height of each section
  const sectionHeight = window.innerHeight;
  const sections = document.querySelectorAll("section");
  const indicators = document.querySelectorAll(".indicator");

  sections.forEach((section, index) => {
    const position = section.getBoundingClientRect();
    const indicator = indicators[index];

    if (
      position.top <= sectionHeight / 2 &&
      position.bottom >= sectionHeight / 2
    ) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

// Call updateIndicator when the page loads and on scroll
window.addEventListener("load", updateIndicator);
window.addEventListener("scroll", updateIndicator);

// Check window width on page load and resize
function checkWindowWidth() {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const hamburgerWords = document.querySelector(".hamburger-words");
  if (window.innerWidth > 768) {
    hamburgerMenu.classList.add("closed"); // Add the "closed" class to make the hamburger unopenable
    hamburgerWords.style.display = "none"; // Hide hamburger words on larger screens
  } else {
    hamburgerMenu.classList.remove("closed"); // Remove the "closed" class to make the hamburger openable
    hamburgerWords.style.display = "none"; // Initially hide hamburger words on smaller screens
  }
}

window.addEventListener("load", checkWindowWidth);
window.addEventListener("resize", checkWindowWidth);

// Close the hamburger menu when the user starts to scroll the page
window.addEventListener("scroll", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  if (window.innerWidth <= 768 && hamburgerMenu.classList.contains("active")) {
    toggleHamburgerMenu();
  }
});
