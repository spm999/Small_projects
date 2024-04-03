<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // After processing, set a session variable to indicate successful submission
  $_SESSION["contact_submission"] = true;

  // Redirect back to the contact form page
  header("Location: index.php#popup");
  exit();
}
?>
