<?php
    // send request 
    $url = 'https://script.google.com/macros/s/AKfycbz1RS1Gu0erTXtCq155GsYOJyl0iGC-oUAMOmA1eBKqYpG3A-HVTVFdlZi4xVDJ-5V-/exec';
    $success_url = 'https://nervous.academy/thank-mbai-you/';

    $name = $_REQUEST['name'];
    $phone = $_REQUEST['phone'];
    $username = $_REQUEST['username'];

    $arr = array('name'=>$name,'phone'=>$phone,'username'=>$username,);
    $data = json_encode($arr);
    
    //$myvars = 'attach_file' . $attach_file,'company_site' . $company_site,'name' . $name,'phone' . $phone,'company_description' . $company_description,'founders_name' . $founders_name;//'myvar1=' . $myvar1 . '&myvar2=' . $myvar2;

    $ch = curl_init( $url );
    curl_setopt( $ch, CURLOPT_POST, 1);
    curl_setopt( $ch, CURLOPT_POSTFIELDS, $arr);
    curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt( $ch, CURLOPT_HEADER, 0);
    curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);

    $response = curl_exec( $ch );
    header('Location: '.$success_url);
    
  
?>
