<?php
header("Access-Control-Allow-Origin: *");
// require_once("mysql_connect.php");
// $blah = require_once("results_data1.json");

// $output =
//         [
//             'success'=> false,
//             'error'  => []
//         ];


// $data 
// $city = $_GET['city'];
// print_r ($city);
// // $city = 

// if( $city ){
//     $query = "SELECT id, park_name, addr , phone ,main_url , park_desc ,
//                  weather_overview, direction_info  , regulation_info , park_website
//             FROM park_info WHERE city = '$city'   order by park_name";

// }else{
//     $query = "SELECT id, park_name, addr , phone ,main_url , park_desc ,
//                     weather_overview, direction_info  , regulation_info , park_website
//     FROM park_info order by park_name";
// }
// // print_r($query);
// $result = mysqli_query($conn, $query);

// if($result){
//     if(mysqli_num_rows($result)> 0){
//         $output['success'] = true;
//         $output['data']=[];
//         while($row = mysqli_fetch_assoc($result)){
//             $output['data'][] = $row;
//         }
//     }else{
//         $output['error'][] = 'No data available';
//     }
// }else{
//     $output['error'][] = 'Error with query';
// }
// $utf8_chars_string = mb_convert_encoding($output, 'UTF-8', 'UTF-8');


// print_r(json_encode($utf8_chars_string));

//////////////////////////

// require_once("mysql_connect.php");
$handler = curl_init();
curl_setopt($handler, CURLOPT_URL, "https://thedyrt.com/api/v2/campgrounds?filter%5Bsearch%5D%5Bregion%5D=CA&include=administrative-area%2Coperator%2Crecent-reviewers&modelPath=controller.model.featuredCampgrounds&page%5Bnumber%5D=1&page%5Bsize%5D=200");
// curl_setopt($handler, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($handler, CURLOPT_FOLLOWLOCATION, true);
// curl_setopt($handler, CURLOPT_RETURNTRANSFER, 1);
$importJSON = file_get_contents('https://thedyrt.com/api/v2/campgrounds?filter%5Bsearch%5D%5Bregion%5D=CA&include=administrative-area%2Coperator%2Crecent-reviewers&modelPath=controller.model.featuredCampgrounds&page%5Bnumber%5D=1&page%5Bsize%5D=200');
$parkList = json_decode($importJSON, true);
curl_setopt($handler, CURLOPT_TIMEOUT_MS, 1);
curl_setopt($handler, CURLOPT_NOSIGNAL, true);
curl_close($handler);
// print($importJSON);


// print_r($parkList["data"][0]["id"]);
// print('<br>');
// print_r($parkList["data"][1]["id"]);
// print('<br>');
// print_r($parkList["data"][2]["id"]);
// print('<br>');
// print_r($parkList["data"][3]["id"]);
// print('<br>');
// print_r($parkList["data"][4]["id"]);
// print('<br>');
// print_r($parkList);

// $jsonresult = curl_exec($handler);
// $parks = $parkList->parks;
// foreach($parkList as $item){

    $maxCount = count($parkList["data"]);
    // $maxCount = $maxCount > 40 ? 40 : $maxCount;
for ($parkCount=0; $parkCount < $maxCount; $parkCount++) {
    
   $parkID = $parkList["data"][$parkCount]["id"];
   print("$parkCount:  $parkID");
   print('<br>');
    // $parkName = $parkList["attributes"]->name;
    // $parkRating = $parkList[$parkCount]->attributes->rating;
    // print($parkName);
    // print($parkRating);
    // $parkLat = $parks[$parkCount]->latitude;
    // $parkLng = $parks[$parkCount]->longitude;
    // $parkPitch = $parks[$parkCount]->pitches;
    // $parkState = $parks[$parkCount]->location[0];
    // $parkRegion = $parks[$parkCount]->location[1];
    // $parkPark = $parks[$parkCount]->location[2];
    // $parkMountain = $parks[$parkCount]->location[3];
    // $parkImage = $parks[$parkCount]->imgMedium;
    // $parkLongitude = $parks[$parkCount]->longitude;
    // $parkLatitude = $parks[$parkCount]->latitude;
    // $parkURL = $parks[$parkCount]->url;
    // if (!isset($parkMountain)) {
    //     continue;
    // };
    // $query = "INSERT INTO `peaky`.`parks` (`id`, `locationID`, `name`, `type`, `difficulty`, `stars`, `star_votes`, `pitches`, `location_state`, `location_region`, `location_park`, `location_mountain`, `image`, `longitude`, `latitude`, `parkURL`, `hasdescription`) VALUES ('$parkID', '0', '$parkName', '$parkType', '$parkDifficulty', '$parkStars', '$parkStarVotes', '$parkPitch', '$parkState', '$parkRegion', '$parkPark', '$parkMountain', '$parkImage', '$parkLongitude', '$parkLatitude', '$parkURL', 0)";
    // $result = mysqli_query($conn, $query);
    // if (empty($result)) {
    //     $output['errors'][] = 'database error - apitosql';
    // } else {
    //     if (mysqli_affected_rows($conn) > 0 ) {
    //         if ($parkCount === count($parks)-1) {
    //             include_once "createlocations.php";
    //         };
    //     } else {
    //         $output['errors'][] = 'no data - apitosql';
    //     };
    // }; 
}; 
// curl_close($handler);
?>