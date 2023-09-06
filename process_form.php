<?php
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    // You can process and store the form data as needed here.
    echo "<p>Thank you, $name, for your message. We will get in touch with you at $email as soon as possible.</p>";
}
?>
