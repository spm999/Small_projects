<?php
session_start();
$thankYouMessage = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $thankYouMessage = "Thank you for your message, $name!";
  echo json_encode(array("thankYouMessage" => $thankYouMessage));
  exit(); // Terminate the PHP script after sending the JSON response
  
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<title>Unique Watch</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>
  <header>
    <h1>Unique Watch</h1>
    <p>Welcome to our amazing product!</p>
  </header>
  <class="container">
    <h2>Our Watches</h2>
    <div class="product-list">
      <div class="product" style="display: block; margin-left: auto; margin-right: auto; ">
        <img src="img1.jpeg" alt="Watch 1" style="width:500px; height:500px;">
        <h3>Watch Model 1</h3>
        <p>Stylish and elegant watch for every occasion.</p>
      </div>
    </div>
    <div class="product-list">
      <div class="product" style="display: block; margin-left: auto; margin-right: auto; ">
        <img src="img2.jpg" alt="Watch 2" style="width:500px; height:500px;">
        <h3>Watch Model 2</h3>
        <p>Sleek and modern design, perfect for any outfit.</p>
      </div>
    </div>
    <h2>Testimonials</h2>
    <div class="testimonial">
        <img src="img3.jpg" alt="Testimonial Person">
        <blockquote>"I love my new watch! It's both functional and stylish."</blockquote>
        <p>- John Doe</p>
      </div>
      
  </div>
  <footer>
  <div class="footer-content">
    <div class="footer-section">
      <a href="#popup" class="contact-us">Contact Us</a>
    </div>
    
    <div class="footer-section">
      <h3>Help</h3>
      <ul>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Shipping & Returns</a></li>
      </ul>
    </div>
    
    <div class="footer-section">
      <h3>Follow Us</h3>
      <div class="social-icons">
        <a href="https://www.facebook.com/suryaprakash.maurya.56808" class="fa fa-facebook" target="_blank"></a>
        <a href="https://twitter.com/suryap_999_1" class="fa fa-twitter" target="_blank"></a>
        <a href="https://www.instagram.com/spmhot.99/"class="fa fa-instagram"target="_blank" ></a>
      </div>
    </div>
  </div>
  
  <div class="copyright">
    <p>&copy; 2023 Surya. All rights reserved.</p>
  </div>
</footer>

  <div id="popup" class="popup">
    <div class="popup-content">
      
      <h2>Contact Us</h2>

      <div id="thankYouMessage" class="thank-you-message"><?php echo $thankYouMessage; ?></div>

      <form id="contact-form" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <button type="submit" name="submit">Send Message</button>
      </form>
    </div>
  </div>
  <script>
  document.addEventListener("DOMContentLoaded", function () {
    // Get the form and thank you message elements
    const contactForm = document.getElementById("contact-form");
    const thankYouMessage = document.getElementById("thankYouMessage");

    // Attach an event listener to the form submission
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Send the form data using AJAX
      const formData = new FormData(contactForm);
      fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
      })
        .then(response => response.json()) // Assuming the server responds with JSON
        .then(data => {
          // Update the thank you message
          thankYouMessage.textContent = data.thankYouMessage;
          // Set a timeout to hide the thank you message after 7 seconds
          setTimeout(() => {
            thankYouMessage.style.display = "none";
          }, 7000); 
          // 7 seconds in milliseconds
          // Clear the form inputs
          contactForm.reset();
        })
        .catch(error => {
          console.error("Error submitting form:", error);
        });
    });
  });
</script>
<script src="script.js"></script>
</body>
</html>