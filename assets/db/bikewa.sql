-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2021 at 09:13 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bikewa`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(220) NOT NULL,
  `password` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`, `created_at`) VALUES
(1, 'admin@groupe.com', '0ff60975630538f9837ebc0cac1d069a', '2021-07-02 20:37:55');

-- --------------------------------------------------------

--
-- Table structure for table `bikes`
--

CREATE TABLE `bikes` (
  `id` int(11) NOT NULL,
  `name` varchar(220) NOT NULL,
  `image` varchar(120) NOT NULL,
  `price_per_minute` varchar(10) NOT NULL,
  `description` text NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bikes`
--

INSERT INTO `bikes` (`id`, `name`, `image`, `price_per_minute`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Kriptonite', 'user.png', '23', 'lorem', 0, '2021-07-02 16:20:03', '2021-07-02 18:41:50'),
(2, 'Kriptonite2', 'user.png', '23', 'lorem', 0, '2021-07-02 16:20:16', '2021-07-02 18:38:31'),
(3, 'Yellow Ripper', 'http://localhost/bike_sharing/web/uploads/bikes/7050-avatar.jpg', '30', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 1, '2021-07-03 00:32:42', '2021-07-03 00:32:42'),
(4, 'WakaWaka', 'http://localhost/bike_sharing/web/uploads/bikes/4852-avatar.jpg', '10', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 1, '2021-07-03 00:33:28', '2021-07-03 00:33:28');

-- --------------------------------------------------------

--
-- Table structure for table `bike_galleries`
--

CREATE TABLE `bike_galleries` (
  `id` int(11) NOT NULL,
  `bike_id` int(11) NOT NULL,
  `gallery` varchar(190) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bike_galleries`
--

INSERT INTO `bike_galleries` (`id`, `bike_id`, `gallery`, `created_at`, `updated_at`) VALUES
(1, 1, 'a12.png', '2021-07-03 18:37:34', '2021-07-03 18:37:34'),
(2, 1, 'a12.png', '2021-07-03 18:37:34', '2021-07-03 18:37:34'),
(3, 4, 'a12.png', '2021-07-03 18:38:00', '2021-07-03 18:38:00'),
(4, 4, 'a12.png', '2021-07-03 18:38:00', '2021-07-03 18:38:00');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `bike_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `start_time` timestamp NULL DEFAULT NULL,
  `return_time` timestamp NULL DEFAULT NULL,
  `code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `user_id`, `bike_id`, `created_at`, `updated_at`, `start_time`, `return_time`, `code`) VALUES
(1, 1, 1, '2021-07-02 18:24:47', '2021-07-02 20:00:44', '2021-07-02 20:00:25', '2021-07-02 20:20:34', 75753400),
(2, 1, 2, '2021-07-02 18:38:31', '2021-07-03 06:08:34', '2021-07-03 06:08:23', '2021-07-03 06:08:34', 41657430),
(3, 1, 1, '2021-07-02 18:41:50', '2021-07-03 06:26:15', '2021-07-03 06:26:15', NULL, 19377387);

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `amount` decimal(10,0) NOT NULL,
  `txref` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `user_id`, `amount`, `txref`, `created_at`, `updated_at`) VALUES
(1, 1, '2300', 'kwdjhdjdgsghdsghdsgh', '2021-07-03 18:24:39', '2021-07-03 18:24:39'),
(2, 1, '2300', 'kwdjhdjdgsghdsghdsgh', '2021-07-03 18:25:22', '2021-07-03 18:25:22'),
(3, 1, '2300', 'kwdjhdjdgsghdsghdsgh', '2021-07-03 18:26:35', '2021-07-03 18:26:35'),
(4, 1, '2300', 'kwdjhdjdgsghdsghdsgh', '2021-07-03 18:27:48', '2021-07-03 18:27:48'),
(5, 1, '2300', 'kwdjhdjdgsghdsghdsgh', '2021-07-03 18:27:53', '2021-07-03 18:27:53'),
(6, 1, '2300', 'kwdjhdjdgsghdsghdsgh', '2021-07-03 18:29:04', '2021-07-03 18:29:04'),
(7, 1, '2300', 'kwdjhdjdgsghdsghdsgh', '2021-07-03 18:29:07', '2021-07-03 18:29:07'),
(8, 1, '2300', 'kwdjhdjdgsghdsghdsgh', '2021-07-03 18:29:09', '2021-07-03 18:29:09');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(220) NOT NULL,
  `matric_number` varchar(120) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `balance` varchar(10) NOT NULL DEFAULT '23000',
  `password` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `matric_number`, `phone`, `balance`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Tapo Sayanic', 'you@gmail.com', '09078478478', '29900', 'MWE3bVh2aXBYdGpDVjdNc2lhWmdrZz09', '2021-07-02 15:55:09', '2021-07-03 18:29:09'),
(2, 'Tapo Sayanic', 'you2@gmail.com', '09078478478', '23000', 'MWE3bVh2aXBYdGpDVjdNc2lhWmdrZz09', '2021-07-02 15:57:07', '2021-07-02 16:46:38'),
(3, 'fd', 'fd', 'ffd', '23000', 'YzBuU1hBbWhsYityWHFyZWJUMTc0UT09', '2021-07-03 04:21:50', '2021-07-03 04:21:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bikes`
--
ALTER TABLE `bikes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bike_galleries`
--
ALTER TABLE `bike_galleries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bikes`
--
ALTER TABLE `bikes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `bike_galleries`
--
ALTER TABLE `bike_galleries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
