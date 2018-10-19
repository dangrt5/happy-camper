<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
require_once("../../server/backendAPI/mysql_connect.php");

$output =[ ];
$parkArray = array();
$imgArray = array();
$id = $_GET['itemId'];

for( $type =1; $type <= 4 ; $type++){
    
    if($type == 1 ){
        // select park detail info
        $query = "SELECT id, park_name,addr,phone, lat, lng, park_desc, direction_info, park_website
                FROM park_info   WHERE ID = '$id'";
        $result = mysqli_query($conn, $query);

        if($result){
            $output['success'] = true;
            if(mysqli_num_rows($result)> 0){
                $i=0;
                while($row = mysqli_fetch_assoc($result)){
                    $parkArray[$i] =[$row];
                    $output['data']['parkinfo'] = $parkArray[$i];
                    $i++;
                }
            }
        }else{
            $output['success'] = false;
        }

    }else if($type == 2){
        // select park amenites
        $query = "SELECT park_amenity.AMENITY_TYPE, park_amenity.DETAIL    FROM `park_info`
                JOIN `park_amenity` ON `park_amenity`.`PARK_ID` = `park_info`.`ID`
                WHERE `park_info`.`ID` = $id";
        $result = mysqli_query($conn, $query);

        if($result){
            if(mysqli_num_rows($result)> 0){
                while($row = mysqli_fetch_assoc($result)){
                    $output['data']['amenites'][$row['AMENITY_TYPE']] = $row['DETAIL'];
                }

            }
        }

    } else if($type == 3){
        // seelct park campsite info
        $query = "SELECT park_camp.CAMPSITE_TYPE, park_camp.CAMP_DETAIL
                FROM `park_info`
                JOIN `park_camp` ON `park_camp`.`PARK_ID` = `park_info`.`ID`
                WHERE `park_info`.`ID` = $id";
        $result = mysqli_query($conn, $query);

        if($result){
            if(mysqli_num_rows($result)> 0){
                while($row = mysqli_fetch_assoc($result)){
                    $output['data']['campsite'][$row['CAMPSITE_TYPE']] = $row['CAMP_DETAIL'];
                }

            }
        }
    }else{
        // select park img
        $query = "SELECT   PARK_IMG_URL  FROM  `park_image`
                    LEFT JOIN `park_info` ON `park_info`.`ID` = `park_image`.`park_ID`
                    WHERE `park_info`.`ID` = $id";
         $result = mysqli_query($conn, $query);
         if($result){
            if(mysqli_num_rows($result)> 0){
                $k=1;
                while($row = mysqli_fetch_assoc($result)){
                    $output['data']['park_img']['park_img_'.$k] = $row['PARK_IMG_URL'];
                     $k++;
                }
            }
        }

    }

}

print(json_encode($output));
mysqli_close($conn);
?>
