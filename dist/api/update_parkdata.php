<?php
header("Access-Control-Allow-Origin: *");
require_once("../../server/backendAPI/mysql_connect.php");

$importJSON = file_get_contents("https://thedyrt.com/api/v2/campgrounds?filter%5Bsearch%5D%5Bregion%5D=CA&include=administrative-area%2Coperator%2Crecent-reviewers&modelPath=controller.model.featuredCampgrounds&page%5Bnumber%5D=1&page%5Bsize%5D=200");
$parkList = json_decode($importJSON, true);
ini_set("max_execution_time", 0);

$output =[
    'success'=> false,
    'error'  => []
];

foreach($parkList["data"] as $key ){

    $parkID = $key['id'];
    $parkName = $key["attributes"]["name"];
    $parkName = checkInputData($parkName);
   
    $parkDesc = $key["attributes"]["description"];
    $parkDesc = checkInputData($parkDesc);
 
    $parkImgUrl = $key["attributes"]["photo-url"];
    $parkImgUrl = checkInputData($parkImgUrl);

    $query = "UPDATE `park_info` SET `img_url` = '$parkImgUrl', `park_desc` = '$parkDesc'  
               WHERE `park_id` = $parkID";

    $result = mysqli_query($conn, $query);

    print_r ($conn);

    if (empty($result)) {
        $output['errors'][] = 'database error - apitosql';
        
    } else {

        print_r (mysqli_affected_rows($conn));
        if (mysqli_affected_rows($conn) > 0 ) {
            $output['success'] = true;  
            print 'success'.$output;
        } else {
            $output['errors'][] = $query;
            print 'error'.$output;
        };
    };
    $query = '';
}; 

function checkInputData($InputData){
    if( isset($InputData)){
        $string = $InputData;
        $pattern = '/[\\n\']/';
        $replacement = ' ';
        $string = preg_replace($pattern, $replacement, $string);
    }else{
        $string ='';
    }  
    return $string;
}


?>
