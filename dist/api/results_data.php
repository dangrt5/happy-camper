<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
require_once("../../server/backendAPI/mysql_connect.php");

$output =[
    'success'=> false,
];

$lat = $_GET['lat'];
$lng = $_GET['lng'];
// set search radius 50 mile
$radius = 50;

$query = "SELECT id, park_name, addr, lat, lng, img_url, phone, direction_info, park_website, 
                 SQRT( POW(69.1 * (lat - $lat), 2) + POW(69.1 * ($lng - lng) * COS(lat / 57.3), 2)) AS distance 
          FROM park_info HAVING distance < '$radius' order by park_name";

$result = mysqli_query($conn, $query);

if($result){
    if(mysqli_num_rows($result)> 0){
        $output['success'] = true;
        $output['data']=[];
        while($row = mysqli_fetch_assoc($result)){
            $output['data'][] = $row;
        }
    }else{
        $output['error'][] = 'No data available';
    }
}else{
    $output['error'][] = 'Error with query';
}

print (json_encode($output));
?>
