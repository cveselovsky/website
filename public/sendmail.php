<?php
$to = 'croy37@gmail.com';
$subject = 'Hello from XAMPP!';
$message = 'This is a test';
$headers = "From: your@email-address.com\r\n";
if (mail($to, $subject, $message, $headers)) {
 echo "SUCCESS";
} else {
 echo "ERROR";
}
