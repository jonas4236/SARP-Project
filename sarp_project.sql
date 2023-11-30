-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2023 at 01:32 PM
-- Server version: 8.0.34
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sarp_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `checklist`
--

CREATE TABLE `checklist` (
  `cId` int NOT NULL,
  `Date` text COLLATE utf8mb4_general_ci NOT NULL,
  `teacher` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `subject` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Stu1` int NOT NULL,
  `Stu2` int NOT NULL,
  `Stu3` int NOT NULL,
  `Stu4` int NOT NULL,
  `Stu5` int NOT NULL,
  `Stu6` int NOT NULL,
  `Stu7` int NOT NULL,
  `Stu8` int NOT NULL,
  `Stu9` int NOT NULL,
  `Stu10` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `checklist`
--

INSERT INTO `checklist` (`cId`, `Date`, `teacher`, `subject`, `Stu1`, `Stu2`, `Stu3`, `Stu4`, `Stu5`, `Stu6`, `Stu7`, `Stu8`, `Stu9`, `Stu10`) VALUES
(6, '2023/11/26', 'ภีรนีย์ ประทุมพวง', '30000-1501 ชีวิตกับสังคมไทย', 1, 2, 1, 2, 1, 1, 1, 2, 1, 1),
(12, '2023/11/27', 'กนกรัตน์ อินขุนทด', '30000-1202 ภาษาอังกฤษสำหรับการปฏิบัติงาน', 1, 1, 1, 1, 3, 1, 1, 1, 1, 1),
(13, '2023/11/27', 'ภีรนีย์ ประทุมพวง', '30000-1501 ชีวิตกับสังคมไทย', 1, 1, 1, 2, 3, 1, 1, 2, 2, 1),
(14, '2023/11/28', 'จุฑามาศ ศิริโสม', '30000-1404 แคลคูลัส 1', 1, 1, 1, 1, 1, 1, 1, 1, 3, 1),
(15, '2023/11/28', 'อมรรัตน์ ทิมงาม', '30000-1101 ทักษะภาษาไทยเชิงวิชาชีพ', 1, 1, 1, 1, 1, 1, 1, 1, 3, 1),
(16, '2023/11/29', 'สุชาติ ทาทอง', '30000-1608 การออกกำลังกายเพื่อสุขภาพ', 2, 1, 1, 1, 1, 1, 1, 1, 2, 1),
(17, '2023/11/29', 'รัชฎาเนตร สุรำไพ', '30000-2202 การวิเคราะห์และออกแบบระบบ', 2, 1, 1, 1, 1, 1, 1, 1, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `id` int NOT NULL,
  `email` text COLLATE utf8mb4_general_ci NOT NULL,
  `username` text COLLATE utf8mb4_general_ci NOT NULL,
  `password` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`id`, `email`, `username`, `password`) VALUES
(1, 'staff1@sarp.co', 'STAFF1', 'staff1.co'),
(2, 'staff2@sarp.co', 'STAFF2', 'staff2.co');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `stuId` int NOT NULL,
  `stuName` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`stuId`, `stuName`) VALUES
(1, 'นายกฤษนัย โถมสันเทียะ'),
(2, 'นายธนากร แสงมี'),
(3, 'นายนันทวัฒน์ นันทวิสาร'),
(4, 'นางสาวนิชาพร ชื่นกลิ่น'),
(5, 'นายวุฒธิพงษ์ ยันพิมาย'),
(6, 'นางสาวสุชญา พงษ์แพทย์'),
(7, 'นายเอกวุฒิ ละมุดเทศ'),
(8, 'นางสาวกฤติยา จันโลมา'),
(9, 'นายถิระพงศ์ ทิพยมลฑล'),
(10, 'นายธนกฤต แดงพยนต์');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `subId` int NOT NULL,
  `sub_name` text COLLATE utf8mb4_general_ci NOT NULL,
  `weekday_id` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`subId`, `sub_name`, `weekday_id`) VALUES
(0, 'none', '0'),
(5, '30000-1501 ชีวิตกับสังคมไทย', 'วันจันทร์'),
(6, '30000-1202 ภาษาอังกฤษสำหรับการปฏิบัติงาน', 'วันจันทร์'),
(9, '30000-1404 แคลคูลัส 1', 'วันอังคาร'),
(10, '30000-1101 ทักษะภาษาไทยเชิงวิชาชีพ', 'วันอังคาร'),
(13, '30000-1608 การออกกำลังกายเพื่อสุขภาพ', 'วันพุธ'),
(14, '30000-2202 การวิเคราะห์และออกแบบระบบ', 'วันพุธ'),
(17, '30000-2004 ระบบเครือข่ายคอมพิวเตอร์', 'วันพฤหัสบดี'),
(18, '30000-2002 การใช้งานใมโครคอนโทรลเลอร์', 'วันศุกร์');

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `id` int NOT NULL,
  `teacher_name` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`id`, `teacher_name`) VALUES
(0, 'none'),
(1, 'นิพนธ์ แก้วเกิด'),
(2, 'ศิวกร บุญอุ้ม'),
(3, 'อมรรัตน์ ทิมงาม'),
(4, 'สุชาติ ทาทอง'),
(5, 'กนกรัตน์ อินขุนทด'),
(6, 'ภีรนีย์ ประทุมพวง'),
(7, 'จุฑามาศ ศิริโสม'),
(8, 'รัชฎาเนตร สุรำไพ'),
(9, 'สุภาพร ชุ่มวารี');

-- --------------------------------------------------------

--
-- Table structure for table `weekday`
--

CREATE TABLE `weekday` (
  `weekId` int NOT NULL,
  `day_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `weekday_id` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `weekday`
--

INSERT INTO `weekday` (`weekId`, `day_name`, `weekday_id`) VALUES
(0, 'none', '0'),
(1, 'วันจันทร์', 'วันจันทร์'),
(4, 'วันพฤหัสบดี', 'วันพฤหัสบดี'),
(3, 'วันพุธ', 'วันพุธ'),
(5, 'วันศุกร์', 'วันศุกร์'),
(2, 'วันอังคาร', 'วันอังคาร'),
(7, 'วันอาทิตย์', 'วันอาทิตย์'),
(6, 'วันเสาร์', 'วันเสาร์');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `checklist`
--
ALTER TABLE `checklist`
  ADD PRIMARY KEY (`cId`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`stuId`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`subId`),
  ADD KEY `sync_subjects` (`weekday_id`(255));

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `weekday`
--
ALTER TABLE `weekday`
  ADD PRIMARY KEY (`weekday_id`(255)) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `checklist`
--
ALTER TABLE `checklist`
  MODIFY `cId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `stuId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `subId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
