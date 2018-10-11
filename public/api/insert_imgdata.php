<?php
header("Access-Control-Allow-Origin: *");
require_once("mysql_connect.php");

$parkHandler = curl_init();
curl_setopt($parkHandler, CURLOPT_URL, "https://thedyrt.com/api/v2/campgrounds?filter%5Bsearch%5D%5Bregion%5D=CA&include=administrative-area%2Coperator%2Crecent-reviewers&modelPath=controller.model.featuredCampgrounds&page%5Bnumber%5D=1&page%5Bsize%5D=200");
curl_setopt($parkHandler, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($parkHandler, CURLOPT_RETURNTRANSFER, 1);
// curl_setopt($parkHandler, CURLOPT_FOLLOWLOCATION, true);
// $importPark = file_get_contents('https://thedyrt.com/api/v2/campgrounds?filter%5Bsearch%5D%5Bregion%5D=CA&include=administrative-area%2Coperator%2Crecent-reviewers&modelPath=controller.model.featuredCampgrounds&page%5Bnumber%5D=1&page%5Bsize%5D=200');
$importPark = curl_exec($parkHandler);
$parkList = json_decode($importPark, - true);
curl_close($parkHandler);

ini_set("max_execution_time", 0);

foreach($parkList["data"] as $key ){
 
    $parkID = $key['id'];
    $selectQuery = "SELECT `id` FROM `park_info` WHERE `park_id` = $parkID";
    $result = mysqli_query($conn, $selectQuery);
    $keyID = mysqli_fetch_assoc($result);

    $photoHandler = curl_init();
    curl_setopt($photoHandler, CURLOPT_URL, "https://thedyrt.com/api/v2/campgrounds/{$parkID}/photos");
    curl_setopt($photoHandler, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($photoHandler, CURLOPT_RETURNTRANSFER, 1);

    // curl_setopt($photoHandler, CURLOPT_FOLLOWLOCATION, true);
    // $importPhoto = file_get_contents("https://thedyrt.com/api/v2/campgrounds/{$parkID}/photos");
    $importPhoto = curl_exec($photoHandler);
    $photoList = json_decode($importPhoto, - true);
    curl_close($photoHandler);

    $count = 0;
    
    foreach($photoList["data"] as $item ){
        
        if($count == 7){
            break;
        }
        $userID = $item['id'];
        $photoUrl = $item["attributes"]["photo-url"];

        $insertQuery = "INSERT INTO `park_image`(`ID`, `PARK_ID` ,`PARK_IMG_URL` ) 
                        VALUES ( default, $keyID[id],'$photoUrl')";
        // print_r($insertQuery);
        $insertResult = mysqli_query($conn, $insertQuery); 
        $insertQuery = '';    
        $count++;
    }
   
}   
print('done');
?>