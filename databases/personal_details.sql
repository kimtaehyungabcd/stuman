-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 11, 2024 at 01:39 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `personal_details`
--

CREATE TABLE `personal_details` (
  `enrollment_number` int(11) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `middle_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `student_contact_number` int(12) NOT NULL,
  `date_of_birth` date NOT NULL,
  `email` varchar(40) NOT NULL,
  `place_of_birth` varchar(40) NOT NULL,
  `name_of_parent_guardian` varchar(90) NOT NULL,
  `address` varchar(255) NOT NULL,
  `parent_contact_number` int(12) NOT NULL,
  `course` varchar(30) NOT NULL,
  `category` varchar(10) NOT NULL,
  `date_of_admission` date NOT NULL,
  `last_school_attended` varchar(150) NOT NULL,
  `EPIC` varchar(30) NOT NULL,
  `district` varchar(12) NOT NULL,
  `constituency` varchar(20) NOT NULL,
  `religion` varchar(30) NOT NULL,
  `photo` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `personal_details`
--

INSERT INTO `personal_details` (`enrollment_number`, `first_name`, `middle_name`, `last_name`, `student_contact_number`, `date_of_birth`, `email`, `place_of_birth`, `name_of_parent_guardian`, `address`, `parent_contact_number`, `course`, `category`, `date_of_admission`, `last_school_attended`, `EPIC`, `district`, `constituency`, `religion`, `photo`) VALUES
(54646554, 'treston', '', 'Noronha', 2147483647, '2018-01-21', 'trestonandrade17@gmail.com', 'margao', 'tony noronha', 'ponda', 2147483647, '', 'asc', '0000-00-00', 'holy spirit', '', 'south goa', 'fatorda', 'christian', 0x75706c6f6164732f363565323065633736386461375f70617373706f72742e6a7067);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `personal_details`
--
ALTER TABLE `personal_details`
  ADD PRIMARY KEY (`enrollment_number`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
