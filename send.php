<?php

use PHPMailer\PHPMailer\PHPMailer;

$mail = new PHPMailer();

// Настройка SMTP
$mail->isSMTP();
$mail->Host = 'smtp.advokatkucherov.ru';
$mail->SMTPAuth = true;
$mail->Username = 'info@advokatkucherov.ru';
$mail->Password = 'Y4q1d2g54';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
$mail->Port = 465;
$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

// ... existing code ... 