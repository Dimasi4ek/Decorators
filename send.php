<?php

/* https://api.telegram.org/bot5347896717:AAFZzqTOh8Ik3mQLWSpsZ5FBC2edybqfmtc/getUpdates,
где, 5347896717:AAFZzqTOh8Ik3mQLWSpsZ5FBC2edybqfmtc - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];


$token = "";
$chat_id = "-";

$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => "$phone",
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
//   echo "Успешно отправленно";;
// } else {
//   echo "Ошибка";
// }
// header('Location: /index.html#contact');

// if ($sendToTelegram) {

//   echo('<script>alert("Message sent")</script>');

// } else {
//   echo "Error";
// }
?>