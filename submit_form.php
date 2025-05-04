<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $property = htmlspecialchars($_POST["property"]);

    $msg = "New Viewing Request:\nName: $name\nEmail: $email\nPhone: $phone\nProperty: $property";
    file_put_contents("viewing_requests.txt", $msg . "\n---\n", FILE_APPEND);

    echo "Thank you, $name. Your request has been received!";
}
?>