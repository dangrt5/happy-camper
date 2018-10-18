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
    
    $hashMap["drinking-water"] = $item["attributes"]["drinking-water"];
    $hashMap["electric-hookups"] = $item["attributes"]["electric-hookups"];
    $hashMap["fires-allowed"] = $item["attributes"]["fires-allowed"];
    $hashMap["firewood"] = $item["attributes"]["firewood"];
    $hashMap["group-sites"] = $item["attributes"]["group-sites"];
    $hashMap["market"] = $item["attributes"]["market"];
    $hashMap["mobile-service"] = $item["attributes"]["mobile-service"];
    $hashMap["pets-allowed"] = $item["attributes"]["pets-allowed"];
    $hashMap["picnic-table"] = $item["attributes"]["picnic-table"];
    $hashMap["reservable"] = $item["attributes"]["reservable"];
    $hashMap["sanitary-dump"] = $item["attributes"]["sanitary-dump"];
    $hashMap["sewer-hookups"] = $item["attributes"]["sewer-hookups"];
    $hashMap["showers"] = $item["attributes"]["showers"];
    $hashMap["toilets"] = $item["attributes"]["toilets"];
    $hashMap["trash"] = $item["attributes"]["trash"];
    $hashMap["water-hookups"] = $item["attributes"]["water-hookups"];
    $hashMap["wifi"] = $item["attributes"]["wifi"];
    foreach ($hashMap as $key => $value) { 
        $value = checkInputData($value);
        $insertQuery= "INSERT INTO `park_amenity`(`ID`, `PARK_ID`, `AMENITY_TYPE`, `DETAIL`) 
                        VALUES (default, $keyID[id], '$key', '$value' )";
        $resultAmenity = mysqli_query($conn, $insertQuery); 
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
