-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 01, 2025 at 01:09 PM
-- Server version: 8.0.36
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `cid` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `stateId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`cid`, `name`, `stateId`) VALUES
(1, 'Visakhapatnam', 1),
(2, 'Vijayawada', 1),
(3, 'Guntur', 1),
(4, 'Nellore', 1),
(5, 'Itanagar', 2),
(6, 'Pasighat', 2),
(7, 'Tawang', 2),
(8, 'Ziro', 2),
(9, 'Guwahati', 3),
(10, 'Silchar', 3),
(11, 'Dibrugarh', 3),
(12, 'Tezpur', 3),
(13, 'Patna', 4),
(14, 'Gaya', 4),
(15, 'Bhagalpur', 4),
(16, 'Muzaffarpur', 4),
(17, 'Raipur', 5),
(18, 'Bilaspur', 5),
(19, 'Durg', 5),
(20, 'Korba', 5),
(21, 'Panaji', 6),
(22, 'Margao', 6),
(23, 'Mapusa', 6),
(24, 'Vasco da Gama', 6),
(25, 'Ahmedabad', 7),
(26, 'Surat', 7),
(27, 'Vadodara', 7),
(28, 'Rajkot', 7),
(29, 'Chandigarh', 8),
(30, 'Faridabad', 8),
(31, 'Gurgaon', 8),
(32, 'Panipat', 8),
(33, 'Shimla', 9),
(34, 'Manali', 9),
(35, 'Dharamshala', 9),
(36, 'Solan', 9),
(37, 'Ranchi', 10),
(38, 'Jamshedpur', 10),
(39, 'Dhanbad', 10),
(40, 'Bokaro', 10),
(41, 'Bengaluru', 11),
(42, 'Mysuru', 11),
(43, 'Mangaluru', 11),
(44, 'Hubballi', 11),
(45, 'Thiruvananthapuram', 12),
(46, 'Kochi', 12),
(47, 'Kozhikode', 12),
(48, 'Thrissur', 12),
(49, 'Bhopal', 13),
(50, 'Indore', 13),
(51, 'Gwalior', 13),
(52, 'Jabalpur', 13),
(53, 'Mumbai', 14),
(54, 'Pune', 14),
(55, 'Nagpur', 14),
(56, 'Nashik', 14),
(57, 'Imphal', 15),
(58, 'Churachandpur', 15),
(59, 'Thoubal', 15),
(60, 'Senapati', 15),
(61, 'Shillong', 16),
(62, 'Tura', 16),
(63, 'Jowai', 16),
(64, 'Nongpoh', 16),
(65, 'Aizawl', 17),
(66, 'Lunglei', 17),
(67, 'Champhai', 17),
(68, 'Serchhip', 17),
(69, 'Kohima', 18),
(70, 'Dimapur', 18),
(71, 'Mokokchung', 18),
(72, 'Wokha', 18),
(73, 'Bhubaneswar', 19),
(74, 'Cuttack', 19),
(75, 'Rourkela', 19),
(76, 'Puri', 19),
(77, 'Chandigarh', 20),
(78, 'Amritsar', 20),
(79, 'Ludhiana', 20),
(80, 'Jalandhar', 20),
(81, 'Jaipur', 21),
(82, 'Jodhpur', 21),
(83, 'Udaipur', 21),
(84, 'Kota', 21),
(85, 'Gangtok', 22),
(86, 'Namchi', 22),
(87, 'Pelling', 22),
(88, 'Ravangla', 22),
(89, 'Chennai', 23),
(90, 'Coimbatore', 23),
(91, 'Madurai', 23),
(92, 'Tiruchirappalli', 23),
(93, 'Hyderabad', 24),
(94, 'Warangal', 24),
(95, 'Nizamabad', 24),
(96, 'Karimnagar', 24),
(97, 'Agartala', 25),
(98, 'Udaipur', 25),
(99, 'Kailashahar', 25),
(100, 'Dharmanagar', 25),
(101, 'Lucknow', 26),
(102, 'Kanpur', 26),
(103, 'Varanasi', 26),
(104, 'Agra', 26),
(105, 'Dehradun', 27),
(106, 'Haridwar', 27),
(107, 'Nainital', 27),
(108, 'Rishikesh', 27),
(109, 'Kolkata', 28),
(110, 'Darjeeling', 28),
(111, 'Howrah', 28),
(112, 'Asansol', 28);

-- --------------------------------------------------------

--
-- Table structure for table `generic_tables`
--

CREATE TABLE `generic_tables` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `number` text NOT NULL,
  `description` text,
  `status` varchar(255) DEFAULT 'offline',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE `states` (
  `sid` int NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `states`
--

INSERT INTO `states` (`sid`, `name`) VALUES
(1, 'Andhra Pradesh'),
(2, 'Arunachal Pradesh'),
(3, 'Assam'),
(4, 'Bihar'),
(5, 'Chhattisgarh'),
(6, 'Goa'),
(7, 'Gujarat'),
(8, 'Haryana'),
(9, 'Himachal Pradesh'),
(10, 'Jharkhand'),
(11, 'Karnataka'),
(12, 'Kerala'),
(13, 'Madhya Pradesh'),
(14, 'Maharashtra'),
(15, 'Manipur'),
(16, 'Meghalaya'),
(17, 'Mizoram'),
(18, 'Nagaland'),
(19, 'Odisha'),
(20, 'Punjab'),
(21, 'Rajasthan'),
(22, 'Sikkim'),
(23, 'Tamil Nadu'),
(24, 'Telangana'),
(25, 'Tripura'),
(26, 'Uttar Pradesh'),
(27, 'Uttarakhand'),
(28, 'West Bengal');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`cid`),
  ADD KEY `stateId` (`stateId`);

--
-- Indexes for table `generic_tables`
--
ALTER TABLE `generic_tables`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`sid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `cid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

--
-- AUTO_INCREMENT for table `generic_tables`
--
ALTER TABLE `generic_tables`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `states`
--
ALTER TABLE `states`
  MODIFY `sid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `cities_ibfk_1` FOREIGN KEY (`stateId`) REFERENCES `states` (`sid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
