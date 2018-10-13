<?php
header("Access-Control-Allow-Origin: *");
require_once("mysql_connect.php");

// $handler = curl_init();
// curl_setopt($handler, CURLOPT_URL, "https://thedyrt.com/api/v2/campgrounds?filter%5Bsearch%5D%5Bregion%5D=CA&include=administrative-area%2Coperator%2Crecent-reviewers&modelPath=controller.model.featuredCampgrounds&page%5Bnumber%5D=1&page%5Bsize%5D=200");
// curl_setopt($handler, CURLOPT_FOLLOWLOCATION, true);
$importJSON = file_get_contents('https://thedyrt.com/api/v2/campgrounds?filter%5Bsearch%5D%5Bregion%5D=CA&include=administrative-area%2Coperator%2Crecent-reviewers&modelPath=controller.model.featuredCampgrounds&page%5Bnumber%5D=1&page%5Bsize%5D=200');
// $importJSON = curl_exec($handler);
$parkList = json_decode($importJSON, - true);
// curl_close($handler);

$output =[
    'success'=> false,
    'error'  => []
];

foreach($parkList["data"] as $key ){
 
    $parkID = $key['id'];
    $parkName = $key["attributes"]["name"];
    $parkName = checkInputData($parkName);

    $parkLat = $key["attributes"]["latitude"];
    $parkLng = $key["attributes"]["longitude"];
    $parkPhone = $key["attributes"]["phone-number"];
    $parkDesc = $key["attributes"]["description"];
    $parkDesc = checkInputData($parkDesc);
    
    $parkWeb = $key["attributes"]["website"];
    $parkWeb = checkInputData($parkWeb);  
    
    $parkDirection = $key["attributes"]["directions"];
    $parkDirection = checkInputData($parkDirection);  
 
    $parkImgUrl = $key["attributes"]["photo-url"];
    $parkImgUrl = checkInputData($parkImgUrl);

    $query = "INSERT INTO `park_info`(`PARK_ID` ,`PARK_NAME`, `LAT`, `LNG`, `ADDR`, `PHONE`, `IMG_URL`, `PARK_DESC`,`DIRECTION_INFO`,`PARK_WEBSITE` ) 
    VALUES                           ('$parkID','$parkName','$parkLat','$parkLng','' ,'$parkPhone','$parkImgUrl',  '$parkDesc',  '$parkDirection',  '$parkWeb'  )";

    $result = mysqli_query($conn, $query);

    if (empty($result)) {
        $output['errors'][] = 'database error - apitosql';
        
    } else {
        if (mysqli_affected_rows($conn) > 0 ) {
            $output['success'] = true;  
        } else {
            $output['errors'][] = $query;
        };
    }; 
    $query = '';
}; 

function checkInputData($InputData){
    if( isset($InputData)){
        $string = $InputData;
        $pattern = '/[\\n\']/';
        $replacement = '';
        $string = preg_replace($pattern, $replacement, $string);
    }else{
        $string ='';
    }  
    return $string;
}


?>
