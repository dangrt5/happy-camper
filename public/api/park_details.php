<?php

$output =[
    'success'=> false,
    'error'  => []
];    
$id = $_GET['id'];
$detail = $_GET['detail'];
$jsonoutput = [];

require_once("mysql_connect.php");

switch($detail){
    case 1://park detail
        $query = "SELECT id, park_name,addr,phone, lat, lng, park_desc, direction_info, regulation_info,park_website
            FROM park_info   WHERE ID = '$id'";
        $outdata = execute($conn, $query );     
        break;
    case 2:
        //park image
        $query = "SELECT   PARK_IMG_URL  FROM  `park_image`  
                    LEFT JOIN `park_info` ON `park_info`.`ID` = `park_image`.`park_ID`
                    WHERE `park_info`.`ID` = '$id' ";
        $outdata = execute($conn, $query );
        break;    
    case 3: 
        // park amenity
        $query = "SELECT park_amenity.AMENITY_TYPE, park_amenity.DETAIL    FROM `park_info`
                    JOIN `park_amenity` ON `park_amenity`.`PARK_ID` = `park_info`.`ID`
                    WHERE `park_info`.`ID` = '$id'";
        $outdata = execute($conn, $query );
        break;
    
    case 4:
        // camp site
        $query = "SELECT park_camp.CAMPSITE_TYPE, park_camp.CAMP_DETAIL 
                    FROM `park_info`
                    JOIN `park_camp` ON `park_camp`.`PARK_ID` = `park_info`.`ID`
                    WHERE park_info.ID = '$id'";
        $outdata = execute($conn, $query );
        break;    
} 
print_r($outdata);


function execute($conn, $query ){

    $result = mysqli_query($conn, $query);
    $output =[
        'success'=> false,
        'error'  => []
    ];    
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
   
    mysqli_close($conn);
    return json_encode($utf8_chars_string);
}

?>