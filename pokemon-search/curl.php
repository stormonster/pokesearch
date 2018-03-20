<?php

$baseURL = 'http://pokeapi.co/api/v2/pokemon/';
$url = $baseURL.$_POST['pokemon'];

echo $url.'<br>';

function apiRequest($url){
    $ch = curl_init();
    $timeout = 50;
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
    $data = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    if ($http_code != 200) {
        return json_encode('An error has occured (code: '.$http_code.').');
    }
    return json_decode($data);
}

echo apiRequest($url);
