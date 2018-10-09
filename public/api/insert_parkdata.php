<?php
$output =[
    'success'=> false,
    'error'  => []
];
 require_once("mysql_connect.php");
$importJSON = file_get_contents('parkdata_dyrt.json');
$parkList = json_decode($importJSON, true);
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


    $query = "INSERT INTO `park_info`(  `PARK_ID` ,`PARK_NAME`, `LAT`,    `LNG`,  `ADDR`, `PHONE`,  `IMG_URL`,   `PARK_DESC`,  `DIRECTION_INFO`,  `PARK_WEBSITE` ) 
    VALUES                             ('$parkID','$parkName','$parkLat','$parkLng','' ,'$parkPhone','$parkImgUrl',  '$parkDesc',  '$parkDirection',  '$parkWeb'  )";

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

print('done');
// curl_close($handler);
?>