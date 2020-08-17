<?php

require_once ('vendor/autoload.php');
use \Statickidz\GoogleTranslate;

$source = 'en';
$target = 'ko';
$text = $_POST['output'];

$trans = new GoogleTranslate();
$result = $trans->translate($source, $target, $text);

echo $result;

?>
