-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 05, 2018 at 10:41 PM
-- Server version: 5.6.34-log
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `happycamp`
--

-- --------------------------------------------------------

--
-- Table structure for table `amenities`
--

CREATE TABLE `amenities` (
  `ID` int(8) NOT NULL,
  `AMENITY_TYPE` varchar(250) COLLATE utf8_bin NOT NULL,
  `DISPLAY_NAME` varchar(250) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `amenities`
--

INSERT INTO `amenities` (`ID`, `AMENITY_TYPE`, `DISPLAY_NAME`) VALUES
(1, 'TRASH_RECYCLE', 'trashRecyclingCollection'),
(2, 'toilet', 'toilets'),
(3, 'internet', 'internetConnectivity');

-- --------------------------------------------------------

--
-- Table structure for table `campsite`
--

CREATE TABLE `campsite` (
  `ID` int(8) NOT NULL,
  `DISPLAY_NAME` varchar(20) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `campsite`
--

INSERT INTO `campsite` (`ID`, `DISPLAY_NAME`) VALUES
(1, 'total site'),
(2, 'tentonly'),
(3, 'other'),
(4, 'horse'),
(5, 'rvonly');

-- --------------------------------------------------------

--
-- Table structure for table `park_amenity`
--

CREATE TABLE `park_amenity` (
  `ID` int(8) NOT NULL,
  `PARK_ID` int(8) NOT NULL,
  `AMENITY_ID` int(8) NOT NULL,
  `DETAIL` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `park_amenity`
--

INSERT INTO `park_amenity` (`ID`, `PARK_ID`, `AMENITY_ID`, `DETAIL`) VALUES
(1, 1, 1, 'Yes - year round'),
(2, 1, 2, 'Flush Toilets - year round'),
(3, 2, 1, 'Yes - year round'),
(4, 2, 2, 'Flush Toilets - year round'),
(5, 3, 1, 'Yes - year round'),
(6, 3, 2, 'lush Toilets - year round'),
(7, 4, 1, 'Yes - year round'),
(8, 4, 3, 'false'),
(9, 5, 1, 'yes - year round'),
(10, 5, 3, 'true');

-- --------------------------------------------------------

--
-- Table structure for table `park_camp`
--

CREATE TABLE `park_camp` (
  `ID` int(8) UNSIGNED NOT NULL,
  `PARK_ID` int(8) NOT NULL,
  `CAMPSITE_ID` int(8) NOT NULL,
  `CAMP_DETAIL` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `park_camp`
--

INSERT INTO `park_camp` (`ID`, `PARK_ID`, `CAMPSITE_ID`, `CAMP_DETAIL`) VALUES
(1, 1, 1, '10'),
(2, 1, 2, '5'),
(3, 1, 3, '5'),
(4, 2, 1, '5'),
(5, 2, 2, '2'),
(6, 3, 1, '6'),
(7, 3, 2, '6'),
(8, 3, 3, '8'),
(9, 4, 1, '7'),
(10, 4, 2, '7'),
(11, 5, 1, '8'),
(12, 5, 2, '8'),
(13, 5, 3, '9'),
(15, 1, 4, '7');

-- --------------------------------------------------------

--
-- Table structure for table `park_image`
--

CREATE TABLE `park_image` (
  `ID` int(8) NOT NULL,
  `PARK_ID` int(8) NOT NULL,
  `PARK_IMG_URL` text CHARACTER SET utf8 COLLATE utf8_bin
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `park_image`
--

INSERT INTO `park_image` (`ID`, `PARK_ID`, `PARK_IMG_URL`) VALUES
(0, 2, 'https://thedyrt.imgix.net/photo/32436/photo/alabama-brushy-lake-campground_3eb16b0ab3f3b8915a0934f0d4eaa505.jpg?ixlib=rb-1.1.0&amp;w='),
(1, 1, 'https://thedyrt.imgix.net/photo/99827/media/alabama-brushy-lake-campground_7d0227a8449429bf1d5a2497b8702528.jpeg?ixlib=rb-1.1.0&amp;w=\''),
(2, 2, 'https://thedyrt.imgix.net/photo/99818/media/alabama-brushy-lake-campground_43a174c6c0e6156647c88a39d6b019e7.jpeg?ixlib=rb-1.1.0&amp;w='),
(3, 3, 'https://thedyrt.imgix.net/photo/71649/media/alabama-brushy-lake-campground_91ffb83bec8a0bba786cd1b9037cec4a.jpeg?ixlib=rb-1.1.0&amp;w='),
(4, 4, 'https://thedyrt.imgix.net/photo/52801/photo/alabama-brushy-lake-campground_be7f595f990146f1e40ca518c7390ef5.jpg?ixlib=rb-1.1.0&amp;w='),
(5, 5, 'https://thedyrt.imgix.net/photo/52797/photo/alabama-brushy-lake-campground_3ecc14ca2da35717233013470acc332d.jpg?ixlib=rb-1.1.0&amp;w='),
(6, 1, 'https://thedyrt.imgix.net/photo/32440/photo/alabama-brushy-lake-campground_08727ae92bef8b3b0d8555252887cadd.jpg?ixlib=rb-1.1.0&amp;w='),
(7, 3, 'https://thedyrt.imgix.net/photo/99826/media/alabama-brushy-lake-campground_6f885f0b0cca889bc263aadfa4bea481.jpeg?ixlib=rb-1.1.0&amp;w='),
(8, 4, 'https://thedyrt.imgix.net/photo/52804/photo/alabama-brushy-lake-campground_3fdd3e7d1655a4d92f3d748af94b6d73.jpg?ixlib=rb-1.1.0&amp;w='),
(10, 5, 'https://img.youtube.com/vi/8f0NQHFK1_Y/mqdefault.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `park_info`
--

CREATE TABLE `park_info` (
  `ID` int(8) NOT NULL,
  `PARK_NAME` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `LAT` double NOT NULL,
  `LNG` double NOT NULL,
  `ZIPCODE` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `CITY` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `ADDR` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `PHONE` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `MAIN_URL` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `IMG_URL` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `NPS_ID` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `NPS_CODE` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `PARK_DESC` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `WEATHER_OVERVIEW` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `DIRECTION_INFO` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `REGULATION_INFO` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `PARK_WEBSITE` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `SRC_IMG_WORD` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `park_info`
--

INSERT INTO `park_info` (`ID`, `PARK_NAME`, `LAT`, `LNG`, `ZIPCODE`, `CITY`, `ADDR`, `PHONE`, `MAIN_URL`, `IMG_URL`, `NPS_ID`, `NPS_CODE`, `PARK_DESC`, `WEATHER_OVERVIEW`, `DIRECTION_INFO`, `REGULATION_INFO`, `PARK_WEBSITE`, `SRC_IMG_WORD`) VALUES
(1, 'Devils Garden Campground', 37.33939, -121.89496, '95389', 'SAN HOSE', 'Public Information Office', '333 444 5656', 'https://www.nps.gov', '', '37', 'arch', 'Camp among slickrock outrcoppings at Devils Garden Campground, 18 miles from the park entrance. \\n\\nYou can reserve standard campsites up to 6 months in advance for stays March 1-October 31. All sites are usually reserved months in advance. Between November 1 and February 28, sites are first-come, first-served. Facilities include drinking water, picnic tables, grills, and both pit-style and flush toilets.', 'Southeast Utah is part of the Colorado Plateau, a \\\"high desert\\\" region that experiences wide temperature fluctuations. In spring and fall, daytime highs average 60 to 80F (15 to 26C) and lows average 30 to 50F (-1 to 10C). Summer temperatures often exceed 100F (37C), making strenuous exercise difficult. Late summer monsoon season brings violent storm cells which often cause flash floods. Winters are cold, with highs averaging 30 to 50F (-1 to 10C), and lows averaging 0 to 20F (-17 to -6C)', 'To reach the Devils Garden Campground, enter the park off US 191, 5 miles north of Moab. Follow the main park road 18 miles, and follow signs for the campground.', 'Camp only in designated sites. Parking areas may not be used for overnight camping. \\n\\nLeashed pets are allowed in campsites and on the road only. Please clean up after your pet. \\n\\nGenerator use is limited to: 8-10 am and 4-8 pm. \\n\\nCampground quiet hours are 8 pm to 8 am.\\n\\nCheck out time is 10 am.\\n\\nPlease keep all vehicles, including bicycles, on paved or graveled areas of the campsite. Parked vehicles may not extend into the roadway.\\n\\nFires are allowed only in the fire pits and grills. Firewood may be purchased from the camp host; burning collected wood is prohibited.\\n\\nEach site has a 10-person limit and may be used by only one group. Asking campers to share their site is prohibited.\\n\\nWater is scarce. Please use sparingly and refill only water bottles and jugs.\\n\\nCampsites may not be left unattended for more than 24 hours. No person may occupy the campground for more than 7 nights in any 30-day period or 14 nights per year.', '', ''),
(2, 'Yosemite National Park', 37.7773329, -119.5887991, '95389', 'Yosemite', 'Public Information Office', '209/372-0200', 'https://www.nps.gov/yose/contacts.htm', '', '70', 'asis', '22 sites', 'Weather is good', 'Direct to by car', 'regulate', '', ''),
(3, 'Bandy Creek Campground', 36.4879, -119.5887991, '95389', 'SanFrancisco', 'Public Information Office', '204/372-0200', 'https://www.nps.gov/garden', '', '33', 'biso', 'The campground offers a total of 181 campsites: 96 trailer sites which offer water and electric hook-ups, 49 sites for tent camping, and two group camping loops with 19 sites in one loop and 16 sites in the other. All campsites include picnic tables, fire rings, and access to restrooms and showers. A dump station is located near the registration kiosk. There are no sewer hook-ups at individual trailer sites. The group campsites also have their own cook shelters and campfire circles.', 'The weather along the Cumberland Plateau can be best described as unpredictable. Each season brings its own weather patterns. Summers are generally hot and humid, with high temperatures sometimes eclipsing 90 degrees. The low temperatures in winter often dip below freezing. Spring sees the most amount of precipitation, but rainfall can occur in various amounts throughout the year.', 'Please use the following link to learn more about how to get here from various locations.', 'All food, food items (mustard, ketchup, etc), coolers (even if they are empty or have ice, water, pop, etc), must be kept in a vehicle or trailer with hard sides, except while preparing or eating it.Parking is allowed on the asphalt surface ONLY, not on the grass or gravel pads (gravel pads are for tents).  \\nPets MUST be restrained on a leash AT ALL TIMES.  \\nQUIET HOURS ARE FROM 10:00 PM (ET) TO 6:00 AM (ET)\\nAll grey water (dishes, shower, etc) must NEVER be dumped onto the ground.  \\nBicycles may be ridden at night only if you have a light in the front and a red reflective marker on the back.\\nBicycles MUST stay on pavement or gravel while in the campground.\\nMotorized vehicles not designated for on highway use (i.e. ATVs, golf carts, etc) are prohibited on public roads including campground roads within the Big South Fork NRRA.', '', ''),
(4, 'South Campground', 33, -130, '95134', 'IRVINE', 'Public Information Office', '209/372-4444', '', '', '45', 'bith', 'There are no developed campgrounds or backcountry campsites within Big Thicket National Preserve. The preserve issues free camping permits for backpackers. Boaters may get camping permits to camp on sandbars.\\n\\n There are several private and state park camping facilities in the local area.', 'Cloudy ', 'direct to by truck', 'No regulation', '', ''),
(5, 'Anacapa Island Campground', 34.0142, -119.367791, '', 'IRVINE', '', '', '', '', '', '', 'Primitive camping is available (seven sites; $15 per night per site; reservations required). Picnic table, food storage box, and pit toilet are provided. No water is available. Distance from landing to campground is one-half mile and includes a 157-stair climb. \\n\\nWARNING: Western gulls nest on Anacapa Island From April through mid-August. During this time, visitors will encounter seabird rookery conditions: guano, strong odor, constant noise, bird carcasses, and birds protecting their territory.', 'Campers should be prepared for a variety of weather conditions. Sturdy, low-profile tents, stakes, and line for securing tents to ground or table. Fog can occur on the islands during any season producing cool, damp conditions. There are no trees or shade on Anacapa. Overexposure to the wind and sun can be a serious problem. Visitors are advised to bring supplies for an extra day in case boats are unable to pick up campers due to sea conditions. Current weather: http://channelislands.noaa.gov/news/kiosk.html', 'Anacapa Island Campground is only accessible by boat. Visit our island transportation webpage for more information: http://www.nps.gov/chis/planyourvisit/island-transportation.htm \\nThe hike to the campground is 157 stairs and .5 miles from the boat landing.', 'No regulation', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `amenities`
--
ALTER TABLE `amenities`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `campsite`
--
ALTER TABLE `campsite`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `park_amenity`
--
ALTER TABLE `park_amenity`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `PARK_ID` (`PARK_ID`),
  ADD KEY `AMENITY_ID` (`AMENITY_ID`);

--
-- Indexes for table `park_camp`
--
ALTER TABLE `park_camp`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `PARK_ID` (`PARK_ID`);

--
-- Indexes for table `park_image`
--
ALTER TABLE `park_image`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `PARK_ID` (`PARK_ID`);

--
-- Indexes for table `park_info`
--
ALTER TABLE `park_info`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `amenities`
--
ALTER TABLE `amenities`
  MODIFY `ID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `park_amenity`
--
ALTER TABLE `park_amenity`
  MODIFY `ID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `park_camp`
--
ALTER TABLE `park_camp`
  MODIFY `ID` int(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `park_info`
--
ALTER TABLE `park_info`
  MODIFY `ID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `park_amenity`
--
ALTER TABLE `park_amenity`
  ADD CONSTRAINT `park_amenity_ibfk_1` FOREIGN KEY (`PARK_ID`) REFERENCES `park_info` (`ID`),
  ADD CONSTRAINT `park_amenity_ibfk_2` FOREIGN KEY (`AMENITY_ID`) REFERENCES `amenities` (`ID`);

--
-- Constraints for table `park_camp`
--
ALTER TABLE `park_camp`
  ADD CONSTRAINT `park_camp_ibfk_1` FOREIGN KEY (`PARK_ID`) REFERENCES `park_info` (`ID`);

--
-- Constraints for table `park_image`
--
ALTER TABLE `park_image`
  ADD CONSTRAINT `park_image_ibfk_1` FOREIGN KEY (`PARK_ID`) REFERENCES `park_info` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
