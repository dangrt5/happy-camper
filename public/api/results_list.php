<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');

$_POST = json_decode(file_get_contents("php://input"), true);
print_r($_POST);

require_once("mysql_connect.php");
// $blah = require_once("results_data1.json");

//////////////////////////

// require_once("mysql_connect.php");
// $handler = curl_init();
// curl_setopt($handler, CURLOPT_URL, "https://thedyrt.com/api/v2/campgrounds?filter%5Bsearch%5D%5Bregion%5D=CA&include=administrative-area%2Coperator%2Crecent-reviewers&modelPath=controller.model.featuredCampgrounds&page%5Bnumber%5D=1&page%5Bsize%5D=200");
// curl_setopt($handler, CURLOPT_SSL_VERIFYPEER, false);
// curl_setopt($handler, CURLOPT_FOLLOWLOCATION, true);
// curl_setopt($handler, CURLOPT_RETURNTRANSFER, 1);
// $importJSON = file_get_contents('https://thedyrt.com/api/v2/campgrounds?filter%5Bsearch%5D%5Bregion%5D=CA&include=administrative-area%2Coperator%2Crecent-reviewers&modelPath=controller.model.featuredCampgrounds&page%5Bnumber%5D=1&page%5Bsize%5D=200');
// $parkList = json_decode($importJSON, true);
// // curl_setopt($handler, CURLOPT_TIMEOUT_MS, 1);
// // curl_setopt($handler, CURLOPT_NOSIGNAL, true);
// // curl_close($handler);
// // print($importJSON);


// // print_r($parkList["data"][0]["id"]);
// // print('<br>');
// // print_r($parkList["data"][1]["id"]);
// // print('<br>');
// // print_r($parkList["data"][2]["id"]);
// // print('<br>');
// // print_r($parkList["data"][3]["id"]);
// // print('<br>');
// // print_r($parkList["data"][4]["id"]);
// // print('<br>');
// // print_r($parkList);

// // $jsonresult = curl_exec($handler);
// // $parks = $parkList->parks;
// // foreach($parkList as $item){

// $maxCount = count($parkList["data"]);
//     // $maxCount = $maxCount > 40 ? 40 : $maxCount;
// for ($parkCount=0; $parkCount < $maxCount; $parkCount++) {
    
//    $parkID = $parkList["data"][$parkCount]["id"];
// //    print("$parkCount:  $parkID");
// //    print('<br>');
// }; 


// $a = json_decode($_GET);
// print_r('is this it?: '.$_GET);
// $city = $_GET['city'];
$lat = $_POST['lat'];
$lng = $_POST['lng'];

// var_dump ($_POST);

$radius = 40;

// if( $city !== '' ){
//     $query = "SELECT id, park_name, addr, lat, lng, phone, park_desc,
//                  weather_overview, direction_info, regulation_info, park_website
//             FROM park_info WHERE city = '$city' order by park_name";
//             echo ('if query');//testing if this is running; delete later

// }else{
    echo('else query');//testing if this is running; delete later
    $query = "SELECT id, park_name, addr, lat, lng, phone,direction_info, regulation_info, park_website, SQRT( POW(69.1 * (lat - $lat), 2) + POW(69.1 * ($lng - lng) * COS(lat / 57.3), 2)) AS distance FROM park_info HAVING distance < '$radius' order by park_name";
// }
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
