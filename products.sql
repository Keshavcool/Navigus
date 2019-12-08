-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 08, 2019 at 06:52 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `navgus`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `image_url` text NOT NULL,
  `description` text NOT NULL,
  `isFav` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `image_url`, `description`, `isFav`) VALUES
(1, 'One Plus', 'one_plus.png', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laudantium animi facere odio minus possimus magni nam. Id, officiis inventore?', 1),
(2, 'Redmi', 'redmi', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laudantium animi facere odio minus possimus magni nam. Id, officiis inventore?', 1),
(3, 'Iphone', 'iphone', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laudantium animi facere odio minus possimus magni nam. Id, officiis inventore?', 0),
(4, 'Samsung', 'samsung', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laudantium animi facere odio minus possimus magni nam. Id, officiis inventore?', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
