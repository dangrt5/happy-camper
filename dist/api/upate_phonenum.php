<?php

require_once("../../server/backendAPI/mysql_connect.php");
ini_set("max_execution_time", 0);

$selectQuery = "SELECT id, phone FROM `park_info`";
$result = mysqli_query($conn, $selectQuery);

if ( mysqli_num_rows($result) > 0 ) {
    while ( $row = mysqli_fetch_assoc($result) ) {
        $parkArray[] = $row;
    }
};

for ($i=0; $i < count($parkArray); ++$i) {
    $ID = $parkArray[$i]['id'];
    $phoneString  = $parkArray[$i]['phone'];
    $phone = checkPhoneNumber($phoneString);
    $updatequery = "UPDATE `park_info` SET `phone` = '$phone' WHERE `ID` = '$ID'";
    $descripresult = mysqli_query($conn, $updatequery);
    $updatequery = '';
}; 

function checkPhoneNumber($phoneString){
    $phoneString= preg_replace('/[^\w\s]/', '', $phoneString); 
    $len = strlen($phoneString);
    if($len > 6 ){
        $resultphone = substr($phoneString,0,3)."-".substr($phoneString,3,3)."-".substr($phoneString,6,4); 
        return $resultphone;
    }else{
        return $phoneString;
    }
}

?>