<?php
header("Access-Control-Allow-Origin: *");
require_once('../../server/backendAPI/googlemap_api.php');
require_once("../../server/backendAPI/mysql_connect.php");

ini_set("max_execution_time", 0);

$queryexist = "SELECT park_id, lat, lng  FROM `park_info` ";
$result = mysqli_query($conn, $queryexist);

if($result){
    if(mysqli_num_rows($result)>0){
        while($row = mysqli_fetch_assoc($result)) {
            $parkID = $row['park_id'];
            $parklat = $row["lat"];
            $parklng = $row["lng"];
            $importAddr = file_get_contents("https://maps.googleapis.com/maps/api/geocode/json?latlng=$parklat,$parklng&key=$geoKey");
            $addrList = json_decode($importAddr, true);
            $count = 0; 
            foreach($addrList["results"] as $addrComponent ){ 
                //get only first formatted_address
                if ($count > 0){
                    break;
                }
                $parkAddr = $addrComponent["formatted_address"];
                $parkAddr = formatAddr($parkAddr);
                       
                $query = "UPDATE `park_info` SET `addr` = '$parkAddr' WHERE `park_id` = $parkID";
        
                $updateResult = mysqli_query($conn, $query);
                        
                if (empty($updateResult)) {
                    $output = 'database error - apitosql';
                } else {
                    if (mysqli_affected_rows($conn) > 0 ) {
                        // $output = true;  
                    } else {
                        // $output = $query;
                    };
                };
                $query = '';
                $count++;
            }
        }
    }else{
        $output = 'No park data';
    }
}

echo "done" ;

function formatAddr($InputData){
    if( isset($InputData)){
         $string = str_replace(', USA', ' ' , $InputData);
        //  echo  'parkAddr',$string;
    }else{
        $string ='';
    }  
    return $string;
}

?>