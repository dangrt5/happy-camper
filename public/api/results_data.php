<?php


$output =[
    'success'=> false,
    'error'  => []
];
$city = $_POST['city'];
$lat = $_POST['lat'];
$lng = $_POST['lng'];
$radius = 100;

require_once("mysql_connect.php");

if( $city !== '' ){
    $query = "SELECT id, park_name, addr , phone ,main_url , park_desc ,
                 weather_overview, direction_info  , regulation_info , park_website
            FROM park_info WHERE city = '$city'   order by park_name";

}else{
    $query = "SELECT id, park_name, addr , phone ,main_url , park_desc , 
                 weather_overview, direction_info  , regulation_info , park_website,
                 SQRT( POW(69.1 * (lat - {$lat}), 2) + POW(69.1 * ({$lng} - lng) * COS(lat / 57.3), 2)) AS distance
            FROM park_info  HAVING distance < '$radius'  order by park_name";
}
// print_r($query);
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
$utf8_chars_string = mb_convert_encoding($output, 'UTF-8', 'UTF-8');


print_r(json_encode($utf8_chars_string));
?>