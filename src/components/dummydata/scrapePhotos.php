<?php
$check = file_get_contents('campinfo.txt');

$match = [];

preg_match_all('/<img.*src="(.*)" class.*>/', $check, $match);

print_r($match[1]);


?>

<!-- Array
(
    [0] => https://thedyrt.imgix.net/photo/99827/media/alabama-brushy-lake-campground_7d0227a8449429bf1d5a2497b8702528.jpeg?ixlib=rb-1.1.0&amp;w=
    [1] => https://thedyrt.imgix.net/photo/99818/media/alabama-brushy-lake-campground_43a174c6c0e6156647c88a39d6b019e7.jpeg?ixlib=rb-1.1.0&amp;w=
    [2] => https://thedyrt.imgix.net/photo/71649/media/alabama-brushy-lake-campground_91ffb83bec8a0bba786cd1b9037cec4a.jpeg?ixlib=rb-1.1.0&amp;w=
    [3] => https://thedyrt.imgix.net/photo/52801/photo/alabama-brushy-lake-campground_be7f595f990146f1e40ca518c7390ef5.jpg?ixlib=rb-1.1.0&amp;w=
    [4] => https://thedyrt.imgix.net/photo/52797/photo/alabama-brushy-lake-campground_3ecc14ca2da35717233013470acc332d.jpg?ixlib=rb-1.1.0&amp;w=
    [5] => https://thedyrt.imgix.net/photo/32440/photo/alabama-brushy-lake-campground_08727ae92bef8b3b0d8555252887cadd.jpg?ixlib=rb-1.1.0&amp;w=
    [6] => https://thedyrt.imgix.net/photo/32436/photo/alabama-brushy-lake-campground_3eb16b0ab3f3b8915a0934f0d4eaa505.jpg?ixlib=rb-1.1.0&amp;w=
    [7] => https://thedyrt.imgix.net/photo/32432/photo/alabama-brushy-lake-campground_395d379ac8bdeaef0cc11e6698679499.JPG?ixlib=rb-1.1.0&amp;w=
    [8] => https://thedyrt.imgix.net/photo/99826/media/alabama-brushy-lake-campground_6f885f0b0cca889bc263aadfa4bea481.jpeg?ixlib=rb-1.1.0&amp;w=
    [9] => https://thedyrt.imgix.net/photo/99817/media/alabama-brushy-lake-campground_c3b180bc96c39cd27ca280544b005730.jpeg?ixlib=rb-1.1.0&amp;w=
    [10] => https://thedyrt.imgix.net/photo/52804/photo/alabama-brushy-lake-campground_3fdd3e7d1655a4d92f3d748af94b6d73.jpg?ixlib=rb-1.1.0&amp;w=
    [11] => https://img.youtube.com/vi/8f0NQHFK1_Y/mqdefault.jpg
    [12] => https://img.youtube.com/vi/cboypH2Otwc/mqdefault.jpg
    [13] => https://thedyrt.imgix.net/photo/32439/photo/alabama-brushy-lake-campground_cc9529cbb6658eaed1db7546c27f1900.JPG?ixlib=rb-1.1.0&amp;w=
    [14] => https://thedyrt.imgix.net/photo/32435/photo/alabama-brushy-lake-campground_f2e09f15f403f8a6713c34bbb6ab9795.jpg?ixlib=rb-1.1.0&amp;w=
    [15] => https://thedyrt.imgix.net/photo/32431/photo/alabama-brushy-lake-campground_7a94ae3b9de7dc7f84378030345ad762.JPG?ixlib=rb-1.1.0&amp;w=
    [16] => https://thedyrt.imgix.net/photo/99825/media/alabama-brushy-lake-campground_f8e34f5541b412b8407b4875d254b121.jpeg?ixlib=rb-1.1.0&amp;w=
    [17] => https://img.youtube.com/vi/ZRuNFWsQFNs/mqdefault.jpg
    [18] => https://thedyrt.imgix.net/photo/52803/photo/alabama-brushy-lake-campground_868474eeef1599a5acae43e099aaffee.jpg?ixlib=rb-1.1.0&amp;w=
    [19] => https://thedyrt.imgix.net/photo/52799/photo/alabama-brushy-lake-campground_21af9c56af3dd46ea2516cc2f8b18c5d.jpg?ixlib=rb-1.1.0&amp;w=
    [20] => https://img.youtube.com/vi/Un6xCu8M8yc/mqdefault.jpg
    [21] => https://thedyrt.imgix.net/photo/32438/photo/alabama-brushy-lake-campground_dcad48632da7dc694877cbd571fec991.jpg?ixlib=rb-1.1.0&amp;w=
    [22] => https://thedyrt.imgix.net/photo/32434/photo/alabama-brushy-lake-campground_8dd8153d015b4f6a090c41ec5b313ab0.jpg?ixlib=rb-1.1.0&amp;w=
    [23] => https://thedyrt.imgix.net/photo/32430/photo/alabama-brushy-lake-campground_a167d4df8154a26a82c09a7c1f213ec7.JPG?ixlib=rb-1.1.0&amp;w=
    [24] => https://thedyrt.imgix.net/photo/99824/media/alabama-brushy-lake-campground_b308eafe617f18f87416ba7b7b777ad1.jpeg?ixlib=rb-1.1.0&amp;w=
    [25] => https://thedyrt.imgix.net/photo/71653/media/alabama-brushy-lake-campground_9a09e7fd09eeeb5172cce0f42543f6c4.jpeg?ixlib=rb-1.1.0&amp;w=
    [26] => https://img.youtube.com/vi/tn7LjRrnYz8/mqdefault.jpg
    [27] => https://thedyrt.imgix.net/photo/52798/photo/alabama-brushy-lake-campground_f94c657b6efbfb440aa827b3ce184e6c.jpg?ixlib=rb-1.1.0&amp;w=
    [28] => https://thedyrt.imgix.net/photo/32441/photo/alabama-brushy-lake-campground_c40b031054b26ca036d2a430f6ab0231.jpg?ixlib=rb-1.1.0&amp;w=
    [29] => https://thedyrt.imgix.net/photo/32437/photo/alabama-brushy-lake-campground_b5fa2792b8af4c8cbb0cb66c5ba43587.jpg?ixlib=rb-1.1.0&amp;w=
    [30] => https://thedyrt.imgix.net/photo/32433/photo/alabama-brushy-lake-campground_353b7bc3127dde46de1592e92ed80a66.JPG?ixlib=rb-1.1.0&amp;w=
    [31] => https://thedyrt.imgix.net/photo/32429/photo/alabama-brushy-lake-campground_458b54c6bbc49b402a7c7a2c65bca317.jpg?ixlib=rb-1.1.0&amp;w=
) -->
