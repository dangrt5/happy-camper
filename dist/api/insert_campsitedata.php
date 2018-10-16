<?php

$importJSON = file_get_contents('parkdata_dyrt.json');
$parkList = json_decode($importJSON, true);
require_once("../../server/backendAPI/mysql_connect.php");

ini_set("max_execution_time", 0);
$hashMap = array();

foreach($parkList["data"] as $item ){
    
    $parkID = $item['id'];
    $selectQuery = "SELECT `id` FROM `park_info` WHERE `park_id` = $parkID";
    $result = mysqli_query($conn, $selectQuery);
    $keyID = mysqli_fetch_assoc($result);
   
    $hashMap["access-boat"] = $item["attributes"]["access-boat"];
    $hashMap["access-drive"] = $item["attributes"]["access-drive"];
    $hashMap["access-hike"] = $item["attributes"]["access-hike"];
    $hashMap["access-walk"] = $item["attributes"]["access-walk"];
    $hashMap["accommodation-cabin"] = $item["attributes"]["accommodation-cabin"];
    $hashMap["accommodation-dispersed"] = $item["attributes"]["accommodation-dispersed"];
    $hashMap["accommodation-group"] = $item["attributes"]["accommodation-group"];
    $hashMap["accommodation-rv"] = $item["attributes"]["accommodation-rv"];
    $hashMap["accommodation-tent"] = $item["attributes"]["accommodation-tent"];
    $hashMap["accommodation-horse"] = $item["attributes"]["accommodation-horse"];
    $hashMap["accommodation-yurt"] = $item["attributes"]["accommodation-yurt"];
   
    foreach ($hashMap as $key => $value) { 
        $value = checkInputData($value);
        $insertQuery= "INSERT INTO `park_camp`(`ID`, `PARK_ID`, `CAMPSITE_TYPE`, `CAMP_DETAIL`) 
                        VALUES (default, $keyID[id], '$key', '$value' )";
        $resultCamp = mysqli_query($conn, $insertQuery); 
        $insertID = mysqli_insert_id($conn);    
        $insertQuery = '';    
    }
    $selectQuery = '';
}; 

function checkInputData($InputData){
    if( !isset($InputData)){
        $string = 'FALSE';
    }else if($InputData == 0 ){
        $string = 'FALSE';
    }
    else{
        $string = 'TRUE';
    }  
    return $string;
}
?>