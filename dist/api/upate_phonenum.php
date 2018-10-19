<?php

require_once("../../server/backendAPI/mysql_connect.php");
ini_set("max_execution_time", 0);

$selectQuery = "SELECT id, phone, park_name FROM `park_info`";
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
    $parkName  = $parkArray[$i]['park_name'];
    $parkName =  changeToCamelcase($parkName);
    $updatequery = "UPDATE `park_info` SET `phone` = '$phone' , `park_name` = '$parkName' WHERE `ID` = '$ID'";
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


function changeToCamelcase($inputData){
    
    $name_array = preg_split('/\s{1,}/', $inputData);
    $lower_name_array = array_map( 'strtolower', $name_array);
    
    $strParkName="";
    for($i=0; $i < count($lower_name_array) ; $i++){
        // Convert the first character is uppercase 
        $ucLetter = ucfirst( $lower_name_array[$i] );
        $strParkName = $strParkName." ".$ucLetter;  
    }    
    return $strParkName;

}

?>