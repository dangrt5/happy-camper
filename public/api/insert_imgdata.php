<?php
header("Access-Control-Allow-Origin: *");
require_once("mysql_connect.php");

$parkHandler = curl_init();
curl_setopt($parkHandler, CURLOPT_URL, "https://thedyrt.com/api/v2/campgrounds?filter%5Bsearch%5D%5Bregion%5D=CA&include=administrative-area%2Coperator%2Crecent-reviewers&modelPath=controller.model.featuredCampgrounds&page%5Bnumber%5D=1&page%5Bsize%5D=200");
curl_setopt($parkHandler, CURLOPT_FOLLOWLOCATION, true);
$importPark = curl_exec($parkHandler);
// $importJSON = file_get_contents('https://thedyrt.com/api/v2/campgrounds?filter%5Bsearch%5D%5Bregion%5D=CA&include=administrative-area%2Coperator%2Crecent-reviewers&modelPath=controller.model.featuredCampgrounds&page%5Bnumber%5D=1&page%5Bsize%5D=200');
$parkList = json_decode($importPark, - true);
curl_close($parkHandler);

$output =[
    'success'=> false,
    'error'  => []
];

foreach($parkList["data"] as $key ){
 
    $parkID = $key['id'];


}   

?>