<?php

/* https://api.telegram.org/bot6070015133:AAE2MwIVcMF8bv1VevtYQMRu0pCefr4NyDw/getUpdates,
где, 5347896717:AAFZzqTOh8Ik3mQLWSpsZ5FBC2edybqfmtc - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['tell'];
$vid = $_POST['vid'];

$token = "6070015133:AAE2MwIVcMF8bv1VevtYQMRu0pCefr4NyDw";
$chat_id = "-605017734";

$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => "$phone",
  'Форма отправленна с: ' => "$vid",
);

foreach ($arr as $key => $value) {
  $txt .= "<b>" . $key . "</b> " . $value . "%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

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