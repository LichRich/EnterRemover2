<?php
  $trans_txt = $_POST['output'];
  $client_id = "Naver_Client_Id";
  $client_secret = "Naver_Client_Secret";
  $encText = urlencode($trans_txt);
  $postvars = "source=en&target=ko&text=".$encText;
  $url = "https://openapi.naver.com/v1/papago/n2mt";
  $is_post = true;
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_POST, $is_post);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch,CURLOPT_POSTFIELDS, $postvars);
  $headers = array();
  $headers[] = "X-Naver-Client-Id: ".$client_id;
  $headers[] = "X-Naver-Client-Secret: ".$client_secret;
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
  $response = curl_exec ($ch);
  $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  $deco = json_decode($response, false);
  curl_close ($ch);
  if ($status_code == 200) {
    print_r($deco->message->result->translatedText);
  } else {
    echo "Error:".$response;
  }

 ?>
