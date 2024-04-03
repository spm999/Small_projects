// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get the popup element
    const popup = document.getElementById("popup");
  
    // Show the popup when the "Open Contact Form" link is clicked
    const openPopupLink = document.querySelector("a[href='#popup']");
    openPopupLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      popup.style.display = "block"; // Display the popup
    });
  
    // Close the popup when the user clicks outside of the form
    window.addEventListener("click", function (event) {
      if (event.target === popup) {
        popup.style.display = "none"; // Hide the popup
      }
    });
  });
  