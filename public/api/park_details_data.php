<?php


$output =[
    'success'=> false,
    'error'  => []
];    
$id = $_POST['id'];
$detail = $_POST['detail'];
$jsonoutput = [];

require_once("mysql_connect.php");

switch($detail){
    case 1://park detail
        $query = "SELECT id, park_name,addr,phone,main_url, park_desc, weather_overview, direction_info, regulation_info,park_website
        FROM park_info   WHERE ID = '$id'";
        $num = 1;
        $outdata = execute($conn, $query , $num);     
        break;
    case 2:
        //park image
        $query = "SELECT   PARK_IMG_URL  FROM  `park_image`  
            LEFT JOIN `park_info` ON `park_info`.`ID` = `park_image`.`park_ID`
            WHERE `park_info`.`ID` = '$id' ";
        $num = 2;
        $outdata = execute($conn, $query , $num );
        break;    
    case 3: 
        // park amenity
        $query = "SELECT amenities.AMENITY_TYPE as amenities , park_amenity.DETAIL as detail   FROM `park_info`
            JOIN `park_amenity` ON `park_amenity`.`PARK_ID` = `park_info`.`ID`
            JOIN `amenities` ON `park_amenity`.`AMENITY_ID` = `amenities`.`ID`
            WHERE `park_info`.`ID` = '$id'";
        $num = 3; 
        $outdata = execute($conn, $query , $num );
        
        break;
    case 4:
            // camp site
            $query = "SELECT campsite.DISPLAY_NAME , park_camp.CAMP_DETAIL 
            FROM `park_info`
            JOIN `park_camp` ON `park_camp`.`PARK_ID` = `park_info`.`ID`
            JOIN `campsite`  ON `park_camp`.`CAMPSITE_ID`= campsite.ID
            WHERE park_info.ID = '$id'";
        $num = 4; 
        $outdata = execute($conn, $query , $num );
        break;    
} 

print_r($outdata);


function execute($conn, $query , $num ){
    // print($query);
   
    $result = mysqli_query($conn, $query);
    $output =[
        'success'=> false,
        // 'data' => [],
        'error'  => []
    ];    
    if($result){
        if(mysqli_num_rows($result)> 0){
            
            $output['success'] = true;
            
            $output['data']=[];
            while($row = mysqli_fetch_assoc($result)){
                // if ($num ==1 ){
                    
                //     $output['data']['amenities'] =[
                //         $row['amenities'] => $row['amenities'],
                //         $row['detail'] => $row['detail']
                //     ]; 
                // }else{
                    $output['data'][] = $row;
                // }   
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